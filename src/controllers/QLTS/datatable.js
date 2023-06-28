const axios = require("axios");
require("dotenv").config();

module.exports = {
  renderDS: async (req, res) => {
    const username = process.env.USERAPI;
    const password = process.env.PASSAPI;
    const authOptions = {
      method: "get",
      url: "http://10.4.18.52:13081/SM/s9/rest/districts?view=expand",
      auth: {
        username: username,
        password: password,
      },
    };

    try {
      const response = await axios(authOptions);
      let data = response.data;
      res.render("./datatable/home.ejs", { data });
    } catch (error) {
      console.error(error);
      res.status(500).send("Lỗi khi lấy dữ liệu từ API");
    }
  },
};
