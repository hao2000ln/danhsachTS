const express = require("express");
const router = express.Router();

const { gethome } = require("../controllers/homeController");
//trang chủ
router.get("/", gethome);

module.exports = router;
