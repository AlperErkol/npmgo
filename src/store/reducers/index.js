import { combineReducers } from "redux";
import reducer from "./repositoriesReducers";
import packageReducer from "./packagesReducers";
import packageDetailReducer from "./packageDetailsReducers";

const reducers = combineReducers({

    repositories : reducer,
    packages : packageReducer,
    details : packageDetailReducer,

});

export default reducers;