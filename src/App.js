import React, { Component } from 'react';
import './personList.css';
import Person from './Person/Person';
import Overview from './Overview/Overview';
import { BrowserRouter } from "react-router-dom";
import Form from './Form/Form';

class App extends Component {
// only changes in props and state, forces react to re-render the dom
      state = {
        persons: [
          { name: "Arnold", age: "14", district: "Amsterdam-Bijlmer", id: "0"},
          { name: "Tim", age: "12", district: "Amsterdam-Oost", id: "1"},
          { name: "Berry", age: "8", district: "Amsterdam-West", id: "2"},
          { name: "Thomas", age: "9", district: "Rivierenbuurt", id: "3"}
        ],
        currentState: null
      } //this refers to the class
  switchNameHandler = e => {
    }

  handleStates = (id, name) => {
    this.setState({
      currentState: id,
      currentName: name
    })
    console.log(this.state)
}
  render() {
   let persons = this.state.persons;
   const allPersons = persons.map((person, index) => {
        return (
        <Person data={person} handleStates={this.handleStates} onClick={this.switchNameHandler.bind(this)} key={index} />
      )
    })
    return (
    <BrowserRouter>
      <div className="personList">
        <div className="personItems"> {allPersons}</div>
      <Overview className="overviewList" data={persons} currentState={this.state.currentState} currentName={this.state.currentName}/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;


// props allow you to pass data from a parent (wrapping) component to a child (embedded) component.
// Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change
   // the component, well, state from within. Changes to state also trigger an UI update.
