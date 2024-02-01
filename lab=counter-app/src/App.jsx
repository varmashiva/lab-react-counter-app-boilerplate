import { Component } from 'react'
import './App.css'

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className='container'>
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <div>
          <button className='Btn' onClick={() => this.setState({ count: this.state.count + 1 })}>
            +
          </button>
          <button className='Btn' onClick={() => this.setState({ count: this.state.count - 1 })}>
            -
          </button>
          <button className='resetBtn' onClick={() => this.setState({ count: 0 })}>Reset</button>
        </div>
      </div>
    );
  }
}

export default AppClass