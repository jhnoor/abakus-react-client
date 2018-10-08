import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

let devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production") {
  devTools = a => a;
}

// Exportert funksjon som oppretter store, legg merke til at vi i tilleg bruker
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
// dette vil vi ikke gjøre i produksjon, så det bør være logikk som ikke tar med denne med mindre
// man kjører i dev.
const enhancer = compose(
  applyMiddleware(thunk),
  devTools
);

export const store = createStore(reducers, enhancer);
