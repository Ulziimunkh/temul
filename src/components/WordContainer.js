import React from "react";
import WordFilter from "./WordFilter";
import WordList from "./WordList";
import { withWordConsumer } from "../context";
import Loading from "./Loading";
import "./card.scss";
function WordContainer({ context }) {
  const { loading, sortedWords } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="word-container">
        <WordFilter></WordFilter>
        <WordList words={sortedWords}></WordList>
      </div>
    </>
  );
}
export default withWordConsumer(WordContainer);