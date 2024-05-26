import http from "../utils/http";

export const addAccount = async (formData) => {
    try {
      const res = await http.post(`/managers`, formData);
      return res;
    } catch (err) {
      return err;
    }
  };