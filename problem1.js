// Given an array print the position (starting with 1) and the element in a single line.

let arr = ["Aman", "Deepak", "Raja", "Mahesh"];
for (let i = 1; i <= arr.length; i++) {
  console.log(i, arr[i - 1]);
}