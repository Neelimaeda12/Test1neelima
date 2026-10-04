let arr10 = [10, 20, 30, 40, 50, 10, 60, 70, 10];

let indexes = [];
let tempIndex = 0;

while (tempIndex < arr10.length) {

    if (arr10[tempIndex] === 10) {
        indexes.push(tempIndex);
    }

    tempIndex++;
}

console.log(indexes); // [0, 5, 8]