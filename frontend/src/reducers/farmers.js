import { GET_FARMERS, DELETE_FARMER, ADD_FARMER } from "../actions/types.js";

const initialState = {
    farmers: []
}

export default function(state = initialState,action){
    switch(action.type) {
        case GET_FARMERS:
            return {
                ...state,
                farmers: action.payload
        }
        case DELETE_FARMER:
            return {
                ...state,
                farmers: state.farmers.filter(farmer => 
                    farmer.id !== action.payload)
        }
        default:
            return state;
    }
}
