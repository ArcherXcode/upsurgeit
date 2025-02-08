import React from "react";
import Div from "../Div";
import AnimatedNumbers from "react-animated-numbers";
export default function FunFact2({ data, variant, bgUrl }) {
  return (
    <Div
      className={variant ? `cs-funfact_wrap_2 ${variant}` : "cs-funfact_wrap_2"}
    >
      {bgUrl && (
        <div
          className="cs-funfact_shape"
          style={{ backgroundImage: `url(${bgUrl})` }}
        ></div>
      )}
      <Div className="cs-funfacts">
        {data.map((item, index) => (
          <Div key={index}>
            <Div className="cs-funfact cs-style2">
              <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                <span className="odometer" />
                <div
                  style={{ display: "inline", display:"flex", width:"100px", fontSize: 40, color: "#1085dc" }}
                >
                  <AnimatedNumbers
                    includeComma
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                    animateToNumber={item.factNumber}
                  />
                  <span style={{marginLeft:"5px"}}>+</span>
                </div>
              </Div>
              <h3 className="cs-funfact_title">{item.title}</h3>
            </Div>
          </Div>
        ))}
      </Div>
    </Div>
  );
}
