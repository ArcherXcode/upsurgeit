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
        title='Web Development Services'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='WEB-DEVELOPMENT'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Crafting High-Performance Websites' 
          subtitle='Web Development' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Custom Websites'
              subtitle='We create tailored web solutions that align with your business goals and provide an exceptional user experience.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Scalable & Secure'
              subtitle='Our websites are built with scalability and security in mind, ensuring seamless performance as your business grows.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='SEO & Performance Optimized'
              subtitle='We optimize websites for search engines and fast loading times to enhance your digital presence.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image src={serviceImage} alt="Web Development" className='cs-radius_15 w-100' placeholder="blur" />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Our Comprehensive Web Development Services</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/service/ecommerce' btnText='E-commerce Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/responsive-design' btnText='Responsive Design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/cms-development' btnText='CMS Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
              </Div>
              <Div className="col-lg-6">
                <Button btnLink='/service/frontend-development' btnText='Frontend Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/backend-development' btnText='Backend Development' variant='cs-type2'/>
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
                title='Frequently Asked Questions' 
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
          title='Let’s discuss and build <br />your dream website <i>together</i>' 
          btnText='Get a Free Quote' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  );
}