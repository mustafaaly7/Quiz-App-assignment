// console.log("hello mf");

var login = document.getElementById("enter")
var startQuiz = document.getElementById("startQuiz")

var nameField = document.getElementById("nameField")
var emailField = document.getElementById("emailField")

function submit() {
    var inputName = document.getElementById("inputName")
    var email = document.getElementById("email")
    if (!inputName.value) {
        nameField.className = "show"
        nameField.style.color = "rgb(145, 14, 14)"
        nameField.style.fontSize = "20px"
        return
    } else {
        nameField.className = "hidden"
    }

    if (!email.value) {
        emailField.className = "show"
        emailField.style.color = "rgb(145, 14, 14)"
        emailField.style.fontSize = "20px"
        return
    } else {
        emailField.className = "hidden"

    }
    //storing data in google database cuz page refresh krne pr var initial state pr ajatay hain dynamically save nh hote ye page refresh hone pr bh google browser say nh jaiga 
    // syntax
    localStorage.setItem("name", inputName.value) // localstorage.set item aka save item ("key name " , property)
    localStorage.setItem("email", email.value)

    login.className = "hidden"
    startQuiz.className = "show"
}

