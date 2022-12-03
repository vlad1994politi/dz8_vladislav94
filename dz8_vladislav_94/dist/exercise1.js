const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiply = (number) => {
    return number * 5;
}

const newArr = arr.map(item => multiply(item));
console.log(newArr);


const array = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7];
console.log(array.filter(number => number>0));


const aray = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7];
const foundMaxNumber = (aray) => aray.reduce((number, maxNumber) => {
if (number > maxNumber) return number;
return maxNumber;
});
console.log(foundMaxNumber(aray));



const arai = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7];
const foundMinNumber = (arai) => arai.reduce((number, minNumber) => {
if (number < minNumber) return number;
return minNumber;
});
console.log(foundMinNumber(arai));
