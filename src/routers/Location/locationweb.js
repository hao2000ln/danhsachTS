const express = require("express");
const router = express.Router();
const {
  getDistrict,
  getAPIDistrict,
  updateDistrictAPI,deleteDistrictAPI
} = require("../../controllers/QLTS/locationController");

//trang chủ
router.get("/api", getAPIDistrict);
router.put("/api/:id", updateDistrictAPI);
router.delete("/api/:id", deleteDistrictAPI);
router.get("/", (req, res) => {
  return res.render("./location/district.ejs");
});
module.exports = router;
