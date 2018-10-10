import { common as CommonActionTypes } from "../actionTypes";

const launchSpinner = () => {
  return {
    type: CommonActionTypes.spinner.LAUNCH,
  }
};

const closeSpinner = () => {
  return {
    type: CommonActionTypes.spinner.CLOSE,
  }
};

export default {
  launch:  launchSpinner,
  close: closeSpinner,
};