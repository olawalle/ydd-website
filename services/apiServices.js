import axios from "axios";
import * as urls from "./urls";

let login = (data) => {
  return axios({
    method: "post",
    url: "http://195.54.162.30:7000/api/v1/user/login",
    headers: {
      clientId: "A4m0xs4",
    },
    data,
  });
};

let signup = (data) => {
  return axios({
    method: "post",
    url: urls.signupUrl,
    headers: {
      clientId: "A4m0xs4",
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
