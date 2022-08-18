import axios from "axios";
import { SERVICE_URL } from "../../config";

class ProductService {
  static getProducts = async () => {
    const response = await axios.get(SERVICE_URL + "/products");

    const { data } = response;

    if (!data) return [];

    return data.products;
  };
}

export default ProductService;
