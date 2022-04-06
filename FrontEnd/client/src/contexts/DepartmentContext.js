import React from 'react'
import { createContext, useReducer } from "react";
import { departmentReducer } from '../reducers/departmentReducer';
//import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
import axios from "axios";
import { apiUrl } from './constants';


export const DepartmentContext = createContext()
const DepartmentContextProvider = ({ children }) => {
    const [departSate, dispatch] = useReducer(departmentReducer, {
        departments: [],
        departmentsLoading: true
    })

    //Get all departments
    const getAllDepartments = async () => {
        try {
            const response = await axios.get(`${apiUrl}/depart/departments`)
            console.log('data', response)
            if (response.data.allDepartments) {
                console.log("data", response.data.allDepartments)
                dispatch({ type: 'DEPARTMENT_LOAD_SUCCESS', payload: response.data.allDepartments })
            }
        } catch (error) {
            dispatch({ type: 'DEPARTMENT_LOAD_FAIL' })
        }
    }

    const DepartmentContextData = { departSate, getAllDepartments }

    return (
        <DepartmentContext.Provider value={DepartmentContextData} >
            {children}
        </DepartmentContext.Provider>
    )
}

export default DepartmentContextProvider