var keyMirror                 = require('keymirror');
var ApplicationConstants      = require('./ApplicationConstants.js');
var APIRootPortal             = ApplicationConstants.APIRootPortal;
var APIRootWithVersion        = ApplicationConstants.APIRootWithVersion;

module.exports = {

  APIEndpoints: {
    LOGIN:                    APIRootWithVersion + "/login",
    LOGOUT:                   APIRootWithVersion + "/logout",
    LOAD_RESTAURANTS:         APIRootWithVersion + "/restaurants",
    LOAD_HIDDEN_RESTAURANTS:  APIRootWithVersion + "/deleted_restaurants",
    LOAD_INCOMPLETE_RESTAURANTS:  APIRootPortal + "/salesforce_restaurants",
    LOAD_INCOMPLETE_RESTAURANT:  APIRootPortal + "/salesforce_restaurants",
    LOAD_RESTAURANT:          APIRootWithVersion + "/restaurants",
    CREATE_RESTAURANT:        APIRootWithVersion + "/restaurants",
    REVERT_RESTAURANT:        APIRootWithVersion + "/restore_restaurants",
    HIDE_RESTAURANT:          APIRootWithVersion + "/restaurants",
    UPDATE_RESTAURANT:        APIRootWithVersion + "/restaurants",
    UPLOAD_IMAGE:             APIRootWithVersion + "/restaurants",
    OPERATIONAL_HOURS:        APIRootPortal + "/restaurants",
    RESET_RESTAURANT_IMAGE_TO_BRAND:      APIRootWithVersion + "/restaurants",
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION:   null
  }),

  ActionTypes: keyMirror({
    LOGIN_REQUEST:                        null,
    LOGIN_RESPONSE:                       null,
    LOGOUT_REQUEST:                       null,
    LOGOUT_RESPONSE:                      null,
    ERROR_RESPONSE:                       null,

    REDIRECT:                             null,

    LOAD_RESTAURANTS:                     null,
    RECEIVE_RESTAURANTS:                  null,
    CREATE_RESTAURANT:                    null,
    RECEIVE_CREATED_RESTAURANT:           null,
    UPDATE_RESTAURANT:                    null,
    RECEIVE_UPDATED_RESTAURANT:           null,
    LOAD_RESTAURANT:                      null,
    RECEIVE_RESTAURANT:                   null,
    LOAD_HIDDEN_RESTAURANTS:              null,
    RECEIVE_HIDDEN_RESTAURANTS:           null,
    LOAD_INCOMPLETE_RESTAURANTS:          null,
    RECEIVE_INCOMPLETE_RESTAURANTS:       null,
    LOAD_INCOMPLETE_RESTAURANT:           null,
    RECEIVE_INCOMPLETE_RESTAURANT:        null,
    HIDE_RESTAURANT:                      null,
    HIDE_RESTAURANT_RESPONSE:             null,
    REVERT_RESTAURANT:                    null,
    RESET_RESTAURANT:                     null,
    RESET_RESTAURANTS:                    null,
    RESET_INCOMPLETE_RESTAURANTS:         null,
    REVERT_RESTAURANT_RESPONSE:           null,
    UPDATE_LOCATION:                      null,
    UPLOAD_IMAGE:                         null,
    RECEIVE_IMAGE_AND_UPDATE_RESTAURANT:  null,
    SKIP_IMAGE_UPLOAD:                    null,
    MOVE_TO_IMAGE_UPLOAD:                 null,
    FINISH_CREATE:                        null,
    FILTER_RESTAURANT_FOR_DUPLICATION:    null,
    RESET_RESTAURANT_IMAGE_TO_BRAND_IMAGE: null,
  })

};
