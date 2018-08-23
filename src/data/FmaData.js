export const getFmaLeData = () => {
	var table_data = [];
	var row = {
		item_no: -1,
		separator: true,
		category: "FMA Lower Extremity",
		posture: "",
		movement: "",
		rowspan: 1,
		score: '',
		score_range: [0, 0],
		comments: {
			default: ""
		}
	};
	table_data.push(row);
	row = {
		item_no: 1,
		category: "Reflex Activity",
		posture: "Supine or Sitting",
		movement: "Achilles Reflex",
		rowspan: 2,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 2, or 'na'.",   
			0:  "No reflex activity can be elicited",
			2: "Reflex activity can be Elicited"
		}
	};
	table_data.push(row);
	row = {
		item_no: 2,
		category: "Reflex Activity",
		posture: "Supine or Sitting",
		movement: "Patellar Reflex",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 2, or 'na'.",   
			0:  "No reflex activity can be elicited",
			2: "Reflex activity can be Elicited"
		}
	};
	table_data.push(row);
	row = {
		item_no: 3,
		category: "Flexory Synergy",
		posture: "Supine",
		movement: "Flexor Synergy-Hip",
		rowspan: 3,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "Cannot be performed at all",
			1: "Partial Motion",
			2: "Full Motion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 4,
		category: "Flexory Synergy",
		posture: "Supine",
		movement: "Flexor Synergy-Knee",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "Cannot be performed at all",
			1: "Partial Motion",
			2: "Full Motion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 5,
		category: "Flexory Synergy",
		posture: "Supine",
		movement: "Flexor Synergy-Ankle",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "Cannot be performed at all",
			1: "Partial Motion",
			2: "Full Motion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 6,
		category: "Extensory Synergy",
		posture: "Side-lying",
		movement: "Extensor Synergy-Hip",
		rowspan: 4,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "Cannot be performed at all",
			1: "Partial Motion",
			2: "Full Motion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 7,
		category: "Extensory Synergy",
		posture: "Side-lying",
		movement: "Adductor Synergy-Hip",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "Cannot be performed at all",
			1: "Partial Motion",
			2: "Full Motion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 8,
		category: "Extensory Synergy",
		posture: "Side-lying",
		movement: "Extensor Synergy-Knee",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "Cannot be performed at all",
			1: "Partial Motion",
			2: "Full Motion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 9,
		category: "Extensory Synergy",
		posture: "Side-lying",
		movement: "Extensory Synergy-Ankle",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "Cannot be performed at all",
			1: "Partial Motion",
			2: "Full Motion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 10,
		category: "Movement Combining Synergy",
		posture: "Sitting",
		movement: "Knee Flexion Beyond 90",
		rowspan: 2,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "No active motion",
			1: "Knee flexion NOT beyond 90; OR hip flexes during movement",
			2: "Knee flexion beyond 90"
		}
	};
	table_data.push(row);
	row = {
		item_no: 11,
		category: "Movement Combining Synergy",
		posture: "Sitting",
		movement: "Ankle Dorsiflexion",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "No active motion",
			1: "Incomplete dorsiflexion; Heel must remain on floor",
			2: "Normal dorsiflexion; Heel must remain on floor"
		}
	};
	table_data.push(row);
	row = {
		item_no: 12,
		category: "Movement Out of Synergy",
		posture: "Standing",
		movement: "Knee Flexion",
		rowspan: 2,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "Knee cannot flex without hip extension",
			1: "Knee flexion does not reach 90 OR hip flexes",
			2: "Knee flexion beyond 90; NO hip flexion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 13,
		category: "Movement Out of Synergy",
		posture: "Standing",
		movement: "Ankle Dorsiflexion",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "No active motion",
			1: "Partial motion",
			2: "Full motion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 14,
		category: "Normal Reflexes",
		posture: "Sitting",
		movement: "Normal Reflexes",
		rowspan: 1,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "At least 2 of the 3 phasic reflexes are markedly hyperactive",
			1: "One reflex is markedly hyperactive",
			2: "No more than one reflex is lively and none are hyperactive"
		}
	};
	table_data.push(row);
	row = {
		item_no: 15,
		category: "Coordination/Speed Sitting",
		posture: "Sitting",
		movement: "Coordination Tremor",
		rowspan: 3,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "Marked Tremor",
			1: "Slight Tremor",
			2: "No evident tremor"
		}
	};
	table_data.push(row);
	row = {
		item_no: 16,
		category: "Coordination/Speed Sitting",
		posture: "Sitting",
		movement: "Coordination Dysmetria",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "Pronounced or unsystematic dysmetria",
			1: "Slight or systematic dysmetria",
			2: "No evident dysmetria"
		}
	};
	table_data.push(row);
	row = {
		item_no: 17,
		category: "Coordination/Speed Sitting",
		posture: "Sitting",
		movement: "Coordination Speed",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.",
			0: "Six-seconds longer than unaffected leg",
			1: "2-5.9 s longer than unaffected leg",
			2: "Less than 2 s different from unaffected leg"
		}
	};
	table_data.push(row);
	row = {
		item_no: -1,
		separator: true,
		category: "FMA Upper Extremity",
		posture: "",
		movement: "",
		rowspan: 1,
		score: '',
		score_range: [0, 0],
		comments: {
			default: ""
		}
	};
	table_data.push(row);
	return table_data;
}

