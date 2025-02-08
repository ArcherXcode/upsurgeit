import React from 'react';
import Link from "next/link";;
import Div from '../Div';

export default function PageHeading({ title, bgSrc, pageLinkText }) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      style={{ backgroundImage: `url(${bgSrc})`, height:"300px" }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h2 className="cs-page_title cs-font_50 cs-white_color">{title}</h2>
        </Div>
      </Div>
    </Div>
  );
}
