import axios from "axios";
import API from ".";

export const resisterUser = async (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.resisterUser, data)
      .then((res) => {
        resolve(res.data?.message);
      })
      .catch((err) => {
        reject(
          err?.response?.data?.message ||
            "User registration failed, Please try again."
        );
      });
  });
};
