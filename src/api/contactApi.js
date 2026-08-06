import axiosClient from "./axiosClient";

export async function submitContact(payload) {
    try {
        const { data } = await axiosClient.post("/Contact", payload);
        return data;
    } catch (err) {
        const message = err?.message || "Failed to send your message. Please try again.";
        const e = new Error(message);
        // Preserve normalized fields if present
        if (err && typeof err === "object") {
            e.status = err.status;
            e.details = err.details;
            e.code = err.code;
        }
        throw e;
    }
}
