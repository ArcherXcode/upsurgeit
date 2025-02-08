'use client'
import Accordion from "../../ui/Accordion";
import Button from "../../ui/Button";
import Cta from "../../ui/Cta";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import TestimonialSlider from "../../ui/Slider/TestimonialSlider";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import serviceImage from '../../../../public/images/service_img_1.jpeg'

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading 
        title='iOS App Development'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='IOS-APP-DEVELOPMENT'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Building Cutting-Edge iOS Applications' 
          subtitle='iOS Development' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Custom iOS Apps'
              subtitle='We design and develop tailor-made iOS applications that align with your business goals and provide an exceptional user experience.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Scalable & Secure'
              subtitle='Our iOS apps are built with scalability and security in mind, ensuring smooth performance and data protection.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='App Store Deployment'
              subtitle='We assist in launching your iOS app on the Apple App Store, ensuring compliance with all guidelines and best practices.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
        </Div>
      </Div>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Common Questions About iOS Development' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s discuss and create <br />something <i>extraordinary</i> together' 
          btnText='Book a Free Consultation' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}