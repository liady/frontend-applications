import React, { Component } from 'react';
import './Category.css';

class Category extends React.Component {
  render() {
    return (
    <div className="buttonBar">
      <ul>
        <li><button>Algemeen</button></li>
        <li><button>Huisvesting</button></li>
        <li><button>Onderwijs</button></li>
        <li><button>Werk & opleiding</button></li>
        <li><button>Werk & opleiding</button></li>
        <li><button>Maatschappelijke participatie</button></li>
      </ul>
    </div>
    )
  }
}

export default Category
