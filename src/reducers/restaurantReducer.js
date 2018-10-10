import _ from "lodash";
import { restaurants as RestaurantActionTypes } from "../actions/actionTypes";

const restaurants = (state = {}, action) => {
  switch (action.type) {
    case RestaurantActionTypes.RECEIVE_RESTAURANTS:
      return _.assign({}, state, {restaurants: action.payload.restaurants});

    case RestaurantActionTypes.SET_SERVICE_AREA:
      return _.assign({}, state, {serviceArea: action.payload.serviceArea});

    default:
      return state;
  }
};

export default  restaurants;