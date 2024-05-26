import http from "../utils/http";

export const addAccount = async (formData) => {
  try {
    const res = await http.post(`/managers`, formData);
    return res;
  } catch (err) {
    return err;
  }
};

export const getManagers = async (page) => {
  try {
    const res = await http.get(`/managers?page=${page}`);
    return res;
  } catch (err) {
    return err;
  }
};
