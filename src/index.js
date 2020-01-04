import sum from './testable/math';

const node = document.getElementById('content');
const currentlyTesting = `math: 1 + 1 = ${sum(1, 1)}`;
node.innerText = `The JS is loading and the ${currentlyTesting} is working great! `;