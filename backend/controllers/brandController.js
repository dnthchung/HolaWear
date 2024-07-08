const Brand = require('../models/brand.model');

async function getAllBrands(req, res, next) {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    next(err);
  }
}

async function getBrandById(req, res, next) {
  try {
    const brand = await Brand.findById(req.params.id);
    if (brand && brand.status) {
      res.json(brand);
    } else {
      res.status(404).json({ message: 'Brand not found' });
    }
  } catch (err) {
    next(err);
  
  }
}

async function createBrand(req, res, next) {
  try {
    const brand = new Brand({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      status: true // Default to active
    });
    const newBrand = await brand.save();
    res.status(201).json(newBrand);
  } catch (err) {
    next(err);
  }
}

async function updateBrand(req, res, next) {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    if (req.body.name != null) {
      brand.name = req.body.name;
    }
    if (req.body.description != null) {
      brand.description = req.body.description;
    }
    if (req.body.image != null) {
      brand.image = req.body.image;
    }
    if (req.body.status != null) {
      brand.status = req.body.status;
    }

    const updatedBrand = await brand.save();
    res.json(updatedBrand);
  } catch (err) {
    next(err);
  }
}

async function disableBrand(req, res, next) {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    brand.status = false;
    await brand.save();
    res.json({ message: 'Brand disabled' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  disableBrand
};
