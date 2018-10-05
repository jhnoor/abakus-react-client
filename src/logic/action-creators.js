// exporterte actions
import { DOWN_VOTE, UP_VOTE } from "./action-types";
import { putProjectUpvote, putProjectDownvote } from "../service";

export const upVoteAction = id => {
  putProjectUpvote({ id }).then(() => console.log("success"));

  return {
    type: UP_VOTE
  };
};
export const downVoteAction = id => {
  putProjectDownvote({ id }).then(() => console.log("success"));

  return {
    type: DOWN_VOTE
  };
};
