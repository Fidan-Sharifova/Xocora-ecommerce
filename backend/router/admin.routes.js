const adminController = require("../controllers/admin-controller");
const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/", adminController.getAll);
adminRouter.post("/login", adminController.login);
adminRouter.post("/register", adminController.register);
adminRouter.get("/:id", adminController.getById);
adminRouter.delete("/:id", adminController.delete);
adminRouter.put("/:id", adminController.edit);

module.exports = adminRouter;
