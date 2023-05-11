import React, { useEffect, useState } from "react";

export default function ProductComponent({
  url,
  alt,
  name,
  desc,
  priceNew,
  priceOld,
  doSomething,
}) {
  return (
    <div className="tile">
      <img src={url} alt={alt} width="80%"></img>
      <h5>{name}</h5>
      <p>{desc}</p>
      <p className="price">
        <span>{priceNew} €</span>
        <span>{priceOld} kn</span>
      </p>
      <button onClick={doSomething}>Kupi</button>
    </div>
  );
}
