import React from 'react';
import './stats.style.scss';
import Stat from './stat.object';

const Stats = props => {
  var list = props.info ? props.info.map(s => <Stat number={s.number} description={s.desc}/> ) : <li></li>;

  return (
    <div className="stats">
      <ul>
        { list }
      </ul>
    </div>
  );

}

export default Stats;