const navbar = document.getElementById('navbar');
window.onscroll= function () {
    scrolllFunction()
}

let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
    document.getElementById('nav-logo').classList.toggle('open');
    document.getElementsByClassName('hamburger-menu')[0].classList.toggle('open');
}

function scrolllFunction() {
    if (document.body.scrollTop>20 || document.body.scrollTop<20) {
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')

    }
    
}

function toggleMenu() {
    const nav= document.querySelector("menu-icon");
    nav.classList.toggle('show');
}

const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000
}
const scrollRevealtransparent={
    distance:"50px",
    opacity: 0.2,
    duration:1000
}

ScrollReveal().reveal(".header h2",scrollRevealOption)
ScrollReveal().reveal(".header h1",{...scrollRevealOption,delay:500})
ScrollReveal().reveal(".header h3",{...scrollRevealOption,delay:1000})
ScrollReveal().reveal(".header .card-tags",{...scrollRevealtransparent,delay:1000})
ScrollReveal().reveal("section h1",scrollRevealOption)
ScrollReveal().reveal("section h2",{...scrollRevealOption,delay:500})
ScrollReveal().reveal("section .item",{...scrollRevealOption,delay:1000})
ScrollReveal().reveal("section .row",{...scrollRevealOption,delay:2000})
ScrollReveal().reveal(".weddings ",{...scrollRevealOption,delay:500})
ScrollReveal().reveal(".weddings .about1 .about2 img .about3 ",{...scrollRevealtransparent,delay:1000})



//humbuger menu
function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
}

function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
    }
}

//humbuger menu 
function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenu.style.opacity === '1') {
        mobileMenu.style.opacity = '0';
        setTimeout(function() {
            mobileMenu.style.display = 'none';
        }, 500); 
    } else {
        mobileMenu.style.display = 'flex';
        setTimeout(function() {
            mobileMenu.style.opacity = '1';
        }, 0); 
    }
}

// image pop up

function openModal(img) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
