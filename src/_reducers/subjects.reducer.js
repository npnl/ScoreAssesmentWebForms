import { serverConstants } from '../_constants';

export function subjects(state = {subjects_info: [], subject_names: []}, action) {
  switch (action.type) {
    case serverConstants.GET_ALL_SUBJECTS_INFO:
      return {
        ...state,
        loading: true
      };
    case serverConstants.GET_ALL_SUBJECTS_INFO_SUCCESS:
      return {
        ...state,
        subjects_info: action.subjects
      };
    case serverConstants.GET_ALL_SUBJECT_NAMES_SUCCESS:
      return {
        ...state,
        subject_names: action.subjects
      };
    case serverConstants.GET_ALL_SUBJECT_NAMES_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case serverConstants.GET_ALL_SUBJECTS_INFO_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state
  }
}