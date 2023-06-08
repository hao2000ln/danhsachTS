const express = require('express');
require('dotenv').config();
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios')
const db = require("../Development/controller/config")
const options = {
  autoCommit: true,
  batchErrors: true,
};

// const route = require('./routes');


// Middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
// HTTP logger
// app.use(morgan('combined'))

// Set templating engine

// app.set('views', path.join(__dirname, 'resources','views'));
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('view engine', 'ejs');


async function getData() {
  try {
    const response = await axios.get('https://provinces.open-api.vn/api/?depth=2');
    var data = response.data;
    for (let item of data) {
      var city_id = item.code;
      var city_name = item.name;
      var provice_data = item.districts;
      for (let sub_item of provice_data) {
        if (sub_item.name.includes("\'")) {

          sub_item.name = sub_item.name.replace(/\'/g, "''");
          // console.log('afterfffffffffffffffffffffffffff',sub_item.name);
          // break;
        }
        let query =
          `insert into EMSDISTRICTM1(id, name,province_name,province_id) values('${sub_item.code}','${sub_item.name}','${city_name}','${city_id}')`;
        await db.Open(query, [], options);

      }

    }
  } catch (error) {
    console.error(error);
  }
}

getData();
// Run
app.listen(process.env.PORT, process.env.IP, () =>
  console.log(`SSL Server listening on port ${process.env.PORT}!`),
);