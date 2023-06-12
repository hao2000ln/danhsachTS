const dbconnect = require("../config/db");
const db = require("../config/database");
const moment = require("moment");

const options = {
  autoCommit: true,
  batchErrors: true,
};

const getAllDCTS = async () => {
  try {
    const sql = `SELECT ID,STATUS,TYPE ,EMS_DATE_CREATE FROM EMSTRANSFERM1`;
    const result = await db.Open(sql, [], options);

    const processedData = result.map((row) => {
      return {
        ID: row.ID,
        STATUS: row.STATUS,
        TYPE: row.TYPE,
        EMS_DATE_CREATE: moment(row.EMS_DATE_CREATE).format("DD/MM/YYYY"),
      };
    });
    return processedData;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

module.exports = {
  getAllDCTS,
};
