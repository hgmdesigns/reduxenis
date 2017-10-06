import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import RouterComponent from './src/router';

export default class App extends Component {
    componentWillMount() {
      const config = {
          apiKey: 'AIzaSyBy11eOj1te5UBfqYmhrX6hLIsSaaE71do',
          authDomain: 'hgmenis.firebaseapp.com',
          databaseURL: 'https://hgmenis.firebaseio.com',
          projectId: 'hgmenis',
          storageBucket: 'hgmenis.appspot.com',
          messagingSenderId: '457564974792',
      };

    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
       <RouterComponent />
      </Provider>
    );
  }
}

