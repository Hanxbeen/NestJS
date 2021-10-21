const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const { Client } = require("pg");
const Query = require("pg").Query;
const cors = require("cors");

const client = new Client({
  user: "hb",
  host: "localhost",
  database: "blog_db",
  password: "1111",
  port: 5433,
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("연결 성공!");
  }
});
app.use(cors());
app.use(express.json());

app.get("/getBoard", async (req, res) => {
  try {
    const getBoard = await client.query("SELECT * FROM board");
    res.json(getBoard.rows);
  } catch (error) {
    console.error(error.message);
  }
});
// app.post("/", function (req, res, next) {
//   const title = req.body["title"];
//   const contents = req.body["contents"];
//   const qstr = "INSERT INTO board (title, contents) values($1, $2);";
//   const query = client.query(qstr, [title, contents]);
//   console.log(title);
//   client.query(query);
//   var rows = [];
//   /**
//    * row에서 데이터 가져오고 end에서 검색할 때 발생한 각종 정보,
//    * error는 오류 발생시
//    **/
//   query.on("row", (row) => {
//     rows.push(row);
//   });
//   query.on("end", () => {
//     console.log(rows);
//     console.log("query done");
//     res.send(rows);
//     res.status(200).end();
//   });
//   query.on("error", (err) => {
//     console.error(err.stack);
//   });
// });
app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`);
});
