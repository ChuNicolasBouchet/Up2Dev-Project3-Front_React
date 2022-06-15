import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/pages/login">
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
