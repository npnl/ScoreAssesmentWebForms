import _ from "lodash";
import { common as CommonActionTypes } from "../actions/actionTypes";

const addInput = (state, {formId, inputId, value}) => {
  if(formId !== null && inputId !== null) {
    let currentInputValue = _.get(state, [formId, inputId], []);
    let newInputValue = _.union(currentInputValue,  _.concat(value, []));

    return updateInput(state, {formId, inputId, value: newInputValue});
  }

  return state;
};

const removeInput = (state, {formId, inputId, value}) => {
  if(formId !== null && inputId !== null) {
    let currentInputValue = _.get(state, [formId, inputId], []);
    _.pull(currentInputValue, value);

    return updateInput(state, {formId, inputId, value: currentInputValue});
  }
  return state;
};

const updateInput = (state, {formId, inputId, value}) => {
  if(formId !== null && inputId !== null) {
    var updateMap = {};
    _.set(updateMap, [formId, inputId], value);
    return _.merge({}, state, updateMap);
  }
  return state;
};

const updateForm = (state, {formId, inputs}) => {
  var updateMap = {};
  updateMap[formId] = inputs;
  return _.assign({}, state, updateMap);
};

const forms = (state = {}, {type, payload}) => {
  switch (type) {
    case CommonActionTypes.forms.UPDATE_INPUT:
      return updateInput(state, payload);

    case CommonActionTypes.forms.ADD_INPUT:
      return addInput(state, payload);

    case CommonActionTypes.forms.REMOVE_INPUT:
      return removeInput(state, payload);

    case CommonActionTypes.forms.UPDATE_FORM:
      return updateForm(state, payload)

    case CommonActionTypes.forms.RESET_FORM:
      return updateForm(state, {formId: _.get(payload, "formId"), inputs: {}});

    default:
      return state;
  };
};

export default  forms;