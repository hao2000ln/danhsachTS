const db = require("../config/database");

const getAllUsers = async () => {
  const sql =
    "SELECT ID,STATUS,TYPE,ASSIGNEE_FULL_NAME ,ASSIGNEE1_FULL_NAME FROM EMSTRANSFERM1";
  const result = await db.query(sql);
  const uniqueTypes = Array.from(new Set(result.map((item) => item.TYPE)));
  const uniqueStatus = Array.from(new Set(result.map((item) => item.STATUS)));

  return { data: result, types: uniqueTypes, statusL: uniqueStatus };
};

const getAllDistrict = async () => {
  const sql = "SELECT ID,NAME, PROVINCE_NAME FROM EMSDISTRICTM1";
  const result = await db.query(sql);
  return { data: result };
};

module.exports = { getAllUsers, getAllDistrict };
