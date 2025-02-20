import axios from "axios";
import { FETCH_CATEGORY } from "../constants/category.constants";

//fetch job category
export const fetchCategory=()=>async(dispatch)=>{
    dispatch({
        type:FETCH_CATEGORY,
        payload:{
            categories:[]
        }
    })

    try {
        const response = await axios.get('http://localhost:5000/api/category/categories');  // Your backend API route
        dispatch({
            type: FETCH_CATEGORY,
            payload: { categories: response.data}
    });
    } catch (error) {
        dispatch({
            type:FETCH_CATEGORY,
            payload:{
                categories:[]
            }
        })
    }
}
