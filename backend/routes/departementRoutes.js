const express = require('express');
const router = express.Router();
const {
  getAllDepartements,
  addDepartement,
} = require('../Controllers/departementControllers');
router.get('/allDepartements', getAllDepartements);
router.post('/addDepartement', addDepartement);
module.exports = router;