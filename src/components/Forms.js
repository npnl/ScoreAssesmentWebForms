// Forms.js
import React from 'react';
import NhssInputForm from './NhssInputForm'
import FmaInputForm from './FmaInputForm'
import {getFmaLeData, getFmaUeData, getFmaSenseData} from '../data/FmaData'

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
				form = (<NhssInputForm/>);
				break;
			case 'FmaLeInputForm':
				form = (<FmaInputForm data={getFmaLeData()}/>);
				break;
			case 'FmaUeInputForm':
				form = (<FmaInputForm data={getFmaUeData()}/>);
				break;
			case 'FmaSenseInputForm':
				form = (<FmaInputForm data={getFmaSenseData()}/>);
				break;
		}
		return(
			<div>
				{form}
			</div>);
	}
}

export default Forms;
