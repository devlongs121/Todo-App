let mysql = require("mysql")
let dbConnect = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Pwaskop@121",
    database: "todoApp"

})

dbConnect.connect(()=>{
console.log("Database Connected Succesfuly")
})

module.exports = dbConnect