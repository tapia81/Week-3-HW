console.log('\nproblem 1');
function oneToTen() {
	console.log('Ascending from 1 to 10');
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}

oneToTen();

console.log('\nproblem 2');
let oddArr = [];
let number = 3;

while (number < 104) {
	if (number % 2 == 1) {
		oddArr.push(number);
	}
	number += 1;
}
console.log('The odd numbers between 3 and 103 including 3 and 103 are');
console.log(oddArr);

console.log('\nproblem 3');
let sum = 0;
function arraySum(num) {
	for (let i = 0; i < num.length; i++) {
		sum = num[i] + sum;
	}
	console.log(`Sum of the array is ${sum}`);
}
arraySum([ 1, 2, 3, 4, 5, 6 ]);

console.log('\nproblem 4');
let descendingNumber = 9;
console.log('Descending from 9 to 0');
while (descendingNumber > -1) {
	console.log(descendingNumber);
	descendingNumber -= 1;
}

console.log('\nproblem 5');
function factorial(n) {
	let total = 1;
	for (let i = n; i >= 1; i--) {
		total = total * i;
	}
	console.log(`The factorial of ${n} is ${total}`);
}
factorial(5);
let arr = [];

console.log('\nproblem 6');
sum = 0;
function sumOfN(num) {
	let oriNum = num;
	while (num > 0) {
		arr.push(1 * num);
		num -= 1;
	}
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	console.log(`The sum of all numbers from 1 to ${oriNum} = ${sum}`);
}
sumOfN(5);

console.log('\nproblem 7');
let str = 'donuts';
arr = [];
arr = str.split('');
for (let i = 1; i < str.length; i++) {
	if (i % 2 != 0) {
		arr[i] = 'Z';
	}
}
console.log(`Changing the string ${str} every second character to Z is ${arr}`);
console.log(`Changing the string ${str} every second character to Z and converted back to a string ${arr.join()}`);
