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
        question :"Choose the correct HTML element for the largest heading:",
        answer: {
            a:"<heading>",
            b:"<head>",
            c:"<h1>",
            d:"<h6>"

        },
        result:"<h1>"
    },
    {
        id : 4,
        question :"what is the correct HTML element for inserting a line break",
        answer: {
            a:"<br>",
            b:"<break>",
            c:"<lb>",
            d:"none"

        },
        result:"<br>"
    },
    {
        id : 5,
        question : "What is the correct HTML for adding a background color?",
        answer: {
            a:"<background>yellow</background>",
            b:'<body style ="background-color:yellow;">',
            c:"<body bg = 'yellow'>",
            d:"All of them"

        },
        result:"<body bg = 'yellow'>"
    },
    {
        id : 6,
        question :"Choose the correct HTML element to define important text",
        answer: {
            a:"<important>",
            b:"<strong>",
            c:"<i>",
            d:"<b>"

        },
        result:"<strong>"
    },
    {
        id : 7,
        question :"Choose the correct HTML element to define emphasized text",
        answer: {
            a:"<i>",
            b:"<em>",
            c:"<italic>",
            d:"none of them"

        },
        result:"<em>"
    },
    {
        id : 8,
        question :"How can you open a link in a new tab/browser window?",
        answer: {
            a:"<a href = 'url' target = 'new' ",
            b:"<a href = 'url' target = '_blank' ",
            c:"<a href = 'url' new",
            d:"all of them"

        },
        result:"<a href = 'url' target = '_blank' "
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

function question(){
// console.log(questions[indexcount]);
htmlQ.innerHTML = questions[indexcount].question
options.innerHTML = ''
for(var key in questions[indexcount].answer){
    options.innerHTML += `<li> ${questions[indexcount].answer[key]}`
}
indexcount ++


}

















