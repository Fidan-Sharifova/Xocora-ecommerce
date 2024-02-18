const dataModel= require("../models/data-model")

const dataControllers = {
  getAll: async (req, res) => {
    try {
      const datas = await dataModel.find();
      res.send(datas);
    } catch (error) {
      res.send("an error occurred while getting data");
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const oneData = await dataModel.findById(id);
      res.send(oneData);
    } catch (error) {
      res.status(404).send("an error occurred while getting data");
    }
  },
  post: async (req, res) => {
    try {
      const { image, name, desc, price } = req.body;
      const newData = new dataModel({ image, name, desc, price });
      await newData.save();
      res.send(newData);
    } catch (error) {
      res.status(404).send("an error occurred while posting data");
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await dataModel.findByIdAndDelete(id);
      res.send("item deleted");
    } catch (error) {
      res.status(404).send("an error occurred while deleting data");
    }
  },
  edit: async (req, res) => {
    try {
      const { id } = req.params;
      await dataModel.findByIdAndUpdate(id, { ...req.body });
      res.send("item updated");
    } catch (error) {
      res.send("error");
    }
  }
};

module.exports= dataControllers