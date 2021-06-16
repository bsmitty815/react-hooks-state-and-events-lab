import React, { useState } from "react";



function Item({ name, category }) {
  const [isOn, setIsOn] = useState(false)

  function AddToCartButtonClicked() {
    setIsOn((isOn) => !isOn)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isOn ? "in-cart" : ""} onClick={AddToCartButtonClicked}>{isOn ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
