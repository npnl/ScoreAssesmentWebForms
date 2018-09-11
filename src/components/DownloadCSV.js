// DownloadCSV.js
import React from 'react';
import {CSVLink} from 'react-csv';


class DownloadCSV extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.filename = this.props.filename;
		this.emailCSV = this.emailCSV.bind(this);
		this.createTextLine = this.createTextLine.bind(this);
		this.getCSVContents = this.getCSVContents.bind(this);
	}

	emailCSV() {
		var data = this.props.dataHandler();
		this.propertyOrder = Object.keys(data[0]);
		var textCsvData = this.getCSVContents(data);
		textCsvData = encodeURIComponent(textCsvData)
		var emailAddress = ""
		var email_subject = this.props.subjectId.replace(/ +/g, "_")+ "_" + this.props.date.replace(/ +/g, "_") + "_"+ this.filename;
		email_subject = email_subject.replace(".csv", "");
		var link = "mailto:" + emailAddress + "?subject=" + email_subject + "&body=" + textCsvData;
		console.log(textCsvData);
		window.location.href = link;

		// window.open(link);
	}

	createTextLine(values, separator) {
		var result = [];
		
		values.forEach(function(value) {
			var text = value.toString();
			
			if (text.indexOf(separator) === -1 && text.indexOf('"') === -1) {
				result.push(text);
			} else {
				result.push('"' + text.replace(/"/g, '""') + '"');
			}
		});
		
		return result.join(separator);
	}

	getCSVContents(data) {
		var separator = ",";
		
		var textLines = [];
		textLines.push(this.createTextLine(this.propertyOrder, separator));
		
		data.forEach(function(item) {
			var separator = ",";
			var values = [];
			this.propertyOrder.forEach(function(propertyName) {
				values.push(item[propertyName]);
			});
			textLines.push(this.createTextLine(values, separator));
		}, this);
		
		return textLines.join("\r\n");
	};

	render() {
		var note = (<p> <b>Subject_Id</b> and <b>Date</b> and mandatory fields to download the csv.</p>);
		return(
			<div>
				{this.props.hideNode === true ? '' : note}
				<CSVLink filename={this.props.subjectId.replace(/ +/g, "_")+ "_" + this.props.date.replace(/ +/g, "_") + "_"+ this.filename} className={this.props.is_enabled ? "btn btn-primary" : "btn btn-primary btn-disabled"} data={this.props.dataHandler()}>Download CSV</CSVLink>
				<button className={this.props.is_enabled ? "btn btn-primary" : "btn btn-primary btn-disabled"} onClick={this.emailCSV}>Email CSV</button>
			</div>
			);
	}
}

export default DownloadCSV;
