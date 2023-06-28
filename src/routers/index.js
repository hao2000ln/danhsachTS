const qlts = require("./QLTS/qltsweb"); //module quản lý tài sản
const location = require("./Location/locationweb");
const datatable = require("./Datatable/list")
function route(app) {
  app.use("/seam", qlts);
  app.use("/location", location);
  app.use('/datatable', datatable)
}
module.exports = route;
