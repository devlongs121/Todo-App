// let { Router } = require("express"),
let express = require("express"),
router = express.Router(),
controller = require("../controllers/todo");


// restul routers
router.route("/todo")
    .get(controller.getAllTodos)
    .post();

        
router.route("/:todoId")
    .get()
    .patch()
    .delete()

    module.exports= router

