import axios from "./axios";

class HttpClient {
    constructor() {}
    async get(url, params = {}) {
        try {
            const response = await axios.get(url, { params });
            return response;
        } catch (error) {
            throw error;
        }
    }

    async post(url, data = {},config = {}) {
        try {
            const response = await axios.post(url, data,config);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async put(url, data = {}) {
        try {
            const response = await axios.put(url, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async delete(url) {
        try {
            const response = await axios.delete(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

const http = new HttpClient()
export default http