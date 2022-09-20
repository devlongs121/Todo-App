let express = require("express"),
app = express(),
todoRouter = require("./routes/todo");


app.set("view engine","ejs")
app.use(express.static(__dirname + "/views"))
app.use("/", todoRouter)


app.listen(3000,()=>{
    console.log("Succesful");
})