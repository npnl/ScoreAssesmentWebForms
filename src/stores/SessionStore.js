var ApplicationDispatcher = require('../dispatcher/ApplicationDispatcher.js');
var ScoreConstants        = require('../constants/ScoreConstants.js');
var EventEmitter          = require('events').EventEmitter;
var assign                = require('object-assign');
var ActionTypes           = ScoreConstants.ActionTypes;
var UserActionTypes       = require('../constants/UserConstants.js').ActionTypes;
var CHANGE_EVENT          = 'change';
var accessToken           = sessionStorage.getItem('accessToken');
var email                 = sessionStorage.getItem('email');
var errors                = [];
var isLoggedIntoCAS       = Boolean(1);

var SessionStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  isLoggedIntoCAS: function() {
    return isLoggedIntoCAS;
  },

  isLoggedIn: function() {
    return accessToken ? true : false;
  },

  getAccessToken: function() {
    return accessToken;
  },

  getEmail: function() {
    return email;
  },

  getErrors: function() {
    return errors;
  }

});

SessionStore.dispatchToken = ApplicationDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.LOGIN_RESPONSE:
      if (action.json && action.json.session.access_token) {
        accessToken = action.json.session.access_token;
        sessionStorage.setItem('accessToken', accessToken);
      } else if (action.errors) {
        errors = action.errors;
      }
      SessionStore.emitChange();
      break;

    case ActionTypes.LOGOUT_RESPONSE:
      if (action.errors) {
        errors = action.errors;
      } else {
        accessToken = null;
        email       = null;
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('email');
      }
      SessionStore.emitChange();
      break;

    case UserActionTypes.AUTHORIZED:
      isLoggedIntoCAS = Boolean(1);
      SessionStore.emitChange();
      break;

    case UserActionTypes.UNAUTHORIZED:
      isLoggedIntoCAS = Boolean(0);
      SessionStore.emitChange();
      break;

    default:
  }

  return true;
});

module.exports = SessionStore;
