import axios from "axios"

const CONFIG = {
  baseUrl : 'http://localhost:3000/'
}
const CONFIG2 = {
  baseUrl : 'https://jsonplaceholder.typicode.com/'
}

export const api = axios.create(
  {
      baseURL: CONFIG.baseUrl,
      withCredentials: false,
      headers: {
          accept: "application/json",
          "Content-type": "application/json"
      }
  }
)
export const apiJP = axios.create(
  {
      baseURL: CONFIG2.baseUrl,
      withCredentials: false,
      headers: {
          accept: "application/json",
          "Content-type": "application/json"
      }
  }
)
