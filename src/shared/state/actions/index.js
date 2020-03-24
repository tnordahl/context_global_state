import types from '../actionTypes'

const useActions = (state, dispatch) => ({
  loadCatImage: data => {
    dispatch({ type: types.TOGGLE_IMAGE_LOADING, payload: data })
    dispatch({ type: types.LOAD_CAT_IMAGE, payload: data })
  },
  setActiveID: data => {
    dispatch({ type: types.SET_ACTIVE_ID, id: data })
  },
  setBackgroundColor: data => {
    dispatch({ type: types.SET_BACKGROUND_COLOR, color: data })
  }
  });

export default useActions;
