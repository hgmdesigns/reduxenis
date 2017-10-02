import {
    USER_SIGNUP_SUCESS,
    USER_DATA_RECIVED
} from '../types';
// const authRef = firebase.auth();

//First store the value of inpuet feild and then pass that with actions
export const formData = ({ prop, value }) => {
    return {
        type: USER_DATA_RECIVED,
        payload: { prop, value }
    };
};

// export const signUp = (email, password) => {
//     authRef.createAccountWithEmailAndPassword(email, password)
//     .then((user, dispatch) => {
//         dispatch({ type: USER_SIGNUP_SUCESS, payload: user })
//     });
// };
