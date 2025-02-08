import React, { useState } from 'react'
import Button from '../Button'
import Div from '../Div'
import Spacing from '../Spacing'

export default function Portfolio2({title, subtitle, btnText, btnLink, imageUrl, category}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Div className="cs-portfolio cs-style2">
      <Div />
      {console.log(imageUrl)}
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-lg-">
            <Div className={hovered ? "cs-portfolio_img active":"cs-portfolio_img"}>
              <Div className=""><img src={imageUrl} alt={title} className="rounded w-full h-full" /></Div>
              <h3 className="cs-portflio_imgitle mt-3">{title}</h3>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}
