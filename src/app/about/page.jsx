"use client";
import Image from "next/image";
import aboutImg from "../../../public/images/about_img_1.jpeg";
import aboutImg2 from "../../../public/images/about_img_2.jpeg";
import aboutImg3 from "../../../public/images/about_img_3.jpeg";
import aboutImg4 from "../../../public/images/about_img_4.jpeg";
import PageHeading from "../ui/PageHeading";
import Spacing from "../ui/Spacing";
import Div from "../ui/Div";
import SectionHeading from "../ui/SectionHeading";
import FunFact from "../ui/FunFact";
import TeamSlider from "../ui/Slider/TeamSlider";
import Cta from "../ui/Cta";

const funfaceData = [
  {
    title: "Mobile Apps Delivered",
    factNumber: "5",
  },
  {
    title: "Global happy clients",
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

export default function AboutPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle="About Our Company"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                We are more than a Software Development Agency your dedicated
                growth partner. <br />
                Founded on the belief that every brand has a unique story to
                tell. <br />
                We work with new clients to extend our Upsurge Family. <br />
                Our team of Information Technology (IT), Production, Marketing,
                and Sales is a combination of professionals who are willing to
                take on challenges and give their best. <br />
                With years of experience in digital marketing, website
                development, social media, SEO, production, and brand
                development, our team of experts crafts customized solutions
                that resonate with your target audience and amplify your brand’s
                impact.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <Image src={aboutImg} alt="About" className="w-100 cs-radius_15" />
            <Spacing lg="25" md="25" />
          </Div>
          {/* <Div className="col-lg-7">
            <Image src={aboutImg2} alt="About" className="w-100 cs-radius_15" />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <Image src={aboutImg3} alt="About" className="w-100 cs-radius_15" />
            <Spacing lg="25" md="25" />
          </Div> */}
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Interesting Facts You Should Know"
          subtitle="Explore surprising facts and insights that will broaden your knowledge. From groundbreaking discoveries to fascinating statistics, uncover something new today!"
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Best affordable Software Development Agency in Delhi NCR"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                We provide quality services at competitive rates, customized to
                meet your budget.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Tailored solutions to give your site a unique edge, our team of
                creative web developers and app developers collaborate closely
                to ensure the development of the best converting online platform
                for your brand.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" /> */}
      {/* <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s discuss make <br />something <i>cool</i> together"
          btnText="Book a free Consultation"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
