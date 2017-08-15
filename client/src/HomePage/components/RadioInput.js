import React, { Component } from 'react';

class RadioInput extends Component {

  handleRadio = (event) => {
    const name = event.target.name;
    const value = event.target.id;
    this.props.onChange(name, value);
  }

  render() {
    const { label, name, text } = this.props;

    return (
      <div className="radio-inline">
        <label htmlFor={label}>
          <input
            name={name}
            type="radio"
            onChange={this.handleRadio}
            id={label}
          />
          {text}
        </label>
      </div>
    );
  }
}

export default RadioInput;
