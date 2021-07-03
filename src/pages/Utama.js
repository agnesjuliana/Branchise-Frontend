import React from 'react';
import {Switch, Route} from 'react-router-dom';

//import Beranda from './Beranda';
import LandingPage from './LandingPage'
import Login from './Login'
import Registrasi from './Register'


const Utama = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/Login" component={Login}/>
        <Route path="/register" component={Registrasi}/>
    </Switch>
)

export default Utama;