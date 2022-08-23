const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const PORT = process.env.port || 8008;
const cors = require("cors");
//한글 디 iconv-lite
const iconv = require("iconv-lite");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "bbs",
});

const multer = require("multer");
const path = require("path");
const fs = require("fs");

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(
        null,
        path.basename(
          iconv.decode(file.originalname, "utf-8").toString(),
          ext
        ) +
          Date.now() +
          ext
      );
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});

// 이미지가 저장된 경로를 static으로 지정하면 불러올 수 있다.
app.use("/uploads", express.static("uploads"));

app.post("/insert", upload.single("image"), (req, res) => {
  console.log("/insert", req.file, req.body);
  var writer = req.body.writer;
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery =
    "INSERT INTO BOARD_TBL (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, BOARD_IMG) values (?,?,?,?);";
  db.query(
    sqlQuery,
    [writer, title, content, req.file.filename],
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/login", (req, res) => {
  console.log("/login", req.body);
  var id = req.body.id;
  var pw = req.body.pw;

  const sqlQuery = "select count(*) as 'cnt' from member where id=? and pw=?;";
  db.query(sqlQuery, [id, pw], (err, result) => {
    res.send(result);
  });
});

app.post("/member", (req, res) => {
  console.log("/member", req.body);
  var id = req.body.id;
  var pw = req.body.pw;
  var email = req.body.email;

  const sqlQuery = "insert into member values (?,?,?);";
  db.query(sqlQuery, [id, pw, email], (err, result) => {
    res.send(result);
  });
});

app.post("/list", (req, res) => {
  console.log("list!!!");
  var page_num = parseInt(req.body.page_num);
  var page_size = parseInt(req.body.page_size);
  console.log(
    "list!!!(page_num, page_size, article_count)",
    page_num,
    ", ",
    page_size
  );
  const start_limit = (page_num - 1) * page_size;
  console.log("list!!!(start_limit, page_size)", start_limit, ", ", page_size);

  const sqlQuery = `SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, 
    DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL 
    order by board_num desc limit ?,?;`;
  db.query(sqlQuery, [start_limit, page_size], (err, result) => {
    res.send(result);
  });
});

app.get("/count", (req, res) => {
  console.log("count!!!");
  const sqlQuery = "SELECT count(*) AS COUNT FROM BOARD_TBL;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/detail", (req, res) => {
  console.log("/detail", req.body);
  var num = parseInt(req.body.num);

  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE, BOARD_IMG FROM BOARD_TBL where BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result);
  });
});

app.post("/update", (req, res) => {
  console.log("/update", req.body);
  var title = req.body.article.board_title;
  var content = req.body.article.board_content;
  var num = req.body.article.board_num;

  const sqlQuery =
    "update BOARD_TBL set BOARD_TITLE=?, BOARD_CONTENT=?, BOARD_DATE=now() where board_num=?;";
  db.query(sqlQuery, [title, content, num], (err, result) => {
    res.send(result);
    console.log("result=", result);
  });
});

app.post("/delete", (req, res) => {
  const num = req.body.num;
  console.log("/delete(id) => ", num);

  const sqlQuery = "DELETE FROM BOARD_TBL WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
