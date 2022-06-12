import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pages/login">
            <Login />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
