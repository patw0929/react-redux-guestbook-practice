import * as types from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
  case types.RETRIEVE_COMMENT_DATA:
    return action.payload;
  }

  return state;
};
