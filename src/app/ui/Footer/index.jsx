import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";

const copyrightLinks = [
 
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
];

const serviceMenu = [
  {
    title: "Web development",
    href: "/service/web-development",
  },
  {
    title: "UI/UX design",
    href: "/service/ui-ux-design",
  },
  {
    title: "Cross Platform Application",
    href: "/service/cross-platform-application",
  },
  {
    title: "Android Development",
    href: "/service/android-development",
  },
  {
    title: "IOS Development",
    href: "/service/ios-development",
  },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget logoSrc="/images/footer_logo.svg" logoAlt="Logo" />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              {/* <Div className="cs-footer_item">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4119078076756!2d77.54762287533269!3d28.55739127570593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb22e21a0ed3%3A0x472deaf586344c1a!2sUpsurge%20Media%20%7C%20Digital%20Marketing%20Company!5e0!3m2!1sen!2sin!4v1732434686467!5m2!1sen!2sin"
                  width="300"
                  height="350"
                  style={{ border: 0, borderRadius:"10px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Div> */}
              <Div className="cs-google_map" style={{height:"300px"}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4118845057606!2d77.54762252549806!3d28.55739197570581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb22e21a0ed3%3A0x472deaf586344c1a!2sUpsurge%20Media%20%7C%20Digital%20Marketing%20Company!5e0!3m2!1sen!2sin!4v1731323029072!5m2!1sen!2sin"
                  // width="300"
                  // height="350"
                  allowfullscreen=""
                  loading="lazy"
                  style={{ border: 0, borderRadius: "10px" }}
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="text-center w-full">
            <Div className="cs-copyright">
              Copyright © {`${date}`} Upsurge Media Pvt Ltd
            </Div>
          </Div>
      
        </Div>
      </Div>
    </footer>
  );
}
