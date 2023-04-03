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

const scrollBtn = document.querySelector('.is-show-btn')

function scrollToTop () {
	window.scrollTo({top:0,left: 0,behavior: 'smooth'})
}
function showScrollBtn() {
	scrollBtn.classList.remove('is-show-btn__hide')
	scrollBtn.addEventListener('click', scrollToTop)
}
function hideScrollBtn() {
	scrollBtn.classList.add('is-show-btn__hide')
	scrollBtn.removeEventListener('click', scrollToTop)
}
window.addEventListener('scroll', () => {
	if (window.scrollY > 500) {
		showScrollBtn()
	} else {
		hideScrollBtn()
	}

})




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

