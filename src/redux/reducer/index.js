import { openDrawer } from "../action";

const initialState = {
    nearByHospital:[],
    openDrawer:false,
    botVisible:false,
    loader: false,
  };


  export default (state = initialState, action) => {
    switch (action.type) {
        case "NEAR_BY_HOSPITAL":
          return {
            ...state,
            nearByHospital: action.payload
          } 
          case "OPEN_DRAWER":
          return {
            ...state,
            openDrawer: action.payload
          } 
          case "OPEN_BOT":
            return {
              ...state,
              botVisible: action.payload
            } 
            case "LOADER":
            return {
              ...state,
              loader: action.payload
            } 
        default:
            return state;
        }  
  }
