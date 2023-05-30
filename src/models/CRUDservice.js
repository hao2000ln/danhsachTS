const connection = require("../config/db");

//dữ liệu trả về của Users
const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};

// const getUserbyID = async (userId) => {
//   let [results, fields] = await connection.query(
//     "select * from Users where id = ?",
//     [userId]
//   );
//   console.log(results);
//   let user = results && results.length > 0 ? results[0] : {};
// };

const updateUser = async (name, city, email, id) => {
  let [results, fields] = await connection.query(
    `UPDATE Users
        SET name = ?, city = ?, email = ? WHERE id = ?`,
    [name, city, email, id]
  );
};

const deleteUser = async (id) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users
     WHERE id = ?`,
    [id]
  );
};

module.exports = { getAllUsers, updateUser, deleteUser };
