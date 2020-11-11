var cIndex = 0;
var containers = document.getElementsByClassName('ccontainer');
var dots;
var slideT;
var nSlide;

CnavInit();
Carousel();

function Carousel() {


	for (var i = 0; i < containers.length; i++) {
		containers[i].style.display = 'none';
	}

	if (cIndex > containers.length - 1) {
		cIndex = 0;
	}

	Dots();
	
	//console.log(cIndex);

	containers[cIndex].style.display = 'flex';

	cIndex++;
	slideT = setTimeout(Carousel, 8000);
}

function CnavInit() {

	var cNav = document.querySelector('.c-nav');

	for (var i = 0; i < containers.length - 1; i++){
		cNav.innerHTML += '<div class="dot"></div>';
	}

	dots = document.querySelectorAll(".dot");
	for (var i = 0; i < dots.length; i++){
		dots[i].addEventListener('onclick', ChangeSlide);
	}

}



function ChangeSlide(e) {
	for (var i = 0; i < dots.length; i++) {
		if (e.currentTarget == dots[i]) {
			//console.log(i);
			cIndex = i;
			break;
		}
	}
	clearTimeout(slideT);
	Carousel();
}

function Dots() {

	for(var i = 0; i < dots.length; i++){
		dots[i].style.background = 'black';
		dots[i].addEventListener('click', ChangeSlide);
	}

	dots[cIndex].style.background = 'white';
	
}