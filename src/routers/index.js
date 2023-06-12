const qlts = require("./QLTS/qltsweb"); //module quản lý tài sản
const location = require("./Location/locationweb");

function route(app) {
  app.use("/seam", qlts);
  app.use("/location", location);
}
module.exports = route;
