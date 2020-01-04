import romanNumerals from './romanNumerals';

test('should return empty string for 0', () => {
  expect(romanNumerals(0)).toBe('');
});
describe('entire small scale pattern', () => {
  const smallScaleMap = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X'
  };
  Object.keys(smallScaleMap).forEach((number) => {
    test(`should return ${number} for ${smallScaleMap[number]}`, () => {
      expect(romanNumerals(+number)).toBe(smallScaleMap[number]);
    });
  });
});

describe('compounding patterns', () => {
  const compoundingPatternsMap = {
    12: 'XII',
    14: 'XIV',
    19: 'XIX',
    20: 'XX',
    27: 'XXVII',
    39: 'XXXIX',
  };
  Object.keys(compoundingPatternsMap).forEach((number) => {
    test(`should return ${number} for ${compoundingPatternsMap[number]}`, () => {
      expect(romanNumerals(+number)).toBe(compoundingPatternsMap[number]);
    });
  });
});

describe('larger numerals', () => {
  const largerNumeralsMap = {
    40: 'XL',
    49: 'XLIX',
    50: 'L',
    78: 'LXXVIII',
    79: 'LXXIX',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
    1358: 'MCCCLVIII',
    1499: 'MCDXCIX',
  };
  Object.keys(largerNumeralsMap).forEach((number) => {
    test(`should return ${number} for ${largerNumeralsMap[number]}`, () => {
      expect(romanNumerals(+number)).toBe(largerNumeralsMap[number]);
    });
  });
});
