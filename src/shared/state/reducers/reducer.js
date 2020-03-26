import types from '../actionTypes'

const initialState = {
     theme: {
       activeColor: 'green',
       inactiveColor: 'blue',
       activeElements: {}
     },
     cats: {
       imageLoading: false,
       currentCatUrl: null,
     }
   }

const reducer = (state = initialState, action) => {
const newState = { ...state }
let newThemeState = {}
let newCatsState = {}

switch (action.type) {
  case types.REGISTER_ELEMENT:
    newThemeState = { ...state.theme };

    newThemeState.activeElements[action.id] = false;

    newState.theme = { ...newThemeState }
    return { ...newState }
  case types.SET_ACTIVE_ID:
    newThemeState = { ...state.theme };

    if(newThemeState.activeElements[action.id]) {
      newThemeState.activeElements[action.id] = false;
    } else if(action.id === 'all'){
      const allTrue = Object.values(newThemeState.activeElements).every( (val, i, arr) => val === true );

      Object.keys(newThemeState.activeElements).forEach( key => {
        newThemeState.activeElements[key] = !allTrue;
      });
    } else {
      newThemeState.activeElements[action.id] = true;
    }

    newState.theme = { ...newThemeState }
    return { ...newState }
  case types.SET_BACKGROUND_COLOR:
    newThemeState = { ...state.theme };
    newThemeState.activeColor = action.color;
    newState.theme = { ...newThemeState }
    return { ...newState }
  case types.TOGGLE_IMAGE_LOADING:
    console.log('reducer TOGGLE_IMAGE_LOADING:', action)
    newCatsState = { ...state.cats };
    newCatsState.imageLoading = action.payload;
    newState.cats = { ...newCatsState }
    return { ...newState }
  case types.REMOVE_CAT_IMAGE:
    console.log('reducer REMOVE_CAT_IMAGE:', action)
    newCatsState = { ...state.cats };
    newCatsState.currentCatUrl = null;
    newState.cats = { ...newCatsState }
    return { ...newState }
  case types.LOAD_CAT_IMAGE:
    console.log('reducer LOAD_CAT_IMAGE:', action)
     return { ...state }
  case types.LOAD_CAT_IMAGE_SUCCESS:
      console.log('reducer LOAD_CAT_IMAGE_SUCCESS:', action)
      newCatsState = { ...state.cats };
      newCatsState.currentCatUrl = action.payload;
      newState.cats = { ...newCatsState }
      return { ...newState }

   default:
    return { ...state }
} }
export { initialState, reducer }
