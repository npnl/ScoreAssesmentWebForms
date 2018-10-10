import _ from "lodash";
import { common as CommonActionTypes } from "../actions/actionTypes";

const setTotalPages = (state, payload) => {
  const paginatorId = _.get(payload, "paginatorId");
  const totalPages = _.get(payload, "totalPages");
  const updateMap = { [paginatorId]: { totalPages: totalPages }};
  return _.merge({}, state, { pagination: updateMap });
}

const switchPage = (state, payload) => {
  const paginatorId = _.get(payload, "paginatorId");
  const currentPage = _.get(payload, "currentPage");
  const updateMap = { [paginatorId]: { currentPage: currentPage }};
  return _.merge({}, state, { pagination: updateMap });
}

const common = (state = {}, {type, payload, error}) => {
  switch (type) {
    case CommonActionTypes.notifications.SUCCESS_NOTICE:
      const notifications = _.get(state, "notifications", []);
      return _.merge({}, state, { notifications: [...notifications, {message: payload.message, noticeId: payload.noticeId}]});

    case CommonActionTypes.notifications.ERROR_NOTICE:
      const errNotifications = _.get(state, "notifications", []);
      return _.merge({}, state, { notifications: [...errNotifications, {message: error, error: true, noticeId: payload.noticeId}]});

    case CommonActionTypes.notifications.DISMISS_NOTICE:
      const noticeId = payload.noticeId;
      const allNotifications = _.get(state, "notifications", []);
      return _.assign({}, state, { notifications: allNotifications.filter((item) => item.noticeId !== noticeId)});

    case CommonActionTypes.pagination.SWITCH_PAGE:
      return switchPage(state, payload)

    case CommonActionTypes.pagination.SET_TOTAL_PAGES:
      return setTotalPages(state, payload)

    case CommonActionTypes.modals.OPEN_MODAL:
      return _.merge({}, state, { modals: { modalId: payload.modalId } });

    case CommonActionTypes.modals.CLOSE_MODAL:
      return _.merge({}, state, { modals: null});

    case CommonActionTypes.spinner.LAUNCH:
      return _.merge({}, state, { showSpinner: true });

    case CommonActionTypes.spinner.CLOSE:
      return _.merge({}, state, { showSpinner: false });

    default:
      return state;
  };
};

export default  common;