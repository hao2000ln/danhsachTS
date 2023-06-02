const express = require("express");
const router = express.Router();

const {
  gethome,
  getDistrict,
  getUpdateDCTS,
  postUpdateDCTS,
} = require("../controllers/homeController");
//trang chủ
router.get("/", gethome);

//update
router.get("/update/:id", getUpdateDCTS);
router.post("/update-DC", postUpdateDCTS);

// danh sách huyện
router.get("/district", getDistrict);

module.exports = router;
