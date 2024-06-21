// for quiz and its answer we need to create array of objects 

var questions =[
    {
        id : 1,
        question :"What does HTML stand for?",
        answer: {
            a:"Home tool Markup language",
            b:"Hyper Text markup language",
            c:"Hyperlinks and text markup language",
            d:"none of the above"

        },
        result:"Hyper Text markup language"
    },
    {
        id : 2,
        question :"Who is making the Web standards?",
        answer: {
            a:"The world wide web consortium",
            b:"Google",
            c:"microsoft",
            d:"mozilla"

        },
        result:"The world wide web consortium"
    },
    {
        id : 3,
        question :"What is the difference between XML and HTML?",
        answer: {
            a:"HTML is used for exchanging data, XML is not.",
            b:"XML is used for exchanging data, HTML is not",
            c:"HTML can have user defined tags, XML cannot",
            d:"None"

        },
        result:"XML is used for exchanging data, HTML is not"
    },
    {
        id : 4,
        question :"Opening Tag of HTML Tag is called as ________.",
        answer: {
            a:"Closed Tag",
            b:"Starting Tag",
            c:"Forward Tag",
            d:"Enging Tag"

        },
        result:"Starting Tag"
    },
    {
        id : 5,
        question : "HTML program is saved using _________ extension.",
        answer: {
            a:".htl",
            b:'.htlm',
            c:".html",
            d:"All of them"

        },
        result:".html"
    },
    {
        id : 6,
        question :"DOM stands for",
        answer: {
            a:"Document object model",
            b:"Data object model",
            c:"Document Oriented model",
            d:"Data oriented model"

        },
        result:"Document object model"
    },
    {
        id : 7,
        question :"ASCII stands for______",
        answer: {
            a:"American Standard Code for Informal Interchange",
            b:"American Standard Code for Interchanging Information",
            c:"American Standard Code for Information Interchange",
            d:"none of them"

        },
        result:"American Standard Code for Information Interchange"
    },
    {
        id : 8,
        question :"Which of the following are attributes of Font Tag ?",
        answer: {
            a:"Face",
            b:"Size ",
            c:"Color",
            d:"all of them"

        },
        result:"all of them"
    }
]


var name = localStorage.getItem("name")
var email = localStorage.getItem("email")
var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")


userName.innerHTML = name;
userEmail.innerHTML = email

var indexcount = 0
var htmlQ = document.getElementById("htmlQ") 
var options = document.getElementById("options")
var startCounter = document.getElementById("startCounter")
var endCounter = document.getElementById("endCounter")
endCounter.innerHTML = questions.length

var nextBtn = document.getElementById("nextBtn")

function question(){
// console.log(questions[indexcount]);
htmlQ.innerHTML = questions[indexcount].question
options.innerHTML = ''

for(var key in questions[indexcount].answer){
    var option = questions[indexcount].answer[key] 
    options.innerHTML += `<li onclick = "checkAnswer(this)">${option}`
}


}

var parentButton = document.getElementById("parentButton")


function nextQuestion(btn){
    if(indexcount < questions.length-1){
        indexcount++
        startCounter.innerHTML ++
        
    }
    if(indexcount == questions.length-1){
        // btn.className = "hidden"
    nextBtn.innerHTML = "Check Result"
    nextBtn.setAttribute("onclick" , "showResult()")

        // var pBtn = document.createElement("button")
        // pBtn.innerHTML = "Previous Question"
        // pBtn.style.backgroundColor = "#00416A"
        // pBtn.style.height = "7vh"
        // pBtn.style.fontSize = "20px"
        // pBtn.style.color = "white"
        // pBtn.setAttribute("onClick","previousQuestion()")
        // parentButton.appendChild(pBtn)
        // console.log(pBtn);
    }
    nextBtn.className = "hidden"
    question()
}


// function previousQuestion(){
//     indexcount--
//     startCounter.innerHTML -- 
//     parentButton.firstElementChild.className = "show"
//     parentButton.lastElementChild.className = "hidden"
// }
var correctAnswer = 0;
var wrongAnswer = 0;

function checkAnswer(ele){
    // console.log(ele.innerHTML);
    if(ele.innerHTML == questions[indexcount].result ){
        ele.style.backgroundColor = "green"
        nextBtn.className = "show"
        correctAnswer ++
        ele.style.cursor = "no-drop"

    }else{
        ele.style.backgroundColor = "red"
        nextBtn.className = "show"
        wrongAnswer ++
        ele.style.cursor = "no-drop"

    }
}



function showResult(){
    console.log(correctAnswer , wrongAnswer);
}



