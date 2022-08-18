const Product = require("../models/product.model");

// Find product by product id
const getProductById = async (id) => {
  if (!id) return;

  const product = await Product.findById({ _id: id }).exec();

  if (!product) {
    console.log("Product not found");
    return;
  }

  return product;
};

// Find all products
const getProducts = async () => {
  return await Product.find();
};

const createProduct = async (productData) => {
  if (!productData) return;

  const newProduct = await Product.create({
    name: productData.name,
    price: productData.price,
    codeNum: productData.codeNum,
    brandId: productData.brandId,
    categoryId: productData.categoryId,
    userId: productData.userId,
  });

  if (!newProduct) {
    console.log("Product is not created");
  }

  return newProduct;
};

const updateProduct = async (id, productData) => {
  if (!id || !productData) return;

  let product = await Product.findById({ _id: id }).exec();

  if (!product) {
    console.log("Product not found ID: ", id);
    return;
  }

  product.name = productData.name;
  product.price = productData.price;
  product.codeNum = productData.codeNum;
  product.brandId = productData.brandId;
  product.categoryId = productData.categoryId;
  product.userId = productData.userId;

  product.save();
  return product;
};

const deleteProduct = async (id) => {
  if (!id) return;

  await Product.deleteOne({ _id: id });
  console.log("User has been successfully deleted");
};

module.exports = {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
