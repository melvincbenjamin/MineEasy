import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "../assets/images/Homepage.png"; // Import the background image
import NewsCard from "../components/NewsCard";


const Blog = () => {
  return (
    <div>
      {/* Background Image Section */}
        {/* Header Section */}
        <div
        className="home-container text-white"
        style={{
          backgroundImage: `url(${Homepage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100vw",
          position: "relative",
        }}
      >
        {/* Overlay to darken the image */}
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
            zIndex: 1,
          }}
        ></div>

        {/* Content on the image */}
<div 
  style={{
    position: "relative",
    zIndex: 2,
    paddingTop: "100px",
  }}
>
  <h4 className="text-center">
    Blog Classic
  </h4>
  <p className="mt-3 fs-6 fs-md-5 fs-lg-4 text-center">
    Stay Informed: Latest News and Insights on Crypto Mining and Trading
  </p>
  <div>
    </div>
    </div>
    </div>
    <div>
        <NewsCard />
    </div>
    </div>
  );
};

export default Blog;
