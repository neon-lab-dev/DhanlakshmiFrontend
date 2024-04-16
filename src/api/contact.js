import axios from "axios";
import API from ".";

export const contact = async (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.contact, data)
      .then((res) => {
        resolve(res.data?.message);
      })
      .catch((err) => {
        reject(
          err?.response?.data?.message ||
            "Failed to send message, Please try again."
        );
      });
  });
};
