import React, { Component } from 'react';
import './NewToDo.css';

export default class NewToDo extends Component {
  state = {
    value: ""
  }

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.value) {
      this.props.onAdd(this.state.value)

      this.setState({ value: "" })
    }
  }

  render() {
    return (
      <form className="NewToDo" onSubmit={this.onSubmit}>
        <input type="text" value={this.state.value} onChange={this.onChange} />

        <button>+</button>
      </form>
    )
  }
}