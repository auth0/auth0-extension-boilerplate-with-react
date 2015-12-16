# Usage

1. `npm init`
2. `npm install express --save`
3. `npm install webtask-tools --save`
4. Create `index.js` with the minimal express extension:

  ```js
  var express = require('express');
  var Webtask = require('webtask-tools');

  var app = express();

  app.get('/', function (req, res) {
    res.status(200).send('Hello World');
  });

  if ((process.env.NODE_ENV || 'development') === 'development') {
    app.listen(3000);
  } else {
    module.exports = Webtask.fromExpress(app);
  }
  ```

## Authenticating the extension with Auth0

A useful extension would typically use the Auth0 API. We created a module that abstract away the OAuth2 consent flow with the Auth0 API.

1. `npm install auth0-oauth2-express --save`
2. Add the `auth0-oauth2-express` module and configure the scopes you want. This will ask the right consent to the user.

  ```js
  var auth0   = require('auth0-oauth2-express');

  app.use(auth0({
    scopes: 'read:connections'
  }));
  ```
