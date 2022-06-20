import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import GetUsersListAxiosCookie from './components/users/GetUsersListAxiosCookie';
import GetUsersListAxiosJwt from './components/users/GetUsersListAxiosJwt';
import {AuthProvider} from './context/AuthProvider';
import Workspace from './components/Workspace'
// import Navbar from './components/Navbar'

function App() {

  return (
    <AuthProvider>
    <Header />
    <div className='App'>
        <div>
        <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        { /* /!\ TODO Register */}
        { /* /!\ TODO Links */}
        {/* protected routes */}
        <Route path="usersaxioscookie" element={<GetUsersListAxiosCookie />} />
        <Route path="usersaxiosjwt" element={<GetUsersListAxiosJwt />} />
        {/* catch all => 404 */}
        <Route path="*" element={<Missing />} />
        </Routes>
        </div>
        </div>
        </AuthProvider>
  );
}

export default App;
