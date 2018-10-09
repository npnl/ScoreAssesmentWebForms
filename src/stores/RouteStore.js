var ApplicationDispatcher = require('../dispatcher/ApplicationDispatcher.js');
var ScoreConstants        = require('../constants/ScoreConstants.js');
var SessionStore          = require('../stores/SessionStore.js');
var EventEmitter          = require('events').EventEmitter;
var ActionTypes           = ScoreConstants.ActionTypes;
var UserActionTypes       = require('../constants/UserConstants.js').ActionTypes;
var assign                = require('object-assign');
var Router                = require('react-router');
var routes                = require('../routes.js');
var CHANGE_EVENT          = 'change';

var router = Router.create({
  routes:   routes,
  location: null
});

var RouteStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getRouter: function() {
    return router;
  },

  redirectHome: function() {
    router.transitionTo('app');
  }
});

RouteStore.dispatchToken = ApplicationDispatcher.register(function(payload) {
  ApplicationDispatcher.waitFor([
    SessionStore.dispatchToken,
  ]);

  var action = payload.action;

  switch(action.type) {
    case ActionTypes.REDIRECT:
      router.transitionTo(action.route, action.params);
      break;

    case ActionTypes.LOGIN_RESPONSE:
      if (SessionStore.isLoggedIn()) {
        router.transitionTo('home');
      }
      break;

    case ActionTypes.LOGOUT_RESPONSE:
      if (!action.errors) {
        router.transitionTo('landingPage');
      }
      break;

    case UserActionTypes.UNAUTHORIZED:
      router.transitionTo('landingPage');
      break;

  }

  return true;
});

module.exports = RouteStore;
