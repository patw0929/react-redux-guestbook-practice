import * as types from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
  case types.RETRIEVE_COMMENT_DATA:
    return action.data;

  case types.SAVE_COMMENT_DATA:
    return [
      {
        name: action.data.item.name,
        email: action.data.item.email,
        comment: action.data.item.comment,
      },
      ...state
    ];
  }

  return state;
};
