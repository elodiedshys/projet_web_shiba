var bouton = document.querySelector(".bouton");
var bouton1 = document.querySelector(".bouton1");
var bouton2 = document.querySelector(".bouton2");
var bouton3 = document.querySelector(".bouton3");
var formulaire = document.querySelector(".formulaire");
var questionGen = document.querySelector(".question");
var question1 = document.querySelector(".question1");
var question2 = document.querySelector(".question2");
var question3 = document.querySelector(".question3");
var final = document.querySelector(".final");
// var question1 = document.querySelector(".question1");


function changeQuestion(value){
	switch(value){

		case "start":
			questionGen.classList.remove("active");
			question1.classList.add("active");
			break;

		case "question1":
			question1.classList.remove("active");
			question2.classList.add("active");
			break;

		case "question2":
			question2.classList.remove("active");
			question3.classList.add("active");
			break;

		case "question3":
			question3.classList.remove("active");
			final.classList.add("active");
			break;
	}
}



bouton.addEventListener('click',function(e){
	e.preventDefault();
	changeQuestion(bouton.value);
})

bouton1.addEventListener('click',function(e){
	e.preventDefault();
	changeQuestion(bouton1.value);
})

bouton2.addEventListener('click',function(e){
	e.preventDefault();
	changeQuestion(bouton2.value);
})

bouton3.addEventListener('click',function(e){
	e.preventDefault();
	changeQuestion(bouton3.value);
})

