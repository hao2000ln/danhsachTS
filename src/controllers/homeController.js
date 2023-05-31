const getAllUsers = require("../models/CRUDservice");

const gethome = async (req, res) => {
  try {
    let results = await getAllUsers();
    console.log(results);
    // vì dữ liệu trả ra chỉ in đc string nên cần convert dữ liệu trước
    return res.render("home.ejs", { data: results });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
};
//

module.exports = {
  gethome,
};
