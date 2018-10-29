import { flashMessagesConstants } from '../_constants';

export const flashMessagesActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: flashMessagesConstants.SUCCESS, message };
}

function error(message) {
    return { type: flashMessagesConstants.ERROR, message };
}

function clear() {
    return { type: flashMessagesConstants.CLEAR };
}