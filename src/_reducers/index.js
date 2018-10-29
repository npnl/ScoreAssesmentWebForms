import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { flashMessages } from './flash.messages.reducer';
import { formSave } from './form.reducer';
import { subjects } from './subjects.reducer';
import { groups } from './groups.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  flashMessages,
  formSave,
  subjects,
  groups
});

export default rootReducer;