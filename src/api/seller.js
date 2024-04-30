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
        let msg =
          err?.response?.data?.message ||
          "Registration failed, Please try again.";
        if (msg && msg.length > 50) {
          msg = "Registration failed, Please try again.";
        }
        reject(msg);
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
