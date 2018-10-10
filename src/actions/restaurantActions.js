import _ from "lodash";

import { getErrorMsg } from "../util";
import { Restaurant } from "../api";
import { restaurants as RestaurantActionTypes } from "./actionTypes";
import notificationActions from "./common/notificationActions";
import paginationActions from "./common/paginationActions";

import { DEFAULT_PAGE_SIZE } from "../config";

const setServiceArea = (serviceArea) => ({
  type: RestaurantActionTypes.SET_SERVICE_AREA,
  payload: {
    serviceArea: serviceArea
  }
});

const receiveRestaurants = ({restaurants}) => {
  return {
    type: RestaurantActionTypes.RECEIVE_RESTAURANTS,
    payload: {
      restaurants: restaurants
    }
  };
};

const fetchRestaurants = ({brandId, serviceArea, pageNo, paginatorId}) => {
  return (dispatch) => {
    return Restaurant.getRestaurants({
      brandId,
      serviceArea,
      page: pageNo,
      size: DEFAULT_PAGE_SIZE
    }).then((response) => {
      const responseBody = response.body;
      dispatch(receiveRestaurants(responseBody));
      if (paginatorId){
        dispatch(paginationActions.setTotalPages(paginatorId, _.get(responseBody, "total_pages")));
      }
    }).catch((error) => {
      const errMsg = getErrorMsg(error);
      dispatch(notificationActions.createNotice(errMsg, true));
    });
  };
};

const changeServiceArea = ({brandId, serviceArea, paginatorId}) => {
  return (dispatch) => {
    dispatch(paginationActions.switchPage(paginatorId, 1));
    dispatch(setServiceArea(serviceArea));
    return dispatch(fetchRestaurants({ brandId, serviceArea, paginatorId }));
  };
};

export default  {
  receiveRestaurants,
  fetchRestaurants,
  setServiceArea,
  changeServiceArea
};