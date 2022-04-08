import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
import axios from "axios";


export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
        Users: []
    })

    //login
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm)
            console.log("data", response.data.data.role)
            if (response.data.success)
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
            return response.data
        } catch (error) {
            if (error.response.data)
                return error.response.data
            else return { success: false, message: error.message }
        }
    }

    const getAllUser = async () => {
        try {
            const response = await axios.get(`${apiUrl}/auth/users`)
            console.log('data', response.data)
            if (response.data.users) {
                dispatch({ type: 'USERS_LOAD_SUCCESS', payload: response.data.users })
            }
            else {
                dispatch({ type: 'USERS_LOAD_FAIL' })
            }
        } catch (error) {

        }
    }

    //context Data
    const authContextData = { authState, loginUser, getAllUser }

    //return provider
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider