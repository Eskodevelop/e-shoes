const Brand = require("../models/brand.model");

const getBrandById = async (id) => {
  if (!id) return;

  const brand = await Brand.findById({ _id: id }).exec();

  if (!brand) {
    console.log("Brand not found");
    return;
  }
  return brand;
};

// Find all products
const getBrands = async () => {
  return await Brand.find();
};

const createBrand = async (brandData) => {
  if (!brandData) return;

  const newBrand = await Brand.create({
    name: brandData.name,
  });

  if (!newBrand) {
    console.log("Brand is not created");
    return;
  }
  return newBrand;
};

const updateBrand = async (id, brandData) => {
  if (!id || !brandData) return;

  let brand = await Brand.findById({ _id: id }).exec();

  if (!brand) {
    console.log("Brand not found ID: ", id);
    return;
  }

  brand.name = brandData.name;

  brand.save();
  return brand;
};

const deleteBrandById = async (id) => {
  if (!id) return;

  await Brand.deleteOne({ _id: id });
  console.log("Brand has been successfully deleted");
};

module.exports = {
  getBrandById,
  getBrands,
  createBrand,
  updateBrand,
  deleteBrandById,
};
