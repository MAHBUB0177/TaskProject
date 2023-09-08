import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../component/home';
import BaseLayout from '../component/layout';
import Menulist from '../component/menu/menulist';

const Routers = () => {
  return (
    
         <Routes>

      <Route path="/" element={<BaseLayout />}>
        <Route index  element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path="menulist" element={<Menulist />}/>
         
      </Route>
        
         </Routes>
  )
}

export default Routers;