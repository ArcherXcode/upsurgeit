"use client";
import { useState } from "react";
import PortfolioPage from "../app/portfolio/page";
import Cta from "../app/ui/Cta";
import LogoList from "../app/ui/LogoList";
import Tech from "../app/ui/Tech";
import FaqPage from "./faq/page";
import Div from "./ui/Div";
import FunFact2 from "./ui/FunFact/FunFact2";
import Hero4 from "./ui/Hero/Hero4";
import MovingText2 from "./ui/MovingText/MovingText2";
import SectionHeading from "./ui/SectionHeading";
import Spacing from "./ui/Spacing";
import VideoModal from "./ui/VideoModal";
const heroSocialLinks = [
  {
    name: "Instagram",
    links: "https://www.instagram.com/upsurgemedia.in/",
  },
  {
    name: "LinkedIn",
    links: "https://www.linkedin.com/company/upsurge-media-pvt-ltd",
  },
];
const funfaceData = [
  {
    title: "Mobile Apps Delivered",
    factNumber: "5",
  },
  {
    title: "Global Happy clients",
    factNumber: "20",
  },
  {
    title: "Project completed",
    factNumber: "20",
  },
  {
    title: "Team members",
    factNumber: "15",
  },
];
const serviceData1 = [
  {
    title: "UI/UX Design",
    href: "/service/service-details",
  },
  {
    title: "Web Development",
    href: "/service/service-details",
  },
  {
    title: "App Development",
    href: "/service/service-details",
  },
];
const serviceData2 = [
  {
    title: "SEO",
    href: "/service/service-details",
  },
  {
    title: "Google/Meta Ads",
    href: "/service/service-details",
  },
  {
    title: "Cross Platform Applications",
    href: "/service/service-details",
  },
];
const portfolioData = [
  {
    title: "Navstream.in",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/navstream.png",
    category: "web_development",
    btnLink: "/navstream",
    btnText: "View Project",
  },
  {
    title: "Articult",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/articult.png",
    category: "web_development",
    btnLink: "/articult",
    btnText: "View Project",
  },
  {
    title: "Dopethreads",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/dopethreads.png",
    category: "web_development",
    btnLink: "/dopethreads",
    btnText: "View Project",
  },
  {
    title: "Cognileap Eduventures",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/cognileap.png",
    category: "web_development",
    btnLink: "/cognileap",
    btnText: "View Project",
  },
  {
    title: "Kicks & Co",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio/kicksandco.png",
    category: "web_development",
    btnLink: "/kicksandco",
    btnText: "View Project",
  },
];

export default function Home() {
  const [itemShow, setItemShow] = useState(6);
  return (
    <>
      {/* Start Hero Section */}
      <Hero4
        title="We Are <span>Upsurge</span> Media<br />"
        subtitle="Upsurge Media Pvt. Ltd. is the best Website and Application development company in Noida, offering modern, responsive, and SEO-friendly websites that drive leads and grow your business. We specialize in E-commerce, CMS, dynamic, static, and corporate websites, ensuring cutting-edge designs tailored to your audience. Let us create a unique and high-performing website for you!"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+91-9911416882"
        email="info@upsurgemedia.in"
      />
      {/* End Hero Section */}

      {/* Start Funfact Section */}
      <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-type1"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* End Funfact Section */}

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="What we provide"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="65" md="45" />
      </Div>
      {/* End Services Section */}

      {/* Start Moving Text Section */}
      <MovingText2 data={serviceData1} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={serviceData2} />
      {/* End Moving Text Section */}

      {/* Start About Section */}
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_white"></Div>
        <Div className="cs-shape_white"></Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Best Software Development Agency in Delhi NCR"
                subtitle="Why Choose Us"
                btnText="Learn More"
                btnLink="/about"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <Div className="cs-half_screen">
                <VideoModal
                  videoSrc="https://www.youtube.com/watch?v=1wjBjYzkOiI"
                  bgUrl="/images/video_bg.jpeg"
                  variant="cs-style1 cs-size1"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End About Section */}

      <Div className="container">
        <Div className="row">
          <Tech />
        </Div>
      </Div>
      {/* Start Projects Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Portfolio to explore"
          subtitle="Latest Projects"
          variant="cs-style1 text-center"
        />
        <Div className="row">
          <PortfolioPage
            portfolioData={portfolioData}
            variant="cs-style1 cs-type1"
          />
        </Div>
      </Div>
      {/* End Projects Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="140" md="80" /> */}
      
      {/* End Awards Section */}
      <Div className="container">
        <Div className="row">
          {/* <FAQPage /> */}
          <FaqPage/>
        </Div>
      </Div>
      {/* <Spacing lg="145" md="80" /> */}
      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="145" md="80" />
      {/* End Blog Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <SectionHeading
          title="Our reputed partner"
          subtitle="Top Clients"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s make <br />something <b><i>cool</i></b> together"
          btnText="Book a free Consultation"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
