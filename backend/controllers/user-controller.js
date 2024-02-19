const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const userController = {
  getAll: async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).send(users);
    } catch (error) {
      res.send(error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.send(user);
    } else {
      res.send("email ve ya password yanlisdir");
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.status(200).send(user);
    } catch (error) {
      res.status(404).send("user not found");
    }
  },
  register: async (req, res) => {
    const { name, surName, email, password, age } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(404).send("This email is already exist");
    }
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      surName,
      email,
      password: newPassword,
      age,
    });
    await newUser.save();
    res.status(201).send(newUser);
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      res.send("user deleted");
    } catch (error) {
      res.send(error);
    }
  },
  edit: async (req, res) => {},
};

module.exports = { userController };
