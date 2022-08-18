import React from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Anonymous/Login";
import HomePage from "./pages/Public/HomePage";
import ProductsPage from "./pages/Public/ProductsPage";
import AdminProductsPage from "./pages/Protected/ProductsPage";

const App = () => {
  const LoginContainer = () => {
    return (
      <div className="app-login-container">
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </div>
    );
  };

  const PublicContainer = () => {
    return (
      <div className="app-public-container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    );
  };
  const ProtectedContainer = () => {
    return (
      <div className="app-admin-container">
        <Routes>
          <Route path="/products" element={<AdminProductsPage />} />
        </Routes>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/login/*" exact element={<LoginContainer />} />
      <Route path="/*" exact element={<PublicContainer />} />
      <Route path="/admin/*" exact element={<ProtectedContainer />} />
    </Routes>
  );
};

export default App;
