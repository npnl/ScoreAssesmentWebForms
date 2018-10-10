import _ from "lodash";
import { common as CommonActionTypes } from "../actionTypes";

const updateInputAction = (formId, inputId, value, type) => ({
  type: type,
  payload: {
    formId: formId,
    inputId: inputId,
    value: value
  }
});

const updateInput = (formId, inputId, value) => updateInputAction(formId, inputId, value, CommonActionTypes.forms.UPDATE_INPUT);
const addInput = (formId, inputId, value) => updateInputAction(formId, inputId, value, CommonActionTypes.forms.ADD_INPUT);
const removeInput = (formId, inputId, value) => updateInputAction(formId, inputId, value, CommonActionTypes.forms.REMOVE_INPUT);

const updateForm = (formId, inputs) => ({
  type: CommonActionTypes.forms.UPDATE_FORM,
  payload: {
    formId: formId,
    inputs: inputs
  }
});

const requestSubmitForm = (formId, inputs) => ({
  type: CommonActionTypes.forms.REQUEST_SUBMIT_FORM,
  payload: {
    formId: formId,
    inputs: inputs
  }
});

const resetForm = (formId) => ({
  type: CommonActionTypes.forms.RESET_FORM,
  payload: {
    formId: formId
  }
});

const submitForm = (inputs, api, formProps) => {
  const formId = _.get(formProps, "formId");
  return (dispatch) => {
    dispatch(requestSubmitForm(formId, inputs));

    return api(inputs, formProps)
      .then((response) => {
        formProps.successHandler(response, dispatch, formProps);
      }).catch((error) => {
        formProps.errorHandler(error, dispatch, formProps)
      });
  };
};

export default  {
  updateInput,
  updateForm,
  submitForm,
  requestSubmitForm,
  resetForm,
  addInput,
  removeInput
};