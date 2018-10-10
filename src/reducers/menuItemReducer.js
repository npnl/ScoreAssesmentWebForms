import _ from "lodash";
import { master_menu_items as MasterMenuItemActionTypes } from "../actions/actionTypes";

const menuItems = (state = {}, action) => {
  switch (action.type) {
    case MasterMenuItemActionTypes.RECEIVE_ACTIVE_MENU_ITEMS:
      const currentToggleState = _.get(state, "showInactiveMenuItems", true);
      return _.assign({}, state, { activeMasterMenuItems: action.payload.masterMenuItems, showInactiveMenuItems: currentToggleState });

    case MasterMenuItemActionTypes.RECEIVE_INACTIVE_MENU_ITEMS:
      return _.assign({}, state, { inactiveMasterMenuItems: action.payload.masterMenuItems, showInactiveMenuItems: true });

    case MasterMenuItemActionTypes.RECEIVE_ALL_MENU_ITEMS:
      return _.assign({}, state, { menuItems: action.payload.menuItems });

    case MasterMenuItemActionTypes.TOGGLE_SHOW_INACTIVE_MENU_ITEMS: 
      return _.assign({}, state, {showInactiveMenuItems: !_.get(state, "showInactiveMenuItems", false)});

    case MasterMenuItemActionTypes.SET_MENU_ITEM_ID:
      return _.merge({}, state, { menuItemId: action.payload.menuItemId })

    default:
      return state;
  }
};

export default  menuItems;