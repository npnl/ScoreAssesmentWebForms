'use strict';
var ApplicationDispatcher   = require('../dispatcher/ApplicationDispatcher.js');
var WebAPIUtils             = require('../utils/WebAPIUtils.js');

module.exports = {

  login: function(username, password) {
    WebAPIUtils.login(username, password);
  },

  logout: function() {
    WebAPIUtils.logout();
  }

};

