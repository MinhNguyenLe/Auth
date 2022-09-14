import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `http://localhost:1309/api`,
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
      window.location.href = "http://localhost:1409/login";
    }
    console.error(`Looks like there was a problem. Status Code: ${res.status}`);
    return Promise.reject(error);
  }
);

export function apiLogin(){
  return axiosClient.post('/login');
}

export function apiRegister(){
  return axiosClient.post('/register',{
  email:"fromClient@gmail.com",password:"password"}
  );
}

export function getAccounts(){
  return axiosClient.post('/get-accounts');
}