let tweet = prompt("Type your tweet here:");
let charactersTyped = tweet.length;
let charactersAllowed = 280;
if (charactersTyped>280) {
    alert("Wow! That's too many characters.")
} else {
let charactersRemaining = charactersAllowed - charactersTyped;
console.log(
  "You have typed " +
    charactersTyped +
    " characters and have " +
    charactersRemaining +
    " characters remaining."
); }
console.log(tweet.slice(0, 280));
