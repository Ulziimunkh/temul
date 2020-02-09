import React from "react";
export default function Word({ word }) {
  const { gsx$word, gsx$mn1 } = word;
  return (
  
    <div key={gsx$word.$t} className="flip">
    <div className="front">
      <h1 className="text-shadow">{gsx$word.$t}</h1>
    </div>
    <div className="back">
      <h2>{gsx$word.$t}</h2>
      <p>{gsx$mn1.$t}</p>
    </div>
  </div>
  
  );
}