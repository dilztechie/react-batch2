import React from "react";
import { useSelector } from "react-redux";
import "./mobiles.css";

export default function Mobiles() {
  const mobiles = useSelector(state => state.mobiles)

  return <>{mobiles.map(mobile => <>
    <h2>{mobile.brand} {mobile.model}</h2>
    <h3>Specifications</h3>
    <dl>
      <dt><strong>Display</strong></dt><dd>{mobile.display}</dd>
      <dt><strong>Memory</strong></dt><dd>{mobile.memory}</dd>
      <dt><strong>Processor</strong></dt><dd>{mobile.processor}</dd>
      <dt><strong>Camera</strong></dt><dd>{mobile.camera}</dd>
      <dt><strong>Battery</strong></dt><dd>{mobile.battery}</dd>
    </dl>
  </>)}</>
}