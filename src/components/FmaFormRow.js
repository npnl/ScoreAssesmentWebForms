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
			comments: props.data.comments
		};

		this.handleChange = this.handleChange.bind(this);
		this.getComment = this.getComment.bind(this);
	}

	handleChange(event) {
		if (event.target.value > this.state.score_range[1] || event.target.value < this.state.score_range[0]){
			return
		}
		this.setState({score: event.target.value});
		this.props.scoreChanged(this.state.item_no, event.target.value);
	}

	getComment() {
		var comments = this.state.comments;
		var score = this.state.score;
		return comments.hasOwnProperty(score) ? comments[score] : comments['default'];
	}

	render() {
		return(
			<tr>
				<th scope="row">{this.state.item_no}</th>
				<td>{this.state.category}</td>
				<td>{this.state.posture}</td>
				<td>{this.state.movement}</td>
				<td><input type="number" min={this.state.score_range[0]} max={this.state.score_range[1]} value={this.state.score} onChange={this.handleChange}/></td>
				<td>{this.getComment()}</td>
			</tr>
			);
	}
}

export default FmaFormRow;
