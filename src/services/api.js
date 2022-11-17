import axios from "axios"

const CONFIG = {
  baseUrl : 'http://localhost:3000/'
}

const api = axios.create(
  {
      baseURL: CONFIG.baseUrl,
      withCredentials: false,
      headers: {
          accept: "application/json",
          "Content-type": "application/json"
      }
  }
)

export default api
