const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.port || 8000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: "*", //출처 허용 옵션
  Credential: true, //사용자가 인증이 필요한 리소스(쿠키 등) 점근
};

app.use(cors(corsOptions));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "bbs",
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
