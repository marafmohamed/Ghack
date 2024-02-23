const departementModel = require("../models/departementModel");
const getAllDepartements = async (req, res) => {
  try {
    const departements = await departementModel.find({});
    res.status(200).json(departements);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const addDepartement = async (req, res) => {
  const { name , company } = req.body;
  try {
    const departement = await departementModel.create({ name , company });
    res.status(200).json(departement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
const deleteDepartement = async (req, res) => {
    const { departement } = req.params;
    try {
      
        const departement = await departementModel.findByIdAndDelete({ departement });

        res.status(200).json(departement);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = {
  getAllDepartements,
  addDepartement,
  deleteDepartement,
};