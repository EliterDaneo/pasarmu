//import axios
import axios from "axios";

const Api = axios.create({
  //set default endpoint API
  baseURL: "http://penjualan.smkmutuwsb.sch.id/api",
});

export default Api;
