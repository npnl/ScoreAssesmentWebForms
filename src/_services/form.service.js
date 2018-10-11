import { authHeader } from '../_helpers';
import { serverConstants } from '../_constants'
import { userService } from './user.service'

export const formService = {
    sendFormDataToServer
};

function sendFormDataToServer(formData, formType) {
    console.log("Form data is here");
    console.log(formData);
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    };

    return fetch(`${serverConstants.BASE_URL}/nihss_form`, requestOptions)
        .then(handleResponse)
        .then(response_data => {
            var message = '';
            // login successful if there's a jwt token in the response
            if (response_data && response_data.message) {
                // store user session details and jwt token in local storage to keep user logged in between page refreshes
              message = response_data.message;
            }
            return message;
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