const Color = require('../models/color.model');

async function getAllColors(req, res, next) {
  try {
    const colors = await Color.find();
    res.json(colors);
  } catch (err) {
    next(err);
  }
}

async function getColorById(req, res, next) {
  try {
    const color = await Color.findById(req.params.id);
    if (color && color.status) {
      res.json(color);
    } else {
      res.status(404).json({ message: 'Color not found' });
    }
  } catch (err) {
    next(err);
  }
}

async function createColor(req, res, next) {
  try {
    const color = new Color({
      code: req.body.code,
      status: true // Default to active
    });
    const newColor = await color.save();
    res.status(201).json(newColor);
  } catch (err) {
    next(err);
  }
}

async function updateColor(req, res, next) {
  try {
    const color = await Color.findById(req.params.id);
    if (!color) {
      return res.status(404).json({ message: 'Color not found' });
    }

    if (req.body.code != null) {
      color.code = req.body.code;
    }
    if (req.body.status != null) {
      color.status = req.body.status;
    }

    const updatedColor = await color.save();
    res.json(updatedColor);
  } catch (err) {
    next(err);
  }
}

async function disableColor(req, res, next) {
  try {
    const color = await Color.findById(req.params.id);
    if (!color) {
      return res.status(404).json({ message: 'Color not found' });
    }
    color.status = false;
    await color.save();
    res.json({ message: 'Color disabled' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllColors,
  getColorById,
  createColor,
  updateColor,
  disableColor
};
