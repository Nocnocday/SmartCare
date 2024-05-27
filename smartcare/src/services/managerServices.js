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
export const getManager = async (id) => {
  try {
    const res = await http.get(`/managers/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};

export const removeManager = async (id) => {
  try {
    const res = await http.delete(`/managers/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};

export const updateManager = async (formData,id) => {
  try {
    const res = await http.post(`/managers/${id}`, formData);
    return res;
  } catch (err) {
    return err;
  }
};
