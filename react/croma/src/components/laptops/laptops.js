import React from "react";
import { useSelector } from "react-redux";
import "./laptops.css";

export default function Laptops() {
  const laptops = useSelector(state => state.laptops)

  return <>{laptops.map(laptop => <>
    <h2>{laptop.brand} {laptop.model}</h2>
    <h3>Specifications</h3>
    <dl>
      <dt><strong>Display</strong></dt><dd>{laptop.display}</dd>
      <dt><strong>Memory</strong></dt><dd>{laptop.memory}</dd>
      <dt><strong>Processor</strong></dt><dd>{laptop.processor}</dd>
      <dt><strong>OS</strong></dt><dd>{laptop.os}</dd>
      <dt><strong>Graphics</strong></dt><dd>{laptop.graphics}</dd>
    </dl>
  </>)}</>
}