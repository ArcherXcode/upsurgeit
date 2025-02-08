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
        title='Android App Development'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='ANDROID-APP-DEVELOPMENT'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Building High-Performance Android Apps' 
          subtitle='Android Development' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Custom Android Apps'
              subtitle='We create tailor-made Android applications that cater to your specific business needs and provide an exceptional user experience.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Scalable & Secure'
              subtitle='Our Android applications are built with scalability and security in mind, ensuring smooth operations as your business grows.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Google Play Deployment'
              subtitle='We help you seamlessly launch your Android app on the Google Play Store, ensuring compliance with all guidelines and best practices.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          {/* <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image src={serviceImage} alt="Android Development" className='cs-radius_15 w-100' placeholder="blur" />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div> */}
          {/* <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Our Comprehensive Android Development Services</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/service/web-development' btnText='Web Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/cross-platform-app' btnText='Cross-Platform Apps' variant='cs-type2'/>
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
          </Div> */}
        </Div>
      </Div>
      {/* <Spacing lg='150' md='80'/>
      <TestimonialSlider />
      <Spacing lg='145' md='80'/> */}
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Common Questions About Android Development' 
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
          title='Let’s discuss and create <br />something <i>amazing</i> together' 
          btnText='Book a Free Consultation' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
