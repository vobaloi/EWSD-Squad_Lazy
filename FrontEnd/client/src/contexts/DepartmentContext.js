import React from 'react'
import { createContext, useReducer } from "react";
import { departmentReducer } from '../reducers/departmentReducer';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
import axios from "axios";


export const DepartmentContext = createContext()
const DepartmentContextProvider = ({ children }) => {
    const [departSate, dispatch] = useReducer(departmentReducer, {
        departments: [],
        departmentsLoading: true
    })
    //Get all departments
    const getAllDepartments = async () => {
        try {
            const response = await axios.get('http://localhost:3000/depart/departments')
            if (response.data.success) {
                dispatch({ type: 'DEPARTMENT_LOAD_SUCCESS', payload: response.data.departments })
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