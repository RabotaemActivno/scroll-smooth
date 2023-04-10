window.addEventListener('load', function(){
	let menu = document.querySelector('.menu');
	let menuItems = menu.querySelectorAll('a');
	let arrow = document.querySelector('.scrollUp')

	delegate(menu, 'a', 'click', function(e){
		e.preventDefault();

		let target = document.querySelector(this.hash);
		scrollToElem(target);
	});

	arrow.addEventListener('click', function(){
		window.scrollTo({
			top:0,
			left: 0,
			behavior: "smooth"
		})
	})

	document.addEventListener('scroll', function(){
		let pos = window.scrollY;
		let threshold = window.innerHeight /2

		if (window.scrollY > 500) {
			arrow.classList.add('btnUp-open')
		} else {
			arrow.classList.remove('btnUp-open')
		}
		
		for(let i =menuItems.length -1; i>=0;i--) {
			let link = menuItems[i];
			let header = document.querySelector(link.hash)
			if (header.getBoundingClientRect().y<threshold) {
				setActiveMenuItem(menu, link);
				break
			}
		}

	})

	
});


function delegate(box, selector, eventName, handler){
	box.addEventListener(eventName, function(e){
		let elem = e.target.closest(selector);

		if(elem !== null && box.contains(elem)){
			handler.call(elem, e);
		}
	});
}

function setActiveMenuItem(menu, item){
	menu.querySelectorAll('a').forEach(link => link.classList.remove('menu__link-active'));
	item.classList.add('menu__link-active');
}

function scrollToElem(el){
	let content = document.querySelector('.content')
	let style = parseInt(window.getComputedStyle(content).getPropertyValue('margin-top'))
	console.log(style);
	
	let top =el.getBoundingClientRect().y + window.scrollY - style;

	window.scrollTo({
		top,
		behavior: "smooth"
	});	
}





// window.addEventListener('scroll', () => {
// 	if (window.scrollY > 500) {
// 		scrollBtn.classList.remove('is-show-btn__hide')
// 	} else {
// 		scrollBtn.classList.add('is-show-btn__hide')
// 		scrollBtn.removeEventListener
// 	}
// })
// scrollBtn.addEventListener('click', ()=>{
// 	window.scrollTo({top:0,left: 0,behavior: 'smooth'})
// })

