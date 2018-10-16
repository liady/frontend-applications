import React from 'react';
import './Card.css';
// import {Link} from 'react-router-dom'

const person = (props) => {
  console.log(props)
  return (
    <div to={`/${props.data.name}`} onClick={props.onClick} className="Card">
        <h3>{props.data.name}</h3>
        <p>{props.data.age}</p>
        <p>{props.data.district}</p>
    </div>
  )
}
export default person;
