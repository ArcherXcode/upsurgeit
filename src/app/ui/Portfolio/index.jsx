import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button";
import Div from "../Div";
import Spacing from "../Spacing";

export default function Portfolio3({ portfolioData }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 2000, // Slide every 3 seconds
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "15px", // Adjust padding for smaller screens
        },
      },
    ],
  };

  return (
    <Div className="cs-portfolio cs-style2 cs-slider">
      <Div className="container">
        <Slider {...settings}>
          {portfolioData?.map((item, index) => (
            <Div
              key={index}
              className={`cs-portfolio_card ${
                index === 1
                  ? "transform scale-110 transition-transform duration-500" // Animation for middle card
                  : "transform scale-100 transition-transform duration-500"
              }`}
              style={{
                padding: "10px", // Add consistent spacing between cards
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Div
                className={`cs-portfolio_img cs-hover-effect ${
                  hoveredIndex === index ? "cs-hover-active" : ""
                }`}
              >
                <h3 className="cs-portfolio_img_title">{item.category}</h3>
                <Div className="overflow-hidden rounded-lg w-[350px] h-[350px]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                </Div>
              </Div>
              <Div className="cs-portfolio_details pt-3">
                <span
                  style={{ fontSize: "32px", fontWeight: "600" }}
                  className="text-white"
                >
                  {item.title}
                </span>
                <Spacing lg="20" md="10" />
                {item.btnLink ? (
                  <Button btnLink={item.btnLink} btnText={item.btnText} />
                ) : null}
              </Div>
            </Div>
          ))}
        </Slider>
      </Div>
    </Div>
  );
}
