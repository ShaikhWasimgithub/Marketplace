import React from "react";
import "./Marketplace.css";
import searchIcon from "../assets/icons/search.svg";

const Marketplace = () => {
  return (
    <section className="marketplace-section">
      <div className="marketplace-header">
        <h1>Browse Marketplace</h1>
        <p>
          Browse through more than <span>50k NFTs</span> on the NFT Marketplace.
        </p>
      </div>

      <div className="marketplace-search">
        <input type="text" placeholder="Search your favourite NFTs" />
        <button className="search-btn">
          <img src={searchIcon} alt="search" />
        </button>
      </div>
    </section>
  );
};

export default Marketplace;
