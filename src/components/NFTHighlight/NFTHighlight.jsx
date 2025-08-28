// import React from "react";
// import "./NFTHighlight.css";
// import { FaEye } from "react-icons/fa";

// const NFTHighlight = () => {
//   return (
//     <section className="highlight">
//       {/* Background image */}
//       <img
//         src="/assets/mushrooms-bg.png"
//         alt="Magic Mushrooms"
//         className="highlight-image"
//       />

//       {/* Gradient overlay */}
//       <div className="highlight-overlay">
//         <div className="highlight-content">
//           {/* Left Info Section */}
//           <div className="highlight-left">
//             {/* Artist Card */}
//             <div className="artist-card">
//               <img
//                 src="/assets/avatar.png"
//                 alt="Dish Studio"
//                 className="artist-avatar"
//               />
//               <span className="artist-name">Dish Studio</span>
//             </div>

//             {/* Title */}
//             <h2 className="highlight-title">Magic Mushrooms</h2>

//             {/* CTA Button */}
//             <button className="highlight-btn">
//               <FaEye className="btn-icon" />
//               <span>See NFT</span>
//             </button>
//           </div>

//           {/* Right Timer Section */}
//           <div className="highlight-timer">
//             <p className="timer-label">Auction ends in:</p>
//             <div className="timer-values">
//               <div className="timer-box">
//                 <h3>59</h3>
//                 <span>Hours</span>
//               </div>
//               <span className="timer-colon">:</span>
//               <div className="timer-box">
//                 <h3>59</h3>
//                 <span>Minutes</span>
//               </div>
//               <span className="timer-colon">:</span>
//               <div className="timer-box">
//                 <h3>59</h3>
//                 <span>Seconds</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NFTHighlight;
import React from "react";
import "./NFTHighlight.css";
import { FaEye } from "react-icons/fa";

const NFTHighlight = () => {
  return (
    <section className="nft-highlight-container">
      {/* Layered Background */}
      <div className="nft-highlight-bg">
        <img
          src="/assets/mushrooms-bg.png"
          alt="Magic Mushrooms"
          className="highlight-bg-img"
        />
        <div className="highlight-bg-gradient"></div>
      </div>

      {/* Main Content */}
      <div className="nft-highlight-content">
        {/* Left: Artist, Title, Button */}
        <div className="highlight-left">
          {/* Artist Card */}
          <div className="highlight-artist-card">
            <img
              src="/assets/avatar.png"
              alt="Dish Studio"
              className="artist-avatar"
            />
            <span className="artist-name">Dish Studio</span>
          </div>

          {/* Title */}
          <h2 className="highlight-title">Magic Mushrooms</h2>

          {/* Button */}
          <button className="highlight-btn">
            <FaEye className="btn-icon" />
            <span>See NFT</span>
          </button>
        </div>

        {/* Right: Timer */}
        <div className="highlight-timer-card">
          <p className="timer-label">Auction ends in:</p>
          <div className="timer-values">
            <div className="timer-box">
              <h3>59</h3>
              <span>Hours</span>
            </div>
            <span className="timer-colon">:</span>
            <div className="timer-box">
              <h3>59</h3>
              <span>Minutes</span>
            </div>
            <span className="timer-colon">:</span>
            <div className="timer-box">
              <h3>59</h3>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTHighlight;
