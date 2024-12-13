//menu slider
let menu_swiper = new Swiper(".swiper", {
        loop: true,
        pagination: {
          el: ".menu__item-pagination",
          clickable: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
});

//events slider
let event_swiper = new Swiper(".events-swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".events-pagination",
          clickable: true
        },
		breakpoints: {
		// when window width is >= 320px
		824: {
			slidesPerView: 2,
			spaceBetween: 0,
		}},
});

//tabs 
let tabs = document.querySelectorAll('.menu-tab');
        let content = document.querySelectorAll('.tab__slide');
        for (let i = 0; i < tabs.length; i++) {            
            tabs[i].addEventListener('click', () => tabClick(i));
        }

        function tabClick(currentTab) {
            removeActive();
            tabs[currentTab].classList.add('active');
            content[currentTab].classList.add('active');
            console.log(currentTab);
        }

        function removeActive() {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                content[i].classList.remove('active');
            }
        }
  
//scroll 
(function () {
	let smoothScroll = function smoothScroll(targetEl, duration) {
		let target = document.querySelector(targetEl);
		let targetPosition = target.getBoundingClientRect().top; 
		let startPosition = window.pageYOffset;
		let startTime = null;

		let ease = function ease(t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		};

		let animation = function animation(currentTime) {
			if (startTime === null) startTime = currentTime;
			let timeElapsed = currentTime - startTime;
			let run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};

		requestAnimationFrame(animation);
	};

	let scrollTo = function scrollTo() {
		//const links = document.querySelectorAll('.js-scroll'); //добавляем классы к линкам
		let links = document.querySelectorAll('.header__menu-link'); //добавляем классы к линкам

		links.forEach(function (each) {
			each.addEventListener('click', function (e) {
				e.preventDefault();
				let currentTarget = this.getAttribute('href');
				smoothScroll(currentTarget, 1000); //выход из мобильного меню
				//headerNav.classList.remove('active-menu');
			});
		});
	};

	scrollTo();
})()   

//to top scroll
let intervalId = 0;
let scrollButton = document.querySelector('.to-top');
let header = document.querySelector('#header');
let headerHeight = header.clientHeight;


window.addEventListener('scroll', function () {
	if (window.pageYOffset > headerHeight)
		scrollButton.style.display = "block";
	else
		scrollButton.style.display = "none";
});


function scrollStep() {
	if (window.pageYOffset === 0) {
		clearInterval(intervalId);
	}
	window.scroll(0, window.pageYOffset - 50);
}

function scrollToTop() {
  //change speed
	intervalId = setInterval(scrollStep, 12);
}

scrollButton.addEventListener('click', scrollToTop);


//mobile menu

let toggleButton = document.querySelector('.toggle-menu');
let navBar = document.querySelectorAll('.header__nav');
let menuItems = document.querySelectorAll('.header__menu-item');

toggleButton.addEventListener('click', function () {
	navBar.forEach((e) =>{
		e.classList.toggle('toggle');		
	})
	changeMenu();
});

for(let i=0; i<menuItems.length; i++) {
	menuItems[i].addEventListener('click', function(){
		navBar.forEach((e) =>{
		e.classList.toggle('toggle');
		
	});
})
}

// menuItems.forEach((e)=>{
// 	e.addEventListener('click', function(){
// 	toggleButton.classList.remove('toggle')
// })
// })

 

//menu join
function changeMenu() {
	if(document.querySelector('.nav-second.toggle')) {
		let firstMenu = document.querySelector('.nav-first.toggle');
		let secondMenu = document.querySelector('.nav-second.toggle');
		firstMenu.appendChild(secondMenu.firstElementChild);
		secondMenu.remove;
	}	
}

//popup
let popup = document.querySelector('.popup-wrapper');
let popupForm = document.querySelector('.popup-form');
let popupBtn = document.querySelector('.order-btn');
let popupClose = document.querySelector('.close-btn');
let popupOpen = false;

popupBtn.addEventListener('click', (e)=> {
	e.preventDefault;
	addPopup();
})

popupClose.addEventListener('click', (e)=> {
	e.preventDefault;
	removePopup();
})

popupForm.addEventListener('submit', ()=> {
	removePopup();
})

 
	popup.addEventListener('click', (e)=> {
		let target = e.target;
	if(target.classList.contains("popup-wrapper")) {
		removePopup();
	}
	else
	return
	
})
 



function addPopup() {
	popup.classList.add('active');
	bodyScroll()
}

function removePopup() {
	popup.classList.remove('active');
	bodyScroll();
}

function bodyScroll() {
	document.body.classList.toggle('no-scroll');
}

