const Category = require("../models/category.model");

const getCategoryById = async (id) => {
  if (!id) return;

  const category = await Category.findById({ _id: id }).exec();

  if (!category) {
    console.log("Category not found");
    return;
  }
  return category;
};

// Find all products
const getCategories = async () => {
  return await Category.find();
};

const createCategory = async (categoryData) => {
  if (!categoryData) return;

  const newCategory = await Category.create({
    name: categoryData.name,
  });

  if (!newCategory) {
    console.log("Category is not created");
    return;
  }
  return newCategory;
};

const updateCategory = async (id, categoryData) => {
  if (!id || !categoryData) return;

  let category = await Category.findById({ _id: id }).exec();

  if (!category) {
    console.log("Category not found ID: ", id);
    return;
  }

  category.name = categoryData.name;

  category.save();
  return category;
};

const deleteCategoryById = async (id) => {
  if (!id) return;

  await Category.deleteOne({ _id: id });
  console.log("Category has been successfully deleted");
};

module.exports = {
  getCategoryById,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategoryById,
};
