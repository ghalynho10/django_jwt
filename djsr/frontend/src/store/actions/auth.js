import * as actionTypes from './actionTypes'
import axiosInstance from '../../axiosApi'

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token
    }
}

const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}



export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            username: username,
            password: password
        }

        axiosInstance.post('/token/obtain/', authData)
            .then(response => {
                console.log(response)
                axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                dispatch(authSuccess(response.data.access))
            })
            .catch(error => {
                console.log(error)
                dispatch(authFail(error.response.data))
            })


    }
}