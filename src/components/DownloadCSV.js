// DownloadCSV.js
import React from 'react';
import {CSVLink} from 'react-csv';

class DownloadCSV extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.filename = this.props.filename;
	}

	render() {
		return(
			<div>
				<CSVLink filename={this.filename} className="btn btn-primary" data={this.props.dataHandler()}>Download CSV</CSVLink>
				</div>
			);
	}
}

export default DownloadCSV;
