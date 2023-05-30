const mongoose = require("mongoose");

//Schema khai báo kiểu dữ liệu trường
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    phone: String,
    email: String,
    image: String,
    des: String,
  },
  { timestamps: true }
); // thay thế cho việc khai báo createAt, updateAt});

// tên modal -> tự dộng convert sang dạng chữ thường, viết dưới dạng số nhiều
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
