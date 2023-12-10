const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");

//pobieram model
const Przepis = require("../models/przepis");

const PrzepisController = require("../controllers/przepisy");
 //GET
router.get('/', PrzepisController.przepisy_get_all);
 
//POST
router.post('/', checkAuth, PrzepisController.przepisy_add_new);

//parametryczne
//GET
router.get('/:przepisId',checkAuth, PrzepisController.przepisy_get_byid);
   
  //PUT
router.put('/:przepisId', checkAuth, PrzepisController.przepisy_zmien);
  
  //DELETE
router.delete('/:przepisId', checkAuth, PrzepisController.przepisy_delete);
 
module.exports = router;