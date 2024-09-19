This repository contains an AngularJS front-end application example using Auth0 user authorization.

## Prerequisites

* [**node.js**](https://nodejs.org/).
* [**npm**](https://www.npmjs.com/).
* [**AngularJS**](https://angularjs.org/).
* **An [Auth0](https://auth0.com/) account.**

## Running the application

1. Sign up for an Auth0 account.

2. Clone the repository.

3. Configure Auth0 application settings; set Allowed Callback+Logout URLs & Web Origins to the application domain (e.g. http://localhost:8080/ is the default).

4. In app.js lines 4 & 5, set the domain and client ID to your application if necessary.

5. Run the application (e.g. "npx http-server" in the Windows terminal; Ctrl+C to stop).