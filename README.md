# Travel0
Travel0 React Demo with Auth0.

To access the application in Heroku [click here](https://travel0davidweston.herokuapp.com/)


This sample demonstrates the integration of [Auth0 React SDK](https://github.com/auth0/auth0-react) into a React application created using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).
The sample is a companion to the [Auth0 React SDK Quickstart](https://auth0.com/docs/quickstart/spa/react).

This sample demonstrates the following use cases:

- Login / Signup using email / password and/or google as external IM
  - where signing up from Google users profile photo is added automatically
- Account linking where using the [Auth0 product extension](https://auth0.com/docs/extensions/account-link-extension)
- Users signing up with email who have not verified their email get an error on sign-in using the [Auth0 Force Email Verification rule](https://auth0.com/rules/email-verified)
- Adding the users country to their account using the [Auth0 add-country rule](https://auth0.com/rules/add-country)
- [Showing the user profile](https://github.com/davidwestonuk2000/Travel0/blob/main/src/views/Profile.js) complete with country flag image from [https://www.countryflags.io/](https://www.countryflags.io/)

## Project setup

Use `npm` to install the project dependencies:

```bash
npm install
```

## Run the sample

### Compile and hot-reload for development

This compiles and serves the React app and starts the backend API server on port 3001.

```bash
npm run dev
```

## Deployment

### Compiles and minifies for production

```bash
npm run build
```


## Author

[Auth0](https://auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for more info.
