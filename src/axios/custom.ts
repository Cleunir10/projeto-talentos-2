import axios from "axios";

const customFetch = axios.create({
    baseURL: "http://localhost:4173",
    headers: {
        Accept: "application/json"
    }
})

export default customFetch;