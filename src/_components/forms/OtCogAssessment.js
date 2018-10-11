// OtCogAssessment.js
import React from 'react';
import { Header } from '../common/Header'

class OtCogAssessment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 0,
			education: 0,
			word_score: 0,
			color_score: 0,
			cw_score: 0,
			written_score: 0,
			oral_score: 0,
			trail_a_score: 0,
			trail_b_score: 0,
			stance_time: 0,
			moca_score: 0,
			right_grip: 0,
			left_grip: 0
		};
		this.calculateStroop = this.calculateStroop.bind(this);
		this.calculateSDMT = this.calculateSDMT.bind(this);
		this.calculateTrails = this.calculateTrails.bind(this);
		this.aboveOrBelow = this.aboveOrBelow.bind(this);
		this.calculateGripStrength = this.calculateGripStrength.bind(this);
		this.calculateMoCA = this.calculateMoCA.bind(this);
		this.calculateStance = this.calculateStance.bind(this);
	}

	calculateStroop(event){
		event.preventDefault();
		var age = this.state.age;
		var edu = this.state.education;
		var w = this.state.word_score;
		var c = this.state.color_score;
		var cw = this.state.cw_score;

		var WordFit=80.4-0.105*age+1.97*edu;
		var ColorFit=68.8-0.143*age+1.02*edu;
		var ColorWordFit=32.4-0.231*age+1.34*edu;
		var InterferenceFit=1/(1/w+1/c);

		var WordRes=w-WordFit;
		var ColorRes=c-ColorFit;
		var ColorWordRes=cw-ColorWordFit;
		var InterferenceRes=cw-InterferenceFit;

		var WordTS=50+0.702*WordRes;
		var ColorTS=50+0.831*ColorRes;
		var ColorWordTS=50+0.971*ColorWordRes;
		var InterferenceTS=50+InterferenceRes;

		console.log("InterferenceRes : " + InterferenceTS);

		this.refs.wOut.innerHTML=w.toString();
		this.refs.wFitOut.innerHTML=WordFit.toFixed(1);
		this.refs.wRes.innerHTML=WordRes.toFixed(1);
		this.refs.wTS.innerHTML=WordTS.toFixed(1);

		this.refs.cOut.innerHTML=c.toString();
		this.refs.cFitOut.innerHTML=ColorFit.toFixed(1);
		this.refs.cRes.innerHTML=ColorRes.toFixed(1);
		this.refs.cTS.innerHTML=ColorTS.toFixed(1);
	
		this.refs.cwOut.innerHTML=cw.toString();
		this.refs.cwFitOut.innerHTML=ColorWordFit.toFixed(1);
		this.refs.cwRes.innerHTML=ColorWordRes.toFixed(1);
		this.refs.cwTS.innerHTML=ColorWordTS.toFixed(1);
	

		if(WordTS<40 || ColorTS<40 || ColorWordTS<40) {
			this.refs.cwAgain.innerHTML="";
			this.refs.iFitOut.innerHTML="";
			this.refs.iRes.innerHTML="";
			this.refs.iTS.innerHTML="";
			this.refs.NoCalc.innerHTML="Unable to calculate interference because at least one t-score was less than 40.";
		}
		else {
			this.refs.cwAgain.innerHTML=cw.toString();
			this.refs.iFitOut.innerHTML=InterferenceFit.toFixed(1);
			this.refs.iRes.innerHTML=InterferenceRes.toFixed(1);
			this.refs.iTS.innerHTML=InterferenceTS.toFixed(1);
			this.refs.NoCalc.innerHTML="";
		}
	}

	aboveOrBelow(num){
		if(num>=0){
			return "above";
		}
		else{
			return "below";
		}
	}

	calculateSDMT(event) {
		event.preventDefault();
		var age = this.state.age;
		var edu = this.state.education;
		var os = this.state.oral_score;
		var ws = this.state.written_score;
		var oMean, wMean, oStd, wStd;

		if(edu<=12)
		{
			if(age>=18 && age <=24)
			{
				wMean = 54.40;
				wStd = 8.31;
				oMean = 61.31;
				oStd = 11.39;
			}
			else if(age <=34)
			{
				wMean = 53.30;
				wStd = 7.98;
				oMean = 60.57;
				oStd = 9.14;
			}
			else if(age <=44)
			{
				wMean = 51.50;
				wStd = 8.03;
				oMean = 59.87;
				oStd = 10.49;
			}
			else if(age <=64)
			{
				wMean = 42.80;
				wStd = 8.08;
				oMean = 49.03;
				oStd = 9.03;
			}
			else if(age <=78)
			{
				wMean = 33.31;
				wStd = 9.02;
				oMean = 42.05;
				oStd = 11.26;
			}
		}
		else
		{
			if(age>=18 && age <=24)
			{
				wMean = 61.93;
				wStd = 10.15;
				oMean = 69.91;
				oStd = 12.64;
			}
			else if(age <=34)
			{
				wMean = 57.72;
				wStd = 9.08;
				oMean = 65.71;
				oStd = 11.64;
			}
			else if(age <=44)
			{
				wMean = 54.20;
				wStd = 11.17;
				oMean = 60.95;
				oStd = 11.32;
			}
			else if(age <=64)
			{
				wMean = 47.60;
				wStd = 8.31;
				oMean = 54.47;
				oStd = 8.93;
			}
			else if(age <=78)
			{
				wMean = 43.55;
				wStd = 11.27;
				oMean = 52.89;
				oStd = 13.54;
			}
		}
		this.refs.wmSDMT.innerHTML = wMean.toString();
		this.refs.wstdSDMT.innerHTML = wStd.toString();
		this.refs.omSDMT.innerHTML = oMean.toString();
		this.refs.ostdSDMT.innerHTML = oStd.toString();

		var wMult = (ws-wMean)/wStd;
		var oMult = (os-oMean)/oStd;

		this.refs.wOutSDMT.innerHTML = "The patient's written score is "+ Math.abs(wMult.toFixed(2))+ " st dev " + this.aboveOrBelow(wMult) + " the mean.";
		this.refs.oOutSDMT.innerHTML = "The patient's oral score is "+ Math.abs(oMult.toFixed(2))+ " st dev " + this.aboveOrBelow(oMult) + " the mean.";

	}

	calculateTrails(event) {
		event.preventDefault();
		var age = this.state.age;
		var edu = this.state.education;
		var ta = this.state.trail_a_score;
		var tb = this.state.trail_b_score;
		var taMean, tbMean, taStd, tbStd;

		if(age>=18 && age<=24)
		{
			taMean = 22.93;
			taStd = 6.87;
			tbMean = 48.97;
			tbStd = 12.69;
		}
		else if(age <=35)
		{
			taMean = 24.4;
			taStd = 8.71;
			tbMean = 50.68;
			tbStd = 12.36;
		}
		else if(age<=44)
		{
			taMean = 28.54;
			taStd = 10.09;
			tbMean = 58.46;
			tbStd = 16.41;
		}
		else if(age<=54)
		{
			taMean =31.78;
			taStd = 9.93;
			tbMean = 63.76;
			tbStd = 14.42;
		}
		else if(age<=59)
		{
			if(edu<=12)
			{
				taMean = 35.1;
				taStd = 10.94;
				tbMean = 78.84;
				tbStd = 19.09;
			}
			else
			{
				taMean = 31.72;
				taStd = 10.14;
				tbMean = 68.74;
				tbStd = 21.02;
			}
		}
		else if(age<=64)
		{
			if(edu<=12)
			{
				taMean = 33.22;
				taStd = 9.1;
				tbMean = 74.55;
				tbStd = 19.55;
			}
			else
			{
				taMean = 31.32;
				taStd = 6.96;
				tbMean = 64.58;
				tbStd = 18.59;
			}
		}
		else if(age<=69)
		{
			if(edu<=12)
			{
				taMean = 39.14;
				taStd = 11.84;
				tbMean = 91.32;
				tbStd = 28.89;
			}
			else
			{
				taMean = 33.84;
				taStd = 6.69;
				tbMean = 67.12;
				tbStd = 9.31;
			}
		}
		else if(age<=74)
		{
			if(edu<=12)
			{
				taMean = 42.47;
				taStd = 15.15;
				tbMean = 109.95;
				tbStd = 35.15;
			}
			else
			{
				taMean = 40.13;
				taStd = 14.48;
				tbMean = 86.27;
				tbStd = 24.07;
			}
		}
		else if(age<=79)
		{
			if(edu<=12)
			{
				taMean = 50.81;
				taStd = 17.44;
				tbMean = 130.61;
				tbStd = 45.74;
			}
			else
			{
				taMean = 41.74;
				taStd = 15.32;
				tbMean = 100.68;
				tbStd = 44.16;
			}
		}
		else if(age<=84)
		{
			if(edu<=12)
			{
				taMean = 58.19;
				taStd = 23.31;
				tbMean = 152.74;
				tbStd = 65.68;
			}
			else
			{
				taMean = 55.32;
				taStd = 21.28;
				tbMean = 132.15;
				tbStd = 42.95;
			}
		}
		else if(age<=89)
		{
			if(edu<=12)
			{
				taMean = 57.56;
				taStd = 21.54;
				tbMean = 167.69;
				tbStd = 78.5;
			}
			else
			{
				taMean = 63.46;
				taStd = 29.22;
				tbMean = 140.54;
				tbStd = 75.38;
			}
		}
		this.refs.TrailsAMean.innerHTML	= taMean.toString();
		this.refs.TrailsAStd.innerHTML	= taStd.toString();
		this.refs.TrailsBMean.innerHTML	= tbMean.toString();
		this.refs.TrailsBStd.innerHTML	= tbStd.toString();

		var aMult =  (ta-taMean)/taStd;
		var bMult = (tb-tbMean)/tbStd;

		this.refs.TrailsAOut.innerHTML = "The patient's Trails A score is "+ Math.abs(aMult.toFixed(2))+ " st dev " + this.aboveOrBelow(-aMult) + " the mean.";
		this.refs.TrailsBOut.innerHTML = "The patient's Trails B score is "+ Math.abs(bMult.toFixed(2))+ " st dev " + this.aboveOrBelow(-bMult) + " the mean.";
	}

	calculateGripStrength(event) {
		event.preventDefault();
		var age = this.state.age;
		var male = 0;
		if(this.refs.male.checked){
			male = 1;
		}
		var RInput = this.state.right_grip;
		var LInput = this.state.left_grip;
		var LMean, LStDev, RMean, RStDev;
		if(male)
		{
			if(age<25)
			{
				RMean=121.0;
				RStDev=20.6;
				LMean=104.5;
				LStDev=21.8;
			}
			else if(age<30)
			{
				RMean=120.8;
				RStDev=23.0;
				LMean=110.5;
				LStDev=16.2;
			}
			else if(age<35)
			{
				RMean=121.8;
				RStDev=22.4;
				LMean=110.4;
				LStDev=21.7;
			}
			else if(age<40)
			{
				RMean=119.7;
				RStDev=24.0;
				LMean=112.9;
				LStDev=21.7;
			}
			else if(age<45)
			{
				RMean=116.8;
				RStDev=20.7;
				LMean=112.8;
				LStDev=18.7;
			}
			else if(age<50)
			{
				RMean=109.9;
				RStDev=23.0;
				LMean=100.8;
				LStDev=22.8;
			}
			else if(age<55)
			{
				RMean=113.6;
				RStDev=18.1;
				LMean=101.9;
				LStDev=17.0;
			}
			else if(age<60)
			{
				RMean=101.1;
				RStDev=26.7;
				LMean=83.2;
				LStDev=23.4;
			}
			else if(age<65)
			{
				RMean=89.7;
				RStDev=20.4;
				LMean=76.8;
				LStDev=20.3;
			}
			else if(age<70)
			{
				RMean=91.1;
				RStDev=20.6;
				LMean=76.8;
				LStDev=19.8;
			}
			else if(age<75)
			{
				RMean=75.3;
				RStDev=21.5;
				LMean=64.8;
				LStDev=18.1;
			}
			else
			{
				RMean=65.7;
				RStDev=21.0;
				LMean=55.0;
				LStDev=17.0;
			}
		}
		else
		{
			if(age<25)
			{
				RMean=70.4;
				RStDev=14.5;
				LMean=61.0;
				LStDev=13.1;
			}
			else if(age<30)
			{
				RMean=74.5;
				RStDev=13.9;
				LMean=63.5;
				LStDev=12.2;
			}
			else if(age<35)
			{
				RMean=78.7;
				RStDev=19.2;
				LMean=68.0;
				LStDev=17.7;
			}
			else if(age<40)
			{
				RMean=74.1;
				RStDev=10.8;
				LMean=66.3;
				LStDev=11.7;
			}
			else if(age<45)
			{
				RMean=70.4;
				RStDev=13.5;
				LMean=62.3;
				LStDev=13.8;
			}
			else if(age<50)
			{
				RMean=62.2;
				RStDev=15.1;
				LMean=56.0;
				LStDev=12.7;
			}
			else if(age<55)
			{
				RMean=65.8;
				RStDev=11.6;
				LMean=57.3;
				LStDev=10.7;
			}
			else if(age<60)
			{
				RMean=57.3;
				RStDev=12.5;
				LMean=47.3;
				LStDev=11.9;
			}
			else if(age<65)
			{
				RMean=55.1;
				RStDev=10.1;
				LMean=45.7;
				LStDev=10.1;
			}
			else if(age<70)
			{
				RMean=49.6;
				RStDev=9.7;
				LMean=41.0;
				LStDev=8.2;
			}
			else if(age<75)
			{
				RMean=49.6;
				RStDev=11.7;
				LMean=41.5;
				LStDev=10.2;
			}
			else
			{
				RMean=42.6;
				RStDev=11.0;
				LMean=37.6;
				LStDev=8.9;
			}
		}
	
		this.refs.RMeanGrip.innerHTML = RMean.toString();
		this.refs.RStDevGrip.innerHTML = RStDev.toString();
		this.refs.LMeanGrip.innerHTML = LMean.toString();
		this.refs.LStDevGrip.innerHTML = LStDev.toString();

		var RMult = (RInput-RMean)/RStDev;
		var LMult = (LInput-LMean)/LStDev;

		this.refs.ROutGrip.innerHTML = "The patient's right hand score is "+ Math.abs(RMult.toFixed(2))+ " st dev " + this.aboveOrBelow(RMult) + " the mean.";
		this.refs.LOutGrip.innerHTML = "The patient's left hand score is "+ Math.abs(LMult.toFixed(2))+ " st dev " + this.aboveOrBelow(LMult) + " the mean.";
	}

	calculateMoCA(event) {
		event.preventDefault();
		var age = this.state.age;
		var edu = this.state.education;
		var score = this.state.moca_score;
		var mean, stdev;
		if(edu<12)
		{
			if(age<35)
			{
				mean=22.8;
				stdev=3.38;
			}
			else if(age<40)
			{
				mean=22.84;
				stdev=3.18;
			}
			else if(age<45)
			{
				mean=22.11;
				stdev=3.33;
			}
			else if(age<50)
			{
				mean=21.36;
				stdev=3.73;
			}
			else if(age<55)
			{
				mean=20.75;
				stdev=3.80;
			}
			else if(age<60)
			{
				mean=19.94;
				stdev=4.34;
			}
			else if(age<65)
			{
				mean=19.60;
				stdev=4.14;
			}
			else if(age<70)
			{
				mean=19.30;
				stdev=3.79;
			}
			else if(age<75)
			{
				mean=18.37;
				stdev=3.87;
			}
			else
			{
				mean=16.07;
				stdev=3.17;
			}
		}
		else if(edu === 12)
		{
			if(age<35)
			{
				mean=24.46;
				stdev=3.49;
			}
			else if(age<40)
			{
				mean=23.99;
				stdev=2.93;
			}
			else if(age<45)
			{
				mean=23.02;
				stdev=3.67;
			}
			else if(age<50)
			{
				mean=22.26;
				stdev=3.94;
			}
			else if(age<55)
			{
				mean=21.87;
				stdev=3.95;
			}
			else if(age<60)
			{
				mean=22.25;
				stdev=3.46;
			}
			else if(age<65)
			{
				mean=21.58;
				stdev=3.93;
			}
			else if(age<70)
			{
				mean=20.89;
				stdev=4.50;
			}
			else if(age<75)
			{
				mean=20.57;
				stdev=4.79;
			}
			else
			{
				mean=20.35;
				stdev=4.91;
			}
		}
		else
		{
			if(age<35)
			{
				mean=25.93;
				stdev=2.48;
			}
			else if(age<40)
			{
				mean=25.81;
				stdev=2.64;
			}
			else if(age<45)
			{
				mean=25.38;
				stdev=3.05;
			}
			else if(age<50)
			{
				mean=25.09;
				stdev=3.16;
			}
			else if(age<55)
			{
				mean=24.70;
				stdev=3.24;
			}
			else if(age<60)
			{
				mean=24.34;
				stdev=3.38;
			}
			else if(age<65)
			{
				mean=24.43;
				stdev=3.31;
			}
			else if(age<70)
			{
				mean=24.32;
				stdev=3.04;
			}
			else if(age<75)
			{
				mean=24.00;
				stdev=3.35;
			}
			else
			{
				mean=23.60;
				stdev=3.47;
			}
		}

		this.refs.MoCAMean.innerHTML = mean.toString();
		this.refs.MoCAStDev.innerHTML = stdev.toString();

		var mult = (score-mean)/stdev;

		this.refs.MoCAOut.innerHTML = "The patient's score is "+ Math.abs(mult.toFixed(2))+ " st dev " + this.aboveOrBelow(mult) + " the mean.";
	}

	calculateStance(event) {
		event.preventDefault();
		var time = this.state.stance_time;
		var output="Test does not indicate high fall risk";
		if(time < 5){
			output="Test indicates high fall risk";
		}
		this.refs.StanceOut.innerHTML = output;
	}

	onValueChange(field_name, event) {
		var obj = {};
		obj[field_name] = event.target.value;
		this.setState(obj);
	}

	render() {
		return(
			<div>
				<Header />
				<div className="ot-container">
					<h1 align="center">OT Assessments</h1>
					<h2>General Information</h2>
					<p> Use this calculator at your own risk!  It is your responsibility to check the results.</p>
					<form>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Age</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.age} onChange={this.onValueChange.bind(this, "age")} ref="age" placeholder="Age"></input>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Education</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" ref="education" value={this.state.education} onChange={this.onValueChange.bind(this, "education")} placeholder="Education (years of edu.)"></input>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Sex</label>
							<div className="form-check col-sm-2">
								<input className="form-check-input" name="gridRadios" ref="male" type="radio" value="male"></input>
								<label className="radio-inline">Male</label>
							</div>

							<div className="form-check col-sm-2">
								<input className="form-check-input" name="gridRadios" ref="female" type="radio" value="female"></input>
								<label className="radio-inline">Female</label>
							</div>
						</div>
					</form>
					<br/>
					<h2>Stroop</h2>
					<form name="StroopInputForm">
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Word Score</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.word_score} ref="word_score" onChange={this.onValueChange.bind(this, "word_score")} placeholder="Word Score"></input>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Color Score</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.color_score} ref="color_score" onChange={this.onValueChange.bind(this, "color_score")} placeholder="Color Score"></input>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Color Word Score</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.cw_score} ref="cw_score" onChange={this.onValueChange.bind(this, "cw_score")} placeholder="Color Word Score"></input>
							</div>
						</div>
						<button className="btn btn-primary" onClick={this.calculateStroop}>Calculate Stroop</button>
					</form>
					<br/>

					<table className="table">
						<thead>
							<tr>
								<th>Score Type</th>
								<th>Raw Score</th>
								<th>Predicted</th>
								<th>Residual</th>
								<th>T-Score</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Word Score</td>
								<td ref="wOut"> </td>
								<td ref="wFitOut"> </td>
								<td ref="wRes"> </td>
								<td ref="wTS"> </td>
							</tr>
							<tr>
								<td>Color Score</td>
								<td ref="cOut"> </td>
								<td ref="cFitOut"> </td>
								<td ref="cRes"> </td>
								<td ref="cTS"> </td>
							</tr>
							<tr>
								<td>Color-Word Score</td>
								<td ref="cwOut"> </td>
								<td ref="cwFitOut"> </td>
								<td ref="cwRes"> </td>
								<td ref="cwTS"> </td>
							</tr>
							<tr>
								<td>Color-Word Interference</td>
								<td>Color-Word Score (Again)</td>
								<td>Predicted</td>
								<td>Interference</td>
								<td>T-Score</td>
							</tr>
							<tr>
								<td> </td>
								<td ref="cwAgain"> </td>
								<td ref="iFitOut"> </td>
								<td ref="iRes"> </td>
								<td ref="iTS"> </td>
							</tr>
						</tbody>
					</table>

					<p ref="NoCalc"></p>
					<h2>SDMT</h2>
					<form name="SDMTInputForm">
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Written Score</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.written_score} onChange={this.onValueChange.bind(this, "written_score")} placeholder="Written Score"></input>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Oral Score</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.oral_score} onChange={this.onValueChange.bind(this, "oral_score")} placeholder="Oral Score"></input>
							</div>
						</div>
						<button className="btn btn-primary" onClick={this.calculateSDMT}>Calculate SDMT</button>
					</form>
					<br/>
					<p>For the patient's education and age group the expected scores are:</p>
					<table className="table">
						<thead>
							<tr>
								<th>Written score mean</th>
								<th>Written score std dev</th>
								<th>Oral score mean</th>
								<th>Oral score std dev</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td ref="wmSDMT">NaN</td>
								<td ref="wstdSDMT">NaN</td>
								<td ref="omSDMT">NaN</td>
								<td ref="ostdSDMT">NaN</td>
							</tr>
						</tbody>
					</table>
					<br/>
					<p ref="wOutSDMT"></p>
					<p ref="oOutSDMT"></p>
					<h2>Trails</h2>
					<form name="TrailsInputForm">
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Trails A Score</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.trail_a_score} onChange={this.onValueChange.bind(this, "trail_a_score")} placeholder="Trails A Score"></input>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Trails B Score</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.trail_b_score} onChange={this.onValueChange.bind(this, "trail_b_score")} placeholder="Trails B Score"></input>
							</div>
						</div>
						<button className="btn btn-primary" onClick={this.calculateTrails}>Calculate Trails</button>
					</form>
					<br/>
					<p>For the patient's education and age group the expected scores are:</p>
					<br/>
					<table className="table">
						<thead>
							<tr>
								<th>Trails A mean</th>
								<th>Trails A std dev</th>
								<th>Trails B mean</th>
								<th>Trails B std dev</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td ref="TrailsAMean">NaN</td>
								<td ref="TrailsAStd">NaN</td>
								<td ref="TrailsBMean">NaN</td>
								<td ref="TrailsBStd">NaN</td>
							</tr>
						</tbody>
					</table>
					<p ref="TrailsAOut"></p>
					<p ref="TrailsBOut"></p>
					<p><b>Note:</b>  Higher scores indicate WORSE performance (are considered further below average).</p>
					<br/>
					<h2>Single Leg Stance</h2>
					<form name="StanceInputForm">
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Time (in seconds)</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.stance_time} onChange={this.onValueChange.bind(this, "stance_time")} placeholder="Time (in seconds)"></input>
							</div>
						</div>
						<button className="btn btn-primary" onClick={this.calculateStance}>Calculate Single Leg Stance</button>
					</form>
					<br/>
					<p ref="StanceOut"></p>
					<h2>MoCA</h2>
					<form name="MoCAInputForm">
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Score</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.moca_score} onChange={this.onValueChange.bind(this, "moca_score")} placeholder="Score"></input>
							</div>
						</div>
						<button className="btn btn-primary" onClick={this.calculateMoCA}>Calculate MoCA</button>
					</form>
					<br/>
					<p>For the patient's education and age group the expected score is:</p>
					<table className="table">
						<thead>
							<tr>
								<th>Mean score</th>
								<th>St dev</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td ref="MoCAMean">NaN</td>
								<td ref="MoCAStDev">NaN</td>
							</tr>
						</tbody>
					</table>
					<br/>
					<p ref="MoCAOut"></p>
					<p><b>Note:</b>The original MoCA data has overlapping age ranges so there is some ambiguity in reporting a score.</p>
					<h2>Grip Strength</h2>
					<form name="GripStrengthInputForm">
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Right hand (lbs)</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.right_grip} onChange={this.onValueChange.bind(this, "right_grip")} placeholder="Right hand (lbs)"></input>
							</div>
						</div>

						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Left hand (lbs)</label>
							<div className="col-sm-3">
								<input type="number" className="form-control" value={this.state.left_grip} onChange={this.onValueChange.bind(this, "left_grip")} placeholder="Left hand (lbs)"></input>
							</div>
						</div>
						<button className="btn btn-primary" onClick={this.calculateGripStrength}>Calculate Grip Strength</button>
					</form>
					<br/>
					<p>For the patient's education, age group, and sex the expected scores are:</p>
					<table className="table">
						<thead>
							<tr>
								<td>Right hand mean</td>
								<td>Right hand st dev</td>
								<td>Left hand mean</td>
								<td>Left hand st dev</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td ref="RMeanGrip">NaN</td>
								<td ref="RStDevGrip">NaN</td>
								<td ref="LMeanGrip">NaN</td>
								<td ref="LStDevGrip">NaN</td>
							</tr>
						</tbody>
					</table>
					<br/>
					<p ref="ROutGrip"></p>
					<p ref="LOutGrip"></p>
				</div>
			</div>
			);
	}
}

export default OtCogAssessment;