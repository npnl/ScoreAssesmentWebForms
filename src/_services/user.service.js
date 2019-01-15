import { authHeader } from '../_helpers';
import { serverConstants } from '../_constants'

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    reset_password,
    request_password_update,
    delete: _delete
};

function reset_password(user, reset_token) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${serverConstants.BASE_URL}/reset_password/update_password/${reset_token}`, requestOptions).then(handleResponse);
}

function request_password_update(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${serverConstants.BASE_URL}/reset_password/request_token`, requestOptions).then(handleResponse);
}

function login(credentials) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    };

    return fetch(`${serverConstants.BASE_URL}/login`, requestOptions)
        .then(handleResponse)
        .then(response_data => {
            var token_and_user = {};
            // login successful if there's a jwt token in the response
            if (response_data && response_data.session && response_data.session.access_token) {
                // store user session details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('access_token', response_data.session.access_token);
                localStorage.setItem('current_user', JSON.stringify(response_data.user));
                token_and_user = {access_token: response_data.session.access_token, current_user: response_data.user}
            }
            return token_and_user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('access_token');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${serverConstants.BASE_URL}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${serverConstants.BASE_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${serverConstants.BASE_URL}/signup`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${serverConstants.BASE_URL}/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${serverConstants.BASE_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.errors && data.errors[0]) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}