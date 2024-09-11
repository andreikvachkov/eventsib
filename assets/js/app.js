const reviews__swiper = new Swiper('.reviews__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: '.reviews__swiper__pagination',
    },
    navigation: false,
});
const reviews__swiper__mobile = new Swiper('.reviews__swiper__mobile', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: '.reviews__swiper__mobile__pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            const totalSlides = this.slides.length;
            if (index < 5 || index === totalSlides - 1) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
            if (index === 5) {
                return '<span class="' + className + '">...</span>';
            }
            return '';
        },
    },
    navigation: {
        nextEl: '.reviews__swiper__mobile__next',
        prevEl: '.reviews__swiper__mobile__prev',
    },
});

function openMenu() {
    $('.mobile__menu').addClass('active');
    $('body').addClass('no-scroll');
}

function closeMenu() {
    $('.mobile__menu').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.mobile__menu__close').on('click', closeMenu);

$('.header__mobile__btn').on('click', openMenu);

const gallery_popup__swiper = new Swiper('.gallery_popup__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,

    pagination: false,

    navigation: {
        nextEl: '.gallery_popup__swiper__next',
        prevEl: '.gallery_popup__swiper__prev',
    },
});

function openfeedbackpopup() {
    $('.feedback_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closefeedbackpopup() {
    $('.feedback_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.feedback_popup__close').on('click', closefeedbackpopup);

$('.feedback_popup__open').on('click', openfeedbackpopup);


function openpolicy() {
    $('.policy-popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closepolicy() {
    $('.policy-popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.policy-popup__close').on('click', closepolicy);

$('.policy_popup__open').on('click', openpolicy);




function initSwiper() {
    if (window.innerWidth <= 768) {
        const project_cart__left = new Swiper('.project-cart__left', {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 10,
            pagination: {
                el: '.project-cart__left__pagination',
            },
            navigation: false,
        });
    }
}

initSwiper();

window.addEventListener('resize', function () {
    initSwiper();
});


const mainButton = document.querySelector('.mainsbutton');

const buttons = document.querySelectorAll('.sbutton');

mainButton.addEventListener('click', () => {
    buttons.forEach(button => {
        button.classList.toggle('active');
    });
});


