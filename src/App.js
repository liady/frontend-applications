import React, { Component } from 'react';
import './personList.css';
import Person from './Person/Person'

class App extends Component {
// only changes in props and state, forces react to re-render the dom
      state = {
        persons: [
          { name: "Arnold", age: "14", district: "Amsterdam-Bijlmer"},
          { name: "Tim", age: "12", district: "Amsterdam-Oost"},
          { name: "Berry", age: "8", district: "Amsterdam-West"},
          { name: "Thomas", age: "9", district: "Rivierenbuurt"}
        ]
      } //this refers to the class
  switchNameHandler = e => {
    e.preventDefault();
    console.log('was clicked');
  }
  render() {
   let persons = this.state.persons;
   const allPersons = persons.map((person, index) => {
        return (
        <Person data={person} onClick={this.switchNameHandler.bind(this)} key={index} />
      )
    })
    return (
    <div className="personList">
      <h1>personen lijst</h1>
        {allPersons}
    </div>
    );
  }
}

export default App;


// props allow you to pass data from a parent (wrapping) component to a child (embedded) component.
// Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change
   // the component, well, state from within. Changes to state also trigger an UI update.
