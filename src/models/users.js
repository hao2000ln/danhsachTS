const mongoose = require("mongoose");

//Schema khai báo kiểu dữ liệu trường
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
})

// tên modal -> tự dộng convert sang dạng chữ thường, viết dưới dạng số nhiều
const User = mongoose.model('user', userSchema);

module.exports = User;
