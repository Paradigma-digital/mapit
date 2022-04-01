let scrollpos = window.scrollY

const header = document.querySelector("header")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("bg-white")
const remove_class_on_scroll = () => header.classList.remove("bg-white")

if (scrollpos > 10) {
    add_class_on_scroll()
}

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})



const mobMenu = document.querySelector('.hamburger')
const docBody = document.querySelector('body')

mobMenu.addEventListener('click', menuHandler)

function menuHandler() {
    const menu = document.querySelector('.header-menu')
    mobMenu.classList.toggle('active')
    menu.classList.toggle('active')
    header.classList.toggle('active')
    menu.style.maxHeight = `${menu.scrollHeight + menu.scrollHeight}px`
    if (window.innerWidth < 768) {
        menu.style.padding = '90px 40px 60px'
        docBody.classList.toggle('header-active')
    }
    if (!mobMenu.classList.contains('active')) {
        menu.style.maxHeight = null
        menu.style.padding = null
    }
}

document.querySelectorAll('.header-menu-item a').forEach(i=> i.addEventListener('click', menuHandler))



const modal = document.querySelector('.modal')

const modalBtn = document.querySelector('.modal-call')


modalBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.style.opacity = 1;
    modal.style.zIndex = 999;
    docBody.style.overflow = 'hidden';
})

modal.addEventListener('click', (e)=> {
    e.stopPropagation()
    if (e.target.closest('.modal-close') || e.target === modal) {
        modal.style.opacity = 0;
        modal.style.zIndex = -9;
        docBody.style.overflow = null
    }
})


document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        let topOffset = document.querySelector('header').offsetHeight;
        if (window.innerWidth > 768) {
            topOffset = document.querySelector('header').offsetHeight + 35;
        } else {
            
        }
        
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});



let headerMod = $('header')
let	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 50 && scrolled > scrollPrev ) {
		headerMod.addClass('out');
	} else {
		headerMod.removeClass('out')
	}
	scrollPrev = scrolled;
});