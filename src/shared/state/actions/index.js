import types from '../actionTypes'

const useActions = (state, dispatch) => ({
  setImageLoading: data => {
    dispatch({ type: types.TOGGLE_IMAGE_LOADING, payload: data })
  },
  removeCatImage: () => {
    dispatch({ type: types.REMOVE_CAT_IMAGE })
  },
  updateCatImage: () => {
    dispatch({ type: types.LOAD_CAT_IMAGE })
  },
  registerElement: data => {
    dispatch({ type: types.REGISTER_ELEMENT, id: data })
  },
  setActiveID: data => {
    dispatch({ type: types.SET_ACTIVE_ID, id: data })
  },
  setBackgroundColor: data => {
    dispatch({ type: types.SET_BACKGROUND_COLOR, color: data })
  }
  });

export default useActions;
