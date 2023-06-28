const express = require("express");
const router = express.Router();
const {
  getAPIDistrict,
  updateDistrictAPI,
  deleteDistrictAPI,
} = require("../../controllers/QLTS/locationController");

router.get("/api", getAPIDistrict);
router.put("/api/:id", updateDistrictAPI);
router.delete("/api/:id", deleteDistrictAPI);
router.get("/", (req, res) => {
  return res.render("./location/district.ejs");
});
module.exports = router;
