import React, { Component } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';


class person extends Component {

  constructor(props) {
  super(props);
    this.state = {
      id: props.data.id,  
      data: props.data,
      name: props.data.name
    }
  }

  componentDidMount() {
//console.log(this)
}

  render() {
return (
<Link to={'/' + this.state.id} onClick={() => {this.props.handleStates(this.state.id, this.state.name)}}>
 <div key={this.state.id} className="Card">
    <h3>{this.props.data.name}</h3>
    <p>{this.props.data.age}</p>
    <p>{this.props.data.district}</p>
</div>
</Link>
)
}
}
export default person;






// <a href={`/${props.data.name}`}>Zie details </a>
