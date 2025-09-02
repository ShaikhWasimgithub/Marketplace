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
    <section className="nft-hero" aria-label="Magic Mushrooms NFT Highlight">
      {/* Background image with eager loading */}
      <div className="hero-bg-image" aria-hidden="true" role="img"></div>

      {/* Gradient overlay */}
      <div className="hero-gradient-overlay" aria-hidden="true"></div>

      <div className="hero-content">
        {/* Left side: Artist + Title + Button */}
        <div className="highlight-left">
          {/* Artist Card */}
          <div className="artist-card">
            <img
              src="/assets/avatar.png"
              alt="Dish Studio"
              className="artist-avatar"
            />
            <span className="artist-name">Shroomie</span>
          </div>

          {/* Title */}
          <h1 className="highlight-title">Magic Mushrooms</h1>

          {/* Button */}
          <button className="highlight-btn">
            <FaEye className="btn-icon" />
            <span>See NFT</span>
          </button>
        </div>

        {/* Right side: Timer */}
        <div className="highlight-timer">
          <p className="timer-label">Auction ends in:</p>
          <div className="timer-values">
            <div className="timer-box">
              <span className="time-value">59</span>
              <span className="time-label">Hours</span>
            </div>
            <span className="timer-colon">:</span>
            <div className="timer-box">
              <span className="time-value">59</span>
              <span className="time-label">Minutes</span>
            </div>
            <span className="timer-colon">:</span>
            <div className="timer-box">
              <span className="time-value">59</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTHighlight;
