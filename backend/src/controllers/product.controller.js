const ProductService = require("../services/product.service");

// Find product by product id
const getProductById = async (req, res) => {
  if (!req.params.id)
    return res.send({ status: 400, message: "Id isn't provided!" });

  const product = await ProductService.getProductById(req.params.id);

  return res.send({ product });
};

// Find all products
const getProducts = async (req, res) => {
  const products = await ProductService.getProducts();
  return res.send({ status: 200, products });
};

const createProduct = async (req, res) => {
  // const {name, price, codNum, categoryId, brandId, userId} = req.body; // destructing of object
  const createdProduct = await ProductService.createProduct(req.body);
  if (!createdProduct) {
    return res.send({ status: 400, message: "Product is not created." });
    // return res.sendStatus(400).json({msg: "Ovo je drugi način!"}) // drugi nacin
  }
  return res.send({ status: 200, message: "Product is created sucesfully!" });
};

const updateProduct = async (req, res) => {
  const updatedProduct = await ProductService.updateProduct(
    req.params.id,
    req.body
  );
  if (!updatedProduct) {
    return res.send({ status: 400, message: "Couldn't find product." });
  }
  return res.send({ status: 200, message: "Product succesfully updated." });
};

const deleteProduct = async (req, res) => {
  await ProductService.deleteProduct(req.params.id);
  return res.send({ status: 200, message: "Product sucessfully deleted." });
};

module.exports = {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
