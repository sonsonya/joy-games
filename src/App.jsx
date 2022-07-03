import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { configure } from 'mobx';

import Home from './pages/Home';
import Login from './pages/Auth/Login';
import LoginUser from './pages/Auth/LoginUser';
import Register from './pages/Auth/Register';
import RegisterUser from './pages/Auth/RegisterUser';

configure({ enforceActions: 'never' });

class App extends React.Component {

  render(){
      return (
        <BrowserRouter>
          <Routes>
            <Route element={<Home/>} path='/home'/>
            {/* <Route element={<Login/>} path='/'/> */}
            <Route element={<LoginUser/>} path='/'/>
            {/* <Route element={<Register/>} path='/register'/> */}
            <Route element={<RegisterUser/>} path='/register'/>
          </Routes>
        </BrowserRouter>
      )
  }
}

export default App;
