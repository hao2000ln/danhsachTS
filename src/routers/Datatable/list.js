const express = require("express");
const router = express.Router();
const { renderDS } = require("../../controllers/QLTS/datatable")

router.get("/", renderDS);

module.exports = router;
