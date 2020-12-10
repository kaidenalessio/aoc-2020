const productOfTwoEntriesThatSum2020 = (array) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = i+1; j < array.length; j++) {
			if (array[i] + array[j] === 2020) {
				return array[i] * array[j];
			}
		}
	}
};

const productOfThreeEntriesThatSum2020 = (array) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = i+1; j < array.length; j++) {
			for (let k = j+1; k < array.length; k++) {
				if (array[i] + array[j] + array[k] === 2020) {
					return array[i] * array[j] * array[k];
				}
			}
		}
	}
	return [];
};

// --- PART 1 ---
console.log('part 1', productOfTwoEntriesThatSum2020(input));

// --- PART 2 ---
console.log('part 2', productOfThreeEntriesThatSum2020(input));