let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.filter((count) => {
    if (count.length >= 5) {
      return count.length;
    }
  });
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
