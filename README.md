# Example of Automated Testing using BDD in JS

This example project is part of a talk I gave at Winnipeg.js on Sep 12, 2018.

It shows a simple login and logout functionality and integration tests using Cypress.io as well as a basic test using Jest.

Slides can be found here: https://www.slideshare.net/MichaelYagudaev/automated-testing-in-javascript

## Running Cypress Tests -- E2E Integration

```bash
cd client
yarn install
yarn start

# in another shell
cd client
yarn run e2e:dev # starts cypress in normal mode
yarn run e2e # starts cypress in headless mode
```

Take a look at `client/package.json` to see how we use cypress.

## Running Jest Tests -- Client-side Unit Tests

```bash
cd client
yarn install
yarn test
```

## Implementation

Used a simple CRA -- Create React App -- project, and added Material UI. The project is divided to `client` and `server` in a mono repo. Originally I intended to show both e2e, client-side unit and server-side unit. But need to make it shorter to fit presentation time. I might still do that in future talks. So stay tuned (^ star the repo).
