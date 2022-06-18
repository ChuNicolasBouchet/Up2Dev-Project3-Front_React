import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Login from './components/Login'
// import RequireAuth from './components/RequireAuth';
import Home from './components/Home';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/">
          {/* public routes */}
          <Route path="login" element={<Login />} />
{ /* /!\ TODO Register */}
{ /* /!\ TODO Links */}
          <Route path="unauthorized" element={<Unauthorized />} />
          
          {/* we want to protect these routes */}

            <Route path="/" element={<Home />} />


          {/* catch all */}
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