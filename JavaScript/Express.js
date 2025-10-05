/* ===== Express.jsの勉強です() ===== */
const express = require("express");
const app = express();
const port = 3000;

const studyinfo ={
    "title":"Express.jsの勉強です^^",
    "body":"これは奏がExpres.jsの勉強をするつまらないファイルです。"
};
app.get("/api/studyinfo")