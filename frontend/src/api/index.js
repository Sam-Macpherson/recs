import axios from "axios";
import { useQuery } from "react-query";

const setAxiosDefaults = () => {
  axios.defaults.responseType = "json";
  axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
  axios.defaults.headers["Content-Type"] = "application/json";
  axios.defaults.baseURL = "http://localhost:8000/api/";
};

const fetchData = ({ queryKey: [...routeSegments] }) => {
  const params = routeSegments.pop();
  return axios.get(routeSegments.join("/") + "/", { params }).then(response => response.data);
};

const useFetch = ({ routeSegments = [], queryParams }) =>
  useQuery([...routeSegments, queryParams || {}], fetchData);

export { setAxiosDefaults, useFetch };

