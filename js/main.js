var bouton = document.querySelector(".bouton");
var bouton1 = document.querySelector(".bouton1");
var bouton2 = document.querySelector(".bouton2");
var bouton3 = document.querySelector(".bouton3");
var bouton4 = document.querySelector(".bouton4");
var bouton5 = document.querySelector(".bouton5");
var bouton6 = document.querySelector(".bouton6");
var bouton7 = document.querySelector(".bouton7");
var formulaire = document.querySelector(".formulaire");
var questionGen = document.querySelector(".question");
var question1 = document.querySelector(".question1");
var question2 = document.querySelector(".question2");
var question3 = document.querySelector(".question3");
var question4 = document.querySelector(".question4");
var question5 = document.querySelector(".question5");
var question6 = document.querySelector(".question6");
var question7 = document.querySelector(".question7");
var final = document.querySelector(".final");

var texteFinal = document.querySelector(".final p");

//Initialisation variable qui vont compter le nombres de réponses propre à
//chaque résultat

var compteImpatient=0;
var compteMaladroit=0;
var comptePro=0;
var compteTendre=0;
var compteTimide=0;
var compteVnr=0;

var valMax=0;
var reponse;

// var question1 = document.querySelector(".question1");


function compte(value){
	switch(value){

		case "impatient":
			compteImpatient++;
			if (compteImpatient>valMax){
				valMax=compteImpatient;
				reponse="impatient";
			}
			break;

		case "maladroit":
			compteMaladroit++;
			if (compteMaladroit>valMax){
				valMax=compteMaladroit;
				reponse="maladroit";
			}
			break;

		case "pro":
			comptePro++;
			if (comptePro>valMax){
				valMax=comptePro;
				reponse="pro de LinkedIn";
			}
			break;

		case "tendre":
			compteTendre++;
			if (compteTendre>valMax){
				valMax=compteTendre;
				reponse="tendre";
			}
			break;

		case "timide":
			compteTimide++;
			if (compteTimide>valMax){
				valMax=compteTimide;
				reponse="timide";
			}
			break;

		case "vnr":
			compteVnr++;
			if (compteVnr>valMax){
				valMax=compteVnr;
				reponse="vnr";
			}
			break;
	}
}

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
			question4.classList.add("active");
			break;

		case "question4":
			question4.classList.remove("active");
			question5.classList.add("active");
			break;

		case "question5":
			question5.classList.remove("active");
			question6.classList.add("active");
			break;

		case "question6":
			question6.classList.remove("active");
			question7.classList.add("active");
			break;

		case "question7":
			question7.classList.remove("active");
			final.classList.add("active");
			break;

		case "final":
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
	var val1 = document.querySelector(".formulaire input[name='question1']:checked");
	console.log(val1.value);
	compte(val1.value); 
	changeQuestion(bouton1.value);
	console.log("Impatient : "+compteImpatient+" Vnr : "+compteVnr+" Timide : "+compteTimide+" Tendre : "+compteTendre+" Pro : "+comptePro+" Maladroit : "+compteMaladroit);
})

bouton2.addEventListener('click',function(e){
	e.preventDefault();
	var val2 = document.querySelector(".formulaire input[name='question2']:checked");
	console.log(val2.value);
	compte(val2.value)
	changeQuestion(bouton2.value);
	console.log("Impatient : "+compteImpatient+" Vnr : "+compteVnr+" Timide : "+compteTimide+" Tendre : "+compteTendre+" Pro : "+comptePro+" Maladroit : "+compteMaladroit);
})

bouton3.addEventListener('click',function(e){
	e.preventDefault();
	var val3 = document.querySelector(".formulaire input[name='question3']:checked");
	console.log(val3.value);
	compte(val3.value);
	changeQuestion(bouton3.value);
	console.log("Impatient : "+compteImpatient+" Vnr : "+compteVnr+" Timide : "+compteTimide+" Tendre : "+compteTendre+" Pro : "+comptePro+" Maladroit : "+compteMaladroit);
})

bouton4.addEventListener('click',function(e){
	e.preventDefault();
	var val4= document.querySelector(".formulaire input[name='question4']:checked");
	console.log(val4.value);
	compte(val4.value);
	changeQuestion(bouton4.value);
	console.log("Impatient : "+compteImpatient+" Vnr : "+compteVnr+" Timide : "+compteTimide+" Tendre : "+compteTendre+" Pro : "+comptePro+" Maladroit : "+compteMaladroit);
})

bouton5.addEventListener('click',function(e){
	e.preventDefault();
	var val5 = document.querySelector(".formulaire input[name='question5']:checked");
	console.log(val5.value);
	compte(val5.value);
	changeQuestion(bouton5.value);
	console.log("Impatient : "+compteImpatient+" Vnr : "+compteVnr+" Timide : "+compteTimide+" Tendre : "+compteTendre+" Pro : "+comptePro+" Maladroit : "+compteMaladroit);
})

bouton6.addEventListener('click',function(e){
	e.preventDefault();
	var val6 = document.querySelector(".formulaire input[name='question6']:checked");
	console.log(val6.value);
	compte(val6.value);
	changeQuestion(bouton6.value);
	console.log("Impatient : "+compteImpatient+" Vnr : "+compteVnr+" Timide : "+compteTimide+" Tendre : "+compteTendre+" Pro : "+comptePro+" Maladroit : "+compteMaladroit);
})

bouton7.addEventListener('click',function(e){
	e.preventDefault();
	var val7 = document.querySelector(".formulaire input[name='question7']:checked");
	console.log(val7.value);
	compte(val7.value);
	changeQuestion(bouton7.value);
	console.log("Impatient : "+compteImpatient+" Vnr : "+compteVnr+" Timide : "+compteTimide+" Tendre : "+compteTendre+" Pro : "+comptePro+" Maladroit : "+compteMaladroit);
	console.log(reponse);
	console.log(valMax);
	texteFinal.innerHTML+=reponse;
})
