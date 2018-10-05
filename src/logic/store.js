import { createStore } from "redux";
import { voter } from "./reducers";
import { upVoteAction, downVoteAction } from "./action-creators";

// Exportert funksjon som oppretter store, legg merke til at vi i tilleg bruker
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
// dette vil vi ikke gjøre i produksjon, så det bør være logikk som ikke tar med denne med mindre
// man kjører i dev.
export const store = createStore(
  voter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // denne brukes kun i utvikling!
);

// TODO fjern det nedover

// Map Redux-tilstand (state) til komponentets props
// en funksjon som tar state, og returnerer et objekt med property
// value, og i dette tilfellet telleren fra state.
// På denne måten sendes tilstanden nedover i komponent-treet
export const mapStateToProps = state => {
  return {
    votes: state.votes
  };
};

// Map Redux-actions til Komponentets props
// På denne måten får vi distribuert actions nedover i komponent-treet
export const mapDispatchToProps = dispatch => {
  return {
    onUpVoteClick: () => dispatch(upVoteAction()),
    onDownVoteClick: () => dispatch(downVoteAction())
  };
};
