import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'react-redux';
import datas from './reducer'
import thunkMiddleware from 'redux-thunk';
const rootReducer = combineReducers({datas});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
