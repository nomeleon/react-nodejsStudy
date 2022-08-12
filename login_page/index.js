const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
// cors : cross-origin resource sharing
//교차 출처 릴소스 공유
//한 출처에서 실행 중인 웹 어플리케이션이 다른 출처의 선택한 자원에 접근
//할 수 잇는 권한을 부여하도록 부라우저에 알려주는 체제이다.
const cors = require("cors");

const app = express();
const PORT = process.env.port || 8008;

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
//로그인
app.post("/login", (req, res) => {
  console.log("/login", req.body);
  var id = req.body.id;
  var pw = req.body.pw;

  const sqlQuery = "select count(*) as 'cnt' from member where id=? and pw=?;";
  db.query(sqlQuery, [id, pw], (err, result) => {
    res.send(result);
    // if (result[0].cnt === 1) {
    //   res.send({ message: "success" });
    // } else {
    //   res.send({ message: "fail" });
    // }
  });
});
//회원등록
app.post("/member", (req, res) => {
  console.log("/member", req.body);
  var id = req.body.id;
  var pw = req.body.pw;
  var email = req.body.email;

  const sqlQuery = "insert into member values(?,?,?);";
  db.query(sqlQuery, [id, pw, email], (err, result) => {
    res.send(result);
  });
});
//게시판 리스트
app.post("/list", (req, res) => {
  var page_num = parseInt(req.body.page_num);
  var page_size = parseInt(req.body.page_size);
  console.log("list!!(page_num, page_size) =>", page_num, ", ", page_size);

  const start_limit = (page_num - 1) * page_size;
  console.log(
    "list!!(start_limit, page_size) =>",
    start_limit,
    ", ",
    page_size
  );

  const sqlQuery =
    "select board_num, board_title, board_writer, board_content, date_format(board_date, '%Y-%m-%d') as board_date from board_tbl order by board_num desc limit ?,?;";
  db.query(sqlQuery, [start_limit, page_size], (err, result) => {
    res.send(result);
  });
});
//글의 개수 count
app.get("/count", (req, res) => {
  console.log("/count");
  const sqlQuery = "select count(*) as count from board_tbl;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});
//글쓰기
app.post("/insert", (req, res) => {
  console.log("/insert", req.body);
  var writer = req.body.writer;
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery =
    "insert into board_tbl(board_writer, board_title, board_content) values(?,?,?);";
  db.query(sqlQuery, [writer, title, content], (err, result) => {
    res.send(result);
  });
});
//상세보기
app.post("/detail", (req, res) => {
  console.log("/detail", req.body);
  var num = parseInt(req.body.num);

  const sqlQuery =
    "select board_num, board_writer, board_title, board_content, date_format(board_date, '%Y-%m-%d') as board_date from board_tbl where board_num=?;";
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result);
  });
});
//글수정
app.post("/update", (req, res) => {
  console.log("/update", req.body);
  var title = req.body.article.board_title;
  var content = req.body.article.board_content;
  var num = req.body.article.board_num;

  const sqlQuery =
    "update board_tbl set board_title=?, board_content=?, board_date=now() where board_num=?;";
  db.query(sqlQuery, [title, content, num], (err, result) => {
    res.send(result);
    console.log("result= ", result);
  });
});
//글삭제
app.post("/delete", (req, res) => {
  const num = req.body.num;
  console.log("/delete(id) =>", num);

  const sqlQuery = "delete from board_tbl where board_num=?;";
  db.query(sqlQuery, [num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
