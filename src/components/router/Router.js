import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Form from '../spdForm/index';
import Table from '../Table/Table';
import Home from '../Home/Home';

function Router() {
    return ( 
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path='/Form' component={Form}></Route>
            <Route exact path='/Table' component={Table}></Route>
        </Switch>
     );
}

export default Router;