let express = require("express")
let router = express.Router()

// restul routers
router.route("/todo")
    .get()
    .post();

        
router.route("/:todoId")
    .get()
    .patch()
    .delete()

