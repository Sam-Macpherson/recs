import { client } from "./index";


const login = credentials =>
  client.post("accounts/login/", credentials).then(loginResponse => {
    localStorage.setItem("access_token", loginResponse.data.access);
    localStorage.setItem("refresh_token", loginResponse.data.refresh);
    client.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem("access_token")}`;
  }).catch(error => {
    console.log("Error logging in: ", error);
    return Promise.reject(error);
  });

const register = credentials =>
  client.post("accounts/register/", credentials);

const getUser = (userId = 'me') =>
  client.get(`accounts/${userId}/`).then(
    response => Promise.resolve(response.data)
  ).catch(error => {
    console.log(`Error fetching user profile for user ${userId}: `, error);
    return Promise.reject(error);
  });

const logout = () =>
  client.post("accounts/logout/", {
    refresh_token: localStorage.getItem("refresh_token"),
  }).then(response => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    client.defaults.headers["Authorization"] = null;
  }).catch(error => {
    console.log("Error logging out: ", error);
    return Promise.reject(error);
  });


export { login, logout, register, getUser };
