import _ from "lodash";
import uuid from "uuid";

import { common as CommonActionTypes } from "../actionTypes";

const errorNotice = (error) => {
  return {
    type: CommonActionTypes.notifications.ERROR_NOTICE,
    error: error,
    payload: {
      noticeId: uuid.v4()
    }
  }
};

const successNotice = (message) => {
  return {
    type: CommonActionTypes.notifications.SUCCESS_NOTICE,
    payload: {
      message: message,
      noticeId: uuid.v4()
    }
  }
};

const dismissNotice = (noticeId) => {
  return {
    type: CommonActionTypes.notifications.DISMISS_NOTICE,
    payload: {
      noticeId: noticeId
    }
  }
};

const createNotice = (message, isError, dismissIn) => {
  return (dispatch) => {
    const noticeAction = isError ? errorNotice : successNotice;
    const action = noticeAction(message);
    dispatch(action);

    if(dismissIn) {
      setTimeout(() => {
        dispatch(dismissNotice(_.get(action, ["payload", "noticeId"])));
      }, dismissIn);
    }
  }
};

export default  {
  errorNotice: errorNotice,
  successNotice: successNotice,
  dismissNotice: dismissNotice,
  createNotice: createNotice
};
