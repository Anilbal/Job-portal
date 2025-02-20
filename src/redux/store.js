import rootReducers from "./reducers/rootReducers";
import { createStore } from "redux";

const store=createStore(
    rootReducers,
    composeWith
)