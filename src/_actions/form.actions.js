import { formConstants } from '../_constants';
import { alertConstants } from '../_constants';
import { formService } from '../_services';
import { alertActions } from './';

export const formActions = {
    sendFormData,
    sendFmaFormData,
    sendNihssFormData,
    sendWmftFormData,
    sendArmFormData,
    sendBathelFormData,
    sendMasFormData,
    sendMmtFormData,
    sendMrsFormData,
    sendSisFormData
};

function sendFormData(formData, formType) {
    return dispatch => {
      formService.sendFormDataToServer(formData, formType)
            .then(
              success_response => {
                    dispatch(success(success_response));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function success(message) { return { type: alertConstants.SUCCESS, message } }
    function failure(error) { return { type: alertConstants.ERROR, error } }
}

function sendFmaFormData(formData) {
    return sendFormData(formData, formConstants.TYPE_FMA_FORM);
}

function sendNihssFormData(formData) {
    return sendFormData(formData, formConstants.TYPE_NIHSS_FORM);
}

function sendWmftFormData(formData) {
  return sendFormData(formData, formConstants.TYPE_WMFT_FORM);
}

function sendArmFormData(formData) {
  return sendFormData(formData, formConstants.TYPE_ARM_FORM);
}

function sendBathelFormData(formData) {
  return sendFormData(formData, formConstants.TYPE_BATHEL_FORM);
}

function sendMasFormData(formData) {
  return sendFormData(formData, formConstants.TYPE_MAS_FORM);
}

function sendMmtFormData(formData) {
  return sendFormData(formData, formConstants.TYPE_MMT_FORM);
}

function sendMrsFormData(formData) {
  return sendFormData(formData, formConstants.TYPE_MRS_FORM);
}

function sendSisFormData(formData) {
  return sendFormData(formData, formConstants.TYPE_SIS_FORM);
}