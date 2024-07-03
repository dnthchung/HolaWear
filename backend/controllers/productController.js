const db = require("../models");
const Product = db.product;
const Category = db.category;
const Tag = db.tag;
const Brand = db.brand;
const Type = db.type;

const getAllProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const filters = req.query;

  try {
    const query = {};

    // Process filters
    if (filters.category) {
      query.category = filters.category;
    }
    if (filters.brand) {
      query.brand = filters.brand;
    }

    const skip = (page - 1) * limit;
    const products = await Product.find(query).skip(skip).limit(limit);

    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      products,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { title, description, category, importPrice, price, discountPercentage, rating, stock, type, availabilityStatus, minimumOrderQuantity, images, thumbnail, reviews, tag, brand } = req.body;
    const categoryObject = await Category.findOne({ name: category });
    const tagObject = await Tag.findOne({ name: tag });
    const brandObject = await Brand.findOne({ name: brand });
    const typeObject = await Type.findOne({ name: type });

    const stockdetails = req.body.stockDetails;
    // Create a new product instance
    const newProduct = new Product({
      title,
      description,
      category: categoryObject._id,
      importPrice,
      price: 0,
      discountPercentage,
      rating,
      stock,
      type: typeObject._id,
      tag: tagObject._id,
      brand: brandObject._id,
      availabilityStatus,
      minimumOrderQuantity,
      images,
      thumbnail,
      stockDetails: stockdetails,
      reviews,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update a product by ID
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductByCategoryId = async (req, res) => {
  const categoryId = req.params.categoryId;

  try {
    // Log the categoryId and the query being executed
    console.log(`Fetching products for category ID: ${categoryId}`);

    // Find products by category ID without pagination
    const products = await Product.find({ category: categoryId });

    // Log the number of products found
    console.log(`Found ${products.length} products for category ID: ${categoryId}`);

    res.status(200).json({
      products,
      totalProducts: products.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProductByCategoryId, getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
