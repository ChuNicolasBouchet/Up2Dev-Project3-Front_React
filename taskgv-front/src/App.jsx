import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Login from './components/Login'
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
// import Home from './components/Home';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Register from './components/Register'
import UsersList from './components/users/UsersList';
import { AuthProvider } from './context/AuthProvider';
import Workspace from './components/Workspace'
// import UsersList from './components/users/UsersList';
// import ToolBar from './components/ToolBar'

function App() {

  return (
    <AuthProvider>
      <Header />
      <div className='App'>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route path="login" element={<Login />} />
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route path="register" element={<Register />} />

            {/* protected routes */}

            {/* <Route element={<RequireAuth />} >
              <Route path="/" element={<Home />}/>
            </Route> */}

            <Route element={<RequireAuth />} >
              <Route path="/" element={<Workspace />}>
                <Route path="/userslist" element={<UsersList />} />
              </Route>
            </Route>

            {/*
            <Route path="workspace" element={<Workspace />} />
            
            */}

            {/* catch all => 404 */}
            <Route path="*" element={<Missing />} />

          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
