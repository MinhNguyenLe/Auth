import axios from "axios";
import {URL_SERVER,URL_LOGIN_LOCAL} from "src/utils/constants";

export const axiosClient = axios.create({
  baseURL: URL_SERVER,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

axiosClient.interceptors.response.use(
  (response) => response, 
  (error) => {
    const res = error.response;
    if (res.status === 401) {
      window.location.href = URL_LOGIN_LOCAL;
    }
    console.error(`Looks like there was a problem. Status Code: ${res.status}`);
    return Promise.reject(error);
  }
);

export interface Account{
  email:string;password:string
}  

export function apiLogin(account:Account){
  return axiosClient.post('/login',account);
}

export function apiRegister(account:Account){
  return axiosClient.post('/register',account
  );
}

export function getAccounts(){
  return axiosClient.get('/get-accounts');
}
