import React from "react";
import "./DiscoverMoreNFTs.css";

const nfts = [
  {
    id: 1,
    title: "Magic Mushroom ",
    artist: "Shroomie",
    image: "../assets/nfts/nft-1.jpg",
    avatar: "../assets/artists/artist-1.jpg",
  },
  {
    id: 2,
    title: "Happy Robot ",
    artist: "Robotica",
    image: "../assets/nfts/nft-2.jpg",
    avatar: "../assets/artists/artist-2.jpg",
  },
  {
    id: 3,
    title: "Happy Robot ",
    artist: "BeKind2Robots",
    image: "../assets/nfts/nft-3.jpg",
    avatar: "../assets/artists/artist-3.jpg",
  },
];

export default function DiscoverMoreNFTs() {
  return (
    <section className="discover-section">
      {/* Header */}
      <div className="discover-header">
        <div className="header-texts">
          <h2>Discover More NFTs</h2>
          <p className="sub-text">Explore new trending NFTs</p>
        </div>
        {/* Desktop Button */}
        <button className="view-all-btn desktop-only">
          <img src="/icons/eye.png" alt="eye" />
          View All
        </button>
      </div>

      {/* NFT Cards */}
      <div className="nft-grid">
        {nfts.map((nft) => (
          <div className="nft-card" key={nft.id}>
            <img src={nft.image} alt={nft.title} className="nft-image" />
            <div className="nft-info">
              <h3>{nft.title}</h3>
              <div className="nft-artist">
                <img src={nft.avatar} alt={nft.artist} />
                <span>{nft.artist}</span>
              </div>
              <div className="nft-stats">
                <div>
                  <p>Price</p>
                  <span>1.63 ETH</span>
                </div>
                <div>
                  <p>Highest Bid</p>
                  <span>0.33 wETH</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Button */}
      <button className="view-all-btn mobile-only">
        <img src="/icons/eye.png" alt="eye" />
        View All
      </button>
    </section>
  );
}
