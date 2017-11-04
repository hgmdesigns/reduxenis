import {
    MESSAGES
} from '../types';

const INTITIAL_STATE = {
    messages: []
};

export default (state = INTITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case MESSAGES: 
            return { ...state, messages: action.payload };
        default: 
            return state;
    }
}   