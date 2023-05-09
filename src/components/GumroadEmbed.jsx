import React from "react";

const GumroadEmbed = ({ slug }) => {
  return (
    <div>
      <div className="gumroad-product-embed">
        <a href={`https://shop.codecookbook.io/l/${slug}`}>Loading...</a>
      </div>
    </div>
  );
};

export default GumroadEmbed;
