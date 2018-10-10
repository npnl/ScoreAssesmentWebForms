import SpinnerActions from "../actions/common/spinnerActions";
import NotificationActions from "../actions/common/notificationActions";

var spinnerLaunchedCountDown = 0;
const closeSpinner = next => {
  if(spinnerLaunchedCountDown-- == 1) {
    next(SpinnerActions.close());
  }
};

const SpinnerMiddleware = store => next => action => {
  if (typeof action !== 'function') {
    return next(action);
  }

  var result = next(action);
  if(result != undefined && typeof result.then === 'function') {
    spinnerLaunchedCountDown++;
    next(SpinnerActions.launch());
    result
      .then(() => closeSpinner(next))
      .catch(err => {
        closeSpinner(next);
        next(NotificationActions.errorNotice(err));
      });
  }
  
  return result;
};

export default  SpinnerMiddleware;