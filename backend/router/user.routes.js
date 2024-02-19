const { userController } = require("../controllers/user-controller");
const exppress = require("express");
const ROUTER = exppress.Router();

ROUTER.get("/", userController.getAll);
ROUTER.post("/login", userController.login);
ROUTER.post("/register", userController.register);
ROUTER.get("/:id", userController.getById);
ROUTER.delete("/:id", userController.delete);
ROUTER.put("/:id", userController.edit);

module.exports = ROUTER;
