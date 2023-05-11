import React, { useEffect, useState } from "react";
import ProductComponent from "./productsComponents/ProductComponent";
import Brands from "../pages/Brands";
import StickyHeaderComponents from "./StickyHeaderComponents";
import PagesSearchComponent from "./PagesSearchComponent";

export default function GamingComponent({ count }) {
  const products = [
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

  const [id, setId] = useState([]);

  const buy = (el) => {
    setId([...id, { id: new Date(), name: el }]);
  };

  return (
    <>
      {
        <>
          <StickyHeaderComponents />
          <PagesSearchComponent count={id.length} />
        </>
      }
      <div className="gaming">
        {products.map((el) => (
          <ProductComponent
            doSomething={() => buy(el.title)}
            key={el.title}
            url={el.imgurl}
            alt={el.imgalt}
            name={el.title}
            desc={el.desc}
            priceNew={el.pricenova}
            priceOld={el.pricestara}
          />
        ))}
      </div>
    </>
  );
}
