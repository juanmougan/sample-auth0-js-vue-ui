import axios from "axios"

export default {
  async getUsers() {
    let res = await axios.get("http://localhost:3000/users");
    return res.data;
  }
}
