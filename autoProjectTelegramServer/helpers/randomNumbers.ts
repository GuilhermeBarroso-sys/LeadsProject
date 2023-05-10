interface IRandomNumbersParams {
  amount: number
  maxNumber?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  minNumber?: number;
}

export function randomNumbers({amount, maxNumber = 9, minNumber = 1} : IRandomNumbersParams) : string {
	const numbers = [];
	for(let i = 0; i < amount; i++) {
		numbers.push(Math.floor(Math.random() * maxNumber) + minNumber);
	}
	return numbers.join("");
}