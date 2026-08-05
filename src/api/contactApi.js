import axiosClient from "./axiosClient";

export async function submitContact(payload) {
    const { data } = await axiosClient.post("/Contact", payload);
    return data;
}
