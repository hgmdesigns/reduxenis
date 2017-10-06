import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    USER_SIGNUP_SUCESS,
    USER_DATA_RECIVED
} from '../types';

//First store the value of inpuet feild and then pass that with actions
export const formData = ({ prop, value }) => {
    return {
        type: USER_DATA_RECIVED,
        payload: { prop, value }
    };
};

export const signUp = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => { LOGINUSER(dispatch, user); });
    };
};


const LOGINUSER = (dispatch, user) => {
    dispatch({
         type: USER_SIGNUP_SUCESS,
         payload: user 
   });
   Actions.reg();
};
