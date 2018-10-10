import _ from "lodash";
import { auth as AuthActionTypes } from "../actions/actionTypes";

const auth = (state = {}, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTHENTICATE:
      return _.assign({}, state, {authenticated: true});
    
    case AuthActionTypes.UNAUTHENTICATE:
      return _.assign({}, state, {authenticated: false});

    default:
      return state;
  }
};

export default  auth;