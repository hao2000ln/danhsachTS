const {
  getAllDistrict,
  getCountDistrict,
  updateDistrict,
  deleteDistrict,
} = require("../../models/CRUDservice");
module.exports = {
  // getDistrict: async (req, res) => {
  //   try {
  //     const { data } = await getAllDistrict();
  //     // console.log("data", data);
  //     // vì dữ liệu trả ra chỉ in đc string nên cần convert dữ liệu trước
  //     return res.render("./location/district.ejs", { data });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send("Error retrieving users");
  //   }
  // },
  getAPIDistrict: async (req, res) => {
    try {
      // let page = req.query.page || 1;
      // let limit = req.query.limit || 10;
      // let offset = (page - 1) * limit;
      // let totalCount = await getCountDistrict(); // Tổng số dòng dữ liệu

      // let pageTotal = totalCount / limit;
      // let sumPage = Math.ceil(pageTotal); // Tổng số trang

      // let results = await getAllDistrict(offset, limit);
      let results = await getAllDistrict();

      return res.status(200).json({
        EC: 0,
        // currentPage: page,
        // totalPages: sumPage,
        // recordsFiltered: limit,
        data: results,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving users");
    }
  },

  updateDistrictAPI: async (req, res) => {
    try {
      const id = req.params.id;
      const name = req.body.name;
      const province = req.body.province;
      await updateDistrict(id, name, province);

      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating district");
    }
  },
  deleteDistrictAPI: async (req, res) => {
    try {
      const id = req.params.id;
      await deleteDistrict(id);
      res.status(200).json({
        success: true,
        message: "Bản ghi đã được xóa thành công.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating district");
    }
  },
};
