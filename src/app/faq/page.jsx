'use client'
import { Icon } from "@iconify/react";
import Accordion from "../ui/Accordion";
import Button from "../ui/Button";
import Div from "../ui/Div";
import Spacing from "../ui/Spacing";
import PageHeading from "../ui/PageHeading";
import Cta from "../ui/Cta";

export default function FaqPage() {
  return (
    <>
      <PageHeading
        title="Frequently Asked Questions"
        pageLinkText="FAQ"
      />
      <Div className="container">
        <Div className="row">
          {/* <Div className="col-lg-4">
            <Div className="cs-faq_nav cs-radius_15">
              <h2 className="cs-faq_nav_title cs-m0">FAQ Category</h2>
              <Div className="cs-height_30 cs-height_lg_30" />
              <ul className="cs-list cs-style1 cs-mp0">
                <li>
                  <Button
                    variant="cs-type2"
                    btnLink="/faq"
                    btnText="Service related"
                    icon={
                      <Icon icon="material-symbols:content-copy-outline-rounded" />
                    }
                  />
                </li>
                <li>
                  <Button
                    variant="cs-type2"
                    btnLink="/faq"
                    btnText="Pricing"
                    icon={
                      <Icon icon="material-symbols:content-copy-outline-rounded" />
                    }
                  />
                </li>
                <li>
                  <Button
                    variant="cs-type2"
                    btnLink="/faq"
                    btnText="Project delivery"
                    icon={
                      <Icon icon="material-symbols:content-copy-outline-rounded" />
                    }
                  />
                </li>
                <li>
                  <Button
                    variant="cs-type2"
                    btnLink="/faq"
                    btnText="Documentation"
                    icon={
                      <Icon icon="material-symbols:content-copy-outline-rounded" />
                    }
                  />
                </li>
              </ul>
            </Div>
          </Div> */}
          <Div className="">
            <Spacing lg="0" md="40" />
            <Accordion />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* Start CTA Section */}
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
