import _ from "lodash";
import { menu_groups as MenuGroupTypes } from "../actions/actionTypes";

const menuGroups = (state = {}, action) => {
  switch (action.type) {
    case MenuGroupTypes.RECEIVE_GROUP: 
      return _.assign({}, state, {menuGroup: action.payload.menuGroup});

    case MenuGroupTypes.RECEIVE_GROUPS: 
      return _.assign({}, state, {menuGroups: action.payload.menuGroups});

    case MenuGroupTypes.SET_MENU_GROUP_ID: 
      return _.assign({}, state, {menuGroupId: action.payload.menuGroupId});

    case MenuGroupTypes.RECEIVE_MENU_ITEMS:
      return _.assign({}, state, {menuItems: action.payload.menuItems});

    default:
      return state;
  }
};

export default  menuGroups;