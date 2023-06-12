const { getAllDCTS, getFilter } = require("../../models/qltsService");

// const gethomeAPI = async (req, res) => {
//   try {
//     const { data, types, statusL } = await getAllUsers();
//     // vì dữ liệu trả ra chỉ in đc string nên cần convert dữ liệu trước
//     return res.render("./QLTS/home.ejs", { data, types, statusL });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error retrieving users");
//   }
// };

module.exports = {
  gethomeAPI: async (req, res) => {
    try {
      let results = await getAllDCTS();
      return res.status(200).json({
        EC: 0,
        data: results,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving users");
    }
  },
  renderDCTS: async (req, res) => {
    return res.render("./QLTS/home.ejs");
  },
};
