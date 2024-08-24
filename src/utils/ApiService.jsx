// import axios from "axios"
// const API_URL = 'https://6486a3c8beba6297278efd7e.mockapi.io'

// const AxiosService = axios.create({
//     baseURL: API_URL,
//     headers:{
//         "Content-Type":"application/json"
//     }
// })

// export default AxiosService

import axios from "axios";
const API_URL = "https://66ca324159f4350f064ea5a8.mockapi.io/";
const AxiosService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosService;
