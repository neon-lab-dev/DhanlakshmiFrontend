import axios from "axios";
import API from ".";

export const resisterSeller = async (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.registerSeller, data)
      .then((res) => {
        resolve(res.data?.message);
      })
      .catch((err) => {
        reject(
          err?.response?.data?.message ||
            "Registration failed, Please try again."
        );
      });
  });
};

export const verifyOtp = async (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.verifySeller, data)
      .then((res) => {
        resolve(res.data?.message);
      })
      .catch((err) => {
        reject(
          err?.response?.data?.message ||
            "Verification failed, Please try again."
        );
      });
  });
};
