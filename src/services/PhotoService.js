import axios from "axios";

const baseURL = "https://api.unsplash.com";
const url = "/photos/random";
const client_id1 = "4UbjQ1m5GxGd3iH7DXW8KCUp_lF1C-k-bpOYwvNYj8k";
const client_id2 = "LMXx8kbllH0CjiUu1DD2X4kcrT_FnR_9yTjacwXC8zY";
const params = {
  content_filter: "high",
  featured: true,
  orientation: "portrait",
  query: "wallpaper",
  count: 50,
  w: 700,
  client_id: client_id1,
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
      id: datum.id,
      url: datum.urls.custom,
      alt_description: datum.alt_description,
      downloads: datum.downloads,
      created_at: datum.created_at,
      didIliked: false,
    }));
    console.log(result);
    return result;
  }
}
