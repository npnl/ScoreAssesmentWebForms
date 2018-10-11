import { formConstants } from '../_constants';

const initialState = {};

export function formSave(state = initialState, action) {
  switch (action.type) {
    case formConstants.FORM_DATA_SAVE_SUCCESS:
      return {
        message: action.message
      };
    case formConstants.FORM_DATA_SAVE_FAILURE:
      return {
        error: action.message
      };
    default:
      return state
  }
}