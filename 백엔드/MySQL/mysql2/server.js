// const express = require("express")
// const app = express()
// const mysql2 = require("mysql2/promise")

// const mysql = mysql2.createPool({
//     user : "root",
//     password : "930702",
//     database : "cosmos",
//     multipleStatements : true
// })



// const data = mysql.query("select * from choco where id = ?", [1]);
// console.log(data);
// mysql.query("update choco set content = ? where id = ?", ["djdjdjd", 1])

// const tableInit = async () => {
//     await mysql.query("SELECT * FROM choco", (err , res)=> {
//     if(err){
//     mysql.query("CREATE TABLE choco(id INT, name VARCHAR(20), content VARCHAR(20));")
//     console.log("테이블이 생성 되었습니다.")
//     } else {
//     console.log("이미 테이블이 있습니다.")
//     }
// })
// }
// tableInit()

// app.listen(3000 , () => {
//     console.log('hello world')
// })



















const express = require("express")
const app = express()
const MySQL = require("mysql2")

const Mysql = MySQL.createPool({
    user : "root",
    password : "930702",
    database : "test6",
    multipleStatements : true
})

const data = Mysql.query("CREATE TABLE milk(taste VARCHAR(20), color VARCHAR(20) flavor VARCHAR(20))")

Mysql.query("INSERT INTO milk(taste, color, flavor)VALUES(?, ?, ?)", ["sweet","black","chocolate"])


app.listen(3000 , () => {
    console.log("Server On")
})