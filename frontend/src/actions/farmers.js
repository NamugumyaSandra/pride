import axios from 'axios'

import { GET_FARMERS,DELETE_FARMER } from './types'

//GET_FARMERS
export const getFarmers = () => dispatch => {
    axios.get('/api/farmers/')
    .then(res => {
        dispatch({
            type: GET_FARMERS,
            payload: res.data
            });
    })
    .catch(err => console.log(err));
};

//DELETE_FARMER
export const deleteFarmer = (id) => dispatch => {
    axios.delete(`/api/farmers/${id}/`)
    .then(res => {
        dispatch({
            type: DELETE_FARMER,
            payload: id
            });
    })
    .catch(err => console.log(err));
};
