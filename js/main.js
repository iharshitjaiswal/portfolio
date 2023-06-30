let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
}
console.log('harshit');

const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

console.log('success');
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    console.log('success');
});

function slide_carousel(arrow) {
    var index = (document.getElementById('slider')).style.getPropertyValue('--slide_index')
    console.log(index);
    for (i = 0; i < 5; i++) {
        if (document.getElementsByClassName('slider')[0].getElementsByTagName('img')[i].classList.contains('center')) {
            break;
        }
    }
    document.getElementsByClassName('slider')[0].getElementsByTagName('img')[i].classList.remove('center');
    if (arrow == 'right') {
        index++;
        document.getElementsByClassName('slider')[0].getElementsByTagName('img')[i + 1].classList.add('center');
    }
    else {
        index--;
        document.getElementsByClassName('slider')[0].getElementsByTagName('img')[i - 1].classList.add('center');
    }
    (document.getElementById('slider')).style.setProperty('--slide_index', index);
    console.log(index);
}