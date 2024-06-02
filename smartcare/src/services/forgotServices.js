import http from "../utils/http";

export const forgotPassword = async (data) => {
  try {
    const res = await http.post("/forget-password", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};
