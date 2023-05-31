const db = require("../config/database");

const getAllUsers = async () => {
  // let [results, fields] = await dv.Open("select * from EMSTRANSFERM1");
  // return results;
  const sql = "SELECT ID,STATUS,TYPE,ASSIGNEE_FULL_NAME ,ASSIGNEE1_FULL_NAME FROM EMSTRANSFERM1";
  const result = await db.query(sql);
  return result;
};

module.exports = getAllUsers;
