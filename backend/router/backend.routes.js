const express= require("express")
const dataControllers=require("../controllers/data-controller")
const router= express.Router()

router.get("/", dataControllers.getAll)
router.get("/:id", dataControllers.getById)
router.post("/", dataControllers.post)
router.delete("/:id", dataControllers.delete)
router.put("/:id", dataControllers.edit)

module.exports=router