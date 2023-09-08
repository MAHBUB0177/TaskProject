import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../component/home';
import Employeelist from '../component/employeelist';
import BaseLayout from '../component/layout';

const Routers = () => {
  return (
    
         <Routes>

      <Route path="/" element={<BaseLayout />}>
        <Route index  element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path="list" element={<Employeelist />}/>
         
      </Route>
        
         </Routes>
  )
}

export default Routers;