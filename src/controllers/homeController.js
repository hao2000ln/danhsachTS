const db = require("../config/database");

const {
  getAllUsers,
  getAllDistrict,
} = require("../models/CRUDservice");

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
      "SELECT ID,STATUS,TYPE,ASSIGNEE_FULL_NAME ,EMS_DATE_CREATE FROM EMSTRANSFERM1 WHERE id = :userId";
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
  let id = req.body.iddc;
  let status = req.body.status;
  let type = req.body.type;
  let assignee = req.body.assignee;

  try {
    // let { ID, STATUS, TYPE, ASSIGNEE_FULL_NAME } = req.body;
    // const sql = `UPDATE EMSTRANSFERM1 SET STATUS = :STATUS, TYPE = :TYPE, ASSIGNEE_FULL_NAME = :ASSIGNEE_FULL_NAME WHERE ID = :ID`;
    // console.log("result : ", sql);
    // const binds = {
    //   STATUS,
    //   TYPE,
    //   ASSIGNEE_FULL_NAME,
    //   ID,
    // };
    await updateDCTS(status, type, assignee, id);
    res.redirect("/"); // trỏ về router
  } catch (err) {
    console.error(err);
    res.send({ message: "Có lỗi xảy ra khi cập nhật thông tin", data: null });
  }
};

module.exports = {
  gethome,
  getDistrict,
  getUpdateDCTS,
  postUpdateDCTS,
};
