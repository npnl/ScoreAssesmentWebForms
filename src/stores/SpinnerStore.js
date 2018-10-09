var ApplicationDispatcher = require('../dispatcher/ApplicationDispatcher.js');
var EventEmitter          = require('events').EventEmitter;
var assign                = require('object-assign');
var ActionTypes           = require('../constants/SpinnerConstants.js').ActionTypes;
var CHANGE_EVENT          = 'change';
var spinnerState          = false;

var SpinnerStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getSpinnerState: function() {
    return spinnerState;
  },

});

SpinnerStore.dispatchToken = ApplicationDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case ActionTypes.REVOKE_SPINNER:
      spinnerState = false;
      SpinnerStore.emitChange();
      break;
    case ActionTypes.INVOKE_SPINNER:
      spinnerState = true;
      SpinnerStore.emitChange();
      break;
  }

  return true;
});

module.exports = SpinnerStore;
