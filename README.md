
# Auth0 Extension - Boilerplate with React

![](http://auth0.github.io/auth0-extension-boilerplate-with-react/assets/boilerplate.png)

# Usage

1. Install project dependencies `npm install`
2. Install [Webpack](https://github.com/webpack/webpack) - `npm install webpack -g`
3. Then run `npm start` and navigate to [http://localhost:3000](http://localhost:3000)

## Client Side

By default there are two templates `layout.jade` and `index.jade` which will help you to start working with an extension.

#### layout.jade

The file contains the styles of an [Auth0](https://auth0.com/) extension and also you can add the link to the js/css libraries you want to use.

#### index.jade

This is the file which contains your code.

### Supporting sections

To support sections you have to address the following steps:

1. Add the following lines to `layout.jade`
```jade
script(type='text/javascript', src='https://npmcdn.com/react-router/umd/ReactRouter.min.js')
script(type='text/javascript', src='https://npmcdn.com/history/umd/History.min.js')
```
2. Replace `section.content-page.current` on `./templates/layout.jade` with the following code:
```jade
section.content-page.current
  .col-xs-12
    .row
      .col-xs-12.content-header
        ol.breadcrumb
          li
            a(href='http://manage.auth0.com/') Auth0 Dashboard
          li
            a(href='#') Extensions

    #sidebar.col-xs-2
      .sidebar-fixed
        ul
          li.active
            a(href='/#/section-1')
              i.icon.icon-budicon-519
              span Section 1

    #extension
      block content     
```
3. Replace the `Extension` component by `Section1` component on `./templates/index.jade`
```js
var Section1 = React.createClass({
  render: function() {
    return (
      <div className="content-wrapper">
        <div className="content-header">
          <h1>My Extension - Section 1</h1>
        </div>
      </div>
    );
  }
});
```
4. Remove the following lines from `./templates/index.jade`

```js
ReactDOM.render(
  <Extension />,
  document.getElementById('extension')
);
```

5. Add router configuration on `./templates/index.jade`

```js
var Router  = ReactRouter.Router;
var Route   = ReactRouter.Route;
var history = History.createHashHistory({queryKey: false});

ReactDOM.render((
  <Router history={history}>
    <Route path="/section-1" component={Section1}></Route>
    <Route path="*" component={Section1}/>
  </Router>
), document.getElementById('extension'));
```

5 Enjoy!

![](http://auth0.github.io/auth0-extension-boilerplate-with-react/assets/new-section.png)

## Running locally

To run the sample extension locally:

```bash
$ npm install
$ npm start
```

## Deploying to Webtask.io

If you want to host your extension, you can easily  do it by using [Webtask.io](https://webtask.io).

* Install [wt-cli](https://github.com/auth0/wt-cli) - `npm install -g wt-cli`
* Install [webpack](https://webpack.github.io/docs/) - `npm install -g webpack`
* Run `npm run deploy`

Note: For more information about how to setup Webtask, click [here](https://webtask.io/docs/101).


## Author

[Auth0](auth0.com)

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
