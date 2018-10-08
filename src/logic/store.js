import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// Exportert funksjon som oppretter store

let enhancement;
if (process.env.NODE_ENV === "production") {
  enhancement = compose(applyMiddleware(thunk));
} else {
  enhancement = composeWithDevTools(applyMiddleware(thunk));
}

export const store = createStore(reducers, enhancement);
