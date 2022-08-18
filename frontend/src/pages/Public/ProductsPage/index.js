import React, { useEffect, useState } from "react";

import ProductService from "../../../services/ProductService";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductService.getProducts();

      if (!data) return;

      setProducts(data);
    };

    fetchProducts();
  }, []);

  const renderItems = () => {
    return products.map((item, idx) => {
      return (
        <div className="product-item">
          <div className="product-name">
            <h4>{item.name}</h4>
          </div>
          <div className="product-price">
            <p>{/* <strong>{item.price}</strong> */}</p>
          </div>
          <div className="product-codenum">
            <p>
              <strong>{item.codeNumber}</strong>
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="products-page">
      <div className="page-title">
        <h2>ProductsPage-public</h2>
      </div>

      <div className="products-list">{renderItems()}</div>
    </div>
  );
};

export default ProductsPage;
