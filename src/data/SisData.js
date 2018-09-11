export const getSisData = () => {
	var table_data = [];
	var row = {
		description: 'These questions are about the physical problems which may have occurred as a result of your stroke.',
		headings: [
				'1. In the past week, how would you rate the strength of your....',
				'A lot of strength',
				'Quite a bit of strength',
				'Some strength',
				'A little strength',
				'No strength at all'
				],
		options: [
				'a. Arm that was most affected by your stroke?',
				'b. Grip of your hand that was most affected by your stroke?',
				'c. Leg that was most affected by your stroke?',
				'd. Foot/ankle that was most affected by your stroke?'
				],
		option_values: [5, 4, 3, 2, 1]
	};
	table_data.push(row);

	row = {
		description: 'These questions are about your memory and thinking.',
		headings: [
				'2. In the past week, how difficult was it for you to...',
				'Not difficult at all',
				'A little difficult',
				'Somewhat difficult',
				'Very difficult',
				'Extremely difficult'
				],
		options: [
				'a. Remember things that people just told you?',
				'b. Remember things that happened the day before?',
				'c. Remember to do things (e.g. keep scheduled appointments or take medication)?',
				'd. Remember the day of the week?',
				'e. Concentrate?',
				'f. Think quickly?',
				'g. Solve everyday problems?'
				],
		option_values: [5, 4, 3, 2, 1]
	};
	table_data.push(row);

	row = {
		description: 'These questions are about how you feel, about changes in your mood and about your ability to control your emotions since your stroke.',
		headings: [
				'3. In the past week, how often did you...',
				'None of the time',
				'A little of the time',
				'Some of the time',
				'Most of the time'
				],
		options: [
				'a. All of the time a. Feel sad?',
				'b. Feel that there is nobody you are close to?',
				'c. Feel that you are a burden to others?',
				'd. Feel that you have nothing to look forward to?',
				'e. Blame yourself for mistakes that you made?',
				'f. Enjoy things as much as ever?',
				'g. Feel quite nervous?',
				'h. Feel that life is worth living?',
				'i. Smile and laugh at least once a day?'
				],
		option_values: [4, 3, 2, 1]
	};
	table_data.push(row);

	row = {
		description: 'The following questions are about your ability to communicate with other people, as well as your ability to understand what you read and what you hear in a conversation.',
		headings: [
				'4. In the past week, how difficult was it to...',
				'Not difficult at all',
				'A little difficult',
				'Somewhat difficult',
				'Very difficult',
				'Extremely difficult'
				],
		options: [
				'a. Say the name of someone who was in front of you?',
				'b. Understand what was being said to you in a conversation?',
				'c. Reply to questions?',
				'd. Correctly name objects?',
				'e. Participate in a conversation with a group of people?',
				'f. Have a conversation on the telephone?',
				'g. Call another person on the telephone, including selecting the correct phone number and dialing?'
				],
		option_values: [5, 4, 3, 2, 1]
	};
	table_data.push(row);

	row = {
		description: 'The following questions ask about activities you might do during a typical day.',
		headings: [
				'5. In the past 2 weeks, how difficult was it to...',
				'Not difficult at all',
				'A little difficult',
				'Somewhat difficult',
				'Very difficult',
				'Could not do at all'
				],
		options: [
				'a. Cut your food with a knife and fork?',
				'b. Dress the top part of your body?',
				'c. Bathe yourself?',
				'd. Clip your toenails?',
				'e. Get to the toilet on time?',
				'f. Control your bladder (not have an accident)?',
				'g. Control your bowels (not have an accident)?',
				'h. Do light household tasks/chores (e.g. dust, make a bed, take out garbage, do the dishes)?',
				'i. Go shopping?',
				'j. Do heavy household chores (e.g. vacuum, laundry or yard work)?'
				],
		option_values: [5, 4, 3, 2, 1]
	};
	table_data.push(row);

	row = {
		description: 'The following questions are about your ability to be mobile, at home and in the community.',
		headings: [
				'6. In the past 2 weeks, how difficult was it to...',
				'Not difficult at all',
				'A little difficult',
				'Somewhat difficult',
				'Very difficult',
				'Could not do at all'
				],
		options: [
				'a. Stay sitting without losing your balance?',
				'b. Stay standing without losing your balance?',
				'c. Walk without losing your balance?',
				'd. Move from a bed to a chair?',
				'e. Walk one block?',
				'f. Walk fast?',
				'g. Climb one flight of stairs?',
				'h. Climb several flights of stairs?',
				'i. Get in and out of a car?'
				],
		option_values: [5, 4, 3, 2, 1]
	};
	table_data.push(row);

	row = {
		description: 'The following questions are about your ability to use your hand that was MOST AFFECTED by your stroke.',
		headings: [
				'7. In the past 2 weeks, how difficult was it to use your hand that was most affected by your stroke to...',
				'Not difficult at all',
				'A little difficult',
				'Somewhat difficult',
				'Very difficult',
				'Could not do at all'
				],
		options: [
				'a. Carry heavy objects (e.g. bag of groceries)?',
				'b. Turn a doorknob?',
				'c. Open a can or jar?',
				'd. Tie a shoe lace?',
				'e. Pick up a dime?'
				],
		option_values: [5, 4, 3, 2, 1]
	};
	table_data.push(row);

	row = {
		description: 'The following questions are about how stroke has affected your ability to participate in the activities that you usually do, things that are meaningful to you and help you to find purpose in life.',
		headings: [
				'8. During the past 4 weeks, how much of the time have you been limited in...',
				'None of the time',
				'A little of the time',
				'Some of the time',
				'Most of the time',
				'All of the time'
				],
		options: [
				'a. Your work (paid, voluntary or other)',
				'b. Your social activities?',
				'c. Quiet recreation (crafts, reading)?',
				'd. Active recreation (sports, outings, travel)?',
				'e. Your role as a family member and/or friend?',
				'f. Your participation in spiritual or religious activities?',
				'g. Your ability to control your life as you wish?',
				'h. Your ability to help others?'
				],
		option_values: [5, 4, 3, 2, 1]
	};
	table_data.push(row);
	return table_data;
}