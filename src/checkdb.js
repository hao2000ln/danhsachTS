const oracledb = require("oracledb");

async function run() {
  const connection = await oracledb.getConnection({
    user: "CSEP_SEAM_V10",
    password: "PAssw0rdA",
    connectString:
      "(DESCRIPTION =(ADDRESS_LIST =(ADDRESS = (PROTOCOL = TCP)(HOST = 10.4.18.44)(PORT = 1521)))(CONNECT_DATA =(SID = ESDTEST)(SERVER = DEDICATED)))",
  });

  const result = await connection.execute(`SELECT ID, STATUS FROM EMSTRANSFERM1`);
  console.log("Result is:\n", result.rows);

  await connection.close(); // Always close connections
} 

run();

