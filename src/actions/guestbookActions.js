import firebase from 'firebase';
import * as types from './types';

var config = {
  apiKey: 'AIzaSyA8L9c-7U--zFqqpLNjl0QHGe7LrMD7d9Q',
  authDomain: 'react-redux-guestbook-practice.firebaseapp.com',
  databaseURL: 'https://react-redux-guestbook-practice.firebaseio.com',
  storageBucket: 'react-redux-guestbook-practice.appspot.com',
};
firebase.initializeApp(config);
const database = firebase.database();

export function retrieveCommentData(comments) {
  return {
    type: types.RETRIEVE_COMMENT_DATA,
    payload: comments,
  };
}

export function fetchComments() {
  return dispatch => {
    const comments = [];
    database.ref('comments').orderByChild('created_at').once('value', snapshot => {
      const data = snapshot.val();
      for (const key in data) {
        if ({}.hasOwnProperty.call(data, key)) {
          comments.push(data[key]);
        }
      }
      comments.sort((a, b) => {
        const createdA = a.created_at;
        const createdB = b.created_at;
        return createdB - createdA;
      });
      dispatch(retrieveCommentData(comments));
    });
  };
}

export function postComment(name, email, comment) {
  return dispatch => {
    const newCommentKey = database.ref().child('comments').push().key;
    const created_at = +new Date();
    const updates = {};
    updates['/comments/' + newCommentKey] = {
      name,
      email,
      comment,
      created_at,
    };
    database.ref().update(updates);
    dispatch(fetchComments());
  };
}
