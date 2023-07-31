//  Select the paragraph and store it into a variable
const paragraph = document.getElementById("myParagraph");

// Get the text content inside that paragraph
const words = paragraph.textContent;
// Split the text into an array of words
const wordsArray = words.match(/\b\w+\b/gi);
//find the words count and store it into an object
const wordsCount = {};
wordsArray.forEach((word) => {
  wordsCount[word] = (wordsCount[word] || 0) + 1;
});

//Sort the whole object count in descending order
const sortedWords = Object.keys(wordsCount).sort(
  (a, b) => wordsCount[b] - wordsCount[a]
);

//Store the 12 most occuring words into an array

const most12 = sortedWords.slice(0, 12);
console.log(most12);
// Select the cloud div
const wordCloud = document.getElementById("myWordCloud");

//Loop through most12 words and Create a div element, add the word and style for that div

for (const index in most12) {
  const div = document.createElement("div"); //Create a div Element
  if (index == 0) {
    div.classList.add("first");
    div.innerText = most12[index];
  } else if (index == 1) {
    div.classList.add("second");
    div.innerText = most12[index];
  } else if (index == 2) {
    div.classList.add("third");
    div.innerText = most12[index];
  } else if (index % 3 == 0) {
    div.classList.add("vertical");
    div.innerText = most12[index];
  } else {
    div.classList.add("other");
    div.innerText = most12[index];
  }
  wordCloud.appendChild(div);
}
