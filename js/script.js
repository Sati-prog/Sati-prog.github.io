"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // Hamburger
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    const percents = document.querySelectorAll('.skills__progress-percent'),
          rectangles = document.querySelectorAll('.skills__progress-rectangle span');

    percents.forEach((item, i) => {
        rectangles[i].style.width = item.innerHTML;
    });
    
});

//Modal

$('[data-modal=contacts]').on('click', function() {
    $('.overlay, #thanks').fadeIn('slow');
});

$('.modal__close').on('click', function() {
    $('.overlay, #thanks').fadeOut('slow');
});

// Sending data by mail

$('form').submit(function(e) {

    e.preventDefault();
    
    $.ajax({

        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        
        $(this).find("input").val("");
        $('input').val('');
        $('.overlay, #thanks').fadeIn('slow');
        $("form#form").trigger('reset');
    });
    return false;
});