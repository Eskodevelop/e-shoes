const BrandService = require("../services/brand.service");

const getBrandById = async (req, res) => {
  if (!req.params.id)
    return res.send({ status: 400, message: "User id is not provided" });
  const brand = await BrandService.getBrandById(req.params.id);
  return res.send({ brand });
};

const getBrands = async (req, res) => {
  const brands = await BrandService.getBrands();
  return res.send({ status: 200, brands });
};

const createBrand = async (req, res) => {
  const createdBrand = await BrandService.createBrand(req.body);
  if (!createdBrand) {
    return res.send({ status: 400, message: "Brand is not created." });
    // return res.sendStatus(400).json({msg: "Ovo je drugi način!"}) // drugi nacin
  }
  return res.send({ status: 200, message: "Brand is created succesfully!" });
};

const updateBrand = async (req, res) => {
  const updatedBrand = await BrandService.updateBrand(req.params.id, req.body);
  if (!updatedBrand) {
    return res.send({ status: 400, message: "Couldn't find brand." });
  }
  return res.send({ status: 200, message: "Brand succesfully updated." });
};

const deleteBrand = async (req, res) => {
  await BrandService.deleteBrandById(req.params.id);
  return res.send({ status: 200, message: "Brand sucessfully deleted." });
};

module.exports = {
  getBrandById,
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
};
