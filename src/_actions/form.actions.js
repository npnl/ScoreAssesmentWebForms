import { formConstants } from '../_constants';
import { formService } from '../_services';
import { alertActions } from './';

export const formActions = {
    sendFormData
};

function sendFormData(formData) {
    return dispatch => {
      formService.sendFormDataToServer(formData, formConstants.TYPE_NIHSS_FORM)
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

    function success(message) { return { type: formConstants.FORM_DATA_SAVE_SUCCESS, message } }
    function failure(error) { return { type: formConstants.FORM_DATA_SAVE_FAILURE, error } }
}