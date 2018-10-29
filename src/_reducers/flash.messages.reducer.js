import { flashMessagesConstants } from '../_constants';

export function flashMessages(state = {}, action) {
  switch (action.type) {
    case flashMessagesConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case flashMessagesConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case flashMessagesConstants.CLEAR:
      return {};
    default:
      return state
  }
}