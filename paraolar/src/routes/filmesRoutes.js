const controller = require("../controllers/filmesController")

const express = require("express") 
const router = express.Router()

router.get("/catalogo", controller.getAll)

router.get("/catalogo/:id", controller.getById)

router.get("/pesquisar", controller.getValue)

router.post("/cadastrar", controller.createMovie)

router.patch("/titulo/:id", controller.updateTitle)

router.patch("/alterar/:id", controller.updateMovie)

router.put("/substituir/:id", controller.changeAll)

router.delete("/deletar/:id", controller.deleteAll)

module.exports = router