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


## Oppgaver

1. Det finnes kommentarer på prosjektene, og vi ønsker å vise dette på hvert enkelt prosjekt
Lag nødvendige komponenter for å vise kommentarer på et prosjekt.
Tips: se på organiseringen av project-list og props på project
2. Redux er allerede lagt til i applikasjonen og delvis implementert på up-/downvote, knappen som trigger downvote fungerer bare med lokal tilstandshåndtering i komponenten.
Enable down-vote via Redux på prosjekt.
Tips: se på upvotes!
3. Vi ønsker også å bygge ut funksjonalitet i applikasjonen som gir en notification når en upvote eller downvote blir gitt. Foreløpig trenger du bare å logge til konsollen, men i en funksjon som senere kan bruker for å lage notifications.
Lag funksjonalitet som, basert på en positiv eller negativ stemme, logger dette til konsollet.
4. Om det blir tid til overs vil vi gjerne ha et kommentarfelt på prosjektene. Det er laget et endepunkt hvor du kan lagre kommentarer til: http://hobbyist.no/api/v1/projects/:id/comment/
Lag en react-komponent, med et input/textarea som muliggjør å skrive en kommentar på prosjektet, og poste det til API-et.


