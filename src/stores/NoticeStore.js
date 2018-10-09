var ApplicationDispatcher = require('../dispatcher/ApplicationDispatcher.js');
var EventEmitter          = require('events').EventEmitter;
var assign                = require('object-assign');
var ActionTypes           = require('../constants/NoticeConstants.js').ActionTypes;
var NoticeActionCreators  = require('../actions/NoticeActionCreators.js');
var CHANGE_EVENT          = 'change';
var noticeState           = false;
var noticeMessage         = '';
var error                 = false;

var NoticeStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getNoticeState: function() {
    return noticeState;
  },

  getNoticeMessage: function() {
    return noticeMessage;
  },

  getError: function() {
    return error;
  },

});

NoticeStore.dispatchToken = ApplicationDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.REVOKE_NOTICE:
      noticeState   = false;
      noticeMessage = null;
      error         = false;
      NoticeStore.emitChange();
      break;

    case ActionTypes.INVOKE_NOTICE:
      noticeState = true;
      if( action.error ){
        error         = true;
        noticeMessage = action.error;
      } else {
        noticeMessage = action.success;
      }

      var timeout = action.timeout;
      NoticeStore.emitChange();
       setTimeout(function() {
         NoticeActionCreators.revokeNotice();
      }, timeout);
      break;
  }

  return true;
});

module.exports = NoticeStore;
