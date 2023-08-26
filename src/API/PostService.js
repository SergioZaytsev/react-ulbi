import axios from "axios";
export default class PostServise {
  static async getAll(page = 1, limit = 10) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: page,
      },
    });

    return response;
  }
  static async getPostId(id) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
    return response.data;
  }

  static async getComments(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response.data;
  }
}
