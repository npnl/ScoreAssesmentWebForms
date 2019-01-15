import { userConstants } from '../_constants';

let access_token = localStorage.getItem('access_token');
let current_user = JSON.parse(localStorage.getItem('current_user'));
const initialState = access_token ? { loggedIn: true, access_token, current_user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        email: action.email
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        access_token: action.token_and_user.access_token,
        current_user: action.token_and_user.current_user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.RESET_PASSWORD_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}