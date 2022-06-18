/* eslint-disable no-unused-vars */
// import { BrowserRouter } from "react-router-dom";
import useAuth from "./useAuth";
import { useCookies } from 'react-cookie';
import axios from "../api/axios";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        const [cookies, setCookie, removeCookie] = useCookies(["jwt-token"]);
        removeCookie();
        setAuth({});
        try {
            const response = await axios('/auth/signout', {
                withCredentials: true
            })
        } catch (err) {
            console.error(err);
        }

    }

    return logout;
}

export default useLogout