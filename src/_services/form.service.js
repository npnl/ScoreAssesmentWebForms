import { authHeader } from '../_helpers';
import { serverConstants } from '../_constants'
import { userService } from './user.service'
import { formConstants } from '../_constants'

export const formService = {
    sendFormDataToServer
};

function sendFormDataToServer(formData, formType) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    };

    let apiEndPoint;
    switch (formType) {
      case formConstants.TYPE_NIHSS_FORM:
          apiEndPoint = `${serverConstants.BASE_URL}/nihss_form`;
          break;
      case formConstants.TYPE_FMA_FORM:
          apiEndPoint = `${serverConstants.BASE_URL}/fma_form`;
          break;
      case formConstants.TYPE_MAS_FORM:
        apiEndPoint = `${serverConstants.BASE_URL}/mas_form`;
        break;
      case formConstants.TYPE_SIS_FORM:
        apiEndPoint = `${serverConstants.BASE_URL}/sis_form`;
        break;
      case formConstants.TYPE_MRS_FORM:
        apiEndPoint = `${serverConstants.BASE_URL}/mrs_form`;
        break;
      case formConstants.TYPE_BATHEL_FORM:
        apiEndPoint = `${serverConstants.BASE_URL}/barthel_form`;
        break;
      case formConstants.TYPE_ARM_FORM:
        apiEndPoint = `${serverConstants.BASE_URL}/armtest_form`;
        break;
      case formConstants.TYPE_WMFT_FORM:
        apiEndPoint = `${serverConstants.BASE_URL}/wmft_form`;
        break;
      case formConstants.TYPE_MMT_FORM:
        apiEndPoint = `${serverConstants.BASE_URL}/mmt_form`;
      case formConstants.TYPE_MOCA_FORM:
        apiEndPoint = `${serverConstants.BASE_URL}/moca_form`;
        break;
      case formConstants.TYPE_GROUP_CREATE_FORM:
        apiEndPoint = `${serverConstants.BASE_URL}/groups`;
        break;
    }

    return fetch(apiEndPoint, requestOptions)
        .then(handleResponse)
        .then(response_data => {
            var success_response = '';
            if (response_data && response_data.message) {
              success_response = response_data.message;
            }
            return success_response;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
              userService.logout();
                window.location.reload(true);
            }

            const error = (data && data.errors && data.errors[0]) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}