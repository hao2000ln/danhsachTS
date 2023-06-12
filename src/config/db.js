const oracledb = require('oracledb');
oracledb.autoCommit = true;
const cns = {
    user: process.env.user,
    password: process.env.password,
    connectString: process.env.connectString,
    poolIncrement: 0,
    poolMax: 4,
    poolMin: 4,
};


async function Open(sql, binds, options) {
    let connection;
    let result;
    try {
        const pool = await oracledb.createPool(cns);
        connection = await pool.getConnection();
        result = await connection.execute(sql, binds, options);
    } catch (err) {
        console.error(err.message);;
        throw err;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err.message);
            }
        }
    }
    return result.rows;
}
exports.Open = Open;
