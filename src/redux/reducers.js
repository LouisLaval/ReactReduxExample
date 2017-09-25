import * as types from './actionTypes';
import {combineReducers} from 'redux';

const initialState = {
    text: "Clique ici"
}

export const rootReducer = combineReducers({
    text: textReducer
})

function textReducer(state = initialState.text, action){
    switch(action.type){
        case types.CHANGE_TEXT:
            switch(state){
                case "Clique ici":
                    return "Re-clique pour voir";
                default:
                    return "Clique ici";
            }
        default:
            return state;
    }
}