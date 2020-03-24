import types from '../actionTypes'
import {  getCatImage } from '../../libs/imageHelpers';

export const applyMiddleware =  dispatch => async action => {
 switch (action.type) {
   case types.LOAD_CAT_IMAGE:
   console.log('applyMiddleware LOAD_CAT_IMAGE')
    const res =  await getCatImage( );
    return dispatch({
       type: types.LOAD_CAT_IMAGE_SUCCESS,
       payload: res })
   default: dispatch(action)
} }
