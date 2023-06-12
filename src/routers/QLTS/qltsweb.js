const express = require('express');
const router = express.Router();
const { gethomeAPI,renderDCTS } = require("../../controllers/QLTS/transferController");

//trang chủ
router.get("/dieuchuyen/api", gethomeAPI);
router.get("/dieuchuyen", renderDCTS);
module.exports = router;
