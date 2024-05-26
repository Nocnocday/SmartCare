import http from "../utils/http";

export const getStudents = async (page) => {
  try {
    const res = await http.get(`/students?page=${page}`);
    return res;
  } catch (err) {
    return err;
  }
};
export const getStudent = async (id) => {
  try {
    const res = await http.get(`/students/${id}`);
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

export const addStudent = async (formData) => {
  try {
    const res = await http.post(`/students`, formData);
    return res;
  } catch (err) {
    return err;
  }
};

export const updateStudent = async (formData,id) => {
  try {
    const res = await http.post(`/students/${id}`, formData);
    return res;
  } catch (err) {
    return err;
  }
};
