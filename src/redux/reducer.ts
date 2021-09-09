import { combineReducers } from "redux";
import { actionReducer } from "use-redux-effect";

export default combineReducers({
  action: actionReducer,
});
