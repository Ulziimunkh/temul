import React from "react";
import WordFilter from "./WordFilter";
import WordList from "./WordList";
import { withWordConsumer } from "../context";
import Loading from "./Loading";
function WordContainer({ context }) {
  const { loading, sortedWords } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <WordFilter></WordFilter>
        <WordList words={sortedWords}></WordList>
      </div>
    </>
  );
}
export default withWordConsumer(WordContainer);