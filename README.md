
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

### Adding a new section

To adding a new section you have to address the following steps:

1 Add the following lines to `layout.jade`
```jade
script(type='text/javascript', src='https://npmcdn.com/react-router/umd/ReactRouter.min.js')
script(type='text/javascript', src='https://npmcdn.com/history/umd/History.min.js')
```
2 Add a new entry on `./templates/layout.jade` by adding the new link to the menu.
```jade
ul
 li.active
    a(href='/#/section-2')
     i.icon.icon-budicon-519
     span Section 2
```
3 Add your `section-2` component to index.jade
```js
var Section2 = React.createClass({
  render: function() {
    return (
      <div className="col-xs-10.wrapper">
        <div className="row">
          <div className="col-xs-12.content-header">
            <h1 className="pull-left">My Extension - Section 2</h1>
          </div>
        </div>
      </div>
    );
  }
});
```
4 Configure the router

```js
var Router  = ReactRouter.Router;
var Route   = ReactRouter.Route;
var history = History.createHashHistory({queryKey: false});

ReactDOM.render((
  <Router history={history}>
    <Route path="/section-1" component={Section1}></Route>
    <Route path="/section-2" component={Section2}></Route>
    <Route path="*" component={Section1}/>
  </Router>
), document.getElementById('dashboard'))
```

5 Enjoy!

![](http://auth0.github.io/auth0-extension-boilerplate-with-react/assets/new-section.png)

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

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
