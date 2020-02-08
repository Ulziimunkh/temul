import React, { Component } from "react";
import allwords from "./db/ielts.json";
const WordContext = React.createContext();
// RoomContext.Provider value ={}
class WordProvider extends Component {
  state = {
    words: [],
    sortedWords: [],
    featuredWords: [],
    loading: true,
    types: "all",
    en: '',
    mn: '',
    form: '',
    mn2: '',
    form1: ''
  };
  //   getData
  componentDidMount() {
    // this.getData
    let words = allwords.feed.entry;
    this.setState({
      words,
      sortedWords: words,
      loading: false
    });
  }

  
  filterRooms = () =>{
    let {words} = this.state;
  let tempRooms = [...words];

  
    // change the state
    this.setState({
    sortedRooms: tempRooms
  })
  }
  render() {
    return (
      <WordContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
        {this.props.children}
      </WordContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value}></Component>}
      </RoomConsumer>
    );
  };
}
export { RoomProvider, RoomConsumer, RoomContext };