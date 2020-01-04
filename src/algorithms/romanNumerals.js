export default function romanNumerals (numeral) {
  let romanNumeral = '';
  let remainder = numeral;
  const breakpointsNumerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const breakpointsNumbers = [1000, 500, 100, 50, 10, 5, 1];
  let breakpointIndex = 0;
  while (remainder > 0 && breakpointIndex < breakpointsNumbers.length) {
    const currentNumber = breakpointsNumbers[breakpointIndex];
    const currentNumeral = breakpointsNumerals[breakpointIndex];
    const reductionIndex = breakpointIndex + ((breakpointsNumbers.length - breakpointIndex) % 2 ? 2 : 1);
    const reductionNumber = breakpointsNumbers[reductionIndex];
    const reductionNumeral = breakpointsNumerals[reductionIndex];

    if (remainder >= currentNumber) {
      const times = Math.floor(remainder / currentNumber);
      romanNumeral += currentNumeral.repeat(times);
      remainder -= currentNumber * times;
    }

    if (remainder && remainder - (currentNumber - reductionNumber) >= 0) {
      romanNumeral += `${reductionNumeral}${currentNumeral}`;
      remainder -= currentNumber - reductionNumber;
    }

    breakpointIndex += 1;
  }
  return romanNumeral;
}