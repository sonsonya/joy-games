import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

class App extends React.Component {

  render(){
      return (
        <BrowserRouter>
          <Routes>
            <Route element={<Home/>} path='/home'/>
            <Route element={<Login/>} path='/'/>
            <Route element={<Register/>} path='/register'/>
          </Routes>
        </BrowserRouter>
      )
  }
}

export default App;
