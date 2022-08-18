// import React from "react";
// import { ReactDOM } from "react";
import Brands from "../Brands/Brands";
import Categories from "../Categories/Categories";
import Login from "../Login/Login";
import Products from "../Products/Products";
import Register from "../Register/Register";

export const ROUTES = [
  {
    path: "/",
    name: "esko",
    component: Products,
  },
  {
    path: "/categories",
    name: "esko",
    component: Categories,
  },
  {
    path: "/brands",
    name: "esko",
    component: Brands,
  },
  {
    path: "/login",
    name: "esko",
    component: Login,
  },
  {
    path: "/register",
    name: "esko",
    component: Register,
  },
];
