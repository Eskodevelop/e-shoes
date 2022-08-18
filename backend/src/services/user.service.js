const User = require("../models/user.model");

// Find product by product id
const getUserById = async (id) => {
  if (!id) return;

  const user = await User.findById({ _id: id }).exec();

  if (!user) {
    console.log("User not found");
    return;
  }

  return user;
};

// Find all products
const login = async (userData) => {
  if (!userData) return;

  const user = await User.findOne({ userName: userData.userName }).exec();
  if (!user) {
    console.log("User not found!");
    return;
  } else {
    if (user.password !== userData.password) {
      console.log("Password is incorrect");
      return;
    }
  }
  return user;
};

const register = async (userData) => {
  if (!userData) return;

  const newUser = await User.create({
    userName: userData.userName,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
    role: userData.role,
  });

  if (!newUser) {
    console.log("User is not created");
  }

  return newUser;
};

const updateUser = async (id, userData) => {
  if (!id || !userData) return;

  let user = await User.findById({ _id: id }).exec();

  if (!user) {
    console.log("User not found ID: ", id);
    return;
  }

  user.userName = userData.userName;
  user.firstName = userData.firstName;
  user.lastName = userData.lastName;
  user.email = userData.email;
  user.password = userData.password;
  user.role = userData.role;

  user.save();
  return user;
};

const deleteUserById = async (id) => {
  if (!id) return;

  await User.deleteOne({ _id: id });
  console.log("User has been successfully deleted");
};

module.exports = {
  getUserById,
  login,
  register,
  updateUser,
  deleteUserById,
};
