let todoDb = require("../models/todoDb")


exports.getAllTodos=(req, res)=>{
res.render("index.ejs")
}



exports.createTodo =(req, res)=>{
    console.log(req.body)
    todoDb.query(`INSERT INTO Todos (Id,Task, Updated_by) VALUES('1','${req.body.newTask}', 'longul')`, (err, data)=>{
        if (err){
            res.json({message:'could not access', error:err})
        }else{
            res.json(data)
        }
    })
}



module.exports = exports


