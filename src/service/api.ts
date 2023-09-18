import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAuthToken = () => {
  return window.localStorage.getItem("token");
};

export const setAuthHeader = (token: string) => {
  window.localStorage.setItem("token", token);
};
const buildheaders = () => {
  let headers = {};
  if (getAuthToken() !== null && getAuthToken() !== "null") {
    headers = { Authorization: `Bearer ${getAuthToken()}` };
  }
  return headers;
};

export const get = (props: { url: string; data?: any; param?: any }) => {
  return axios({
    method: "GET",
    url: props.url,
    data: props.data,
    params: { ...props.param },
    headers: buildheaders(),
  });
};

export const post = (props: { url: string; data?: any; param?: any }) => {
  return axios({
    method: "POST",
    url: props.url,
    data: props.data,
    params: { ...props.param },
    headers: buildheaders(),
  });
};
