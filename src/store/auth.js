import { action, makeObservable, observable } from "mobx";
import { createContext } from "react";
import Axios from 'axios'
import {API_URL} from '../constans/API'

class UserStore {

    registerData = null;
    loginData = null;
    loginSuccess = false;
    registerSuccess = false;

    constructor() {
        makeObservable(this, {
            registerData: observable,
            loginData: observable,
            loginSuccess: observable,
            registerSuccess: observable,
            login: action,
            register: action,
            handleLoginUser: action,
            handleRegisterUser: action,
            handleMoveToHome: action,
            handleMoveToLogin: action,
        })
    }

    login(payload){
        Axios.post(`${API_URL}/api/login`, payload)
        .then((result) => {
            if(result.data.success === true){
                localStorage.setItem("userLogin", JSON.stringify(result.data.token))
                this.handleMoveToHome()
            }
        })
        .catch((e) => {
            if(e.response){
                if(e.response.data.password){
                    alert(e.response.data.password[0])
                }
                if(e.response.data.email){
                    alert(e.response.data.email[0])
                }
                if(e.response.data.message){
                    alert(e.response.data.message)
                }
            }
        })
    }

    register(payload){
        console.log(payload)
        Axios.post(`${API_URL}/api/register`, payload)
        .then((result) => {
            this.handleMoveToLogin()
        })
        .catch((e) => {
            if(e.response){
                if(e.response.data.password){
                    alert(e.response.data.password[0])
                }
                if(e.response.data.email){
                    alert(e.response.data.email[0])
                }
            }
        })
    }

    handleRegisterUser(e) {
        const data = {
            name: this.registerData.name,
            email: this.registerData.email,
            password: this.registerData.password,
            password_confirmation: this.registerData.password_confirmation,
        }
        this.register(data);
    }

    handleLoginUser(e) {
        const data = {
            email: this.loginData.email,
            password: this.loginData.password,
        }
        this.login(data);
    }

    handleMoveToHome() {
        this.loginSuccess = true;
    }

    handleMoveToLogin() {
        this.registerSuccess = true;
    }
}

export const UserStoreContext = createContext(new UserStore());