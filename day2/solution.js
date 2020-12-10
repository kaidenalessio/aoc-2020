const isValidPassword = (text) => {
	text = text.split(': ');

	const policy = text[0].split(' ');
	const password = text[1];

	const range = policy[0].split('-').map(x => +x);
	const letter = policy[1];

	let letterCount = 0;

	for (let i = 0; i < password.length; i++) {
		const char = password[i];
		if (char === letter) {
			letterCount++;
		}
	}

	return (letterCount >= range[0] && letterCount <= range[1]);
};

const totalValidPasswords = (input) => {
	let validCount = 0;

	for (const text of input) {
		validCount += isValidPassword(text);
	}

	return validCount;
};

// --- PART 1 ---
console.log('part 1', totalValidPasswords(input));

// --- PART 2 ---
// console.log('part 2', productOfThreeEntriesThatSum2020(input));