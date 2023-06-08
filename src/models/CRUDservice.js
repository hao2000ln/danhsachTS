const db = require("../config/database");
const moment = require("moment");

const getAllUsers = async () => {
  const sql =
    "SELECT ID,STATUS,TYPE, DBMS_LOB.SUBSTR(DES,3000,1) ,EMS_DATE_CREATE FROM EMSTRANSFERM1";
  const result = await db.query(sql);
  const uniqueTypes = Array.from(new Set(result.map((item) => item.TYPE)));
  const uniqueStatus = Array.from(new Set(result.map((item) => item.STATUS)));

  // Xử lý dữ liệu trước khi trả kq
  const processedData = result.map((row) => {
    return {
      //giải thích: ID: row.ID
      //            tên tự đặt : row.Trường trong db
      ID: row.ID,
      STATUS: row.STATUS,
      TYPE: row.TYPE,
      DES: row.DES,
      EMS_DATE_CREATE: moment(row.EMS_DATE_CREATE).format("DD/MM/YYYY"),
    };
  });

  return { data: processedData, types: uniqueTypes, statusL: uniqueStatus };
};

const getAllDistrict = async () => {
  const sql = "SELECT ID,NAME, PROVINCE_NAME FROM EMSDISTRICTM1";
  const result = await db.query(sql);
  return { data: result };
};

module.exports = { getAllUsers, getAllDistrict };
