import types from '../actionTypes'

const initialState = {
     loading: false,
     youtubeInfo: null,
     error: '' ,
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

switch (action.type) {
   case types.SET_ACTIVE_ID:
    newThemeState = { ...state.theme };

    if(newThemeState.activeElements[action.id]) {
      delete newThemeState.activeElements[action.id];
    } else if(action.id === 'all'){
      newThemeState.activeElements = {
        all: 'active',
      };
    } else {
      newThemeState.activeElements[action.id] = 'active';
    }

    newState.theme = { ...newThemeState }
    return { ...newState }
   // case types.LOAD_YOUTUBE_INFO_SUCESS:
   //  return { ...state, youtubeInfo: action.payload, loading: false }
   // case types.LOAD_YOUTUBE_INFO_FAIL: return { ...state, loading: false, error: action.payload }
   // case types.SET_LOADING_INDICATOR: return { ...state, loading: true }

   case types.SET_BACKGROUND_COLOR:
      console.log('reducer SET_BACKGROUND_COLOR:', action)
     newThemeState = { ...state.theme };
     newThemeState.activeColor = action.color;
     newState.theme = { ...newThemeState }
     return { ...newState }

   default:
    return { ...state }
} }
export { initialState, reducer }
