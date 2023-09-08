import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../component/home';


const Routers = () => {
  return (
    
         <Routes>

      
        <Route index element={<Home />} />
        
         
     
        
         </Routes>
  )
}

export default Routers;