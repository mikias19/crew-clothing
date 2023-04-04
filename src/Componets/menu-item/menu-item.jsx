import React from "react";
import "./menu-item-style.scss";
const MenuItems = ({ title, imageUrl, size }) => {
  console.log(imageUrl);
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="backgroundimage"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default MenuItems;
