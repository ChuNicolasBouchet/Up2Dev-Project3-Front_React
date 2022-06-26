import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import {ReactComponent as LogoutIco} from '../svg/logout-slim.svg'
import axios from "../api/axios";

function Logout() {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = async () => {
        setAuth({})
        await axios.get('http://localhost:5000/api/auth/signout', {
          withCredentials: true,
        }
        )
        navigate('/') //* add the landing url after logout
    }
  return (
    <button onClick={logout} className='logout-button'>
      <LogoutIco className='logout-ico' />
    </button>
  )
}

export default Logout
