import React from 'react';
import './stat.style.scss';

const Stat = (props) => (
  <div className="stat">
    <h1 className="stat_number">{props.number}</h1>
    <p className="stat_desc">{props.description}</p>
  </div>
)

export default Stat;