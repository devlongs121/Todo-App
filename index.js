//  { urlencoded } = require("body-parser");

let express = require("express"),
app = express(),
todoRouter = require("./routes/todo"),
dbConnect = require("./models/todoDb"),
bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set("view engine","ejs")
app.use(express.static(__dirname + "/views"))
app.use(express.static(__dirname + "/public"))


app.use("/", todoRouter)


app.listen(3002,()=>{
    console.log("Succesful");
})