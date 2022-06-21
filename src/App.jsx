import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

import { keepLogin, checkStorage } from './redux/actions/user';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import MyNavbar from './components/MyNavbar';

class App extends React.Component {
  
  componentDidMount(){
    const userLocalStorage = localStorage.getItem("userLoginEcommerce")

    if(userLocalStorage){
      const userData = userLocalStorage.toString();
      this.props.keepLogin(userData);
    } else {
      this.props.checkStorage();
    }
  }

  render(){
    // if(this.props.user.storageIsChecked) {
      return (
        <BrowserRouter>
        <MyNavbar></MyNavbar>
          <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Login/>} path='/login'/>
            <Route element={<Register/>} path='/register'/>
            <Route element={<Products/>} path='/products'/>
            <Route element={<Contact/>} path='/contact'/>
            <Route element={<Admin/>} path='/admin'/>
          </Routes>
        </BrowserRouter>
      )
    // }
    
    // return (
    //   <div>
    //     Loading..
    //   </div>
    // )
  }
}

const mapStateToProps = (state) => {
  return {
    user : state.user,
  }
}

const mapDispatchToProps = {
  keepLogin,
  checkStorage,
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
