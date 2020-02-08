import React, { Component } from "react";
///import PropTypes from 'prop-types'
import wordlist from "../db/ielts.json";
import './card.scss';

export default class WordList extends Component {
  static propTypes = {
    //prop: PropTypes
  };

  render() {
    return (
    <div class="word-container">
    {
        wordlist.feed.entry.map((item, i) => {
            return (
            <div class="flip">
                <div class="front" >
                    <h1 class="text-shadow">{item.gsx$word.$t}</h1>
                </div>
                <div class="back">
                    <h2>{item.gsx$word.$t}</h2>
                    <p>{item.gsx$mn1.$t}</p>
                </div>
            </div>
            )
        })
    }
    </div>
    )
  }
}
