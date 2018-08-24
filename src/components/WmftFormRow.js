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
			score_range: props.data.score_range,
			comments: props.data.comments,
			separator: props.data.separator,
			category: props.data.category,
			index: props.index,
			row_id: props.data.row_id
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
	}

	handleChange(event) {
		if (event.target.value > this.state.score_range[1] || event.target.value < this.state.score_range[0]){
			return
		}
		this.setState({score: event.target.value});
		this.props.scoreChanged(this.state.item_no, this.state.index, event.target.value);
	}

	handleTimeChange(event) {
		if (event.target.value < 0){
			return
		}
		this.setState({time: event.target.value});
		this.props.timeChanged(this.state.item_no, this.state.index, event.target.value);
	}

	render() {
		var row;
		if (this.state.separator === true) {
			row = (
				<tr>
					<td className="separator" id={this.state.row_id} colSpan={5}><h4>{this.state.category}</h4></td>
				</tr>
			);
		}
		else {
			row = (
				<tr>
					<th class="row-index">{this.state.item_no}</th>
					<td>{this.state.task}</td>
					<td><input type="number" min="0" max="120" value={this.state.time} placeholder="Time in seconds" onChange={this.handleTimeChange} disabled={this.state.time === 'na'}/></td>
					<td><input type="number" min={this.state.score_range[0]} max={this.state.score_range[1]} placeholder="FAS Score" value={this.state.score} onChange={this.handleChange}/></td>
					<td>{this.props.getComment(this.state.score, this.state.comments)}</td>
				</tr>
				);
		}
		return row;
	}
}

export default WmftFormRow;
