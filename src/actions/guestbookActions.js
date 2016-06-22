import * as types from './types';

export function retrieveCommentData(json) {
  let arr = json.map((data) => data.attributes);

  return {
    type: types.RETRIEVE_COMMENT_DATA,
    data: arr,
  };
}

export function fetchComments() {
  let Guestbook = Parse.Object.extend('Guestbook');
  let query = new Parse.Query(Guestbook);

  return dispatch => {
    query.descending('createdAt').find({
      success: (results) => {
        dispatch(retrieveCommentData(results));
      }
    });
  };
}

export function saveCommentData(name, email, comment) {
  return {
    type: types.SAVE_COMMENT_DATA,
    data: {
      item: {
        name: name,
        email: email,
        comment: comment,
      },
    }
  };
}

export function postComment(name, email, comment) {
  let Guestbook = Parse.Object.extend('Guestbook');
  let data = new Guestbook();

  return dispatch => {
    data.save({
      name: name,
      email: email,
      comment: comment
    }).then(() => {
      dispatch(saveCommentData(name, email, comment));
    });
  };
}
