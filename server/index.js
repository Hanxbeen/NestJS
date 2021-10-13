const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const { Client } = require("pg");
const Query = require("pg").Query;

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
    console.log("success!");
  }
});

app.get("/", function (req, res, next) {
  const query = new Query(
    "INSERT INTO board (title, contents) VALUES ('next.js로 만든 블로그', '즐거운 개발생활')"
  );
  client.query(query);
  var rows = [];
  /**
   * row에서 데이터 가져오고 end에서 검색할 때 발생한 각종 정보,
   * error는 오류 발생시
   **/
  query.on("row", (row) => {
    rows.push(row);
  });
  query.on("end", () => {
    console.log(rows);
    console.log("query done");
    res.send(rows);
    res.status(200).end();
  });
  query.on("error", (err) => {
    console.error(err.stack);
  });
});

app.listen(PORT, () => {
  console.log(`running on PORT ${PORT}`);
});
