import firebase from 'firebase';
import {
    MESSAGES
} from '../types';

export const loadMessage = () => {
    return (dispatch) => {
       firebase.database().ref('messages/10')
       .on('value', snap => {
           dispatch({
               type: MESSAGES,
               payload: snap.val()
           });
       });
    };
};
