import React from "react";

export default function ProductComponent({
  url,
  alt,
  name,
  desc,
  priceNew,
  priceOld,
}) {
  return (
    <div>
      <img src={url} alt={alt}></img>
      <p>
        <span>Besplatna dostava</span>
        <span> Isporuka odmah</span>
      </p>
      <h5>{name}</h5>
      <p>{desc}</p>
      <p>
        <span>{priceNew} €</span>
        <span>{priceOld} kn</span>
      </p>
    </div>
  );
}
