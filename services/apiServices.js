import axios from "axios";
import * as urls from "./urls";

let login = (data, authId) => {
  let headers = {
    clientId: "A4m0xs4",
  };
  if (authId) {
    headers = {
      ...headers,
      authId,
    };
  }
  return axios({
    method: "post",
    url: urls.loginUrl,
    headers,
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

const fetchChurches_ = () => {
  return axios({
    method: "get",
    url: "http://91.235.129.103:7300/api/v1/churches/all",
  });
};

const getJobs = () => {
  return axios({
    method: "get",
    url: "http://91.235.129.103:7200/api/v1/config/resources/job",
  });
};

export default {
  login,
  signup,
  fetchChurches,
  fetchChurches_,
  getJobs,
};
