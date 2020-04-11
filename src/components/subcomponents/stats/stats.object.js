import React from "react";
import "./stats.style.scss";

const Stat = props => (
  <div className="stat">
    <div className="stat_number">
      <h1 className="stat_number-lg">{props.number}</h1>
      <h4 className="stat_number-sm">{props.number2}</h4>
    </div>
    <p className="stat_desc">{props.description}</p>
  </div>
);

const Stats = props => {
  var i = 0;
  var list = props.info ? (
    props.info.map(s => (
      <Stat key={i++} number={s.number} number2={s.number2} description={s.desc} />
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
