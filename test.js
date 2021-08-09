const textLists = ["konnitiha", "konbanha", "ohayo-"];
const r = Math.floor(Math.random() * textLists.length); // 0 ~ 3

const selected = textLists[r];
const selectedArray = selected.split(""); // ["k", "o", "n", "n", "i", "t", "i", "h", "a"]

// console.log(text);

console.log(selectedArray[0]);
console.log(selectedArray[1]);
console.log(selectedArray[2]);
console.log(selectedArray[3]);
console.log(selectedArray[4]);
console.log(selectedArray[5]);
console.log(selectedArray[6]);
console.log(selectedArray[7]);
console.log(selectedArray[8]);

console.log("--------------------------------------------------");

for (let i = 0; i < selectedArray.length; i++) {
  console.log(selectedArray[i]);
}

console.log("--------------------------------------------------");

// 結果を保存する必要がない場合はforEachを使う
// これは意味がない (何も返ってこないから)
const forEachResult = selectedArray.forEach((s) => {
  console.log(s);
  return s;
});

// for each は本来こう使う
selectedArray.forEach((s) => {
  console.log(s);
  return s;
});

console.log("forEachResult:", forEachResult);

console.log("--------------------------------------------------");

// 結果を保存したいときはmapを使う
const mapResult = selectedArray.map((s) => {
  console.log(s);
  return s.toUpperCase();
});
console.log("mapResult:", mapResult);
console.log("selectedArray:", selectedArray);

console.log("--------------------------------------------------");

textLists[r].split("").map((s) => {
  console.log(s);
});
