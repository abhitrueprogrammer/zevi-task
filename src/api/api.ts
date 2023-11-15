import axios from "axios";

export async function getSearchData() {
  const { data } = await axios.get("/data/search");
  return data;
}

export async function getData() {
  const { data } = await axios.get("/data");
  return data;
}
