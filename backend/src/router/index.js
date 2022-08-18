const express = require("express");
const ProductController = require("../controllers/product.controller");
const BrandController = require("../controllers/brand.controller");
const CategoryController = require("../controllers/category.controller");
const UserController = require("../controllers/user.controller");

module.exports = () => {
  const router = express.Router();
  router.get("/api/products/:id", ProductController.getProductById);
  router.get("/api/products", ProductController.getProducts);
  router.post("/api/products", ProductController.createProduct);
  router.put("/api/products/:id", ProductController.updateProduct);
  router.delete("/api/products/:id", ProductController.deleteProduct);

  router.get("/api/brands/:id", BrandController.getBrandById);
  router.get("/api/brands", BrandController.getBrands);
  router.post("/api/brands", BrandController.createBrand);
  router.put("/api/brands/:id", BrandController.updateBrand);
  router.delete("/api/brands/:id", BrandController.deleteBrand);

  router.get("/api/categories/:id", CategoryController.getCategoryById);
  router.get("/api/categories", CategoryController.getCategories);
  router.post("/api/categories", CategoryController.createCategory);
  router.put("/api/categories/:id", CategoryController.updateCategory);
  router.delete("/api/categories/:id", CategoryController.deleteCategory);

  // router.get("/api/users/:id", UserController.getUserById);
  router.post("/api/users/login", UserController.login);
  router.post("/api/users/register", UserController.register);
  // router.put("/api/users/:id", UserController.updateUser);
  // router.delete("/api/users/:id", UserController.deleteUser);

  return router;
};
