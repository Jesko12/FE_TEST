import axios from "axios";
import authHeader from "./authHeader";
import jwtDecode from "jwt-decode";

const BASE_URL = "http://34.101.145.49:8004/api";

export async function login(username: string, password: string) {
    
    return axios.post(BASE_URL + "/login", {
        username,
        password
    }, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then((res) => {
        if (res.data.token_type) {
            sessionStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
    });
}

export async function logout() {
    const cfg = {
        headers: authHeader(),
    };
    const body = {
        key: "value",
    };
    return axios.post(BASE_URL + "/logout", body, cfg)
    .then((res) => {
        if (res.data.status) {
            sessionStorage.removeItem("user")
            window.location.href = '/login'
        }
    })
}

export function getCurrentUser() {
    try {
        const token: any = sessionStorage.getItem("token");
        return jwtDecode(token)
    } catch (e) {
        return null;
    }
}
export default { login, logout };