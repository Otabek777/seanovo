$(window).scroll(function(){
    if ( $(this).scrollTop() > 50) {
        $('.header').addClass('fixed');
        $('.catalog_menu').addClass('fixed');
        $('.header_mobile_menu').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
        $('.catalog_menu').removeClass('fixed');
        $('.header_mobile_menu').removeClass('fixed');
    }
});
document.querySelector('.header__catalog').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.catalog_menu').classList.toggle('active');
});

const catalogLink = document.querySelectorAll('.catalog_menu .items');
for(let i = 0; i < catalogLink.length; i++) {
    catalogLink[i].addEventListener('mouseover', function() {
        for(let k = 0; k < catalogLink.length; k++) {
            catalogLink[k].classList.add('opacity');
        };
        this.classList.remove('opacity');
    });
    catalogLink[i].addEventListener('mouseout', function() {
        for(let k = 0; k < catalogLink.length; k++) {
            catalogLink[k].classList.remove('opacity');
        };
    });
};
document.querySelector('.header_burgir').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header_mobile_menu').classList.toggle('active');
});

if(document.querySelector('.question_btn')) {
    document.querySelector('.question_btn').addEventListener('click', function() {
        document.querySelector('.question_fixed').classList.toggle('active');
    });
};
if(document.querySelector('.filter_open')) {
    document.querySelector('.filter_open').addEventListener('click', function() {
        document.querySelector('.categories__page__filter').classList.add('active');
    });
    document.querySelector('.filter_close').addEventListener('click', function() {
        document.querySelector('.categories__page__filter').classList.remove('active');
    });
};