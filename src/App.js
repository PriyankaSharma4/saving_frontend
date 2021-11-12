import React, {useEffect,useContext, useState} from 'react';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import { Home } from "../src/components/Login";
import { SignUp } from "../src/components/SignUp";
import { Users } from "../src/components/Users";


function App() {
  let access_token = localStorage.getItem("access_token");

  return (
    <Router>
  
    {access_token ? 
      <Switch>
       <Route exact path="/" component={Users} />


      </Switch>
      :
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign_up" component={SignUp} />
      <Redirect to="/" />
      </Switch>
    }
      
     
   </Router>
  );
}

export default App;
