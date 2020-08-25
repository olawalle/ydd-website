import axios from "axios";
import * as urls from "./urls";

let login = (data, authId) => {
  return axios({
    method: "post",
    url: urls.loginUrl,
    headers: {
      clientId: "A6w0Xu6",
      authId,
    },
    data,
  });
};

let signup = (data) => {
  return axios({
    method: "post",
    url: urls.signupUrl,
    headers: {
      clientId: "A6w0Xu6",
    },
    data,
  });
};

const fetchChurches = () => {
  return axios({
    method: "get",
    url: "http://91.235.129.21:3800/churchData",
  });
};

export default {
  login,
  signup,
  fetchChurches,
};
