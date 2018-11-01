import { userConstants } from '../_constants';
import { userService } from '../_services';
import { flashMessagesActions } from './';
import { history } from '../_helpers';
import { serverConstants } from '../_constants'

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(credentials) {
    return dispatch => {
        dispatch(request(credentials['session']['email']));

        userService.login(credentials)
            .then(
              token_and_user => {
                    dispatch(success(token_and_user));
                    history.push('/Home');
                    // history.push(`/${serverConstants.UI_RELATIVE_PATH}/Home`);
                    // window.location.reload();
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(flashMessagesActions.error(error.toString()));
                }
            );
    };

    function request(email) { return { type: userConstants.LOGIN_REQUEST, email } }
    function success(token_and_user) { return { type: userConstants.LOGIN_SUCCESS, token_and_user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    // history.push(`/${serverConstants.UI_RELATIVE_PATH}/login`);
                    // window.location.reload();
                    dispatch(flashMessagesActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(flashMessagesActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}