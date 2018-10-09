'use strict';
var ApplicationDispatcher   = require('../dispatcher/ApplicationDispatcher.js');
var NoticeConstants         = require('../constants/NoticeConstants.js');

var ActionTypes             = NoticeConstants.ActionTypes;

module.exports = {

  revokeNotice: function() {
    ApplicationDispatcher.handleViewAction({
      type    : ActionTypes.REVOKE_NOTICE
    });
  },

  invokeNotice: function(error, success, timeout) {
    ApplicationDispatcher.handleViewAction({
      type: ActionTypes.INVOKE_NOTICE,
      error   : error,
      success : success,
      timeout : timeout
    });
  }
};
