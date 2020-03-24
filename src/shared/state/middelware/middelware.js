// import axios from 'axios'
import types from '../actionTypes'
export const applyMiddleware = dispatch => action => {
 switch (action.type) {
   case types.LOAD_CAT_IMAGE:
     return http
       .get( 'your endpoint here' ) // todo: get a url
       .then(res => dispatch({
           type: types.LOAD_YOUTUBE_INFO_SUCESS,
           payload: res.data }))
       .catch(err => dispatch({
           type: types.LOAD_YOUTUBE_INFO_FAIL,
           payload: err.response.data }))
   default: dispatch(action)
} }
