import Axios from 'axios'
import {API_URL} from '../../constans/API'

export const registerUser = ({fullname, username, email, password}) => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        return {
            type: "USER_EMAIL_FAILED",
            payload: "Please enter valid email address!"
        }
    } else {
        return (dispatch) => (
            Axios.post(`${API_URL}/users`, {
                fullname,
                username,
                email,
                password,
                role: "user"
            })
            .then((result) => {
                alert("Berhasil mendaftarkan user!")
                delete result.data.password
    
                dispatch({
                    type: "USER_LOGIN",
                    payload: result.data
                })
            })
            .catch(() => {
                alert("Gagal mendaftarkan user!")
            })
        )
    }
}

export const loginUser = ({username, password}) => {
    return (dispatch) => (
        Axios.get(`${API_URL}/users`, {
            params: {
                username: username,
            }
        })
        .then((result) => {
            if(result.data.length){
                if(password === result.data[0].password){
                    delete result.data[0].password

                    localStorage.setItem("userLoginEcommerce", JSON.stringify(result.data[0]))
                    dispatch({
                        type: "USER_LOGIN",
                        payload: result.data[0]
                    })
                } else {
                    dispatch({
                        type: "USER_ERROR",
                        payload: "Wrong password!"
                    })
                }
            } else {
                dispatch({
                    type: "USER_ERROR",
                    payload: "Wrong username!"
                })
            }
            console.log(result.data)
        })
        .catch(() => {
            alert("Terjadi kesalahan pada server")
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