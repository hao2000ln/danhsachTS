require("dotenv").config();
const express = require("express");
const router = require("./routers/web");
const { configViewEngine } = require("./config/viewEngine");

const port = process.env.PORT || 8088;
const hostname = process.env.HOST_NAME || "localhost";
const app = express();

//import config Viewengine
configViewEngine(app);

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse
//khai báo route
app.use("/", router); // tất cả router đứng sau '/'

(async () => {
  try {
    app.listen(port, hostname, (req, res) => {
      console.log(`Listening app example on port ${port}`);
    });
  } catch (error) {
    console.log(">>> ", error);
  }
})();
