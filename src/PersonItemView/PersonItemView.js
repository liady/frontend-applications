import React, { Component } from 'react'
import Person from '../Person/Person'
import Overview from '../Overview/Overview'
import Form from '../Form/Form'

class PersonItemView extends Component {
  state = {
    id: null,
    name: null
  }
  componentDidMount(){
      console.log(this.props)
      let id = this.props.match.params.person_id;
      let name = this.props.match.params.name;
      this.setState({
        id: id,
        name: name
      })
    }
  render() {
    return (
      <div>
        <h2>{this.props.Currentstate}</h2>
        <h3>{this.props.currentName}</h3>
        <Form />
      </div>
    )
  }
}



export default PersonItemView



// don't forget. The react router provides you with some handy props.
// console log (props) is your friend
