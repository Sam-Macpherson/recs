import axios from "axios";

const login = credentials =>
  axios.post("accounts/login/", credentials, { withCredentials: true });

const register = credentials =>
  axios.post("accounts/register/", credentials);

const getUser = () =>
  axios.get("accounts/user/", { withCredentials: true });

const logout = () => {};


export { login, logout, register, getUser };
