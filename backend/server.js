const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/backend.routes");
const ROUTER = require("./router/user.routes");
const adminRouter = require("./router/admin.routes");
app.use(express.json());
app.use(cors());
app.use("/xocora/products", router);
app.use("/users", ROUTER);
app.use("/admin-datas", adminRouter)
mongoose
  .connect(
    "mongodb+srv://Fidan_Sharifova:fidan_2004@cluster0.zlx6suq.mongodb.net/"
  )
  .then((res) => {
    console.log("connected to mongoose");
  });
app.listen(1212, () => {
  console.log("app running on 1212");
});
