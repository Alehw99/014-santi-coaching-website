var cIndex = 0;
	var containers = document.getElementsByClassName('ccontainer');

Carousel();
CnavInit();

function Carousel() {


	for (var i = 0; i < containers.length; i++) {
		containers[i].style.display = 'none';
	}

	if (cIndex > containers.length - 1) {
		cIndex = 0;
	}

	
	containers[cIndex].style.display = 'flex';

	//console.log(cIndex);
	cIndex++;
	setTimeout(Carousel, 8000);
}

function CnavInit() {

	var cNav = document.querySelector('.c-nav');

	console.log(containers.length);

	for (var i = 0; i < containers.length; i++){
		cNav.innerHTML += '<div class="dot"></div>';
	}

}