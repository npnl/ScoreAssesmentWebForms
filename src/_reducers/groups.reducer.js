import { serverConstants } from '../_constants';

export function groups(state = {groups_array: []}, action) {
  switch (action.type) {
    case serverConstants.GET_ALL_GROUPS:
      return {
        loading: true
      };
    case serverConstants.GET_ALL_GROUPS_SUCCESS:
      return {
        groups_array: action.groups
      };
    case serverConstants.GET_ALL_GROUPS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}