
const grade11Buttons=document.querySelector("#grade11Button");
const grade12Buttons=document.querySelector("#grade12Button");

const takeQuiz=document.querySelector("#quizButton");
const takeTest=document.querySelector("#testButton");
const checkProgress=document.querySelector("#progressButton");
const mainBoard=document.querySelector("#all");
const grade11menu=document.getElementById("11list");
const grade12menu=document.getElementById("12list");
let e=0;
let t=0;

grade11Buttons.onclick=function(){
    grade11menu.classList.toggle("hide");
    grade11Buttons.classList.toggle("colorUp");
};
grade12Buttons.onclick=function(){
    grade12menu.classList.toggle("hide");
    grade12Buttons.classList.toggle("colorUp");
};

takeQuiz.onclick=function(){
    quizMenu.classList.toggle("hide");
    takeQuiz.classList.toggle("colorUp");

}
takeTest.onclick=function(){
    testMenu.classList.toggle("hide");
    takeTest.classList.toggle("colorUp");

}
const grade11QuizTopic=document.querySelector("#grade11QuizTopics");
const grade12QuizTopic=document.querySelector("#grade12QuizTopics");
const h=document.querySelector("#h2");

document.querySelector("#startGrade11Quiz").onclick=function(){
    
    grade11QuizTopic.classList.toggle("hide");
    grade12QuizTopic.classList.add("hide");
    h.classList.remove("hide");
    mainBoard.classList.add("darken");
};
document.querySelector("#startGrade12Quiz").onclick=function(){
    grade12QuizTopic.classList.toggle("hide");
    grade11QuizTopic.classList.add("hide");
    h.classList.remove("hide");
    mainBoard.classList.add("darken");

};


