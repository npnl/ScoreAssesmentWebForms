// FmaFormRow.js
import React from 'react';

class FmaFormRow extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			item_no: props.data.item_no,
			category: props.data.category,
			posture: props.data.posture,
			movement: props.data.movement,
			score: '',
			score_range: props.data.score_range,
			comments: props.data.comments,
			separator: props.data.separator,
			rowspan: props.data.rowspan,
			row_id: props.data.row_id
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		if (event.target.value > this.state.score_range[1] || event.target.value < this.state.score_range[0]){
			return
		}
		this.setState({score: event.target.value});
		this.props.scoreChanged(this.state.item_no, event.target.value);
	}

	render() {
		var row;
		if (this.state.separator === true) {
			row = (
				<tr>
					<td className="separator" id={this.state.row_id} colSpan={6}><h4>{this.state.category}</h4></td>
				</tr>
			);
		}
		else if (this.state.rowspan !== undefined && this.state.rowspan === 0) {
			row = (
			<tr>
				<td className="row-index">{this.state.item_no}</td>
				<td>{this.state.movement}</td>
				<td><input type="number" min={this.state.score_range[0]} max={this.state.score_range[1]} placeholder="Score" value={this.state.score} onChange={this.handleChange}/></td>
				<td>{this.props.getComment(this.state.score, this.state.comments)}</td>
			</tr>
			);
		}
		else{
			row = (
			<tr>
				<td className="row-index">{this.state.item_no}</td>
				<td className="common-td" rowSpan={this.state.rowspan}>{this.state.category}</td>
				<td className="common-td" rowSpan={this.state.rowspan}>{this.state.posture}</td>
				<td>{this.state.movement}</td>
				<td><input type="number" min={this.state.score_range[0]} max={this.state.score_range[1]} placeholder="Score" value={this.state.score} onChange={this.handleChange}/></td>
				<td>{this.props.getComment(this.state.score, this.state.comments)}</td>
			</tr>
			);
		}
		return row;
	}
}

export default FmaFormRow;
