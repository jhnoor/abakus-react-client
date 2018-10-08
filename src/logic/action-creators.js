// exporterte actions
import {
  UP_VOTE,
  GET_PROJECTS_BEGIN,
  GET_PROJECTS_FAILURE,
  GET_PROJECTS_SUCCESS
} from "./action-types";
import { putProjectUpvote, getProjects } from "../service";

export const upvoteAction = id => {
  putProjectUpvote({ id }).then(() => console.log("API upvote successful"));

  return {
    type: UP_VOTE,
    id: id
  };
};
export const downvoteAction = id => {
  console.log("bupkis");
};

export function getProjectsAction() {
  return dispatch => {
    dispatch(getProjectsBeginAction());
    return getProjects({})
      .then(response => response.data)
      .then(projects => {
        dispatch(getProjectsSuccessAction(projects));
        return projects;
      })
      .catch(error => dispatch(getProjectsFailureAction(error)));
  };
}

export const getProjectsBeginAction = () => ({
  type: GET_PROJECTS_BEGIN
});

export const getProjectsSuccessAction = projects => ({
  type: GET_PROJECTS_SUCCESS,
  payload: { projects }
});

export const getProjectsFailureAction = error => ({
  type: GET_PROJECTS_FAILURE,
  payload: { error }
});
