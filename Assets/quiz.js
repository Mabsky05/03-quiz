//variables
var count = 0;
var correct = 0;
//var test, test_status, question, choice, choices, choice_A, choice_B, choice_C

//questions
var questions = [
{ question: "What century is it now?",
a: "19th",
b: "20th",
c: "21st",
answer: "c"
}, 

{ question: "What is Kpop?",

a: "Korean Pop",
b: "Kangaroo Popper",
c: "Keyboard pop-up",
answer: "a"
}];

//make the question
function Question() {
  if (count >= 2) {

    document.querySelector(".test_status").innerHTML = "<ul><li>Test is done.</li><li>Your score is " + correct + "/2"+ "</li></ul>";

    var stats = confirm("Do your want to save your score?");

    if (stats == true) {
    var your_initials = window.prompt("Enter your initials:")
    var your_score = correct
    
    window.localStorage.setItem("Initials:", JSON.stringify(your_initials));
    window.localStorage.setItem("Score:", JSON.stringify(your_score));

    alert("Your initials are " + your_initials + " and your score is " + your_score + " /2");

    }

    count = 0;
    correct = 0;
    return false;
    
    }
  
document.querySelector(".test_status").innerHTML = "Question " + (count + 1) + "/2";

question = questions[count].question;

choice_A = questions[count].a;
choice_B = questions[count].b;
choice_C = questions[count].c;

document.querySelector(".question_space").innerHTML =  question;
window.onload;

document.querySelector(".question_space").innerHTML += "<label> <input type='radio' name='choices' value='a'> "+ choice_A +"</label>";
document.querySelector(".question_space").innerHTML += "<label> <input type='radio' name='choices' value='b'> "+ choice_B +"</label>";
document.querySelector(".question_space").innerHTML += "<label> <input type='radio' name='choices' value='c'> "+ choice_C +"</label><br>";
document.querySelector(".question_space").innerHTML += "<br><br><button onclick='check_if_correct()'>Answer</button><br>";

}

function check_if_correct(){
  choices = document.getElementsByName("choices");
    for (var i = 0; i < 3; i++) {
      if (choices[i].checked)
        var selected = choices[i].value;
    } if (selected == questions[count].answer) {
      correct++;
    } count++;
      Question();
      
}

//20 sec countdown
function setTime(num) {
  num = 20
  var timerInterval = setInterval(function() {
    document.querySelector(".timer").innerHTML = num + " seconds left";
    num--;
  
    if(num == 0) {
      clearInterval(timerInterval);
      alert("Time over, please try again!")
      location.reload()
    }

  }, 1000); 
}

//starting test
document.querySelector(".start_button").addEventListener('click', setTime);
document.querySelector(".start_button").addEventListener('click', Question);


