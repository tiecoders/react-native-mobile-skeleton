import { combineReducers } from 'redux'
import simpleReducer from "./simpleReducer";

const coreReducer = combineReducers({
    simple: simpleReducer
});

export default coreReducer;