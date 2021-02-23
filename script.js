document.getElementById("livesCounter").classList.add("hide");
document.getElementById("image").classList.add("hide");
document.getElementById("wordSpaces").classList.add("hide");
document.getElementById("lives").classList.add("hide");
document.getElementById("restartButton").classList.add("hide");
document.getElementById("winner").classList.add("hide");

const startButton = document.getElementById("button");

startButton.addEventListener("click", () => {
  document.getElementById("button").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("rules").style.display = "none";
  document.getElementById("alphabetKeyboard").classList.remove("hide");
  document.getElementById("lives").classList.remove("hide");
  document.getElementById("livesCounter").classList.remove("hide");
  document.getElementById("image").classList.remove("hide");
  document.getElementById("wordSpaces").classList.remove("hide");
  document.getElementById("restartButton").classList.remove("hide");
});

// 1. This is our wordbank/list-of-words to choose from
wordsToGuessArr = [
  "ITERATOR",
  "SEMANTIC",
  "VARIABLE",
  "HYPERLINK",
  "REACT",
  "DOCUMENT",
  "BOOLEAN",
  "UNDEFINED",
  "NUMBER",
  "STRING",
  "FUNCTION",
  "JAVASCRIPT",
  "OBJECT",
  "FILTER",
  "ARRAY",
  "CONDITION",
];

// 2. Choose a random word
let word = wordsToGuessArr[Math.floor(Math.random() * wordsToGuessArr.length)];

// 3. Convert the random word into an array
const wordLetter = word.split("");
console.log(wordLetter);
// 4. Loop over each letter in the word array
wordLetter.forEach((letter) => {
  // 5. Put each letter in it's own div into the page
  //    Task to do: The div we are appending, does NOT need a white-bottom-border if the letter is " "
  //    Task to do: Hide the letters until they're clicked. Hint: Put the letter in it's own child html element which is hidden(display:none) until clicked
  document.getElementById(
    "wordSpaces"
  ).innerHTML += `<div class='whiteBottom hide letter-${letter}'>${letter}</div>`;
});

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// 1.  Targeted the keyboard and listen for the click of each letter
let lives = 10;
document
  .getElementById("alphabetKeyboard")
  .addEventListener("click", (event) => {
    // 2. Getting the ID of the target (letter on the keyboard)
    // and giving it a variable to run a if statement
    const letter = event.target.id;
    const domLetters = document.querySelectorAll(".letter-" + letter);
    if (word.includes(letter)) {
      // 3. Run the if statement to select all the letters in the word
      const keyboardLetter = document.getElementById(letter);
      keyboardLetter.classList.add("crossOut");
      // 4. Change the class of the letter. so It appears in the word
      domLetters.forEach((domLetter) => {
        domLetter.classList.remove("hide");
        domLetter.classList.add("show");
      });
    } else {
      // 1. Cross out the letter
      const keyboardLetter = document.getElementById(letter);
      keyboardLetter.classList.add("crossOut");
      // 2. Decrement the lives-count
      lives--;
      document.getElementById("livesCounter").innerHTML = lives;
      // 3. When the lives counter gets to 0, it's game over
      if (lives <= 0) {
        document.getElementById("loser").classList.remove("hide");
        document.getElementById("loser").innerHTML = `<h2>Unlucky! You Hang!</h2><br><br><h5>Press Restart to play again</h5>`
      }

      // 4. Drawing needs to add a limb (Place divs on top and reveal them with every wrong answer)
      if (lives == 9) {
        document.getElementById("bottomBase").classList.add("hide");
      } else if (lives == 8) {
        document.getElementById("stand").classList.add("hide");
      } else if (lives == 7) {
        document.getElementById("topOfStand").classList.add("hide");
      } else if (lives == 6) {
        document.getElementById("noose").classList.add("hide");
      } else if (lives == 5) {
        document.getElementById("head").classList.add("hide");
      } else if (lives == 4) {
        document.getElementById("body").classList.add("hide");
      } else if (lives == 3) {
        document.getElementById("rightArm").classList.add("hide");
      } else if (lives == 2) {
        document.getElementById("leftArm").classList.add("hide");
      } else if (lives == 1) {
        document.getElementById("rightLeg").classList.add("hide");
      } else if (lives == 0) {
        document.getElementById("leftLeft").classList.add("hide");
      }

    }
    // 5.  Need a winner section once the word is complete
    if (word.length <= document.querySelectorAll(".show").length) {
      console.log("win");
      document.getElementById("winner").classList.remove("hide");
      document.getElementById("winner").innerHTML = `<h2>Congrats! you WIN!!</h2><br><h5>Press restart to play again</h5>`
      
      const myCanvas = document.getElementById("my-canvas");

      const myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true
      });
      myConfetti({
        particleCount: 600,
        spread: 250
  // any other options from the global
  // confetti function
});
    }
    // 6. just keep the "event" to child element
    event.stopPropagation();
  });
// 7. Need a restart button
document.getElementById("restartButton").addEventListener("click", () => {
  location.reload();
});

