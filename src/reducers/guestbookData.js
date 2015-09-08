import * as types from '../constants/actionTypes';

const initialState = [];

export default function guestbookData(state = initialState, action) {
  switch (action.type) {
  case types.RETRIEVE_COMMENT_DATA:
    return action.data;

  case types.SAVE_COMMENT_DATA:
    return [
      {
        name: action.data.item.name,
        email: action.data.item.email,
        comment: action.data.item.comment
      },
      ...state
    ];

  default:
    return state;
  }
}
