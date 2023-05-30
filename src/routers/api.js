const express = require("express");
const { getUsersAPI, postCreateuserAPI, putUpdateuserAPI, deleteUserAPI, postUploadsingleFileAPI, postUploadMultipleFilesAPI } = require("../controllers/apiController");
const routerAPI = express.Router();

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateuserAPI);
routerAPI.put("/users", putUpdateuserAPI);
routerAPI.delete("/users", deleteUserAPI);


//chức nắng upload file
routerAPI.post("/file", postUploadsingleFileAPI);
routerAPI.post("/files", postUploadMultipleFilesAPI);


module.exports = routerAPI;
