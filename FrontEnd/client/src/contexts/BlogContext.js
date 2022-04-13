import React, { useReducer, createContext } from "react"
import { blogReducer } from '../reducers/blogReducer';
//import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
import axios from "axios";
import { apiUrl } from './constants';
import { Delete } from "@mui/icons-material";


export const BlogContext = createContext()
const BlogContextProvider = ({ children }) => {
    const [BlogState, dispatch] = useReducer(blogReducer, {
        blogs: [],
        blog: '',
        blogs_by_cate: []
    })

    //Get all departments
    const getAllBlogs = async () => {
        try {
            const response = await axios.get(`${apiUrl}`)
            if (response.data) {
                console.log("data luu payload", response.data)
                dispatch({ type: 'BLOGS_LOAD_SUCCESS', payload: response.data })
            }
        } catch (error) {
            dispatch({ type: 'BLOGS_LOAD_FAIL' })
        }
    }

    const addNewBlog = async BlogForm => {
        try {
            const response = await axios.post(`${apiUrl}`, BlogForm)
            console.log("data a new blog", response)
            if (response)
                dispatch({ type: 'ADD_NEW_BLOG', payload: response })
            return response
        } catch (error) {
            if (error.response.data)
                return error.response.data
            else return { success: false, message: "Server Error" }
        }
    }

    const getBlogByCateId = async (_id) => {
        const response = await axios.get(`${apiUrl}`)
        console.log("blog by cate: ", response)
    }

    const DeleteBlog = async (_id) => {
        const response = await axios.delete(`${apiUrl}`)
        console.log("delete blog: ", response)
    }

    const BlogContextData = { BlogState, getAllBlogs, addNewBlog, getBlogByCateId, DeleteBlog }

    return (
        <BlogContext.Provider value={BlogContextData} >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider