import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
      break;
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
      break;
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
      break;
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
      break;
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
      break;

    case userConstants.RESET_PASSWORD_MAIL_SUCCESS:
      return {
        ...state,
        reset_mail_sent: true
      };
      break;

    case userConstants.RESET_PASSWORD_STEP:
      return {
        ...state,
        reset_mail_sent: false
      };
      break;
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
      break;
    default:
      return state
  }
}