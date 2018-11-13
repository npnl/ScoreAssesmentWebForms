// MocaInputForm.js
import React from 'react';
import { connect } from 'react-redux';
import DownloadCSV from './../common/DownloadCSV'
import { formActions} from '../../_actions';
import { AutoSuggestInput } from '../common/AutoSuggestInput'
import camel from '../../assets/camel.png'
import lion from '../../assets/lion.png'
import rhino from '../../assets/rhino.png'

class MocaInputForm extends React.Component {
	constructor(props) {
		super(props);
		this.getCurrentDate = this.getCurrentDate.bind(this);
		this.state = {
			rows: [],
			subID: '',
			date: this.getCurrentDate(),
      executive: 0,
			naming: 0,
			attention_1: 0,
			attention_2: 0,
			attention_3: 0,
			attention_total: 0,
			language_1: 0,
			language_2: 0,
			abstraction: 0,
			delayed_recall: 0,
			orientation: 0,
      edu_less_than_12_yrs: 0
		};
		this.props = props;
		this.getCSVData = this.getCSVData.bind(this);
		this.scoreChanged = this.scoreChanged.bind(this);
		this.subjectChanged = this.subjectChanged.bind(this);
		this.dateChanged = this.dateChanged.bind(this);
		this.sendToServer = this.sendToServer.bind(this);
		this.valueChanged = this.valueChanged.bind(this);
	}

	subjectChanged(newSubId) {
		this.setState({subID: newSubId});
	}

	dateChanged(event) {
		this.setState({date: event.target.value});
	}

	getTotalScore() {
		return this.state.executive + this.state.naming + this.state.attention_1
			+ this.state.attention_2 + this.state.attention_total
			+ this.state.language_1 + this.state.language_2
			+ this.state.abstraction + this.state.delayed_recall
			+ this.state.orientation + this.state.edu_less_than_12_yrs;
	}

	valueChanged(event) {
    console.log(this.state);
    var score_name = event.target.name;
    console.log("The button is now : ", event.target.checked);
    var value = event.target.checked ? 1 : -1;
    var old_value = this.state[score_name];
    var new_value = old_value + value;
    this.setState({[score_name]: new_value});
    if (score_name === 'attention_3') {
      var attention_new = 0;
      if(new_value >= 4) {
    		attention_new = 3;
			}
			else if(new_value >= 2) {
      	attention_new = 2;
			}
			else if(new_value === 1) {
      	attention_new = 1;
			}
			else {
      	attention_new = 0;
			}
			this.setState({'attention_total': attention_new})
		}
  }

	scoreChanged(item_no, value) {
		var new_rows = this.state.rows;
		if (item_no > 17 && item_no < 51) {
			item_no += 1;
		}
		else if (item_no > 50) {
			item_no += 2;
		}
		new_rows[item_no]['score'] = value;
		this.setState({rows: new_rows});
	}

	getCSVData() {
		var date = this.state.date;
		var date_obj = new Date(date);
		var day = date_obj.getDate() + 1;
		var month = date_obj.getMonth() + 1;
		var year = date_obj.getFullYear();

		var subID = this.state.subID;

		var data =  {
			SubID: subID,
			Date: date,
			Year: year,
			Month: month,
			Day: day,
			visuospatial_executive: this.state.executive,
			naming: this.state.naming,
			attention_1: this.state.attention_1,
			attention_2: this.state.attention_2,
			attention_3: this.state.attention_total,
			language_1: this.state.language_1,
			language_2: this.state.language_2,
			abstraction: this.state.abstraction,
			delayed_recall: this.state.delayed_recall,
			orientation: this.state.orientation,
      edu_less_than_12_yrs: this.state.edu_less_than_12_yrs,
			total_score: this.getTotalScore()
		};

		return [data];
	}

  sendToServer() {
    var formatted = {
      subject_name: this.state.subID,
      assessment_date: this.state.date,
      visuospatial_executive: this.state.executive,
      naming: this.state.naming,
      attention_1: this.state.attention_1,
      attention_2: this.state.attention_2,
      attention_3: this.state.attention_total,
      language_1: this.state.language_1,
      language_2: this.state.language_2,
      abstraction: this.state.abstraction,
      delayed_recall: this.state.delayed_recall,
      orientation: this.state.orientation,
      edu_less_than_12_yrs: this.state.edu_less_than_12_yrs,
      total_score: this.getTotalScore()
    };
    const { dispatch } = this.props;
    dispatch(formActions.sendMocaFormData(formatted));
  }

