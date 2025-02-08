'use client';

import Accordion from "../../ui/Accordion";
import Button from "../../ui/Button";
import Cta from "../../ui/Cta";
import Div from "../../ui/Div";
import IconBox from "../../ui/IconBox";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import serviceImage from '../../../../public/images/service_img_1.jpeg';

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading 
        title='Cross-Platform App Development'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='CROSS-PLATFORM-APP-DEVELOPMENT'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Build High-Performance Cross-Platform Apps' 
          subtitle='Seamless Experience Across Devices' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Unified Codebase'
              subtitle='Develop apps that run smoothly on both iOS and Android using a single codebase, reducing time and cost.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Optimized Performance'
              subtitle='We ensure that your app delivers native-like performance with smooth interactions and fast load times.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='App Store & Play Store Deployment'
              subtitle='We handle the end-to-end deployment process, ensuring compliance with both Apple and Google guidelines.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Comprehensive Cross-Platform Development Services</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/service/web-development' btnText='Web Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/ui-ux-design' btnText='UI/UX Design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
              </Div>
              <Div className="col-lg-6">
                <Button btnLink='/service/ios-development' btnText='iOS Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/android-development' btnText='Android Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Frequently Asked Questions About Cross-Platform Development' 
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
          title='Let’s build your cross-platform app <br />with exceptional performance' 
          btnText='Book a Free Consultation' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  );
}