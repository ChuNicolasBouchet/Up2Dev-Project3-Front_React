import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import GetUsersListAxiosCookie from './components/users/GetUsersListAxiosCookie';
import GetUsersListAxiosJwt from './components/users/GetUsersListAxiosJwt';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/">
          {/* public routes */}
            <Route path="login" element={<Login />} />
            <Route path="unauthorized" element={<Unauthorized />} />
            { /* /!\ TODO Register */}
            { /* /!\ TODO Links */}
          {/* protected routes */}
            <Route path="/" element={<Home />} />
            <Route path="usersaxioscookie" element={<GetUsersListAxiosCookie />} />
            <Route path="usersaxiosjwt" element={<GetUsersListAxiosJwt />} />
          {/* catch all => 404 */}
            <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


//* ***************** ClipBoard *****************
//*
// 
//          {/* public routes */}
//          <Route path="login" element={<Login />} />
//        <Route path="register" element={<Register />} />
//          <Route path="unathorized" element={<Unauthorized />} />
//          {/*protected routes */}
//          {/* <Route element={} /> */}
//          <Route path="dashboard" element={<Dashboard />} />

//       <BrowserRouter>
// <Routes>
// {/* public routes */}
// <Route path="login" element={<Login />} />
// </Routes>
// </BrowserRouter>