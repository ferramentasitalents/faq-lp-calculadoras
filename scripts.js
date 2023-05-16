function toggleAnswer(event) {
var question = event.target;
var answer = question.nextElementSibling;

question.classList.toggle("expanded");
answer.style.display = answer.style.display === "block" ? "none" : "block";
}
