import React, { useState } from "react";
import mobileLogo from '../../assets/mobile.png'
import televisionLogo from '../../assets/television.png'
import laptopLogo from '../../assets/laptop.jpg'
import "./products.css";
import Mobiles from "../mobiles/mobiles";
import Televisions from "../televisions/televisions";
import Laptops from "../laptops/laptops";

export default function Products() {
  const [mobiles, setMobiles] = useState(false)
  const [televisions, setTelevisions] = useState(false)
  const [laptops, setLaptops] = useState(false)

  const handleClick = event => {
    setMobiles(false)
    setTelevisions(false)
    setLaptops(false)
    if (event.target.id === 'mobile') setMobiles(true)
    if (event.target.id === 'television') setTelevisions(true)
    if (event.target.id === 'laptop') setLaptops(true)
  }

  return <div className="wrapper">
    <div className="logos">
      <button onClick={handleClick}><img id="mobile" src={mobileLogo} alt="Mobiles" /></button>
      <button onClick={handleClick}><img id="television" src={televisionLogo} alt="Televisions" /></button>
      <button onClick={handleClick}><img id="laptop" src={laptopLogo} alt="Laptops" /></button>
    </div>
    <div className="mobiles">
      {mobiles && <Mobiles />}
    </div>
    <div className="televisions">
      {televisions && <Televisions />}
    </div>
    <div className="laptops">
      {laptops && <Laptops />}
    </div>
  </div>
}