export const getFmaUeData = () => {
	var table_data = [];
	var row = {
		item_no: 18,
		category: "Reflex Activity",
		posture: "Sitting",
		movement: "Reflex Activity - Triceps",
		rowspan: 2,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 2, or 'na'.", 
			0: "No reflex activity can be elicited",
			2: "Reflex activity can be Elicited"
		}
	};
	table_data.push(row);
	row = {
		item_no: 19,
		category: "Reflex Activity",
		posture: "Sitting",
		movement: "Reflex Activity - Biceps",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 2, or 'na'.",
			0: "No reflex activity can be elicited",
			2: "Reflex activity can be Elicited"
		}
	};
	table_data.push(row);
	row = {
		item_no: 20,
		category: "Flexor Synergy",
		posture: "Sitting",
		movement: "Elevation - Scapular",
		rowspan: 6,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot be performed",
			1: "Performed Partly",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 21,
		category: "Flexor Synergy",
		posture: "Sitting",
		movement: "Retraction - Scapular",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot be performed",
			1: "Performed Partly",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 22,
		category: "Flexor Synergy",
		posture: "Sitting",
		movement: "Shoulder Abduction",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot be performed",
			1: "Performed Partly",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 23,
		category: "Flexor Synergy",
		posture: "Sitting",
		movement: "External Rotation",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot be performed",
			1: "Performed Partly",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 24,
		category: "Flexor Synergy",
		posture: "Sitting",
		movement: "Elbow Flexion",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot be performed",
			1: "Performed Partly",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 25,
		category: "Flexor Synergy",
		posture: "Sitting",
		movement: "Forearm Supination",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot be performed",
			1: "Performed Partly",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 26,
		category: "Extensor Synergy",
		posture: "Sitting",
		movement: "Internal Rotation",
		rowspan: 3,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot be performed",
			1: "Performed Partly",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 27,
		category: "Extensor Synergy",
		posture: "Sitting",
		movement: "Elbow Extension",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot be performed",
			1: "Performed Partly",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 28,
		category: "Extensor Synergy",
		posture: "Sitting",
		movement: "Forearm Pronation",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot be performed",
			1: "Performed Partly",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 29,
		category: "Movement Combining Synergy",
		posture: "Sitting",
		movement: "Hand to Lumbar Spine",
		rowspan: 3,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot pass ASIS",
			1: "Performed Partly ; Hand clears ASIS",
			2: "Performed faultlessly; Hand clears ASIS, extends toward sacrum"
		}
	};
	table_data.push(row);
	row = {
		item_no: 30,
		category: "Movement Combining Synergy",
		posture: "Sitting",
		movement: "Shoulder to 90; Elbow at 0",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot perform; Elbow flexes immediately",
			1: "Partly Performed; Elbow flexion occurs late in movement",
			2: "Faultlessly Performed; Shoulder flexed with elbow extended"
		}
	};
	table_data.push(row);
	row = {
		item_no: 31,
		category: "Movement Combining Synergy",
		posture: "Sitting",
		movement: "Pronation/Supination; Shoulder at 0 Elbow at 90",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Cannot hold correct position; Cannot pronate/supinate",
			1: "Pronation/supination performed with limited range of motion",
			2: "Complete pronation/supination with arm held in correct position"
		}
	};
	table_data.push(row);
	row = {
		item_no: 32,
		category: "Movement Out Synergy",
		posture: "Sitting",
		movement: "Shoulder Abduction",
		rowspan: 3,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Elbow flexion occurs; Any deviation from pronation",
			1: "Partially performed; elbow flexion occurs late",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 33,
		category: "Movement Out Synergy",
		posture: "Sitting",
		movement: "Shoulder Flexion",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Elbow flexion/shoulder abduction occurs immediately",
			1: "Elbow flexion/shoulder abduction occurs late",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 34,
		category: "Movement Out Synergy",
		posture: "Sitting",
		movement: "Pronation/Supination; Elbow at 0, Shoulder flexion between 30-90 ",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Supination/pronation cannot be performed at all",
			1: "Elbow and shoulder in proper position;Supination performed with limited range",
			2: "Performed faultlessly"
		}
	};
	table_data.push(row);
	row = {
		item_no: 35,
		category: "Normal Reflexes",
		posture: "Sitting",
		movement: "Bicep/Tricep Reflexes",
		rowspan: 1,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'. Only administer if a patient maxes out all previous UE items.", 
			0: "At least 2/3 reflexes are markedly hyper active",
			1: "One reflex is markedly hyperactive, or at least two are lively",
			2: "No reflexes are hyperactive, no more than one is lively"
		}
	};
	table_data.push(row);
	row = {
		item_no: 36,
		category: "Wrist",
		posture: "Sitting",
		movement: "Stability, elbow 90",
		rowspan: 5,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Patient cannot dorsiflex wrist as required",
			1: "Dorsiflexion accomplished without resistance",
			2: "Position maintained with slight resistance"
		}
	};
	table_data.push(row);
	row = {
		item_no: 37,
		category: "Wrist",
		posture: "Sitting",
		movement: "Flexion/Extension, elbow 90",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Volitional movement does not occur",
			1: "Patient cannot actively move through full range of motion",
			2: "Active smooth movement through full range of motion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 38,
		category: "Wrist",
		posture: "Sitting",
		movement: "Stability, elbow 0",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Patient cannot dorsiflex wrist as required",
			1: "Dorsiflexion accomplished without resistance",
			2: "Position maintained with slight resistance"
		}
	};
	table_data.push(row);
	row = {
		item_no: 39,
		category: "Wrist",
		posture: "Sitting",
		movement: "Flexion/Extension, elbow 0",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Volitional movement does not occur",
			1: "Patient cannot actively move through full range of motion",
			2: "Active smooth movement through full range of motion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 40,
		category: "Wrist",
		posture: "Sitting",
		movement: "Circumduction",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Movement cannot be performed",
			1: "Jerky OR incomplete circumduction",
			2: "Smooth AND complete motion"
		}
	};
	table_data.push(row);
	row = {
		item_no: 41,
		category: "Hand",
		posture: "Sitting",
		movement: "Finger flexion",
		rowspan: 7,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "No flexion occurs",
			1: "Some flexion; incomplete range of motion",
			2: "Complete active flexion (compared to unaffected hand)"
		}
	};
	table_data.push(row);
	row = {
		item_no: 42,
		category: "Hand",
		posture: "Sitting",
		movement: "Finger extenstion",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "No extension occurs",
			1: "Patient can release mass flexion grasp",
			2: "Complete active extension (compared to unaffected hand)"
		}
	};
	table_data.push(row);
	row = {
		item_no: 43,
		category: "Hand",
		posture: "Sitting",
		movement: "Grasp 1",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Required position not attained",
			1: "Grasp is weak",
			2: "Grasp maintained against resistance"
		}
	};
	table_data.push(row);
	row = {
		item_no: 44,
		category: "Hand",
		posture: "Sitting",
		movement: "Grasp 2",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Required position not attained",
			1: "Grasp is weak",
			2: "Grasp maintained against resistance"
		}
	};
	table_data.push(row);
	row = {
		item_no: 45,
		category: "Hand",
		posture: "Sitting",
		movement: "Grasp 3",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Required position not attained",
			1: "Grasp is weak",
			2: "Grasp maintained against resistance"
		}
	};
	table_data.push(row);
	row = {
		item_no: 46,
		category: "Hand",
		posture: "Sitting",
		movement: "Grasp 4",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Required position not attained",
			1: "Grasp is weak",
			2: "Grasp maintained against resistance"
		}
	};
	table_data.push(row);
	row = {
		item_no: 47,
		category: "Hand",
		posture: "Sitting",
		movement: "Grasp 5",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Required position not attained",
			1: "Grasp is weak",
			2: "Grasp maintained against resistance"
		}
	};
	table_data.push(row);
	row = {
		item_no: 48,
		category: "Coordination/Speed",
		posture: "Sitting",
		movement: "Tremor",
		rowspan: 3,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Marked tremor",
			1: "Slight tremor",
			2: "No tremor"
		}
	};
	table_data.push(row);
	row = {
		item_no: 49,
		category: "Coordination/Speed",
		posture: "Sitting",
		movement: "Dysmetria",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Pronounce OR unsystematic dysmetria",
			1: "Slight OR systematic dysmetria",
			2: "No dysmetria"
		}
	};
	table_data.push(row);
	row = {
		item_no: 50,
		category: "Coordination/Speed",
		posture: "Sitting",
		movement: "Speed",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Six-seconds longer than unaffected leg",
			1: "2-5.9 s longer than unaffected leg",
			2: "Less than 2 s different from unaffected leg"
		}
	};
	table_data.push(row);
	row = {
		item_no: -1,
		separator: true,
		category: "FMA Sense",
		posture: "",
		movement: "",
		rowspan: 1,
		score: '',
		score_range: [0, 0],
		comments: {
			default: ""
		}
	};
	table_data.push(row);
	return table_data;
}

