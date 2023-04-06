import React from "react";
import "./menu-item-style.scss";
import { useNavigate } from "react-router-dom";
const MenuItems = ({ title, imageUrl, size, linkUrl }) => {
  let navigate = useNavigate();
  console.log(imageUrl);
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="backgroundimage"
      />
      <div className="content" onClick={() => navigate(`${linkUrl}`)}>
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default MenuItems;
