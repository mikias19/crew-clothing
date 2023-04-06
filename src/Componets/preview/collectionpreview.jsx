import React from "react";
import "./collection_preview-style.scss";
import CollectionItems from "../collection-item/collection_items";
const CollctionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...item }) => (
            <CollectionItems key={id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollctionPreview;
