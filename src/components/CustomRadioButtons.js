// CustomRadioButtons.js
import React from 'react';

class CustomRadioButtons extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      option_name: this.props.option_name,
      selected: '',
      values: this.props.option_values
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var selected_number = Number(event.target.value);
    this.setState({selected: selected_number});
    this.props.scoreChanged(this.state.option_name.charAt(0), selected_number);
  }

  render() {
    var row_option_values = [];
    for (var j = 0; j < this.state.values.length; j++) {
        row_option_values.push(<td><input type="radio" className="td-radio" value={this.state.values[j]} onChange={this.handleChange} checked={this.state.selected === this.state.values[j]}></input></td>);
    }
    var row = (
      <tr>
        <td className="question-cell">{this.state.option_name}</td>
        {row_option_values}
      </tr>
      );
    return row;
  }
}

export default CustomRadioButtons;
