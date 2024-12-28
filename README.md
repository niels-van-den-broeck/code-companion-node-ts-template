# NodeJS / Fastify / TS starter template 🚀

## Running the server

### Initial steps

- Install [nvm](https://github.com/nvm-sh/nvm)
- Run nvm use / nvm install to add the correct node version.
- Run npm i
- Copy the .env.example file and fill in your desired env vars.

## Start the server

Run `npm run dev`

## Adding routes

This template uses `@fastify/autoload` to load routes. Please look at [their documentation](https://github.com/fastify/fastify-autoload) to extend this functionality

## Testing

Tests use the default [nodejs test runner](https://nodejs.org/api/test.html).

## CI/CD

### Github actions

A default config for github actions has been added to this repository which will build, lint and test your code.

## Dependabot

A default config for dependabot has been added to check for security vulnerabilities on a weekly basis.


## Used packages 

### [Typescript](https://github.com/microsoft/TypeScript)

TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. 

### [Fastify](https://github.com/fastify/fastify)

Fast framework for setting up HTTP api's

Included plugins:

- @fastify/autoload
  - Used to [setup routes](#adding-routes)

### [Biome](https://github.com/eslint/eslint)

Enforces code styles.

Included plugins:

- eslint-config-airbnb-typescript
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-prettier

### [Prettier](https://github.com/prettier/prettier)

Automatic code formatting handled through the .prettierrc file.

### [dotenv](https://github.com/motdotla/dotenv)

Loads variables into process.env from a .env file
