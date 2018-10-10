import _ from "lodash";
import { master_menus as MasterMenuActionTypes } from "../actions/actionTypes";

const categories = (state = {}, action) => {
  switch (action.type) {
    case MasterMenuActionTypes.RECEIVE_CATEGORIES: 
      return _.assign({}, state, {categories: action.payload.categories, showInactiveCategories: true});

    case MasterMenuActionTypes.TOGGLE_SHOW_INACTIVE_CATEGORIES: 
      const currentState = _.get(state, "showInactiveCategories", false);
      return _.assign({}, state, {showInactiveCategories: !currentState});
    
    case MasterMenuActionTypes.SET_CATEGORY_ID: 
      return _.merge({}, state, { categoryId: action.payload.categoryId })

    default:
      return state;
  }
};

export default  categories;