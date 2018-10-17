import { serverConstants } from '../_constants';

export function subjects(state = {subject_array: []}, action) {
  switch (action.type) {
    case serverConstants.GET_ALL_SUBJECTS:
      return {
        loading: true
      };
    case serverConstants.GET_ALL_SUBJECTS_SUCCESS:
      return {
        subject_array: action.subjects
      };
    case serverConstants.GET_ALL_SUBJECTS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}