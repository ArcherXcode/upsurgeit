"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import PageHeading from "../ui/PageHeading";
import Spacing from "../ui/Spacing";
import Div from "../ui/Div";
import SectionHeading from "../ui/SectionHeading";
import Cta from "../ui/Cta";
import Portfolio from "../ui/Portfolio/Portfolio2";
const portfolioData = [
  // {
  //   title: "Navstream.in",
  //   href: "/portfolio/portfolio-details",
  //   src: "/images/portfolio/navstream.png",
  //   category: "web_development",
  //   btnLink: "/navstream",
  //   btnText: "View Project",
  // },
  {
    title: "Articult",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/articult.PNG",
    category: "web_development",
    btnLink: "/articult",
    btnText: "View Project",
  },
  {
    title: "Dopethreads",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/dopethreads.PNG",
    category: "web_development",
    btnLink: "/dopethreads",
    btnText: "View Project",
  },
  // {
  //   title: "Cognileap Eduventures",
  //   href: "/portfolio/portfolio-details",
  //   src: "/images/portfolio/cognileap.png",
  //   category: "web_development",
  //   btnLink: "/cognileap",
  //   btnText: "View Project",
  // },
  {
    title: "Kicks & Co",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/kicksco.png",
    category: "web_development",
    btnLink: "/kicksandco",
    btnText: "View Project",
  },
];
const categoryMenu = [
  {
    title: "Web Application",
    category: "web_design",
  },
  {
    title: "UI/UX Design",
    category: "ui_ux_design",
  },
  {
    title: "Mobile Applications",
    category: "mobile_apps",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(7);

  return (
    <>
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          {/* <SectionHeading title="Some recent work" subtitle="" /> */}
          <Div className="cs-filter_menu cs-style1">
            {/* <ul className="cs-mp0 cs-center">
              <li className={active === "all" ? "active" : ""}>
                <span onClick={() => setActive("all")}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? "active" : ""}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul> */}
          </Div>
        </Div>
        {/* <Spacing lg="90" md="45" /> */}
        <Div className="row">
        <Spacing lg="25" md="25" />
        <Spacing lg="25" md="25" />
        <Spacing lg="25" md="25" />
        <Spacing lg="25" md="25" />

          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? "col-lg-8" : "col-lg-4"
              } ${
                active === "all"
                  ? ""
                  : !(active === item.category)
                  ? "d-none"
                  : ""
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                imageUrl={item.src}
                category={item.category}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ""
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
    </>
  );
}
