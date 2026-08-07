import axios from "axios";

const IDEMPOTENT_METHODS = new Set(["get", "head", "options"]);

const normalizeApiBaseUrl = (value) => {
    if (typeof value !== "string") return "";
    const trimmed = value.trim();
    if (!trimmed) return "";
    return trimmed.replace(/\/+$/, "");
};

const isSafeApiBaseUrl = (value) => {
    const normalized = normalizeApiBaseUrl(value);
    if (!normalized) return true;
    if (normalized.startsWith("/")) return !normalized.includes("//");

    try {
        const parsed = new URL(normalized);
        const isLocalHost = parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
        return (parsed.protocol === "https:" || (parsed.protocol === "http:" && isLocalHost))
            && !parsed.username
            && !parsed.password;
    } catch {
        return false;
    }
};

const API_BASE = normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL || "https://nipun-pro-dsfrdeejhzgggjbe.centralindia-01.azurewebsites.net/api");
const TIMEOUT_MS = Number.parseInt(import.meta.env.VITE_API_TIMEOUT_MS, 10);
const RETRY_COUNT = Number.parseInt(import.meta.env.VITE_API_RETRY_COUNT, 10);
const RETRY_DELAY_MS = Number.parseInt(import.meta.env.VITE_API_RETRY_DELAY_MS, 10);

const resolvedBaseUrl = API_BASE;

if (!isSafeApiBaseUrl(resolvedBaseUrl)) {
    // Fail fast if the configured API base URL looks unsafe.
    // Allow empty (meaning relative `/api`) and localhost HTTP for development.
    try {
        // Log the resolved and raw values so we can diagnose build vs runtime issues.
        // Keep this lightweight and safe to remove after diagnosing.
        // eslint-disable-next-line no-console
        console.error("Unsafe VITE_API_BASE_URL detected:", {
            resolvedBaseUrl,
            rawEnv: import.meta.env?.VITE_API_BASE_URL,
        });
    } catch {
        // ignore logging errors
    }

    throw new Error(`VITE_API_BASE_URL must be a valid HTTPS endpoint or a safe local URL. Saw: ${resolvedBaseUrl}`);
}

const axiosClient = axios.create({
    baseURL: resolvedBaseUrl,
    timeout: Number.isFinite(TIMEOUT_MS) && TIMEOUT_MS > 0 ? TIMEOUT_MS : 15000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

const shouldRetry = (error, config = {}) => {
    const method = (config.method || "get").toLowerCase();
    const status = error?.response?.status || 0;
    const retryCount = Number.isFinite(config.retryCount) ? config.retryCount : (Number.isFinite(RETRY_COUNT) ? RETRY_COUNT : 1);
    const attempt = config.__retryAttempt || 0;

    if (attempt >= retryCount) return false;
    if (error?.code === "ERR_CANCELED") return false;
    if (!IDEMPOTENT_METHODS.has(method)) return false;
    return !status || status >= 500;
};

const normalizeError = (error) => {
    const status = error?.response?.status || 0;
    const defaultMessage = status ? "Request failed. Please try again." : "Network issue detected. Check your connection and retry.";

    return {
        message: error?.response?.data?.message || error?.message || defaultMessage,
        status,
        details: error?.response?.data || null,
        isUnauthorized: status === 401 || status === 403,
        isNetworkError: !status,
        code: error?.code || "UNKNOWN_ERROR",
    };
};

axiosClient.interceptors.request.use((config) => {
    const next = { ...(config || {}) };

    // Automatically include active tenant id if present in session storage
    try {
        const tenantId = sessionStorage.getItem("selectedTenantId");
        if (tenantId) {
            next.headers = {
                ...(next.headers || {}),
                "x-tenant-id": tenantId,
            };
        }
    } catch {
        // ignore sessionStorage errors
    }

    return next;
});

axiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const config = error?.config || {};

        if (shouldRetry(error, config)) {
            const delay = Number.isFinite(config.retryDelayMs) ? config.retryDelayMs : (Number.isFinite(RETRY_DELAY_MS) ? RETRY_DELAY_MS : 300);
            const nextAttempt = (config.__retryAttempt || 0) + 1;
            config.__retryAttempt = nextAttempt;

            await wait(delay * nextAttempt);
            return axiosClient.request(config);
        }

        const ne = normalizeError(error);
        const err = new Error(ne.message);
        Object.assign(err, ne);
        return Promise.reject(err);
    }
);

export const createCancelableRequest = () => {
    const controller = new AbortController();
    return {
        signal: controller.signal,
        cancel: () => controller.abort(),
    };
};

export default axiosClient;
