export const getNhssData = () =>{
	var table_data = [];
	var row = {
		item_no: "1",
		domain: "Levels of Consciousness",
		specific: "Arousal Status",
		rowspan: 3,
		score: '',
		score_range:[0, 3],
		comments: {
			default: "Values must be 0 to 3.",
			0: "Alert (awakens easily and stays awake)",
			1: "Drowsy (responds to stimulation but falls back asleep)",
			2: "Obtunded (responds only to deep pain or vigorous stim)",
			3: "Comatose (no response)"
		}
	};
	table_data.push(row);

	row = {
		item_no: "2",
		domain: "Levels of Consciousness",
		specific:"Current Month and Age",
		rowspan: 0,
		score: '',
		score_range:[0, 2],
		comments: {
			default: "Values must be 0 to 2.",
			0: "Both questions answered correctly",
			1: "One question answered correctly",
			2: "Neither question answered correctly"
		}
	};
	table_data.push(row);
	row = {
		item_no: "3",
		domain: "Levels of Consciousness",
		specific:"Commands: Open/Close Eyes and Hands",
		rowspan: 0,
		score: '',
		score_range:[0, 2],
		comments: {
			default: "Values must be 0 to 2.",
			0: "Both commands performed correctly",
			1: "One command performed correctly",
			2: "Neither command performed correctly"
		}
	};
	table_data.push(row);
	row = {
		item_no: "4",
		domain: "",
		specific:"Eye Movements",
		rowspan: 1,
		score: '',
		score_range:[0, 2],
		comments: {
			default: "Values must be 0 to 2.",
			0: "Normal",
			1: "Mild gaze paralysis (can bring eyes over to midline)",
			2: "Complete gaze paralysis (deviated and unable to bring eyes over)"
		}
	};
	table_data.push(row);
	row = {
		item_no: "5",
		domain: "",
		specific:"Visual Fields",
		rowspan: 1,
		score: '',
		score_range:[0, 3],
		comments: {
			default: "Values must be 0 to 3.",
			0: "Normal",
			1: "Partial hemianopia",
			2: "Complete hemianopia",
			3: "Bilateral hemianopia (total blindness)"
		}
	};
	table_data.push(row);
	row = {
		item_no: "6",
		domain: "",
		specific:"Facial Movements",
		rowspan: 1,
		score: '',
		score_range:[0, 3],
		comments: {
			default: "Values must be 0 to 3.",
			0: "Normal",
			1: "Minor paralysis (flattening of nasolabial folds)",
			2: "Partial paralysis (near or total lower face paralysis)",
			3: "Complete paralysis (affecting both upper and lower face)"
		}
	};
	table_data.push(row);

	row = {
		item_no: "7",
		domain: "Motor",
		specific: "Left Arm",
		rowspan: 4,
		score: '',
		score_range: [0, 4],
		comments: {
			default: "Values must be 0 to 4.",
			0: "Normal (no drift)",
			1: "Some drift (arms drifts partially downward)",
			2: "Drift (arm drifts down to hip level within 10s)",
			3: "Movement, but not against gravity", 
			4: "Complete paralysis (no movement at all)"
		}
	};
	table_data.push(row);
	row = {
		item_no: "8",
		domain: "Motor",
		specific: "Rights Arm",
		rowspan: 0,
		score: '',
		score_range: [0, 4],
		comments: {
			default: "Values must be 0 to 4.",
			0: "Normal (no drift)",
			1: "Some drift (arms drifts partially downward)",
			2: "Drift (arm drifts down to hip level within 10s)",
			3: "Movement, but not against gravity", 
			4: "Complete paralysis (no movement at all)"
		}
	};
	table_data.push(row);
	row = {
		item_no: "9",
		domain: "Motor",
		specific: "Left Leg",
		rowspan: 0,
		score: '',
		score_range: [0, 4],
		comments: {
			default: "Values must be 0 to 4.",
			0: "Normal (no drift)",
			1: "Some drift (arms drifts partially downward)",
			2: "Drift (leg drifts down to surface within 5s)",
			3: "Movement, but not against gravity", 
			4: "Complete paralysis (no movement at all)"
		}
	};
	table_data.push(row);
	row = {
		item_no: "10",
		domain: "Motor",
		specific: "Right Leg",
		rowspan: 0,
		score: '',
		score_range: [0, 4],
		comments: {
			default: "Values must be 0 to 4.",
			0: "Normal (no drift)",
			1: "Some drift (arms drifts partially downward)",
			2: "Drift (leg drifts down to surface within 5s)",
			3: "Movement, but not against gravity", 
			4: "Complete paralysis (no movement at all)"
		}
	};
	table_data.push(row);
	row = {
		item_no: "11",
		domain: "",
		specific: "Limb Ataxia",
		rowspan: 1,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0 to 2.",
			0: "Absent (no ataxia)",
			1: "Present in one limb",
			2: "Present in two or more limbs"
		}
	};
	table_data.push(row);
	row = {
		item_no: "12",
		domain: "",
		specific: "Sensory",
		rowspan: 1,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0 to 2.",
			0: "Normal",
			1: "Mild to moderate loss",
			2: "Severe to total sensory loss (unaware of touch)"
		}
	};
	table_data.push(row);
	row = {
		item_no: "13",
		domain: "",
		specific: "Language/Aphasia",
		rowspan: 1,
		score: '',
		score_range: [0, 3],
		comments: {
			default: "Values must be 0 to 3.",
			0: "Normal ability to use words",
			1: "Mild to moderate (repeats/names with some difficulty)",
			2: "Severe aphasia (very few words correct or understood)",
			3: "Mute (no evidence of ability to speak or understand)"
		}
	};
	table_data.push(row);
	row = {
		item_no: "14",
		domain: "",
		specific: "Dysarthia",
		rowspan: 1,
		score: '',
		score_range: [0, 3],
		comments: {
			default: "Values must be 0 to 3.",
			0: "Normal",
			1: "Mild to moderate slurred speech",
			2: "Severely slurred speech (unintelligible)",
			3: "Intubated or other physical barrier"
		}
	};
	table_data.push(row);
	row = {
		item_no: "15",
		domain: "",
		specific: "Neglect",
		rowspan: 1,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0 to 2.",
			0: "No abnormality in attention",
			1: "mild (partial visual or tactile neglect)",
			2: "Profound (complete visual and tactile neglect)"
		}
	};
	table_data.push(row);
	return table_data;
}