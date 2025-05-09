(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

        // JavaScript for additional interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Get all program cards
            const programCards = document.querySelectorAll('.program-cardB');
            
            // Add click event listeners to cards
            programCards.forEach(card => {
                card.addEventListener('click', function(e) {
                    // Prevent default if clicking on the more options button
                    if (e.target.classList.contains('more-options')) {
                        e.stopPropagation();
                        alert('Options menu clicked');
                        return;
                    }
                    
                    // Get the program title
                    const programTitle = this.querySelector('.program-titleB').textContent;
                    console.log(`Program selected: ${programTitle}`);
                    
                    // You can add navigation to program details page here
                    // window.location.href = `/program-details/${programTitle.toLowerCase().replace(/\s+/g, '-')}`;
                });
            });
            
            // More options button functionality
            const moreOptionsButtons = document.querySelectorAll('.more-optionsB');
            moreOptionsButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const programTitle = this.closest('.program-cardB').querySelector('.program-titleB').textContent;
                    alert(`Options for: ${programTitle}`);
                });
            });
        });


 document.addEventListener('DOMContentLoaded', function () {
      const video = document.querySelector('.nutria-video-bgX');

      // Ensure video plays on iOS devices
      video.setAttribute('playsinline', '');
      video.setAttribute('muted', '');
      video.muted = true;

      // Play video when it's ready
      video.addEventListener('canplaythrough', function () {
        video.play();
      });

      // Handle video loading issues
      video.addEventListener('error', function () {
        const videoContainer = document.querySelector('.nutria-video-containerX');
        videoContainer.style.backgroundImage =
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/welcome.PNG-XwkE7Z2rgjPgHfl9kGhanUYGJiVd7P.png")';
        videoContainer.style.backgroundSize = 'cover';
        videoContainer.style.backgroundPosition = 'center';
      });
    });
	
	        document.addEventListener('DOMContentLoaded', function() {
            const projectCards = document.querySelectorAll('.aqua-project-cardM');
            
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    const arrow = this.querySelector('svg');
                    if (arrow) {
                        arrow.style.transform = 'translateX(3px)';
                    }
                });
                
                card.addEventListener('mouseleave', function() {
                    const arrow = this.querySelector('svg');
                    if (arrow) {
                        arrow.style.transform = 'translateX(0)';
                    }
                });
            });
        });
