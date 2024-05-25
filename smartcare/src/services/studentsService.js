import http from "../utils/http";

export const getStudents = async (page) => {
  try {
    const res = await http.get(`/students?page=${page}`);
    return res;
  } catch (err) {
    return err;
  }
};

export const removeStudent = async (id) => {
  try {
    const res = await http.delete(`/students/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};

export const addStudent = async (data) => {
  try {
    const res = await http.post(`/students`, data);
    return res;
  } catch (err) {
    return err;
  }
};
