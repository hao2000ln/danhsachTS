const db = require("../config/database");
const { getAllUsers, getAllDistrict } = require("../models/CRUDservice");
const options = {
  autoCommit: true,
  batchErrors: true,
};
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
//

const getDistrict = async (req, res) => {
  try {
    const { data } = await getAllDistrict();
    // vì dữ liệu trả ra chỉ in đc string nên cần convert dữ liệu trước
    return res.render("district.ejs", { data });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
};

//update bản ghi emstransfer
const getUpdateDCTS = async (req, res) => {
  try {
    const userId = req.params.id;
    const sql =
      "SELECT ID,STATUS,TYPE,ASSIGNEE_FULL_NAME ,ASSIGNEE1_FULL_NAME FROM EMSTRANSFERM1 WHERE id = :userId";
    const binds = [userId];
    const result = await db.query(sql, binds);
    const user = result[0];

    res.render("editDCTS.ejs", { userEdit: user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
};

const postUpdateDCTS = async (req, res) => {
  try {
    let { ID, STATUS, TYPE, ASSIGNEE_FULL_NAME } = req.body;
    console.log(ID, STATUS, TYPE, ASSIGNEE_FULL_NAME);
    // const sql =
    //   "UPDATE EMSTRANSFERM1 SET STATUS =:STATUS, TYPE =:TYPE, ASSIGNEE_FULL_NAME =:ASSIGNEE_FULL_NAME WHERE ID =:ID";
    // const binds = {
    //   STATUS,
    //   TYPE,
    //   ASSIGNEE_FULL_NAME,
    //   ID,
    // };
    // let result = await db.query(sql, binds, options);
    var result = await db.Open(
      "UPDATE EMSTRANSFERM1 SET STATUS =:STATUS, TYPE =:TYPE, ASSIGNEE_FULL_NAME =:ASSIGNEE_FULL_NAME WHERE ID =:ID",
      [STATUS, TYPE, ASSIGNEE_FULL_NAME, ID],
      options
    );
    console.log(result);

    res.redirect("/"); // trỏ về router
  } catch (err) {
    console.err(err);
    res.send({ message: "Có lỗi xảy ra khi cập nhật thông tin", data: null });
  }
};

module.exports = {
  gethome,
  getDistrict,
  getUpdateDCTS,
  postUpdateDCTS,
};
