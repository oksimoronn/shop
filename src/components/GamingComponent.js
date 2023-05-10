import React from "react";
import ProductComponent from "./productsComponents/ProductComponent";
import Brands from "../pages/Brands";

export default function GamingComponent() {
  const products = [
    {
      title: "Playstation 5 C chasis",
      desc: "mali opis proizvoda u kratkim crtama",
      pricenova: "549,99",
      pricestara: "4.143,90",
      imgurl: "",
      imgalt: "ime proizvoda",
    },
    {
      title: "Playstation 5 C chasis",
      desc: "mali opis proizvoda u kratkim crtama",
      pricenova: "549,99",
      pricestara: "4.143,90",
      imgurl: "",
      imgalt: "ime proizvoda",
    },
    {
      title: "Playstation 5 C chasis",
      desc: "mali opis proizvoda u kratkim crtama",
      pricenova: "549,99",
      pricestara: "4.143,90",
      imgurl: "",
      imgalt: "ime proizvoda",
    },
  ];
  return (
    <div>
      {<Brands />}
      {products.map((el) => (
        <ProductComponent
          url={el.imgurl}
          alt={el.imgalt}
          name={el.title}
          desc={el.desc}
          priceNew={el.pricenova}
          priceOld={el.pricestara}
        />
      ))}
    </div>
  );
}
