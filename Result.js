var correctAnswer = localStorage.getItem("correctAnswer")
var wrongAnswer = localStorage.getItem("wrongAnswer")


var correctAnswers = document.getElementById("correctAnswers")
var wrongAnswers = document.getElementById("wrongAnswers")

correctAnswers.innerHTML =correctAnswer
wrongAnswers.innerHTML = wrongAnswer
