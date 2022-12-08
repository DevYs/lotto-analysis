const requestAllJson = async () => {
	const result = await fetch('https://smok95.github.io/lotto/results/all.json');
	return await result.json();
};

const shuffle = (array) => {
	array.sort(() => Math.random() - 0.5);
}

const counting = (json) => {
	const countArr = [
		{num:1,count:0}, {num:2,count:0}, {num:3,count:0}, {num:4,count:0}, {num:5,count:0}, {num:6,count:0}, {num:7,count:0}, {num:8,count:0}, {num:9,count:0}, {num:10,count:0},
		{num:11,count:0}, {num:12,count:0}, {num:13,count:0}, {num:14,count:0}, {num:15,count:0}, {num:16,count:0}, {num:17,count:0}, {num:18,count:0}, {num:19,count:0}, {num:20,count:0},
		{num:21,count:0}, {num:22,count:0}, {num:23,count:0}, {num:24,count:0}, {num:25,count:0}, {num:26,count:0}, {num:27,count:0}, {num:28,count:0}, {num:29,count:0}, {num:30,count:0},
		{num:31,count:0}, {num:32,count:0}, {num:33,count:0}, {num:34,count:0}, {num:35,count:0}, {num:36,count:0}, {num:37,count:0}, {num:38,count:0}, {num:39,count:0}, {num:40,count:0},
		{num:41,count:0}, {num:42,count:0}, {num:43,count:0}, {num:44,count:0}, {num:45,count:0}
	];

	for(let jsonIdx=0; jsonIdx<json.length; jsonIdx++) {
		for(let numIdx=0; numIdx<json[jsonIdx].numbers.length; numIdx++) {
			const countArrIndex = json[jsonIdx].numbers[numIdx] - 1;
			countArr[countArrIndex].count = countArr[countArrIndex].count + 1;
		}

		const countArrIndex = json[jsonIdx].bonus_no - 1;
		countArr[countArrIndex].count = countArr[countArrIndex].count + 1;
	}

	return countArr;
}

const orderingByCount = (arr) => arr.sort((a,b) => b.count - a.count);

const toArray = (arr) => {
	const result = [];
	for(let i=0; i<arr.length; i++) {
		result.push(arr[i].num);
	}
	return result;
};

const generate = (lottoList, numbers) => {
	shuffle(numbers);

	lottoList.push(numbers.slice(0, 6).sort((a, b) => a - b));
	lottoList.push(numbers.slice(6, 12).sort((a, b) => a - b));
	lottoList.push(numbers.slice(12, 18).sort((a, b) => a - b));
	lottoList.push(numbers.slice(18, 24).sort((a, b) => a - b));
	lottoList.push(numbers.slice(24, 30).sort((a, b) => a - b));
};

const draw = (json) => {
	const size = 3;
	const lottoList = [];
	const arr = counting(json);
	const orderedByCount = orderingByCount(arr).slice(0, 30);
	const res = toArray(orderedByCount);

	for(let count=1; count<=size; count++) {
		generate(lottoList, res);
	}

	return lottoList;
}

export { requestAllJson, draw };