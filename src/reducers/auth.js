import {
    USER_SIGNUP_SUCESS,
    USER_DATA_RECIVED
} from '../types';

const INTITIAL_STATE = {
    email: '',
    password: ''
};

export default (state = INTITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case USER_DATA_RECIVED:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};