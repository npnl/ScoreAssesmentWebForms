// BarthelIndexCell.js
import React from 'react';

class BarthelIndexCell extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			heading: props.data.heading,
			options: props.data.options,
			selected: '',
			values: props.data.values,
			index: props.index
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		var score = Number(event.target.value);
    	this.setState({selected: score});
    	this.props.scoreChanged(this.state.index, score);
	}

	render() {
		var rows = [];
		for (var i = 0; i < this.state.options.length; i++) {
			rows.push(
				<div className="form-group">
					<label>
						<input type="radio" value={this.state.values[i]} onChange={this.handleChange} checked={this.state.selected === this.state.values[i]}></input>
						{this.state.options[i]}
	    			</label>
	    		</div>);
		}
		return (
			<div>
				<h5><u><b>{this.state.heading}</b></u></h5>
				<div className="radio">
					{rows}
				</div>
			</div>
			);
	}
}

export default BarthelIndexCell;
