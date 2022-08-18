const CategoryService = require("../services/category.service");

const getCategoryById = async (req, res) => {
  if (!req.params.id)
    return res.send({ status: 400, message: "Category ID is not provided" });
  const category = await CategoryService.getCategoryById(req.params.id);
  return res.send({ category });
};

const getCategories = async (req, res) => {
  const categories = await CategoryService.getCategories();
  return res.send({ status: 200, categories });
};

const createCategory = async (req, res) => {
  const createdCategory = await CategoryService.createCategory(req.body);
  if (!createdCategory) {
    return res.send({ status: 400, message: "Category is not created." });
    // return res.sendStatus(400).json({msg: "Ovo je drugi način!"}) // drugi nacin
  }
  return res.send({ status: 200, message: "Category is created sucesfully!" });
};

const updateCategory = async (req, res) => {
  const updatedCategory = await CategoryService.updateCategory(
    req.params.id,
    req.body
  );
  if (!updatedCategory) {
    return res.send({ status: 400, message: "Couldn't find category." });
  }
  return res.send({ status: 200, message: "Category succesfully updated." });
};

const deleteCategory = async (req, res) => {
  await CategoryService.deleteCategoryById(req.params.id);
  return res.send({ status: 200, message: "Category sucessfully deleted." });
};

module.exports = {
  getCategoryById,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
