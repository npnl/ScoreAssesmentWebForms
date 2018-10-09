var ScoreConstants            = require('../constants/ScoreConstants.js');
var NoticeMessages                 = require('../constants/NoticeConstants.js');
var UserConstants                  = require('../constants/UserConstants.js');
var ServerActionCreators           = require('../actions/ServerActionCreators.js');
var SpinnerActionCreators          = require('../actions/SpinnerActionCreators.js');
var NoticeActionCreators           = require('../actions/NoticeActionCreators.js');
var request                        = require('superagent');
var APIEndpoints                   = ScoreConstants.APIEndpoints;

function wrapCallbackWithErrorHandling (callback) {
  return function(error, res){
    if (res) {
      if (res.error) {
        var json          = JSON.parse(res.text);
        var errorMsgs = json.errors;
        NoticeActionCreators.invokeNotice( errorMsgs, null, 5000 );
      } else {
        var json = {status: res.statusText};
        callback(json, null);
      }
    }
  };
};

module.exports = {

  login: function(email, password) {
    request
    .post(APIEndpoints.LOGIN)
    .send({
      session: {
        email:    email,
        password:    password
      }
  })
    .set('Accept', 'application/json')
    .end(function(error, res){
      if (res) {
        if (res.error) {
          var json          = JSON.parse(res.text);
          var errorMsgs = json.errors;
          ServerActionCreators.receiveLoginResponse(null, errorMsgs);
        } else {
          var json = JSON.parse(res.text);
          ServerActionCreators.receiveLoginResponse(json, null);
        }
      }
    });
  },

  logout: function(sessionId) {
    request
    .del(APIEndpoints.LOGOUT + '/' + sessionId)
    .set('Accept', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .end(function(error, res){
      if (res) {
        if (res.error) {
          var json          = JSON.parse(res.text);
          var errorMsgs = json.errors;
          ServerActionCreators.receiveLogoutResponse(null, errorMsgs);
        } else {
          ServerActionCreators.receiveLogoutResponse(null, null);
        }
      }
    });
  },

  loadRestaurants: function(searchString, pageNumber) {
    request
    .get(APIEndpoints.LOAD_RESTAURANTS)
    .query({ search_string: searchString, page: pageNumber })
    .set('Accept', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .withCredentials()
    .end(function(error, res){
      if (res.statusCode === 401) {
        ServerActionCreators.receiveUnauthorizedResponse();
      } else if (res.statusCode >=200 && res.statusCode < 300) {
        ServerActionCreators.receiveAuthorizedResponse();
      }
      if (res) {
        SpinnerActionCreators.revokeSpinner();
        if (res.error) {
          var json          = JSON.parse(res.text);
          var errorMsgs = json.errors;
          ServerActionCreators.receiveRestaurants(null, errorMsgs);
        }
        else {
          var json = JSON.parse(res.text);
          ServerActionCreators.receiveRestaurants(json, null);
        }
      }
    });
  },

  createRestaurant: function(restaurant) {
    request
    .post(APIEndpoints.CREATE_RESTAURANT)
    .send({
      restaurant: restaurant
    })
    .set('Accept', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .withCredentials()
    .end(function(error, res){
      if (res.statusCode === 401) {
        ServerActionCreators.receiveUnauthorizedResponse();
      } else if (res.statusCode >=200 && res.statusCode < 300) {
        ServerActionCreators.receiveAuthorizedResponse();
      }
      if (res) {
        SpinnerActionCreators.revokeSpinner();
        if (res.error) {
          var json          = JSON.parse(res.text);
          var errorMsgs = json.errors;
          ServerActionCreators.receiveCreatedRestaurant(null, errorMsgs);
          NoticeActionCreators.invokeNotice( errorMsgs, null, 2000);
        } else {
          var json = JSON.parse(res.text);
          ServerActionCreators.receiveCreatedRestaurant(json, null);
          NoticeActionCreators.invokeNotice( errorMsgs, NoticeMessages.SUCCESS_CREATE, 2000 );
        }
      }
    });
  },


  loadRestaurant: function(restaurantId, fetchMenuGroups) {
    request
      .get(APIEndpoints.LOAD_RESTAURANT + '/' + restaurantId)
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .withCredentials()
      .end(function(error, res){
        if (res.statusCode === 401) {
          ServerActionCreators.receiveUnauthorizedResponse();
        } else if (res.statusCode >=200 && res.statusCode < 300) {
          ServerActionCreators.receiveAuthorizedResponse();
        }
        if (res) {
          if (res.error) {
            var json          = JSON.parse(res.text);
            var errorMsgs = json.errors;
            ServerActionCreators.receiveRestaurant(null, errorMsgs);
          } else {
            var json = JSON.parse(res.text);
            ServerActionCreators.receiveRestaurant(json, null);
            if(fetchMenuGroups && json.restaurant.brand_is_migrated) {
            }
          }
        }
      });
  },

  updateRestaurant: function(restaurant) {
    request
    .put(APIEndpoints.UPDATE_RESTAURANT + '/' + restaurant.id)
    .send({
      restaurant: restaurant
    })
    .set('Accept', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .withCredentials()
    .end(function(error, res){
      if (res.statusCode === 401) {
        ServerActionCreators.receiveUnauthorizedResponse();
      } else if (res.statusCode >=200 && res.statusCode < 300) {
        ServerActionCreators.receiveAuthorizedResponse();
      }
      if (res) {
        SpinnerActionCreators.revokeSpinner();
        if (res.error) {
          var json          = JSON.parse(res.text);
          var errorMsgs = json.errors;
          ServerActionCreators.receiveUpdatedRestaurant(null, errorMsgs);
          NoticeActionCreators.invokeNotice( errorMsgs, null, 2000);
        } else {
          var json = JSON.parse(res.text);
          ServerActionCreators.receiveUpdatedRestaurant(json, null);
          NoticeActionCreators.invokeNotice( errorMsgs, NoticeMessages.SUCCESS_UPDATE, 2000);
        }
      }
    });
  },
};
