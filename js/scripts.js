window.addEventListener('load', function(){
	let menu = document.querySelector('.menu');

	delegate(menu, 'a', 'click', function(e){
		e.preventDefault();

		let target = document.querySelector(this.hash);
		scrollToElem(target);
		setActiveMenuItem(menu, this);
	});

	let hash = window.location.hash;
	let autoTarget = hash.length > 0 ? document.querySelector(hash) : null;

	if(autoTarget !== null){
		scrollToElem(autoTarget);
		setActiveMenuItem(menu, menu.querySelector(`[href$="${hash}"]`));
	}
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

let titleItems = document.querySelectorAll('a')
let arrTitleItems = Array.from(titleItems).reverse()
console.log(document.querySelector(`${arrTitleItems[0].hash}`));
let heightMenu = document.querySelector('.menu').offsetHeight;

function switcher () {
	arrTitleItems.forEach(item => {
		let selectItem = document.querySelector(`${item.hash}`).getBoundingClientRect().top + window.scrollY-heightMenu
		console.log(selectItem);
		// switch (item.hash) {
		// 	case selectItem:
		// 		addColor(titleItems[0]);
		// 		break;
		// 	case selectItem:
		// 		addColor(titleItems[1]);
		// 		break;
		// 	case selectItem:
		// 		addColor(titleItems[2]);
		// 		break;
		// 	case selectItem:
		// 		addColor(titleItems[3]);
		// 		break
		// }
	})
}
switcher()



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

