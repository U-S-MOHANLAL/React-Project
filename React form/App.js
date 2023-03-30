import Home from "./components/Home"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/" element={<Login/>}/>
          <Route path ="/SignUp" element={<SignUp/>}/>
          <Route path ="/Home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
