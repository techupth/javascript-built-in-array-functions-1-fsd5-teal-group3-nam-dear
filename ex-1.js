let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.map((count) => {
    return count.length;
  });
  //return words.map(count)
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
