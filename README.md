# CYPRESS

Cypress is a testing tool that allows us to test our apps END to END (E2E).
It uses javascript.

How to create a test:

```javascript
const URL = "https://example.cypress.io";
describe("My First Test", () => {
  // this is the title of the test
  it("Does not do much!", () => {
    // and this is each individual test
    cy.visit(URL); // this is the url that we want to test
  });
  // if we add another it, we need to make it visit the same url
});
```

Cypress has a lot of methods that we can use to test our app.
The most common ones are in the lesson.

# EXPRESS

Express is a framework for Node.js that allows us to create servers.

Every time we make a request to a server, we get a response.

Express has access to the requests and responses.

How to create a server:

```javascript
const express = require("express"); // we use this syntax because it's very common
// is the same as import express from 'express' in React

const app = express(); // we create an instance of express

app.get("/", (req, res) => {
  // we always have access to the request and response objects
  // we create a route
  res.send("Hello World!"); // we send a response
});

app.listen(3000, () => {
  // we start the server, if we forget this, the server won't start
  console.log("Server is running on port 3000"); // we log a message to check if the server is running
});
```

## Middlewares

A middleware is a function that has access to the request and response objects.

To create or add a middleware, we use the `app.use()` method.

```javascript
// THIS IS A CUSTOM MIDDLEWARE
app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next(); // we need to call next() to move to the next middleware
});
```

On each route we are going to trigger the middleware.

When we install new libraries like morgan, we have to require them and use them as a middleware.

```javascript
const morgan = require("morgan");

app.use(morgan("dev")); // morgan is triggered on every request
```

## Nodemon

Nodemon is a library that we are going to use in development. It restarts the server every time we make a change.

To install nodemon, we use the following command:

```bash
npm install --save-dev nodemon
```

We install it as a dev dependency because we don't need it in production.

Also, it's not necessary to install it in our system, we can install it in the project.

Then we can add a custom script to run the server with nodemon.

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js" // we add this line
}
```

Every time we want to run the server, we use the following command:

```bash
npm run dev
```

That's what vite was doing for us in react apps. Now we now how to do it manually.

### Static folder with express

Sometimes we need to send files to the client, like css, images, etc.
Those are static files.

To send static files, we use the `express.static()` method as a middleware.

```javascript
app.use(express.static("public")); // we create a folder called public
```

From now on, all my files inside the public folder can be accessed by the client.

To send html we can do this:

```javascript
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
```

The `__dirname` is a global variable that gives us the path to the current directory. It doesn't matter where the file is, it will always give us the path to the current directory.

Now the index.html can include the static files. Like the css and the images or js.

### Server side rendering

    When we send a file to the client, we are doing server side rendering.

## Client side rendering

With react we are doing client side rendering. We send the html and the js to the client and the client renders the page, every time we change to another page, the js is going to render the new page.
