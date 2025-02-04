
// News Card Component
import React from 'react';
import container1 from '../assets/images/Container (5).png';
import container2 from '../assets/images/Container (6).png';
import container3 from '../assets/images/Container (7).png';
import "bootstrap/dist/css/bootstrap.min.css";

const NewsCard = () => {
  const newsData = [
    {
      image: container1, // Directly use the imported variable
      title: "Working Hard to Keep Pace with very high Demand",
      date: "03 Dec, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: container2, // Directly use the imported variable
      title: "Black Friday: Bitcoins the biggest deal on from today",
      date: "03 Dec, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: container3, // Directly use the imported variable
      title: "Introducing our new payment services...",
      date: "03 Dec, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];
  return (
    <div className="App">
      {/* Header Section */}
      <header className="text-center py-4">
        <h1 className="fw-bold">OUR LATEST NEWS</h1>
        <p className="text-muted">Latest Updates to Keep You in the Loop.</p>
      </header>

      {/* News Section */}
      <div className="container mb-5">
        <div className="row">
          {newsData.map((news, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img src={news.image} className="card-img-top" alt={news.title} />
                <div className="card-body">
                  <p className="text-muted">Posted {news.date}</p>
                  <h5 className="card-title fw-bold">{news.title}</h5>
                  <p className="card-text">{news.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewsCard;

