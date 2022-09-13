import React from "react";
import {  Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import LoginCode from "./pages/LoginCode";
import {  useSelector } from "react-redux";
import Layout from "./Layout"
import SideBar from "./components/SideBar";
const App = () => {

  const token = useSelector(state => state.auth.token)

  if( token) {
    return (
      <div className="App">
          <Routes>
            <Route  element={<SideBar/>}>
            <Route   path="/home" element={<Home />} />
            <Route   path="/about" element={<About />} />
            </Route>
            <Route  exact='true' path="*" element={<Navigate to='/home' />} />
          </Routes>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>} >
                <Route index element={<Login/>} />
                <Route  path="/loginCode" element={<LoginCode />} />
            </Route>
          <Route  exact='true' path="*" element={<Navigate to='/' />} />
        </Routes>
      </div>
    )
  }


};

export default App;
