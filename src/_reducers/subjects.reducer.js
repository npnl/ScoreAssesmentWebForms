import { serverConstants, subjectConstants } from '../_constants';
import _ from "lodash";

export function subjects(state = {subjects_info: [], subject_names: [], delete_btns_visible: false, count: 0}, action) {
  switch (action.type) {
    case serverConstants.GET_ALL_SUBJECTS_INFO:
      return {
        ...state,
        loading: true
      };
    case serverConstants.GET_ALL_SUBJECTS_INFO_SUCCESS:
      return _.assign({}, state, {subjects_info: action.subjects});

    case serverConstants.GET_ALL_SUBJECT_NAMES_SUCCESS:
      return _.assign({}, state, {subject_names: action.subjects});

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

    case subjectConstants.TOGGLE_DELETE_BTNS:
      return{
        ...state,
        delete_btns_visible: !state.delete_btns_visible
      };
    default:
      return state
  }
}