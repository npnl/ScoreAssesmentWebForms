// NhssFormRow.js
import React from 'react';

class NhssFormRow extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			item_no: props.data.item_no,
			domain: props.data.domain,
			specific: props.data.specific,
			score: '',
			comments: props.data.comments,
			score_range: props.data.score_range,
			rowspan: props.data.rowspan
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
		if (this.state.rowspan !== undefined && this.state.rowspan === 0) {
			row = (
				<tr>
					<th className="row-index">{this.state.item_no}</th>
					<td>{this.state.specific }</td>
					<td><input type="number" min={this.state.score_range[0]} max={this.state.score_range[1]} placeholder="FAS Score" value={this.state.score} onChange={this.handleChange}/></td>
					<td>{this.props.getComment(this.state.score, this.state.comments)}</td>
				</tr>);
		} else {
			row = (
				<tr>
					<th className="row-index">{this.state.item_no}</th>
					<td className="common-td" rowSpan={this.state.rowspan}>{this.state.domain}</td>
					<td>{this.state.specific}</td>
					<td><input type="number" min={this.state.score_range[0]} max={this.state.score_range[1]} placeholder="FAS Score" value={this.state.score} onChange={this.handleChange}/></td>
					<td>{this.props.getComment(this.state.score, this.state.comments)}</td>
				</tr>);
		}
		return row;
	}
}

export default NhssFormRow;
