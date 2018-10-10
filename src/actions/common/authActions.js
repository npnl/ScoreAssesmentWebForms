import { auth as AuthActionTypes } from "../actionTypes";
import { Auth } from "../../api";

const login = () => {
  return (dispatch) => {
      dispatch(authenticate());
  };
};

const logout = () => {
  return (dispatch) => {
      return Auth.logout().then(() => { 
        dispatch(unauthenticate());
      });
  };
};

const authenticate = () => {
  return {
    type: AuthActionTypes.AUTHENTICATE,
  };
};

const unauthenticate = () => {
  return {
    type: AuthActionTypes.UNAUTHENTICATE
  };
};

module.exports =  {
    login: login,
    logout: logout
};