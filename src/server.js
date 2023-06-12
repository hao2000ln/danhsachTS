require("dotenv").config();
const express = require("express");
// const router = require("./routers/web");
const { configViewEngine } = require("./config/viewEngine");
const route = require("./routers");
const port = process.env.PORT;
const hostname = "localhost";
const app = express();
const db = require("./config/database");

//import config Viewengine
configViewEngine(app);

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse

// Initialize the database connection
db.initialize().catch((error) => {
  console.error(error);
  process.exit(1);
});

// Route init
route(app);

//khai báo route
// app.use("/", router); // tất cả router đứng sau '/'

// Close the database connection when the application is terminated
process.on("SIGTERM", () => {
  db.close().catch((error) => {
    console.error(error);
    process.exit(1);
  });
});

(async () => {
  try {
    app.listen(port, hostname, (req, res) => {
      console.log(`Listening app example on port ${port}`);
    });
  } catch (error) {
    console.log(">>> ", error);
  }
})();
