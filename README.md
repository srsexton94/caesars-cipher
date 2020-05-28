# Caesar's Cipher

![](screenshot.png)

## Project Description
A full stack solution to Caesar's Cipher built with an Angular 8 frontend and a Nest.js backend in node.js.  Will take an input phrase and a specified offset ammount, and output the correctly encoded solution.
> [Video Walkthrough](https://youtu.be/dyulhdCT8Mo)

## Dependencies
* [Angular.js](https://angular.io/guide/setup-local)
* [Node.js](https://nodejs.org/es/docs/)
* [Nest.js](https://docs.nestjs.com/)
* [Node Package Manager (npm)](https://docs.npmjs.com/)
* [Jest](https://jestjs.io/docs/en/getting-started.html)

## Set up & Installation
* Initialize node package manager
  - `npm init -y`
* Initialize & run Angular client app
  - `npm install -g @angular/cli`
  - `ng new client`
  - `cd client`
  - `ng serve --open`
* Initialize & run Nest server
  - `npm install -g @nestjs/cli`
  - `nest new server`
  - `cd server`
  - `npm run start`

## User Stories
As a user I would like to be able to...
* enter a phrase (string) and a offset ammount (number) into a form
* submit that form to make an API call
* receive a correctly encoded string in return
* see error messages/visual feedback for invalid inputs/bad requests/etc..
* see my previous search queries even as the page reloads

## Back-end Specifications
* contain the logic for the Caesar's Cipher
* implement uniting testing (see.. `./api/src/app.controller.spec.ts`)

## Aditional Resources
In addition to the Angular, Node, Nest, npm, and Jest documentation listed above, these resources were also used for additional learning/guidance:
* [Codevolution Angular Forms Tutorial](https://www.youtube.com/watch?v=nGr3C3wbh9c&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi)
* [Academind Learn Nest.js from Scratch](https://www.youtube.com/watch?v=F_oOtaxb0L8)
* [Nest Security Page](https://docs.nestjs.com/techniques/security) (re: CORS issue)
* [Medium dltlabs Unit testing with NestJS](https://medium.com/@dltlabs/unit-testing-jest-with-nestjs-b5b043ac5598)

## Future Goals
In future iterations of this project I would like to...
* implement functionality that utilizes the other HTTP requests (ie 'get', 'patch', 'delete')
* implement functionality that utilizes the other attributes of the `cipher` resource in the API
