import axios from "axios";

export async function getSearchData() {
  const { data } = await axios.get("/data/search");
  return data;
}
