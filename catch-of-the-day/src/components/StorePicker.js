import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to store/the-input-value
    this.props.history.push(`store/${storeName}`);
  };
  myInput = React.createRef();
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store 👉</button>
      </form>
    );
  }
}

export default StorePicker;
