import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { formSave } from './form.reducer';
import { subjects } from './subjects.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  formSave,
  subjects
});

export default rootReducer;