const express = require('express');
const colorRouter = express.Router();
const colorController = require('../controllers/colorController');

colorRouter.get('/', colorController.getAllColors);
colorRouter.get('/:id', colorController.getColorById);
colorRouter.post('/', colorController.createColor);
colorRouter.put('/:id', colorController.updateColor);
colorRouter.patch('/:id/disable', colorController.disableColor);

module.exports = colorRouter;
