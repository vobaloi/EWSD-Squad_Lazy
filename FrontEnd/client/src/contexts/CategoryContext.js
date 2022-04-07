import React from 'react'
import { createContext, useReducer } from "react";
import { categoryReducer } from '../reducers/categoryReducer';
import axios from "axios";
import { apiUrl } from './constants';


export const CategoryContext = createContext()
const CategoryContextProvider = ({ children }) => {
    const [cateSate, dispatch] = useReducer(categoryReducer, {
        categories: [],
        categoriesLoading: true
    })

    //Get all departments
    const getAllCategories = async () => {
        try {
            const response = await axios.get(`${apiUrl}/cate/categories`)
            console.log('data', response.data.categories)
            if (response.data.categories) {
                console.log("data", response.data.categories)
                dispatch({ type: 'CATEGORIES_LOAD_SUCCESS', payload: response.data.categories })
            }
        } catch (error) {
            dispatch({ type: 'CATEGORIES_LOAD_FAIL' })
        }
    }

    const addNewCate = async cateForm => {
        try {
            const response = await axios.post(`${apiUrl}/cate/addCate`, cateForm)
            console.log("data", response.data)
            if (response.data)
                dispatch({ type: 'ADD_NEW_CATEGORY', payload: response.data })
            return response.data
        } catch (error) {
            if (error.response.data)
                return error.response.data
            else return { success: false, message: "Server Error" }
        }
    }

    const CategoryContextData = { cateSate, getAllCategories, addNewCate }

    return (
        <CategoryContext.Provider value={CategoryContextData} >
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider