import React from "react";
import "./stats.style.scss";

const Stat = props => (
  <div className="stat">
    <h1 className="stat_number">{props.number}</h1>
    <p className="stat_desc">{props.description}</p>
  </div>
);

const Stats = props => {
  var i = 0;
  var list = props.info ? (
    props.info.map(s => (
      <Stat key={i++} number={s.number} description={s.desc} />
    ))
  ) : (
    <li />
  );

  return (
    <div className="stats">
      <ul>{list}</ul>
    </div>
  );
};

export default Stats;
