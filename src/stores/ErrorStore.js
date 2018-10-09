var ApplicationDispatcher = require('../dispatcher/ApplicationDispatcher.js');
var EventEmitter          = require('events').EventEmitter;
var assign                = require('object-assign');
var CHANGE_EVENT          = 'change';
var errors                = [];

var ErrorStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getErrors: function() {
    return errors;
  },

  resetErrors: function() {
    errors = [];
    this.emitChange();
  },

  setError: function(error) {
    errors = errors.concat(error);
    this.emitChange()
  }

});

ErrorStore.dispatchToken = ApplicationDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    default:
      if (action.errors) {
        errors = errors.concat(action.errors);
        ErrorStore.emitChange();
      }
  }

  return true;
});

module.exports = ErrorStore;
