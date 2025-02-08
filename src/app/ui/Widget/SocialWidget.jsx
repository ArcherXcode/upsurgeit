import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Div from "../Div";

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link
        href="https://in.linkedin.com/company/upsurge-media-pvt-ltd"
        className="cs-center"
      >
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link
        href="https://www.youtube.com/@kyascenehaiofficial"
        className="cs-center"
      >
        <Icon icon="fa6-brands:youtube" />
      </Link>
      <Link
        href="https://www.instagram.com/upsurgemedia.in/"
        className="cs-center"
      >
        <Icon icon="fa6-brands:instagram" />
      </Link>
    </Div>
  );
}
