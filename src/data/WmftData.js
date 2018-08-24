export const getWmftData = () => {
	var table_data = [];
	var row = {
		item_no: -1,
		separator: true,
		category: "Assessment of Affected Arm",
		posture: "",
		movement: "",
		score: '',
		score_range: [0, 0],
		row_id: "affected",
		comments: {
			default: ""
		}
	};
	table_data.push(row);
	row = {
		item_no: 1,
		task: "Forearm to table",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 2,
		task: "Forearm to box",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 3,
		task: "Extend elbow (to the side)",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 4,
		task: "Extend elbow (to the side with weight)",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 5,
		task: "Hand to table (front)",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 6,
		task: "Hand to box (front)",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 7,
		task: "Weight to box",
		time: 'na',
		score: '',
		score_range: [0, 600],
		comments: {
			default: 'Weight values must be numeric. Record weight in kgs rather than FAS. Time does not apply for this item' 
		}
	};
		table_data.push(row);

	row = {
		item_no: 8,
		task: "Reach and retrieve",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 9,
		task: "Lift can",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 10,
		task: "Lift pencil",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 11,
		task: "Lift paper clip",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 12,
		task: "Stack checkers",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 13,
		task: "Flip cards",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 14,
		task: "Grip strength",
		time: 'na',
		score: '',
		score_range: [0, 600],
		comments: {
			default: "Grip strength values must be numeric. Record grip strength in kgs rather than FAS. Time does not apply for this item", 
		}
	};
		table_data.push(row);

	row = {
		item_no: 15,
		task: "Turning key in lock",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 16,
		task: "Fold towel",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);

	row = {
		item_no: 17,
		task: "Lift basket",
		time: '',
		score: '',
		score_range: [0, 5],
		comments: {
			default: "FAS values should be 0 to 5.", 
			0: "Does not attempt movement at all",
			1: "UE does not participate functionally, but attempt is made", 
			2: "Does, but requires assistance of other arm, requires >2 attempts, or very slow", 
			3: "Does, but movement influenced by synergy, performed slowly, or with great effort", 
			4: "Does, but movement is slightly slower, less precise than normal", 
			5: "Movement appears to be normal"
		}
	};
		table_data.push(row);
	return table_data;
}

