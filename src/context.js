import React, { Component } from "react";
import allwords from "./db/ielts.json";
const WordContext = React.createContext();
class WordProvider extends Component {
  state = {
    words: [],
    sortedWords: [],
    loading: false,
    types: "all",
    searchText: ""
  };
  //   getData
  componentDidMount() {
    // this.getData
    let words = allwords.feed.entry;
    this.setState({
      words,
      sortedWords: words
    });
  }

  onChange = event => {
    let value = event.target.value;
    this.setState({ searchText: value }, this.filterWords);
  };

  filterWords = () => {
    let { words, searchText } = this.state;
    let tempWords = [...words];
    let f = searchText.trim().toLowerCase();
    tempWords = tempWords.filter(word =>
      word.gsx$word.$t.toLowerCase().includes(f)
    );
    // change the state
    this.setState({
      sortedWords: tempWords
    });
  };
  render() {
    return (
      <WordContext.Provider value={{ ...this.state, onChange: this.onChange }}>
        {this.props.children}
      </WordContext.Provider>
    );
  }
}

const WordConsumer = WordContext.Consumer;

export function withWordConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <WordConsumer>
        {value => <Component {...props} context={value}></Component>}
      </WordConsumer>
    );
  };
}
export { WordProvider, WordConsumer, WordContext };
