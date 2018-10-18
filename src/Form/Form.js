import React, { Component } from 'react';
import json from '../data.json';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {json}
  }

  render() {
    let data = this.state.json;
  <ul>
    return {this.props.data.map((vraag)=> {
      return <Form vraag={vraag}/>
    })}
  </ul>
}

export default Form;
