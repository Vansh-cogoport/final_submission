import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom";
import Home from "./components/Home"
import Home1 from "./components/Home1"
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import Block from "./components/Block";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
<>
  <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
           <Route path="/home1" element={<Home1/>}/>
          <Route path="article/:id" element={<Articles/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup"  element={<Signup/>}/>
      </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
