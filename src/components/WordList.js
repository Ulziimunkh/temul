import React, { Component } from "react";
///import PropTypes from 'prop-types'
import wordlist from "../db/ielts.json";
import "./card.scss";

export default class WordList extends Component {
  state = {
    allwords: [],
    sortedWords: []
  };
  componentDidMount() {
    // this.getData
    let allwords = wordlist.feed.entry;
    this.setState({
      allwords,
      sortedWords: allwords
    });
  }

  onChange = event => {
    let value = event.target.value;
    let f = value.trim().toLowerCase();
    let tempWords = this.state.allwords.filter(word =>
      word.gsx$word.$t.toLowerCase().includes(f)
    );
    this.setState({ sortedWords: tempWords });
  };
  render() {
      return (
      <div class="word-container">
        <div className="search-container">
          <input type="text" placeholder="Search" onKeyUp={this.onChange} />
        </div>
        {this.state.sortedWords.map((item, i) => {
          return (
            <div class="flip">
              <div class="front">
                <h1 class="text-shadow">{item.gsx$word.$t}</h1>
              </div>
              <div class="back">
                <h2>{item.gsx$word.$t}</h2>
                <p>{item.gsx$mn1.$t}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
