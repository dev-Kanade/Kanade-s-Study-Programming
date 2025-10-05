/* ===== Express.jsの勉強です() ===== */
const express = require("express");
const app = express();
const port = 3000;

const studyinfo ={
    "title":"Express.jsの勉強です^^"
}
app.get("/api/studyinfo")