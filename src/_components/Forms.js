// Forms.js
import React from 'react';
import { connect } from 'react-redux';
import { NhssInputForm } from './forms/NhssInputForm'
import { FmaInputForm } from './forms/FmaInputForm'
import { WmftInputForm } from './forms/WmftInputForm'
import { MRSForm } from './forms/MRSForm'
import { MASForm } from './forms/MASForm'
import { MmtRomForm } from './forms/MmtRomForm'
import { ArmTestForm } from './forms/ArmTestForm'
import { BarthelIndexForm } from './forms/BarthelIndexForm'
import { SisInputForm } from './forms/SisInputForm'
import { MocaInputForm } from './forms/MocaInputForm'
import { MocaAlternateInputForm } from './forms/MocaAlternateInputForm'
import { MalInputForm } from './forms/MalInputForm'
import {getFmaLeData, getFmaUeData, getFmaSenseData} from '../data/FmaData'
import {getWmftData} from '../data/WmftData'
import {getNhssData} from '../data/NhssData'
import {getSisData} from '../data/SisData'
import {getMalData} from '../data/MalData'
import { Header } from './common/Header'

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
			case 'FmaInputForm':
				var data = getFmaLeData();
				data = data.concat(getFmaUeData());
				data = data.concat(getFmaSenseData());
				form = (<FmaInputForm extremity="" data={data}/>);
				break;
			case 'FmaUeInputForm':
				form = (<FmaInputForm extremity="UPPER EXTREMITY" data={getFmaUeData()}/>);
				break;
			case 'FmaSenseInputForm':
				form = (<FmaInputForm extremity="SENSE" data={getFmaSenseData()}/>);
				break;
			case 'WmftInputForm':
				var data_affected = getWmftData();
				var data_unaffected = getWmftData();
				data_unaffected[0]['category'] = "Assessment of Un-affected Arm";
				data_unaffected[0]['row_id'] = "un-affected";
				data = data_affected.concat(data_unaffected);
				form = (<WmftInputForm label="" data={data}/>);
				break;
			case 'WmftUnAffectedInputForm':
				form = (<WmftInputForm label="Un-Affected Arm" data={getWmftData()}/>);
				break;
			case 'SisInputForm':
				form = (<SisInputForm data={getSisData()}/>);
				break;
			case 'MRSForm':
				form = (<MRSForm />);
				break;
			case 'MASForm':
				form = (<MASForm />);
				break;
			case 'MmtRomForm':
				form = (<MmtRomForm />);
				break;
			case 'BarthelIndexForm':
				form = (<BarthelIndexForm />);
				break;
			case 'ArmTestForm':
				form = (<ArmTestForm />);
				break;
			case 'MocaInputForm':
				form = (<MocaInputForm />);
				break;
			case 'MocaAlternateInputForm':
				form = (<MocaAlternateInputForm />);
				break;
      case 'MalInputForm':
        form = (<MalInputForm data={getMalData()} />);
        break;
			default:
				form = (<div>Something went wrong</div>);
				break
		}
		return(
			<div>
				<Header/>
				{form}
			</div>);
	}
}

function mapStateToProps(state) {
  return {};
}

const connectedForm = connect(mapStateToProps)(Forms);
export { connectedForm as Forms };