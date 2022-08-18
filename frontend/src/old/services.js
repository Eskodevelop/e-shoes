import axios from "axios";

const URL = "mongodb://localhost:27017/api/brands";

class ServicesBrands {
  static async getAll() {
    return await axios.get(URL);
  }
}
export default ServicesBrands;
