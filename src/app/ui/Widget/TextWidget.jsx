import React from "react";
import Div from "../Div";

export default function TextWidget({ logoSrc, logoAlt, text }) {
  return (
    <Div className="cs-text_widget">
      {/* <img src={logoSrc} alt={logoAlt} /> */}
      <h1 style={{fontSize:"28px"}}> <span style={{color:"#004AAD"}}>UPSURGE</span> MEDIA</h1>
      <p>
      Welcome to DELHI NCR’s best software development agency {" "}
        <span style={{ color: "white", fontWeight: "600" }}>
         UPSURGE MEDIA PRIVATE LIMITED.
        </span>{" "}
        We take pride in offering innovative solutions to propel your business to new heights.
      </p>
    </Div>
  );
}
