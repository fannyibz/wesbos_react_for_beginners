import React from "react";
import AddFishForm from "./AddFishForm";

class Invetory extends React.Component {
  render() {
    return (
      <div className="invetory">
        <h2>Invetory</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Invetory;
