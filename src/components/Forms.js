// Forms.js
import React from 'react';
import NhssInputForm from './NhssInputForm'
import FmaInputForm from './FmaInputForm'
import WmftInputForm from './WmftInputForm'
import {getFmaLeData, getFmaUeData, getFmaSenseData} from '../data/FmaData'
import {getWmftData} from '../data/WmftData'
import {getNhssData} from '../data/NhssData'

class Forms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {form_type: props.form_type};
		this.form_type = props.form_type;
	}

	render() {
		var form;
		switch(this.form_type){
			case 'NhssInputForm':
				form = (<NhssInputForm data={getNhssData()}/>);
				break;
			case 'FmaLeInputForm':
				form = (<FmaInputForm extremity="LOWER EXTREMITY" data={getFmaLeData()}/>);
				break;
			case 'FmaUeInputForm':
				form = (<FmaInputForm extremity="UPPER EXTREMITY" data={getFmaUeData()}/>);
				break;
			case 'FmaSenseInputForm':
				form = (<FmaInputForm extremity="SENSE" data={getFmaSenseData()}/>);
				break;
			case 'WmftAffectedInputForm':
				form = (<WmftInputForm label="Affected Arm" data={getWmftData()}/>);
				break;
			case 'WmftUnAffectedInputForm':
				form = (<WmftInputForm label="Un-Affected Arm" data={getWmftData()}/>);
				break;
		}
		return(
			<div>
				{form}
			</div>);
	}
}

export default Forms;
