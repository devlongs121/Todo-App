let todoDb = require("../models/todoDb")


exports.getAllTodos=(req, res)=>{
todoDb.query(`SELECT * FROM Todos`, (err, data)=>{
    if (err){
        res.json({message:'could not access data', error:err})
    }else{
        res.render("index",{Todos:data})
    }
})


}



exports.createTodo =(req, res)=>{
    console.log(req.body)
    todoDb.query(`INSERT INTO Todos (Id,Task, Updated_by) VALUES(0,'${req.body.newTask}', 'longul')`, (err, data)=>{
        if (err){
            res.json({message:'could not access', error:err})
        }else{
            res.json(data)
        }
    })
}



module.exports = exports


