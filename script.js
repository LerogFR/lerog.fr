let lang = "fr";
let mobile_menu_is_visible = 0;
let page_progress = "home";

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
	legal = "Legal terms";
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
	document.querySelectorAll('.gr_text').forEach(e => {e.innerHTML = langobj.gr});
	document.querySelectorAll('.ctc_text').forEach(e => {e.innerHTML = langobj.ctc});
	document.getElementById("legal").innerHTML = langobj.legal;
	document.getElementById("welcome1").innerHTML = langobj.welcome1;
	document.getElementById("welcome2").innerHTML = langobj.welcome2;
	document.getElementById("madeby").innerHTML = langobj.madeby;
}

function hide_menu_elmnt_is_pressed(){
	if(mobile_menu_is_visible && window.innerHeight > window.innerWidth){
		hide_menu();
	}
	else{
		show_menu();
	}
}

function hide_menu(){
	document.getElementById("header").style.left = "100%";
	document.getElementById("burger").firstElementChild.src = "./img/navbar/burger.png";
	mobile_menu_is_visible = 0;
}

function show_menu(){
	document.getElementById("header").style.left = "0%";
	document.getElementById("burger").firstElementChild.src = "./img/navbar/cross.png";
	mobile_menu_is_visible = 1;
}

function handle_scroll_progress(){
	let temp = page_progress;
	if(checkVisible(document.querySelector('#gr'))){
		page_progress = "gr";
	}
	if(checkVisible(document.querySelector('#yt'))){
		page_progress = "yt";
	}
	if(checkVisible(document.querySelector('#mc'))){
		page_progress = "mc";
	}
	if(checkVisible(document.querySelector('#ctc'))){
		page_progress = "ctc";
	}
	if(page_progress != temp){
		update_progress_bar(page_progress);
	}
}

function checkVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function update_progress_bar(item){
	if(window.innerHeight < window.innerWidth){
		update_progress_bar_horizontal(item);
	}
	else if(window.innerHeight > window.innerWidth){
		update_progress_bar_vertical(item);
	}
}

function update_progress_bar_horizontal(item){
	document.querySelectorAll('.bar_box').forEach(e => {e.style.width = "0%"});
	document.querySelectorAll('.bar_box').forEach(e => {e.style.marginLeft = "50%"});
	document.querySelectorAll('.bar_box').forEach(e => {e.style.height = "2px"});
	document.querySelectorAll('.bar_box').forEach(e => {e.style.marginTop = "0px"});

	if(page_progress != "home"){
		document.querySelector('a[href="#'+item+'"]').previousElementSibling.style.width = "100%";
		document.querySelector('a[href="#'+item+'"]').previousElementSibling.style.marginLeft = "0%";
	}
}

function update_progress_bar_vertical(item){
	document.querySelectorAll('.bar_box').forEach(e => {e.style.width = "2px"});
	document.querySelectorAll('.bar_box').forEach(e => {e.style.marginLeft = "0px"});
	document.querySelectorAll('.bar_box').forEach(e => {e.style.height = "0px"});
	document.querySelectorAll('.bar_box').forEach(e => {e.style.marginTop = "27px"});

	if(page_progress != "home"){
		document.querySelector('a[href="#'+item+'"]').previousElementSibling.style.height = "45px";
		document.querySelector('a[href="#'+item+'"]').previousElementSibling.style.marginTop = "5px";
	}
}

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.getElementById('page');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleSwipe();
}, false); 

function handleSwipe() {
	if(window.innerHeight > window.innerWidth){
		if(!mobile_menu_is_visible){
			if (Math.abs(touchendX - touchstartX) > 130 && touchendX < touchstartX) {
				show_menu();
			}
		}
		if(mobile_menu_is_visible){
			if (Math.abs(touchendX - touchstartX) > 80 && touchendX > touchstartX) {
				hide_menu();
			}
		}
	}
}

window.addEventListener("scroll", function(event){
	let scroll = this.scrollY;
	document.getElementById("colorful_zone").style.padding = 14+scroll/(0.034*scroll+14)+"vw 0vw "+(30-(scroll/(0.034*scroll+14)))+"vw 0vw";
	handle_scroll_progress();
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

document.querySelectorAll('.menu_hider').forEach(e => {e.addEventListener("click", hide_menu_elmnt_is_pressed)});

const query = matchMedia("screen and (orientation:landscape)");
query.onchange = e => {
	if(query.matches){
		update_progress_bar_horizontal(page_progress);
		show_menu();
	}
	else {
		update_progress_bar_vertical(page_progress);
		hide_menu();
	}
}