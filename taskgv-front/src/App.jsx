import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import Login from './components/Login'
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Register from './components/Register'
import { AuthProvider } from './context/AuthProvider';
import Workspace from './components/Workspace'
import UsersList from "./components/users/UsersList";
import User from "./components/users/User";
import UserEdit from "./components/users/UserEdit";
import Empty from "./components/Empty";


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
            <Route element={<RequireAuth />} >
              <Route exact path="/" element={<Workspace />} >
                <Route path ="/empty" element={<Empty />} />
                <Route path ="/users" element={<UsersList />} />
                <Route path ="/user/:id" element={<User />} />
                <Route path ="/useredit/:id" element={<UserEdit />} />
              </Route>
            </Route>
            {/* catch all => 404 */}
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
