import React from "react";
import Header from "./Header";
import Order from "./Order";
import Invetory from "./Invetory";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Invetory />
      </div>
    );
  }
}

export default App;
