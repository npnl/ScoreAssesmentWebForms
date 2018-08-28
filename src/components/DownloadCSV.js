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
				<p> <b>Subject_Id</b> and <b>Date</b> and mandatory fields to download the csv.</p>
				<CSVLink filename={this.props.subjectId.replace(/ +/g, "_")+ "_" + this.props.date.replace(/ +/g, "_") + "_"+ this.filename} className={this.props.is_enabled ? "btn btn-primary" : "btn btn-primary btn-disabled"} data={this.props.dataHandler()}>Download CSV</CSVLink>
			</div>
			);
	}
}

export default DownloadCSV;
