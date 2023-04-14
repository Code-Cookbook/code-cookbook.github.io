import React from "react";

const GumroadEmbed = ({ slug }) => {
  return (
    <div>
      <div className="gumroad-product-embed">
        <a href={`https://8520699716163.gumroad.com/l/${slug}`}>
          Loading...
        </a>
      </div>
    </div>
  );
};

export default GumroadEmbed;
