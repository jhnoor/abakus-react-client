import axios from "axios";

//const URL_BASE = "http://hobbyist.no"; //TODO need to set CORS before it can be used from local
const URL_BASE = "";
const URL_PROJECTS = "/api/v1/projects/";
const URL_VOTE = "/vote/";
const URL_LOGIN_USER = "/api/v1/login/user/";
const URL_LOGIN_USERS = "/api/v1/login/users/";
const URL_USERS = "/api/v1/users/";

const headers = { Authorization: `Token ${localStorage.getItem("token")}` };

const handleError = (error) => {
  console.error(error);
  // TODO fire error handling with error modal dialog component
};

//wrapper for get requests
const getRequest = ({ url, params = {} }) => {
  return new Promise((resolve) => {
    axios({
      method: "get",
      baseURL: URL_BASE,
      url,
      params
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        throw new Error(`
        GET request failed with url: ${URL_BASE}${url} 
        and params: ${JSON.stringify(params)}, 
        original error: ${JSON.stringify(error)}
        `);
      });
  });
};

const getRequestAuthorized = ({ url, params = {} }) => {
  return new Promise((resolve) => {
    axios({
      method: "get",
      baseURL: URL_BASE,
      url,
      params,
      headers
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        throw new Error(`
        GET request failed with url: ${URL_BASE}${url} 
        and params: ${JSON.stringify(params)}, 
        original error: ${JSON.stringify(error)}
        `);
      });
  });
};

//wrapper for post requests
const postRequest = ({ url, data = {} }) => {
  return new Promise((resolve) => {
    axios({
      method: "post",
      baseURL: URL_BASE,
      url,
      data,
      headers
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        throw new Error(`
        POST request failed with url: ${url} 
        and data: ${JSON.stringify(data)},
        original error: ${JSON.stringify(error)}
         `);
      });
  });
};

export const getLoginUsers = () => {
  const url = URL_LOGIN_USERS;
  return new Promise((resolve) => {
    try {
      getRequest({ url }).then(response => {
        resolve(response);
      });
    }
    catch (error) {
      handleError(error);
    }
  });
};

export const getLoginUser = () => {
  const url = URL_LOGIN_USER;
  const params = { ...headers };
  return new Promise((resolve) => {
    try {
      getRequest({ url, params }).then(response => {
        resolve(response);
      });
    }
    catch (error) {
      handleError(error);
    }
  });
};

export const getUser = ({ id }) => {
  const url = `${URL_USERS}${id}`;
  const params = { ...headers };
  return new Promise((resolve) => {
    try {
      getRequest({ url, params }).then(response => {
        resolve(response);
      });
    }
    catch (error) {
      handleError(error);
    }
  });
};


export const getProjects = ({ id = "" }) => {
  const url = `${URL_PROJECTS}${id}`;
  return new Promise((resolve) => {
    try {
      getRequest({ url }).then(response => {
        resolve(response);
      });
    }
    catch (error) {
      handleError(error);
    }
  });
};

export const postNewProject = ({ data }) => {
  const url = URL_PROJECTS;
  return new Promise((resolve) => {
    try {
      postRequest({ url, data, headers }).then(response => {
        resolve(response);
      });
    }
    catch (error) {
      handleError(error);
    }
  });
};

export const postProjectVote = ({ id, data }) => {
  const url = `${URL_PROJECTS}${id}${URL_VOTE}`;
  return new Promise((resolve) => {
    try {
      postRequest({ url, data, headers }).then(response => {
        resolve(response);
      });
    }
    catch (error) {
      handleError(error);
    }
  });
};


