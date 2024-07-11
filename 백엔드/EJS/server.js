// npm init -y
// npm i express ejs mysql2

const express = require("express");
const path = require("path");
const app = express();
const mysql2 = require("mysql2")

// const mysql = mysql2.createPool({
//     user: "root"
// })

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname , "page"));
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.listen(3000, ()=> {
    console.log("hello world!");
})

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/", async (req, res) => {
    console.log(req.body);
    const {uid, password} = req.body;
    // req.body === {uid: "", password: ""}
    console.log(uid , password);
    await mysql.query("INSERT INTO table (id, uid, password) VALUES (?, ?)", [uid, password]);
})