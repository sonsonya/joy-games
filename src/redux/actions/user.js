import Axios from 'axios'
import {API_URL} from '../../constans/API'
import { Navigate } from 'react-router-dom'

export const registerUser = ({name, email, password, password_confirmation}) => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        return {
            type: "USER_EMAIL_FAILED",
            payload: "Please enter valid email address!"
        }
    } else {
        return (dispatch) => (
            Axios.post(`${API_URL}/api/register`, {
                name,
                email,
                password,
                password_confirmation
            })
            .then((result) => {
                dispatch({
                    type: "USER_LOGIN",
                    payload: result.data
                })
            })
            .catch((e) => {
                if(e.response){
                    if(e.response.data.password){
                        dispatch({
                            type: "USER_ERROR",
                            payload: e.response.data.password[0]
                        })
                    }
                    if(e.response.data.email){
                        dispatch({
                            type: "USER_ERROR",
                            payload: e.response.data.email[0]
                        })
                    }
                }
            })
        )
    }
}

export const loginUser = ({username, password}) => {
    return (dispatch) => (
        Axios.post(`${API_URL}/api/login`, {
            email: username,
            password: password,
        })
        .then((result) => {
            if(result.data.success === true){
                localStorage.setItem("userLogin", JSON.stringify(result.data.token))
                dispatch({
                    type: "USER_LOGIN",
                    payload: result.data
                })
            }
        })
        .catch(() => {
            dispatch({
                type: "USER_ERROR",
                payload: "Wrong email or password!"
            })
        })
    )
}

export const logoutUser = () => {
    localStorage.removeItem("userLoginEcommerce")
    return {
        type: "USER_LOGOUT"
    }
}

export const keepLogin = (userData) => {
    return(dispatch) => {
        Axios.get(`${API_URL}/users`, {
            id: userData.id
        })
        .then((result) => {
            delete result.data[0].password

            localStorage.setItem("userLoginEcommerce", JSON.stringify(result.data[0]))

            dispatch({
                type: "USER_LOGIN",
                payload: result.data[0]
            })
        })
        .catch(() => {
            alert("Terjadi kesalahan di server")
        })
    }
}

export const checkStorage = () => {
    return {
        type: "CHECK_STORAGE",
    }
}