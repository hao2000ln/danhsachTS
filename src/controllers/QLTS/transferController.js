const db = require("../../config/db");
const { getAllUsers } = require("../../models/CRUDservice");

const gethome = async (req, res) => {
  try {
    const { data, types, statusL } = await getAllUsers();
    // vì dữ liệu trả ra chỉ in đc string nên cần convert dữ liệu trước
    return res.render("home.ejs", { data, types, statusL });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
};

module.exports = {
  gethome,
};
