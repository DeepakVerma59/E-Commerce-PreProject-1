import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, description, price, img,review } = item;
  return (
    
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{description}</p>
        <p> {price}</p>
        <p>{review}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;