import React from 'react';
import Stat from './stat.object';

import './stats.desktop.scss';
import './stats.mobile.scss';

const Stats = props => {
  var i = 0;
  var list = props.info ? props.info.map(s => <Stat key={i++} number={s.number} description={s.desc}/> ) : <li></li>;

  return (
    <div className="stats">
      <ul>
        { list }
      </ul>
    </div>
  );

}

export default Stats;