import React, { Component } from 'react';
import './Overview.css';
import PersonItemView from '../PersonItemView/PersonItemView';
import { Route } from "react-router-dom";
import Person from '../Person/Person'
import Form from '../Form/Form'

class Overview extends Component{
    constructor(props) {
    super(props);
      this.state = {
        currentID: null
      }
    }
  componentDidUpdate() {
    console.log(' IK BEN GEUPDATE')
    console.log(this.props)
  }
  render(){
    return(
      <div className="overview">
        <h1>{this.props.currentName}</h1>
        <Route path="/:person_id" component={PersonItemView} />
        <Form />
      </div>
    )
  }
}
export default Overview;
