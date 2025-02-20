import { FETCH_CATEGORY } from "../constants/category.constants";

const initialState = {
    categories: []
  };

const categoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_CATEGORY:
            return {
                ...state,
                categories: action.payload.categories
            }
            default:
            return state;
        
    }
}
export default categoryReducer;