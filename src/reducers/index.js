import { combineReducers } from 'redux';
import {allContactsReducer} from './allContactsReducer';
import { newContactReducer } from './newContactReducer';
import { recentReducer } from './recentReducer';

const allReducers = combineReducers({
      allContacts:  allContactsReducer,
      newContact: newContactReducer,
      recentCalls: recentReducer,
});

export default allReducers;