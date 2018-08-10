// DownloadCSV.js
import React from 'react';
import {CSVLink} from 'react-csv';

class DownloadCSV extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return(
			<div>
					<CSVLink filename={"NIHSS.csv"} className="btn btn-primary" data={this.props.dataHandler()}>Download CSV</CSVLink>
				</div>
			);
	}
}

export default DownloadCSV;
