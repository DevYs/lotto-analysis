const shuffle = (array) => {
	array.sort(() => Math.random() - 0.5);
}

const generate2 = () => {
	let numbers = [];
	for(let n=1; n<=45; n++) {
		numbers.push(n);
	}

	shuffle(numbers);

	numbers = numbers.slice(0, 30);

	const lottoList = [];
	lottoList.push(numbers.slice(0, 6).sort((a, b) => a - b));
	lottoList.push(numbers.slice(6, 12).sort((a, b) => a - b));
	lottoList.push(numbers.slice(12, 18).sort((a, b) => a - b));
	lottoList.push(numbers.slice(18, 24).sort((a, b) => a - b));
	lottoList.push(numbers.slice(24, 30).sort((a, b) => a - b));

	shuffle(numbers);

	lottoList.push(numbers.slice(0, 6).sort((a, b) => a - b));
	lottoList.push(numbers.slice(6, 12).sort((a, b) => a - b));
	lottoList.push(numbers.slice(12, 18).sort((a, b) => a - b));
	lottoList.push(numbers.slice(18, 24).sort((a, b) => a - b));
	lottoList.push(numbers.slice(24, 30).sort((a, b) => a - b));

	shuffle(numbers);

	lottoList.push(numbers.slice(0, 6).sort((a, b) => a - b));
	lottoList.push(numbers.slice(6, 12).sort((a, b) => a - b));
	lottoList.push(numbers.slice(12, 18).sort((a, b) => a - b));
	lottoList.push(numbers.slice(18, 24).sort((a, b) => a - b));
	lottoList.push(numbers.slice(24, 30).sort((a, b) => a - b));

	shuffle(numbers);

	lottoList.push(numbers.slice(0, 6).sort((a, b) => a - b));
	lottoList.push(numbers.slice(6, 12).sort((a, b) => a - b));
	lottoList.push(numbers.slice(12, 18).sort((a, b) => a - b));
	lottoList.push(numbers.slice(18, 24).sort((a, b) => a - b));
	lottoList.push(numbers.slice(24, 30).sort((a, b) => a - b));

	return lottoList;
};

const generate = () => {
	let numbers = [];
	for(let n=1; n<=45; n++) {
		numbers.push(n);
	}

	shuffle(numbers);

	numbers.push(numbers.slice(0, 3)[0]);
	numbers.push(numbers.slice(0, 3)[1]);
	numbers.push(numbers.slice(0, 3)[2]);

	const lottoList = [];
	lottoList.push(numbers.slice(0, 6).sort((a, b) => a - b));
	lottoList.push(numbers.slice(6, 12).sort((a, b) => a - b));
	lottoList.push(numbers.slice(12, 18).sort((a, b) => a - b));
	lottoList.push(numbers.slice(18, 24).sort((a, b) => a - b));
	lottoList.push(numbers.slice(24, 30).sort((a, b) => a - b));
	lottoList.push(numbers.slice(30, 36).sort((a, b) => a - b));
	lottoList.push(numbers.slice(36, 42).sort((a, b) => a - b));
	lottoList.push(numbers.slice(42, 48).sort((a, b) => a - b));

	numbers = [];
	for(let n=1; n<=45; n++) {
		numbers.push(n);
	}

	shuffle(numbers);

	lottoList.push(numbers.slice(0, 6).sort((a, b) => a - b));
	lottoList.push(numbers.slice(6, 12).sort((a, b) => a - b));

	return lottoList;
};

export { generate, generate2 };