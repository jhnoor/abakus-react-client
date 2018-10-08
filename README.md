# 💻 The React application

## Requirements
* [Node v10](https://nodejs.org/en/download/)
* [Chrome Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## Setup

`npm install`

If you're running against the public api `hobbyist.no`

`npm start`

## API

URL | METHOD | EXPLANATION | Authentication
--- | --- | --- | ---
http://hobbyist.no/api/v1/projects/                 | GET   | Lists all the projects | ✅ Allow any
http://hobbyist.no/api/v1/projects/:id/             | GET   | Returns data for a single project by id | ✅ Allow any
http://hobbyist.no/api/v1/projects/:id/comment/     | POST  | Post a comment. Expected data: `{"text": "Here is my comment"}` | ⚠️ Post as anon
http://hobbyist.no/api/v1/projects/:id/upvote/      | PUT   | Upvote a project, increments the karma by one | ✅ Allow any
http://hobbyist.no/api/v1/projects/:id/downvote/    | PUT   | Downvote a project, decrements karma by one | ✅ Allow any
http://hobbyist.no/api/v1/auth/register/            | POST  | Register a user. Expected data: `{"username": "Tony_stark","password": "J4RV1S"}` | ✅ Allow any
http://hobbyist.no/api/v1/auth/login/               | POST  | Login a user. Expected data: `{"username": "Tony_stark","password": "J4RV1S"}` | ⛔️ Must be logged in
http://hobbyist.no/api/v1/auth/user/                | GET   | Get currently logged in user | ⛔️ Must be logged in





