(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-300px');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 90
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);



function countdown() {
    const targetDate = new Date('November 9, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
    } else {
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
    }
}

setInterval(countdown, 1000);


 // Mendapatkan elemen audio
 var lagu = document.getElementById('lagu');
 var backsound = document.getElementById('backsound');
 var playButton = document.getElementById('playButton');

 // Fungsi untuk memutar audio saat tombol diklik
 function playAudio() {
     backsound.volume = 0.3; // Set volume backsound
     backsound.play();
     lagu.play();
     playButton.style.display = 'none'; // Sembunyikan tombol setelah diputar
 }

 // Memastikan audio diputar saat halaman dimuat
 window.addEventListener('load', function() {
     // Mulai dengan backsound volume 0.3
     backsound.volume = 0.3;

     // Coba memutar otomatis
     lagu.play().then(() => {
         // Jika berhasil, backsound juga diputar otomatis
         backsound.play();
     }).catch(error => {
         // Jika autoplay diblokir, tampilkan tombol play di pojok kanan bawah
         playButton.style.display = 'block';
         console.log('Autoplay diblokir. Gunakan tombol untuk memutar musik.');
     });
 });
