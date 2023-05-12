import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Playstation 5 C chasis",
    desc: "mali opis proizvoda u kratkim crtama",
    pricenova: "549,99",
    pricestara: "4.143,90",
    imgurl:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps4-product-thumbnail-01-en-14sep21?$facebook$",
    imgalt: "ime proizvoda",
  },
  {
    title: "Playstation 5 C ",
    desc: "mali opis proizvoda u kratkim crtama",
    pricenova: "549,99",
    pricestara: "4.143,90",
    imgurl:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps4-product-thumbnail-01-en-14sep21?$facebook$",
    imgalt: "ime proizvoda",
  },
  {
    title: "Playstation 5",
    desc: "mali opis proizvoda u kratkim crtama",
    pricenova: "549,99",
    pricestara: "4.143,90",
    imgurl:
      "https://gmedia.playstation.com/is/image/SIEPDC/ps4-product-thumbnail-01-en-14sep21?$facebook$",
    imgalt: "ime proizvoda",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
