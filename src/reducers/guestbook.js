import * as types from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
  case types.RETRIEVE_COMMENT_DATA:
    return action.payload;

  case types.SAVE_COMMENT_DATA:
    return [
      {
        name: action.payload.item.name,
        email: action.payload.item.email,
        comment: action.payload.item.comment,
      },
      ...state,
    ];
  }

  return state;
};
