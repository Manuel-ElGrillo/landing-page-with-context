import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage';
import NotFoundPage from "../pages/NotFoundPage";

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing