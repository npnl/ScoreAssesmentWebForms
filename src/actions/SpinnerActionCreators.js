'use strict';
var ApplicationDispatcher   = require('../dispatcher/ApplicationDispatcher.js');
var SpinnerConstants        = require('../constants/SpinnerConstants.js');

var ActionTypes             = SpinnerConstants.ActionTypes;

module.exports = {

  revokeSpinner: function() {
    ApplicationDispatcher.handleViewAction({
      type  : ActionTypes.REVOKE_SPINNER
    });
  },

  invokeSpinner: function() {
    ApplicationDispatcher.handleViewAction({
      type: ActionTypes.INVOKE_SPINNER
    });
  },

};
