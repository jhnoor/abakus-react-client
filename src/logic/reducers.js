import { UP_VOTE, DOWN_VOTE } from "./action-types";

// Reducer
// en funksjon som tar state (defaulter til 0) og en action
// basert på action.type, øker eller reduserer state-variablene count med 1

export const voter = (state = { upvoted: false, downvoted: false }, action) => {
  switch (action.type) {
    case UP_VOTE:
      return {
        upvoted: true,
        downvoted: false
      };

    case DOWN_VOTE:
      return {
        upvoted: false,
        downvoted: true
      };
    default:
      return state;
  }
};
