import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

import React from "react";
import ProductComponent from "../components/productsComponents/ProductComponent";

export default function PostsList() {
  const posts = useSelector(selectAllPosts);

  const renderTile = posts.map((post) => (
    <ProductComponent
      //doSomething={() => buy(el.title)}
      key={post.title}
      url={post.imgurl}
      alt={post.imgalt}
      name={post.title}
      desc={post.desc}
      priceNew={post.pricenova}
      priceOld={post.pricestara}
    />
  ));

  return <>{renderTile}</>;
}
