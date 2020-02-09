import React from "react";
import Word from "./Word";

export default function WordList({ words }) {
  return (
    <section>
      {words.map((item, i) => {
        return <Word key={item.gsx$word.$t} word={item}></Word>;
      })}
    </section>
  );
}
