import React from "react";
import SHOP_DATA from "./shop_data";
import CollctionPreview from "../../preview/collectionpreview";

export class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collections: SHOP_DATA };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...collection }) => (
          <CollctionPreview key={id} {...collection} />
        ))}
        ;
      </div>
    );
  }
}
