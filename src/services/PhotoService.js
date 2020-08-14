import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const baseURL = "https://api.unsplash.com";
const collection = "162470";
const url = `/collections/${collection}/photos`;

const client_id1 = "4UbjQ1m5GxGd3iH7DXW8KCUp_lF1C-k-bpOYwvNYj8k";
const client_id2 = "LMXx8kbllH0CjiUu1DD2X4kcrT_FnR_9yTjacwXC8zY";
const client_id3 = "nLiOUFEzySn2iky1ZHM9NiDoC99dDysByJVxIZ8r6YE";

const params = {
  page: 10,
  per_page: 100,
  client_id: client_id3,
};

const options = {
  method: "GET",
  baseURL,
  url,
  params,
};

export default class {
  static async getPhotos() {
    // Promise.all([])
    const res1 = await axios(options);
    const res2 = await axios(options);

    const data1 = await res1.data;
    const data2 = await res2.data;

    // const result = data1.map((datum) => ({
    const result = [...data1, ...data2].map((datum) => ({
      id: uuidv4(),
      url: datum.urls.regular,
      alt_description: datum.alt_description,
      likes: datum.likes,
      created_at: datum.created_at,
      didIliked: false,
    }));
    return result;
  }
}
