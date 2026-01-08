import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RedirectPage from "./Pages/RedirectPage"
const App = ()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:code" element={<RedirectPage/>} />
      </Routes>
      
    </>
  )
}

export default App;