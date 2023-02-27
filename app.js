const askButton = document.getElementById("ask-button");
const questionInput = document.getElementById("question");
const answerElement = document.getElementById("answer");

const answers = [
  "Yesssaaa .",
  "It is decidedly so.",
  "Yes without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

askButton.addEventListener("click", function() {
  const question = questionInput.value;
  if (!question) {
    alert("Please enter a question.");
    return;
  }
  answerElement.style.display = "block";
const answer = answers[Math.floor(Math.random() * answers.length)];
answerElement.textContent = answer;
eightBallElement.setAttribute("answer", answer);

});
