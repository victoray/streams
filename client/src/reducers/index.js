import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import {reducer} from "redux-form";
import {StreamReducer} from "./StreamReducer";

export default combineReducers({
    auth: AuthReducer,
    form: reducer,
    streams: StreamReducer
});
