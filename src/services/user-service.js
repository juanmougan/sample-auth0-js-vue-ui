import axios from "axios"

export default {
  async getUsers(accessToken) {
    let res = await axios.get("http://localhost:3000/users", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return res.data;
  }
}
