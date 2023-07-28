import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
    };
  }

  increment() {
    this.setState({
      currentValue: this.state.currentValue + 1,
    });
  }

  decrement() {
    this.setState({
      currentValue: this.state.currentValue - 1,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <div className="CounterContainer">
          <button className="Button" onClick={this.decrement.bind(this)}>
            -
          </button>
          <div className="NumberContainer">
            <span>{this.state.currentValue}</span>
          </div>

          <button className="Button" onClick={this.increment.bind(this)}>
            +
          </button>
        </div>
      </div>
    );
  }
}
