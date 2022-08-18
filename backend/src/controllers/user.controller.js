const UserService = require("../services/user.service");

const getUserById = async (req, res) => {
  if (!req.params.id) res.sendStatus("User id is not provided");
  const user = await UserService.getUserById(req.params.id);
  return res.send({ user });
};

const login = async (req, res) => {
  const user = await UserService.login(req.body);
  if (!user)
    return res.send({
      status: 400,
      message: "User credentials are incorrect.",
    });
  return res.send({ status: 200, user });
};

const register = async (req, res) => {
  const createdUser = await UserService.register(req.body);
  if (!createdUser) {
    return res.send({ status: 400, message: "User is not created." });
    // return res.sendStatus(400).json({msg: "Ovo je drugi način!"}) // drugi nacin
  }
  return res.send({ status: 200, message: "User is created sucesfully!" });
};

const updateUser = async (req, res) => {
  const updatedUser = await UserService.updateUser(req.body);
  if (!updatedUser) {
    return res.send({ status: 400, message: "Couldn't find user." });
  }
  return res.send({ status: 200, message: "User succesfully updated." });
};

const deleteUser = async (req, res) => {
  await UserService.deleteUserById(req.params.id);
  return res.send({ status: 200, message: "User sucessfully deleted." });
};

module.exports = {
  getUserById,
  login,
  register,
  updateUser,
  deleteUser,
};
