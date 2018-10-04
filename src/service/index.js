import axios from "axios";

//const URL_BASE = "http://hobbyist.no"; //TODO need to set CORS before it can be used from local
const URL_BASE = "/api/v1/";
const URL_PROJECTS = "projects/";
const URL_DOWNVOTE = "upvote/";
const URL_UPVOTE = "downvote/";
const URL_CHECK_USER_LOGGED_IN = "auth/user/";
const URL_LOGIN_USER = "auth/login/";
const URL_USERS = "/users/";

const headers = { Authorization: `Token ${localStorage.getItem("token")}` };

const handleError = error => {
  console.error(error);
  // TODO fire error handling with error modal dialog component
};

//wrapper for get requests
const getRequest = ({ url, params = {} }) => {
  return new Promise(resolve => {
    axios({
      method: "get",
      baseURL: URL_BASE,
      url,
      params
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        throw new Error(`
        GET request failed with url: ${URL_BASE}${url} 
        and params: ${JSON.stringify(params)}, 
        original error: ${JSON.stringify(error)}
        `);
      });
  });
};

/* eslint-disable */
const getRequestAuthorized = ({ url, params = {} }) => {
  return new Promise(resolve => {
    axios({
      method: "get",
      baseURL: URL_BASE,
      url,
      params,
      headers
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        throw new Error(`
        GET request failed with url: ${URL_BASE}${url} 
        and params: ${JSON.stringify(params)}, 
        original error: ${JSON.stringify(error)}
        `);
      });
  });
};
/* eslint-enable */

//wrapper for post requests
const putRequest = ({ url }) => {
  const method = "put";
  return new Promise(resolve => {
    axios({
      method,
      baseURL: URL_BASE,
      url,
      headers
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        throw new Error(`
        ${method} request failed with url: ${url} 
        original error: ${JSON.stringify(error)}
         `);
      });
  });
};

export const getLoginUsers = () => {
  const url = URL_LOGIN_USER;
  return new Promise(resolve => {
    try {
      getRequest({ url }).then(response => {
        resolve(response);
      });
    } catch (error) {
      handleError(error);
    }
  });
};

export const getLoginUser = () => {
  const url = URL_CHECK_USER_LOGGED_IN;
  const params = { ...headers };
  return new Promise(resolve => {
    try {
      getRequest({ url, params }).then(response => {
        resolve(response);
      });
    } catch (error) {
      handleError(error);
    }
  });
};

export const getUser = ({ id }) => {
  const url = `${URL_USERS}${id}`;
  const params = { ...headers };
  return new Promise(resolve => {
    try {
      getRequest({ url, params }).then(response => {
        resolve(response);
      });
    } catch (error) {
      handleError(error);
    }
  });
};

export const getProjects = ({ id = "" }) => {
  const url = `${URL_PROJECTS}${id}/`;
  return new Promise(resolve => {
    try {
      getRequest({ url }).then(response => {
        resolve(response);
      });
    } catch (error) {
      handleError(error);
    }
  });
};

export const putProjectDownvote = ({id}) => {
  const url = `${URL_PROJECTS}${id}/${URL_DOWNVOTE}`;
  return new Promise(resolve => {
    try {
      putRequest({ url, headers }).then(response => {
        resolve(response);
      });
    } catch (error) {
      handleError(error);
    }
  });
}

export const putProjectUpvote = ({id}) => {
  const url = `${URL_PROJECTS}${id}/${URL_UPVOTE}`;
  return new Promise(resolve => {
    try {
      putRequest({ url, headers }).then(response => {
        resolve(response);
      });
    } catch (error) {
      handleError(error);
    }
  });
}
