var ApplicationDispatcher        = require('../dispatcher/ApplicationDispatcher.js');
var ScoreConstants               = require('../constants/ScoreConstants.js');
var UserConstants                = require('../constants/UserConstants.js');
var ActionTypes                  = ScoreConstants.ActionTypes;
var UserActionTypes              = UserConstants.ActionTypes;

module.exports = {
  
  receiveAuthorizedResponse: function() {
    ApplicationDispatcher.handleServerAction({
      type: UserActionTypes.AUTHORIZED
    });
  },

  receiveUnauthorizedResponse: function() {
    ApplicationDispatcher.handleServerAction({
      type: UserActionTypes.UNAUTHORIZED
    });
  },

  receiveLoginResponse: function(json, errors) {
    ApplicationDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

  receiveLogoutResponse: function(json, errors) {
    ApplicationDispatcher.handleServerAction({
      type: ActionTypes.LOGOUT_RESPONSE,
      json: json,
      errors: errors
    });
  },

  receiveRestaurants: function(json, errors) {
    ApplicationDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_RESTAURANTS,
      json: json,
      errors: errors
    });
  },

  receiveCreatedRestaurant: function(json, errors) {
    ApplicationDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_RESTAURANT,
      json: json,
      errors: errors
    });
  },

  receiveUpdatedRestaurant: function(json, errors) {
    ApplicationDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_UPDATED_RESTAURANT,
      json: json,
      errors: errors
    });
  },

  receiveRestaurant: function(json, errors) {
    ApplicationDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_RESTAURANT,
      json: json,
      errors: errors
    });
  },
};
