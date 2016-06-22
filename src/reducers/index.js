import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import guestbookReducer from './guestbook';

const rootReducer = combineReducers({
  guestbook: guestbookReducer,
  form: formReducer,
});

export default rootReducer;
