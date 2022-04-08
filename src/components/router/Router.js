import React from 'react'
import {Route,Routes } from "react-router-dom";
import Form from '../spdForm/index';
import Table from '../Table/Table';
import Home from '../Home/Home';

function RoutePath() {
    return ( 
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path='/Form' element={<Form/>}></Route>
            <Route exact path='/Table' element={<Table/>}></Route>
        </Routes>
     );
}

export default RoutePath;