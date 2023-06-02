const oracledb = require("oracledb");

// Cấu hình kết nối
const dbConfig = {
  user: process.env.user,
  password: process.env.password,
  connectString: process.env.connectString,
};

// console.log("www",process.env);
// Khởi tạo pool kết nối
async function initialize() {
  await oracledb.createPool(dbConfig);
}
// Đóng pool kết nối
async function close() {
  await oracledb.getPool().close();
}

module.exports.initialize = initialize;
module.exports.close = close;
module.exports.query = Open;

async function Open(sql, binds = []) {
  let connection;
  try {
    connection = await oracledb.getConnection();
    const result = await connection.execute(sql, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });
    return result.rows;
  } catch (error) {
    connection.close()
    console.error(error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
}

exports.Open = Open;
