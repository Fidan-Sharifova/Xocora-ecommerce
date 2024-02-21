const Admin = require("../models/admin-model");
const bcrypt = require("bcrypt");

const adminController = {
  getAll: async (req, res) => {
    try {
      const admins = await Admin.find({});
      res.status(200).send(admins);
    } catch (error) {
      res.send(error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (admin && (await bcrypt.compare(password, admin.password))) {
      res.status(200).send(admin);
    } else {
      res.status(400).send("email ve ya password yanlisdir");
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findById(id);
      res.status(200).send(admin);
    } catch (error) {
      res.status(404).send("user not found");
    }
  },
  register: async (req, res) => {
    const { name, surName, email, password } = req.body;
    let admin = await Admin.findOne({ email });
    if (user) {
      return res.status(404).send("This email is already exist");
    }
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    const newAdmin = new Admin({
      name,
      surName,
      email,
      password: newPassword,
    });
    await newAdmin.save();
    res.status(201).send(newAdmin);
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await Admin.findByIdAndDelete(id);
      res.send("user deleted");
    } catch (error) {
      res.send(error);
    }
  },
  edit: async (req, res) => {},
};

module.exports = { adminController };
