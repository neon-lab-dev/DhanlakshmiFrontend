import axios from "axios";
import API from ".";

export const getAllProducts = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.products)
      .then((res) => {
        resolve(res.data?.products || []);
      })
      .catch((err) => {
        reject(
          err?.response?.data?.message ||
            "Failed to fetch products, Please try again."
        );
      });
  });
};
