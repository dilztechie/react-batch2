import React from "react";
import { useSelector } from "react-redux";
import "./televisions.css";

export default function Televisions() {
  const televisions = useSelector(state => state.televisions)

  return <>{televisions.map(television => <>
    <h2>{television.brand} {television.model}</h2>
    <h3>Specifications</h3>
    <dl>
      <dt><strong>Display</strong></dt><dd>{television.display}</dd>
      <dt><strong>Connectivity</strong></dt><dd>{television.connectivity}</dd>
      <dt><strong>OS</strong></dt><dd>{television.os}</dd>
      <dt><strong>Apps</strong></dt><dd>{television.apps}</dd>
      <dt><strong>Sound</strong></dt><dd>{television.sound}</dd>
      <dt><strong>Features</strong></dt><dd>{television.features}</dd>
    </dl>
  </>)}</>
}