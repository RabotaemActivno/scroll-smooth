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


const menuLinks = document.querySelectorAll('a');
const heightMenu = document.querySelector('.menu').offsetHeight
console.log(heightMenu);

window.addEventListener('scroll', function() {
  const scrollDistance = window.pageYOffset;
  menuLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (!section) return; // Если секция не найдена, то пропускаем итерацию
    const sectionTop = section.offsetTop;
    if (scrollDistance >= sectionTop - heightMenu*3) {
      menuLinks.forEach(link => {
        link.classList.remove('menu__link-active');
      });
      link.classList.add('menu__link-active');
    }
  });
});


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

