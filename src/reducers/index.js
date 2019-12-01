import { combineReducers } from 'redux'
import simpleReducer from "./simpleReducer";
import userReducer from "./userReducer";

const coreReducer = combineReducers({
    simple: simpleReducer,
    user: userReducer
});

export default coreReducer;
