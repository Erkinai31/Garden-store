import React, { forwardRef } from 'react'
import saleImg from "../../img/image3.svg";
const Discount=forwardRef((props,ref)=> {
  const {name} = props
  return (
    <div ref={ref}>
       <div className="sale_section" id='coupon' >
        <div className="sale_section_wrapper">
          <img src={saleImg} width="422" height="422" />
          <div className="sale_section_text">
            <p>Discount 5% </p>
            <span className="sale_subtitle">for the first order</span>
            <input type="tel" placeholder="+7" name="tel"/>
            <button>Get a discount</button>
          </div>
        </div>
      </div>
    </div>
  )
}
)
export default Discount
