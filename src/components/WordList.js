import React from 'react'
import Word from './Word';
import "./card.scss";

export default function WordList({ words }) {
  return (
    <section className="word-container">
      { words.map((item, i) => {
        return (
         <Word  key={item.gsx$word.$t} word={item}></Word>
        );
      })}
    </section>
  );
}
