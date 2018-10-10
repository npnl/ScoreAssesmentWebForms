import _ from "lodash";

import request from "superagent";

import Config from "./config";
import { tokenPlugin, validateAccess, setAccessToken, removeAccessToken } from "./utils/apiUtils";

const resource = {
  del: url =>
    request.del(`${Config.HOST}${url}`),
  get: (url, query) =>
    request.get(`${Config.HOST}${url}`).query(query),
  put: (url, body) =>
    request.put(`${Config.HOST}${url}`, body),
  post: (url, body) =>
    request.post(`${Config.HOST}${url}`, body),
  patch: (url) =>
    request.patch(`${Config.HOST}${url}`),
};

const protectedResource = {
  del: url =>
    resource.del(url).use(tokenPlugin).use(validateAccess),
  get: (url, query) =>
    resource.get(url, query).use(tokenPlugin).use(validateAccess),
  put: (url, body) =>
    resource.put(url, body).use(tokenPlugin).use(validateAccess),
  post: (url, body) =>
    resource.post(url, body).use(tokenPlugin).use(validateAccess),
  patch: (url) =>
    resource.patch(url).use(tokenPlugin).use(validateAccess),
};

const Auth = {
  login: ({username, password}) => {
    return resource
                  .post(Config.AUTH_URL)
                  .field("username", username)
                  .field("password", password)
                  .field("grant_type", "password")
                  .use(setAccessToken);
  },
  logout: () => {
    return protectedResource
                  .del(Config.LOGOUT_URL)
                  .use(removeAccessToken);
  },
};

const Restaurant = {
  getRestaurants: ({brandId, serviceArea, page, size}) => {
    return protectedResource.get(Config.GET_RESTAURANTS.replace(":brand_id", brandId), {service_area: serviceArea, page, size});
  }
};

module.exports = {
  Auth
}
