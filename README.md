## My_Fancy_Blog

Build a fancy blog with react using React.com, style components and Cypress for testing

[Miruna Nedelcu](https://github.com/mirunaen)

## Assumptions

Created the HomePage and PostPage and CreatePost.
One of the problems I encountered was in the list of posts there was no key for each of one.
While writing the cypress test it didn't work because I mispelled the id.

## Proposed Solution


- Because I didn't had an API, i mocked one in the file db.json and used it to do the backend of the web.
- I installed cypress, style components as well as Router.

## Screenshots
![alt text](screens/demo.png)

## Libraries / Tools Used

- React.js
- Create React App for project setup
- ...

## Setup

To install the dependencies run:

`npm install`

And to run the app:

`npm start`


### Running the tests

#### Unit Tests

You can run the unit tests using:

`npm test`

#### Integration Tests

To run Cypress in interactive mode run:

`npm run cy:start`





