const db = require("../config/database");
const dbconnect = require("../config/db");

const moment = require("moment");
const options = {
  autoCommit: true,
  batchErrors: true,
};

const getAllUsers = async () => {
  const sql = "SELECT ID,STATUS,TYPE ,EMS_DATE_CREATE FROM EMSTRANSFERM1";
  const result = await db.Open(sql, []);
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
      EMS_DATE_CREATE: moment(row.EMS_DATE_CREATE).format("DD/MM/YYYY"),
    };
  });

  return { data: processedData, types: uniqueTypes, statusL: uniqueStatus };
};

const getAllDistrict = async () => {
  try {
    // const sql = `SELECT ID, NAME, PROVINCE_NAME FROM EMSDISTRICTM1
    // ORDER BY ID
    // OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY`;
    const sql = "SELECT ID, NAME,COST, PROVINCE_NAME FROM EMSDISTRICTM1";
    const result = await db.query(sql);
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const getCountDistrict = async () => {
  try {
    let sql = "SELECT COUNT(*) AS TOTAL FROM EMSDISTRICTM1";
    let result = await db.query(sql);
    return result[0].TOTAL;
  } catch (error) {
    console.log("error", error);
    return 0;
  }
};

const updateDistrict = async (id, name, province) => {
  try {
    const sql = `UPDATE EMSDISTRICTM1 SET NAME = :name, PROVINCE_NAME = :province WHERE ID = :id`;
    const binds = {
      id: id,
      name: name,
      province: province,
    };
    const result = await dbconnect.Open(sql, binds, options);
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const deleteDistrict = async (id) => {
  try {
    const sql = "DELETE FROM EMSDISTRICTM1 WHERE ID = :id";
    const binds = { id: id };
    const result = await dbconnect.Open(sql, binds, options);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getAllDistrict,
  getCountDistrict,
  updateDistrict,
  deleteDistrict,
};
