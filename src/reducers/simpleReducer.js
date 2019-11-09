import {SIMPLE_ACTION_SUCCESSED} from "../actions/simpleActions";

const initialState = {
    enabled: false
}

export default function linksReducer(state = initialState, action) {
    switch (action.type) {
        case SIMPLE_ACTION_SUCCESSED:{
            return {
                ...state,
                enabled: true
            }
        }

        default:
            return state
    }
}