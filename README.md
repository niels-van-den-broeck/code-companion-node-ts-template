# NodeJS / Fastify starter template

## Running the server

### Initial steps

- Install [nvm](https://github.com/nvm-sh/nvm)
- Run nvm use / nvm install to add the correct node version.
- Run npm i
- Copy the .env.example file and fill in your desired env vars.

## Start the server

Run `npm run start`

## Adding routes

This template uses `@fastify/autoload` to load routes. Please look at [their documentation](https://github.com/fastify/fastify-autoload) to extend this functionality

## Testing

Tests use the default [nodejs test runner](https://nodejs.org/api/test.html).

## CI/CD

### Circleci

A default config for circleci has been added which runs your linting steps and tests on push. 

## Dependabot

A default config for dependabot has been added to check for security vulnerabilities on a weekly basis.
