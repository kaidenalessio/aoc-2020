const POLICY_TYPE = {
	PART_ONE: 0,
	PART_TWO: 1
};

const isValidPassword = (type, text) => {
	text = text.split(': ');

	const policy = text[0].split(' ');
	const range = policy[0].split('-').map(x => +x);
	const letter = policy[1];
	const password = text[1];

	let letterCount = 0;

	// Part one
	if (type === POLICY_TYPE.PART_ONE) {
		for (let i = 0; i < password.length; i++) {
			const char = password[i];
			if (char === letter) {
				letterCount++;
			}
		}
		return (letterCount >= range[0] && letterCount <= range[1]);
	}

	// Part two
	const indices = range.map(x => --x);
	letterCount += (password[indices[0]] === letter);
	letterCount += (password[indices[1]] === letter);
	return (letterCount === 1);
};

const totalValidPasswords = (type, input) => {
	let validCount = 0;

	for (const text of input) {
		validCount += isValidPassword(type, text);
	}

	return validCount;
};

// --- PART 1 ---
console.log('part 1', totalValidPasswords(POLICY_TYPE.PART_ONE, input));

// --- PART 2 ---
console.log('part 2', totalValidPasswords(POLICY_TYPE.PART_TWO, input));