const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL + "/api/v1";

const API = {
  resisterUser: BACKEND_BASE_URL + "/registeruser",
  registerSeller: BACKEND_BASE_URL + "/registerseller",
  verifySeller: BACKEND_BASE_URL + "/verifyseller",
};

export default API;
