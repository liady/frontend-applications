import React, { Component } from 'react';
import json from '../data.json';
import category from '../Category/Category'

class Form extends Component {
  constructor(props){
    super(props);
    this.state = json
  }

renderForm = () => {
  let array = [];
  array.push(json.map(objectKey => {
      return (
        <div>
          <label>{objectKey.Vraag}</label>
          <select>
            {objectKey.Opties.map(test =>  {
                  console.log(test)
              return (
                <option value={test.Gewicht}>
                  {test.Antwoord}
                </option>
              )
            })}
        </select>
        </div>
      )
    }))
  return array
}
  render() {
    return (
      <div>
        {this.renderForm()}
      </div>
    )
  }
}
export default Form;


//
// const allPersons = persons.map((person, index) => {
//      return (
//      <Person data={person} handleStates={this.handleStates} onClick={this.switchNameHandler.bind(this)} key={index} />
//    )
//  })
