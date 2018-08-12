// WmftFormRow.js
import React from 'react';

class WmftFormRow extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			item_no: props.data.item_no,
			task: props.data.task,
			time: props.data.time,
			score: '',
			score_range: props.data.score_range
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
	}

	handleChange(event) {
		if (event.target.value > this.state.score_range[1] || event.target.value < this.state.score_range[0]){
			return
		}
		this.setState({score: event.target.value});
		this.props.scoreChanged(this.state.item_no, event.target.value);
	}

	handleTimeChange(event) {
		if (event.target.value < 0){
			return
		}
		this.setState({time: event.target.value});
		this.props.timeChanged(this.state.item_no, event.target.value);
	}

	render() {
		return(
			<tr>
				<th scope="row">{this.state.item_no}</th>
				<td>{this.state.task}</td>
				<td><input type="number" min="0" value={this.state.time} onChange={this.handleTimeChange}/></td>
				<td><input type="number" min={this.state.score_range[0]} max={this.state.score_range[1]} value={this.state.score} onChange={this.handleChange}/></td>
			</tr>
			);
	}
}

export default WmftFormRow;
