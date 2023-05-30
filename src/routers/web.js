const express = require("express");
const router = express.Router();

const {
  gethome,
  getCreateuser,
  postCreateuser, getUpdateuser, postUpdateuser, postDeleteuser, postRemoveuser
} = require("../controllers/homeController");

//trang chủ
router.get("/", gethome);

//thêm mới user
router.get("/create", getCreateuser);
router.post("/create-user", postCreateuser);

//update user
router.get("/update/:idnv", getUpdateuser);
router.post("/update-user", postUpdateuser);

//xóa user
router.post("/delete-user/:idnv", postDeleteuser);
router.post("/delete-user", postRemoveuser);


module.exports = router;
