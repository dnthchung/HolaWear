const express = require('express');
const brandRouter = express.Router();
const brandController = require('../controllers/brandController');

brandRouter.get('/', brandController.getAllBrands);
brandRouter.get('/:id', brandController.getBrandById);
brandRouter.post('/', brandController.createBrand);
brandRouter.put('/:id', brandController.updateBrand);
brandRouter.patch('/:id/disable', brandController.disableBrand);

module.exports = brandRouter;
