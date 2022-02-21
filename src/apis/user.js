import { apiKey, URLs } from "../constants/urls"
import axios from 'axios'

export const getRequestToken = () => {
    return axios.get("/authentication/token/new", { params: { api_key: apiKey }, baseURL: URLs.baseUrl })
}
export const checkLogin = (payload) => {
    return axios.post("/authentication/token/validate_with_login", payload, { params: { api_key: apiKey }, baseURL: URLs.baseUrl })
}
export const createSession = (payload) => {
    return axios.post("/authentication/session/new", payload, { params: { api_key: apiKey }, baseURL: URLs.baseUrl })
}
export const getAccountDetail = (payload) => {
    return axios.get("/account", { params: { api_key: apiKey, session_id: payload }, baseURL: URLs.baseUrl })
}