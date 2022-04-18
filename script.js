let lang = "fr";

class Fr {
	gr = "Réalisations graphiques";
	ctc = "Contact";
	welcome1 = "Un&nbspétudiant&nbspen&nbspinformatique&nbsppassionné&nbspde&nbspsciences<br>qui se lance dans le développement web ! &#128187";
	welcome2 = "Sur ce site, je présente mes meilleures créations :<br>graphisme&nbsp&#127912&nbsp&nbsp&#183&nbsp&nbspaudiovisuel&nbsp&#127916&nbsp&nbsp&#183&nbsp&nbspprojets&nbspvariés&nbsp&#128579";
	legal = "Mentions légales";
	madeby = "Réalisé par Léo G. - 2022";
}
class En {
	gr = "Graphical creations";
	ctc = "Contact";
	welcome1 = "A&nbspcomputer&nbspscience&nbspstudent&nbspwith&nbspa&nbsppassion&nbspfor&nbspscience<br>making&nbsphis&nbspway&nbspin&nbspthe&nbspworld&nbspof&nbspweb&nbspdevelopment!&nbsp&#128187";
	welcome2 = "On this website, you'll find my best creations:<br>graphic&nbspdesign&nbsp&#127912&nbsp&nbsp&#183&nbsp&nbspvideos&nbsp&#127916&nbsp&nbsp&#183&nbsp&nbspvarious&nbspprojects&nbsp&#128579";
	legal = "Legal information";
	madeby = "Made by Léo G. - 2022";
}
class Es {
	gr = "Creaciones gráficas";
	ctc = "Contacto";
	welcome1 = "¡Un&nbspestudiante&nbspde&nbspinformática&nbspapasionado&nbsppor&nbspla&nbspciencia<br>que&nbspse&nbspinicia&nbspen&nbspel&nbspdesarrollo&nbspweb!&nbsp&#128187";
	welcome2 = "En&nbspeste&nbspsitio&nbspweb,&nbsppresento&nbspmis&nbspmejores&nbspcreaciones:<br>diseño&nbspgráfico&nbsp&#127912&nbsp&nbsp&#183&nbsp&nbspaudiovisual&nbsp&#127916&nbsp&nbsp&#183&nbsp&nbspvarios&nbspproyectos&nbsp&#128579";
	legal = "Avisos legales";
	madeby = "Hecho por Léo G. - 2022";
}

change_lang(0);

function change_lang(on_change){
	if (lang === "fr"){
		langobj = new Fr();
	}
	else if (lang === "en"){
		langobj = new En();
	}
	else {
		langobj = new Es();
	}
	if(on_change){
		let fadables = document.getElementsByClassName("fadable_text");
		for (let item of fadables) {
			item.style.opacity = "0.3";
			setTimeout(function(){
				set_text();
				item.style.opacity = "1";
			}, 100);
		}
	}
	else{
		set_text();
	}
}

function set_text(){
	document.getElementsByClassName("gr_text")[0].innerHTML = langobj.gr;
	document.getElementsByClassName("gr_text")[1].innerHTML = langobj.gr;
	document.getElementsByClassName("gr_text")[2].innerHTML = langobj.gr;
	document.getElementsByClassName("ctc_text")[0].innerHTML = langobj.ctc;
	document.getElementsByClassName("ctc_text")[1].innerHTML = langobj.ctc;
	document.getElementsByClassName("ctc_text")[2].innerHTML = langobj.ctc;
	document.getElementById("legal").innerHTML = langobj.legal;
	document.getElementById("welcome1").innerHTML = langobj.welcome1;
	document.getElementById("welcome2").innerHTML = langobj.welcome2;
	document.getElementById("madeby").innerHTML = langobj.madeby;
}

window.addEventListener("scroll", function(event){
	let scroll = this.scrollY;
	document.getElementById("colorful_zone").style.padding = 14+scroll/(0.034*scroll+14)+"vw 0vw "+(30-(scroll/(0.034*scroll+14)))+"vw 0vw";
});

document.getElementsByClassName("fr_flag")[0].addEventListener("click", function(event){
	lang = "fr";
	this.src = "./img/lang/fr_flag_sel.png";
	this.nextElementSibling.src = "./img/lang/en_flag.png";
	this.nextElementSibling.nextElementSibling.src = "./img/lang/es_flag.png";
	change_lang(1);
});

document.getElementsByClassName("en_flag")[0].addEventListener("click", function(event){
	lang = "en";
	this.previousElementSibling.src = "./img/lang/fr_flag.png";
	this.src = "./img/lang/en_flag_sel.png";
	this.nextElementSibling.src = "./img/lang/es_flag.png";
	change_lang(1);
});

document.getElementsByClassName("es_flag")[0].addEventListener("click", function(event){
	lang = "es";
	this.previousElementSibling.previousElementSibling.src = "./img/lang/fr_flag.png";
	this.previousElementSibling.src = "./img/lang/en_flag.png";
	this.src = "./img/lang/es_flag_sel.png";
	change_lang(1);
});