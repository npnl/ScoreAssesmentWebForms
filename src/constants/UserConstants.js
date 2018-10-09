var keyMirror             = require('keymirror');
var ApplicationConstants  = require('./ApplicationConstants.js');
var APIRoot               = ApplicationConstants.APIRootPortal;

module.exports = {

  ActionTypes: keyMirror({
    UNAUTHORIZED: null,
    AUTHORIZED:   null
  }),

  APIEndpoints: {
    SIGN_IN:        APIRoot + '/users/sign_in',
    SIGN_OUT:       APIRoot + '/users/sign_out',
  },

};