export const getFmaSenseData = () => {
	var table_data = [];
	var row = {
		item_no: 51,
		category: "Light Touch - UE",
		posture: "Supine or Sitting",
		movement: "Upper arm ",
		rowspan: 2,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Sensation impaired on affected side",
			2: "Sensation equivalent between affect/unaffected sides"
		}
	};
	table_data.push(row);
	row = {
		item_no: 52,
		category: "Light Touch - UE",
		posture: "Supine or Sitting",
		movement: "Hand",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Sensation impaired on affected side",
			2: "Sensation equivalent between affect/unaffected sides"
		}
	};
	table_data.push(row);
	row = {
		item_no: 53,
		category: "Light Touch - LE",
		posture: "Supine or Sitting",
		movement: "Thigh",
		rowspan: 2,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Sensation impaired on affected side",
			2: "Sensation equivalent between affect/unaffected sides"
		}
	};
	table_data.push(row);
	row = {
		item_no: 54,
		category: "Light Touch - LE",
		posture: "Supine or Sitting",
		movement: "Sole of foot",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Sensation impaired on affected side",
			2: "Sensation equivalent between affect/unaffected sides"
		}
	};
	table_data.push(row);
	row = {
		item_no: 55,
		category: "Proprioception-UE",
		posture: "Supine or Sitting",
		movement: "Shoulder",
		rowspan: 4,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Impaired; Inconsistent responses or marked difference to unaffected side",
			2: "Intact; all answers are correct, little or no difference between sides"
		}
	};
	table_data.push(row);
	row = {
		item_no: 56,
		category: "Proprioception-UE",
		posture: "Supine or Sitting",
		movement: "Elbow",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Impaired; Inconsistent responses or marked difference to unaffected side",
			2: "Intact; all answers are correct, little or no difference between sides"
		}
	};
	table_data.push(row);
	row = {
		item_no: 57,
		category: "Proprioception-UE",
		posture: "Supine or Sitting",
		movement: "Wrist",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Impaired; Inconsistent responses or marked difference to unaffected side",
			2: "Intact; all answers are correct, little or no difference between sides"
		}
	};
	table_data.push(row);
	row = {
		item_no: 58,
		category: "Proprioception-UE",
		posture: "Supine or Sitting",
		movement: "Thumb",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Impaired; Inconsistent responses or marked difference to unaffected side",
			2: "Intact; all answers are correct, little or no difference between sides"
		}
	};
	table_data.push(row);
	row = {
		item_no: 59,
		category: "Proprioception-LE",
		posture: "Supine or Sitting",
		movement: "Hip",
		rowspan: 4,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Impaired; Inconsistent responses or marked difference to unaffected side",
			2: "Intact; all answers are correct, little or no difference between sides"
		}
	};
	table_data.push(row);
	row = {
		item_no: 60,
		category: "Proprioception-LE",
		posture: "Supine or Sitting",
		movement: "Knee",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Impaired; Inconsistent responses or marked difference to unaffected side",
			2: "Intact; all answers are correct, little or no difference between sides"
		}
	};
	table_data.push(row);
	row = {
		item_no: 61,
		category: "Proprioception-LE",
		posture: "Supine or Sitting",
		movement: "Ankle",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Impaired; Inconsistent responses or marked difference to unaffected side",
			2: "Intact; all answers are correct, little or no difference between sides"
		}
	};
	table_data.push(row);
	row = {
		item_no: 62,
		category: "Proprioception-LE",
		posture: "Supine or Sitting",
		movement: "Toe",
		rowspan: 0,
		score: '',
		score_range: [0, 2],
		comments: {
			default: "Values must be 0, 1, 2, or 'na'.", 
			0: "Sensation absent on affected side",
			1: "Impaired; Inconsistent responses or marked difference to unaffected side",
			2: "Intact; all answers are correct, little or no difference between sides"
		}
	};
	table_data.push(row);
	return table_data;
}


