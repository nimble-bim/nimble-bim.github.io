import React from "react";

// const Notfound = () => <h1>Not found</h1>

// export default Notfound;

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
    console.log("Loading how it works page...");
  }
  render() {
    return (
      <div className="page">
        <h1>Page Not found</h1>
      </div>
    );
  }
}