	getCurrentDate() {
		var d = new Date(),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
		return [year, month, day].join('-');
	}

	render() {

		return(
			<div className="main-form-container">
				<div className="form-title">
					<h1>MONTREAL COGNITIVE ASSESSMENT</h1>
				</div>
				<div className="basic-info">
					<div className="subject_div">
						<label>Subject Id</label>
						<AutoSuggestInput value={this.state.subID} onChange={this.subjectChanged} required/>
					</div>
					<div className="date_div">
						<label>Date</label>
						<input type="date" className="form-control" value={this.state.date} placeholder="Date" min="2010-01-01" max="2099-12-31" onChange={this.dateChanged} required />
					</div>
				</div>

				<table className="table table-bordered">
					<thead>
					<tr>
						<th colSpan="2"></th>
						<th className="moca-points">Points</th>
					</tr>
					</thead>
					<tbody>
						<tr>
							<th className="moca-sub-heading" colSpan="3">VISUOSPATIAL/EXECUTIVE</th>
						</tr>
						<tr>
							<td>
								<table className="full-table">
									<tr>
										<td colSpan="2">_</td>
									</tr>
									<tr>
										<td>
											<input className="form-check-input td-checkbox" id="label-graph" type="checkbox" name="executive" onClick={this.valueChanged}/>
											<label for="label-graph">Connect Graph</label>
										</td>
										<td>
											<input className="form-check-input td-checkbox" id="label-cube" type="checkbox" name="executive" onClick={this.valueChanged}/>
											<label for="label-cube">Copy Cube</label>
										</td>
									</tr>
								</table>
							</td>
							<td>
								<table className="full-table">
									<tr>
										<td colSpan="3"><h4>Draw Clock</h4></td>
									</tr>
									<tr>
										<td>
											<input className="form-check-input td-checkbox" id="label-graph" type="checkbox" name="executive" onClick={this.valueChanged}/>
											<label for="label-graph">Contour</label>
										</td>
										<td>
											<input className="form-check-input td-checkbox" id="label-cube" type="checkbox" name="executive" onClick={this.valueChanged}/>
											<label for="label-cube">Numbers</label>
										</td>
										<td>
											<input className="form-check-input td-checkbox" id="label-graph" type="checkbox" name="executive" onClick={this.valueChanged}/>
											<label for="label-graph">Hands</label>
										</td>
									</tr>
								</table>
							</td>
							<td>
								Score: {this.state.executive}
							</td>
						</tr>
						<tr>
							<th className="moca-sub-heading" colSpan="3">NAMING</th>
						</tr>
						<tr>
							<td colSpan="2">
								<table className="full-table">
									<tr>
										<td><img className="animal-images" src={lion}/></td>
										<td><img className="animal-images" src={rhino}/></td>
										<td><img className="animal-images" src={camel}/></td>
									</tr>
									<tr>
										<td>
											<input className="form-check-input td-checkbox" id="label-graph" type="checkbox" name="naming" onClick={this.valueChanged}/>
										</td>
										<td>
											<input className="form-check-input td-checkbox" id="label-graph" type="checkbox" name="naming" onClick={this.valueChanged}/>
										</td>
										<td>
											<input className="form-check-input td-checkbox" id="label-graph" type="checkbox" name="naming" onClick={this.valueChanged}/>
										</td>
									</tr>
								</table>
							</td>
							<td>
								Score: {this.state.naming}
							</td>
						</tr>
						<tr>
							<th className="moca-sub-heading" colSpan="3">MEMORY</th>
						</tr>
						<tr>
							<td>
								<span>
								Read list of words, subject
								must repeat them. Do 2 trials.
								Do a recall after 5 minutes.
								</span>
							</td>
							<td>
								<table className="full-table custom-bordered">
									<tr>
										<th></th>
										<th>FACE</th>
										<th>VELVET</th>
										<th>CHURCH</th>
										<th>DAISY</th>
										<th>RED</th>
									</tr>
									<tr>
										<td>1st trial</td>
										<td><input className="form-check-input td-checkbox" type="checkbox"/></td>
										<td><input className="form-check-input td-checkbox" type="checkbox"/></td>
										<td><input className="form-check-input td-checkbox" type="checkbox"/></td>
										<td><input className="form-check-input td-checkbox" type="checkbox"/></td>
										<td><input className="form-check-input td-checkbox" type="checkbox"/></td>
									</tr>
									<tr>
										<td>2nd trial</td>
										<td><input className="form-check-input td-checkbox" type="checkbox"/></td>
										<td><input className="form-check-input td-checkbox" type="checkbox"/></td>
										<td><input className="form-check-input td-checkbox" type="checkbox"/></td>
										<td><input className="form-check-input td-checkbox" type="checkbox"/></td>
										<td><input className="form-check-input td-checkbox" type="checkbox"/></td>
									</tr>
								</table>
							</td>
							<td>No Points</td>
						</tr>
						<tr>
							<th className="moca-sub-heading" colSpan="3">ATTENTION</th>
						</tr>
						<tr>
							<td>
								Read list of digits (<strong>1 digit/ sec.</strong>).
							</td>
							<td>
								<table className="full-table">
									<tr>
										<td>Subject has to repeat them in the forward order</td>
										<td className="td-checkbox-left"><input className="form-check-input td-checkbox" type="checkbox" name="attention_1" onClick={this.valueChanged}/>2 1 8 5 4</td>
									</tr>
									<tr>
										<td>Subject has to repeat them in the backward order</td>
										<td className="td-checkbox-left"><input className="form-check-input td-checkbox" type="checkbox" name="attention_1" onClick={this.valueChanged}/>7 4 2</td>
									</tr>
								</table>
							</td>
							<td>
								Score: {this.state.attention_1}
							</td>
						</tr>
						<tr>
							<td>
								Read list of letters. The subject must tap with his hand at each letter A. No points if ≥ 2 errors
							</td>
							<td>
								<input className="form-check-input td-checkbox" type="checkbox" name="attention_2" onClick={this.valueChanged}/> F B A C M N A A J K L B A F A K D E A A A J A M O F A A B
							</td>
							<td>
								Score: {this.state.attention_2}
							</td>
						</tr>
						<tr>
							<td>
								<strong>Serial 7 subtraction starting at 100 </strong><br />4 or 5 correct subtractions: 3 pts <br />2 or 3 correct: 2 pts <br /> 1 correct: 1 pt <br />0 correct: 0 pt
							</td>
							<td>
								<table className="full-table">
									<tr>
										<td><input className="form-check-input td-checkbox" type="checkbox" name="attention_3" onClick={this.valueChanged}/>93</td>
										<td><input className="form-check-input td-checkbox" type="checkbox" name="attention_3" onClick={this.valueChanged}/>86</td>
										<td><input className="form-check-input td-checkbox" type="checkbox" name="attention_3" onClick={this.valueChanged}/>79</td>
										<td><input className="form-check-input td-checkbox" type="checkbox" name="attention_3" onClick={this.valueChanged}/>72</td>
										<td><input className="form-check-input td-checkbox" type="checkbox" name="attention_3" onClick={this.valueChanged}/>65</td>
									</tr>
								</table>

							</td>
							<td>
								Score: {this.state.attention_total}
							</td>
						</tr>
						<tr>
							<th className="moca-sub-heading" colSpan="3">LANGUAGE</th>
						</tr>
					<tr>
						<td>
							Repeat:
						</td>
						<td>
							<table className="full-table">
								<tr>
									<td colSpan="2">I only know that John is the one to help today.</td>
									<td className="td-checkbox-left"><input className="form-check-input td-checkbox" type="checkbox" name="language_1" onClick={this.valueChanged}/></td>
								</tr> <br />
								<tr>
									<td colSpan="2">The cat always hid under the couch when dogs were in the room.</td>
									<td className="td-checkbox-left"><input className="form-check-input td-checkbox" type="checkbox" name="language_1" onClick={this.valueChanged}/></td>
								</tr>
							</table>
						</td>
						<td>
							Score: {this.state.language_1}
						</td>
					</tr>
					<tr>
						<td>Fluency / Name maximum number of words in one minute that begin with the letter F</td>
						<td><input className="form-check-input td-checkbox" type="checkbox" name="language_2" onClick={this.valueChanged}/>(N > 11 words)</td>
						<td>Score: {this.state.language_2}</td>
					</tr>
					<tr>
						<th className="moca-sub-heading" colSpan="3">ABSTRACTION</th>
					</tr>
					<tr>
						<td>Similarity between e.g. banana - orange = fruit</td>
						<td>
							<input className="form-check-input td-checkbox" type="checkbox" name="abstraction" onClick={this.valueChanged}/>train-bicycle
							<input className="form-check-input td-checkbox-separated" type="checkbox" name="abstraction" onClick={this.valueChanged}/>watch-ruler</td>
						<td>
							Score: {this.state.abstraction}
						</td>
					</tr>
						<tr>
							<th className="moca-sub-heading" colSpan="3">DELAYED RECALL</th>
						</tr>
					<tr>
						<td colSpan="2">
							<table className="full-table custom-bordered">
								<tr>
									<td></td>
									<td>Has to recall words</td>
									<td>FACE</td>
									<td>VALVET</td>
									<td>CHURCH</td>
									<td>DAISY</td>
									<td>RED</td>
								</tr>
								<tr>
									<td></td>
									<td>WITH NO CLUE</td>
									<td><input className="form-check-input td-checkbox" type="checkbox" name="delayed_recall" onClick={this.valueChanged}/></td>
									<td><input className="form-check-input td-checkbox" type="checkbox" name="delayed_recall" onClick={this.valueChanged}/></td>
									<td><input className="form-check-input td-checkbox" type="checkbox" name="delayed_recall" onClick={this.valueChanged}/></td>
									<td><input className="form-check-input td-checkbox" type="checkbox" name="delayed_recall" onClick={this.valueChanged}/></td>
									<td><input className="form-check-input td-checkbox" type="checkbox" name="delayed_recall" onClick={this.valueChanged}/></td>
								</tr>
								<tr>
									<td rowSpan="2">OPTIONAL</td>
									<td>Category Clue</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>Multiple choice cue</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</table>
						</td>
						<td>Score: {this.state.delayed_recall}</td>
					</tr>
					<tr>
						<th className="moca-sub-heading" colSpan="3">ORIENTATION</th>
					</tr>
					<tr>
						<td colSpan="2">
							<input className="form-check-input td-checkbox" name="orientation" onClick={this.valueChanged} type="checkbox"/>Date
							<input className="form-check-input td-checkbox-separated" name="orientation" onClick={this.valueChanged} type="checkbox"/>Month
							<input className="form-check-input td-checkbox-separated" name="orientation" onClick={this.valueChanged} type="checkbox"/>Year
							<input className="form-check-input td-checkbox-separated" name="orientation" onClick={this.valueChanged} type="checkbox"/>Day
							<input className="form-check-input td-checkbox-separated" name="orientation" onClick={this.valueChanged} type="checkbox"/>Place
							<input className="form-check-input td-checkbox-separated" name="orientation" onClick={this.valueChanged} type="checkbox"/>City
						</td>
						<td>
							Score: {this.state.orientation}
						</td>
					</tr>
					<tr>
						<td>{"Add one point if <= 12 year education"}</td>
						<td><input className="form-check-input td-checkbox" name="edu_less_than_12_yrs" onClick={this.valueChanged} type="checkbox"/></td>
					</tr>
					<tr>
						<td colSpan="2"></td>
						<td><strong>Total Score : {this.getTotalScore()}</strong></td>
					</tr>
					</tbody>
				</table>
				<div className="download-btn">
					<DownloadCSV sendToServer={this.sendToServer} dataHandler={this.getCSVData} subjectId={this.state.subID} date={this.state.date} filename={"FMA.csv"} is_enabled={this.state.subID !== '' && this.state.date !== ''}/>
				</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
  return { };
}

const connectedMocaInputForm = connect(mapStateToProps)(MocaInputForm);
export { connectedMocaInputForm as MocaInputForm };

