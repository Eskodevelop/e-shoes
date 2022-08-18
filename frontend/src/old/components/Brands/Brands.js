import React, { useState, useEffect } from "react";
import ServicesBrands from "../services";

const Brands = () => {
  const [brands, setBrands] = useState("");
  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = () => {
    ServicesBrands.getAll().then((response) => {
      if (response.data) {
        setBrands([]);
      }
      console.log(response.data);
    });
  };

  return <div>Brands</div>;
};

export default Brands;
