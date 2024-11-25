const express = require("express"); // common JS syntax

// we install morgan and we require it at the beginning
const logger = require("morgan");

const users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
  },
];

const PORT = 8080;
// this is like what we did before with http.createServer()
// our server is now stored in this "app" variable
const app = express();
app.use(express.static("public"));
// Setup the request logger to run on each request
app.use(logger("dev"));
app.use((req, res, next) => {
  // console.log(`THIS IS A MIDDLEWARE - Method: \x1b[33m${req.method}\x1b[0m`);
  req.isAdmin = false;
  next();
});
app.use(express.json());

app.get("/home", (req, res) => {
  console.log("THERE WAS A GET REQUEST FOR /HOME");
  console.log("THIS IS THE REQUEST WE ADD: ");

  res.sendFile(__dirname + "/views/index.html");
});

app.get("/users", (req, res) => {
  if (req.isAdmin) {
    res.json(users);
  } else {
    res.status(401).send("Sorry you are not authorized");
  }
});

app.get("/cat", (req, res) => {
  res.sendFile(__dirname + "/views/cat.html");
});

// we leave it at the end
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
