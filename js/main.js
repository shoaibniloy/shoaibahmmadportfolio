 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

/***********************************
 * 1) CERTIFICATE DATA
 ***********************************/
const certificates = [
	{
	  title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]",
	  image: "images/cert1.jpg",
	  link: "https://www.udemy.com/certificate/UC-13ffc547-0abf-466e-a679-eebbc97661c4/"
	},
	{
	  title: "SOLIDWORKS CAD Design Associate",
	  image: "images/cert2.png",
	  link: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-VBME7Q6RH4"
	},
	{
	  title: "SOLIDWORKS Additive Manufacturing Associate",
	  image: "images/cert3.png",
	  link: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-LJUD7A9V6C"
	},
	{
	  title: "Supervised Machine Learning: Regression and Classification",
	  image: "images/cert4.png",
	  link: "https://www.coursera.org/account/accomplishments/records/E2SN83EPNPXB"
	},
	{
	  title: "Advanced Learning Algorithms",
	  image: "images/cert5.png",
	  link: "https://www.coursera.org/account/accomplishments/verify/5EQ4PJA8C8IE"
	},
	{
	  title: "Basics of Machine Learning",
	  image: "images/cert6.png",
	  link: "https://www.mygreatlearning.com/certificate/JMEEBTCJ"
	},
	{
	  title: "Statistics for Machine Learning",
	  image: "images/cert7.png",
	  link: "https://www.mygreatlearning.com/certificate/JMEEBTCJ"
	},
	{
	  title: "Intro to Machine Learning",
	  image: "images/cert8.png",
	  link: "https://www.kaggle.com/learn/certification/shoaibahmmad/intro-to-machine-learning"
	},
	{
	  title: "Machine Learning Algorithms",
	  image: "images/cert9.png",
	  link: "https://www.mygreatlearning.com/certificate/MWGLTZZE"
	},
	
	{
		title: "Machine Learning Statistical Foundations Professional Certificate by Wolfram Research",
		image: "images/cert12.jpg",
		link: "https://www.linkedin.com/learning/certificates/aa94c451fc4c711b65169dda2d826047d3eaf6a857d15f78311889cc43e9b45f?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BX3DM68QtRWWsO8QEPLRyhw%3D%3D"
	},
	{
		title: "Statistics Foundations Professional Certificate by Wolfram Research",
		image: "images/cert13.jpg",
		link: "https://www.linkedin.com/learning/certificates/3bde6f1f8c13a1394ff83edc9dc9e8208ec2320ffee988ee8ee3e63114a9d551?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BjTFFdv3ASXu0BaTG5ctcyw%3D%3D"
	},
	{
		title: "Vector Databases Professional Certificate by Weaviate",
		image: "images/cert14.jpg",
		link: "https://www.linkedin.com/learning/certificates/d01f7c5e5fdee7709e127926f5c59a5ab9864aa4b1d35cb537fa1a20b9c3f9b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2R5NV2toRxmRW43SnfHfDA%3D%3D"
	},
	{
		title: "Vector Databases Professional Certificate by Weaviate",
		image: "images/cert14.jpg",
		link: "https://www.linkedin.com/learning/certificates/d01f7c5e5fdee7709e127926f5c59a5ab9864aa4b1d35cb537fa1a20b9c3f9b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2R5NV2toRxmRW43SnfHfDA%3D%3D"
	},
    {
		title: "SS&C Blue Prism Robotic Process Automation Professional Certificate",
		image: "images/cert18.jpg",
		link: "https://www.linkedin.com/learning/certificates/d2b12960c0b82d56d7fa0576ebeede65ed53aaed6855e77a6140d1e70392879f"
	},
    {
		title: "LambdaTest Test Automation Professional Certificate",
		image: "images/cert19.jpg",
		link: "https://www.linkedin.com/learning/certificates/5d802534532b0547d0fc4de57573fce82292bdb7fffeaba75b866c6f9b9e51da"
	},
	{
		title: "Become an RPA Developer Professional Certificate",
		image: "images/cert20.jpg",
		link: "https://www.linkedin.com/learning/certificates/efda415e8f19bc0cc0df6ba816aa79acccdde9c0935cd3b81b8fc5417c250838"
	},
	{
		title: "Develop Your Prompt Engineering Skills",
		image: "images/cert21.jpg",
		link: "https://www.linkedin.com/learning/certificates/eefdf628a57e1613782c717ab0dfb3f0d6235b9b595a5482c2f625991be4ce47"
	},
	{
		title: "Fundamentals to Become a Machine Learning Engineer",
		image: "images/cert22.jpg",
		link: "https://www.linkedin.com/learning/certificates/077e74776309c7b8f65e9050e755c423fbd0bb5359a84416612ab7dc78d9b556"
	},
	{
		title: "Career Essentials in GitHub Professional Certificate",
		image: "images/cert15.jpg",
		link: "https://www.linkedin.com/learning/certificates/df9b71c2d3abf5dbadf786de8414552eba8427c9448ee4ec302e4b1b6f6813f0"
	},
	{
		title: "OpenEDG Python Institute: Programming with Python Professional Certificate",
		image: "images/cert17.jpg",
		link: "https://www.linkedin.com/learning/certificates/98a09ae4a5767d0975da3c18f398a41235f15f84abf361fe0c35ec4a1ee05e8a"
	},
	{
		title: "Computational Fluid Mechanics - Airflow Around a Spoiler",
		image: "images/cert10.jpg",
		link: "https://www.coursera.org/account/accomplishments/verify/2WG8SNRWEF53"
	  },
	{
		title: "Run Your First Python Code",
		image: "images/cert11.png",
		link: "https://ostad.app/share/certificate/c15427-shoaib-ahmmad"
	},
	{
		title: "Certified Supply Chain Analyst - CSCA",
		image: "images/cert23.png",
		link: "https://www.iscea.org/verify-certification"
	},
	{
		title: "CSCMP Supply Chain Foundations: Manufacturing and Service Operations Professional Certificate",
		image: "images/cert24.jpg",
		link: "https://www.linkedin.com/learning/certificates/3d0b15b3ecbb6b872975ab3c99ddd3ce993dbf0f3c1c1beed559fa6776fd70fc"
	},
	{
		title: "Career Essentials in Project Management by Microsoft and LinkedIn",
		image: "images/cert25.jpg",
		link: "https://www.linkedin.com/learning/certificates/0d150e7020efc20b8b2e101bce683ba01800bf08001cb28bfe77fc12a1808684"
	},
  ];
  
  /***********************************
   * 2) BUILD CERTIFICATE CARDS
   ***********************************/
  const certGrid = document.getElementById("self-learning-cert-grid");
  
  certificates.forEach(cert => {
	const card = document.createElement("div");
	card.className = "cert-card";
  
	// IMAGE
	const img = document.createElement("img");
	img.src = cert.image;
	img.alt = cert.title;
	img.className = "cert-image";
	card.appendChild(img);
  
	// TITLE
	const titleDiv = document.createElement("div");
	titleDiv.className = "cert-title";
	titleDiv.textContent = cert.title;
	card.appendChild(titleDiv);
  
	// BUTTON LINK
	const link = document.createElement("a");
	link.href = cert.link;
	link.target = "_blank";
	link.className = "cert-btn";
	link.textContent = "View Certificate";
	card.appendChild(link);
  
	// ADD CARD TO GRID
	certGrid.appendChild(card);
  });
  
  /***********************************
   * 3) LIGHTBOX / MODAL CODE
   ***********************************/
  // Make sure your HTML has a modal structure:
  // <div id="imageModal" class="modal">
  //   <span class="close">&times;</span>
  //   <img class="modal-content" id="modalImg" />
  //   <div id="caption"></div>
  // </div>
  
  // Grab modal elements
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");
  
  // Query all newly created .cert-image elements
  const certImages = document.querySelectorAll(".cert-image");
  
  // Show the modal on image click
  certImages.forEach(img => {
	img.addEventListener("click", function() {
	  modal.style.display = "block";   // or "block"
	  modalImg.src = this.src;
	  captionText.textContent = this.alt || "Certificate";
	});
  });
  
  // Close button
  closeBtn.onclick = function() {
	modal.style.display = "none";
  };
  
  // Close if user clicks outside modal image
  window.addEventListener("click", function(e) {
	if (e.target === modal) {
	  modal.style.display = "none";
	}
  });
  
  // Close if user presses ESC
  document.addEventListener("keydown", function(e) {
	if (e.key === "Escape") {
	  modal.style.display = "none";
	}
  });

// Example of adding active class on click
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});


// Function to open the image in fullscreen
function openFullscreen(img) {
	var modal = document.getElementById("fullscreenModal");
	var fullscreenImage = document.getElementById("fullscreenImage");
  
	fullscreenImage.src = img.src; // Set the source of the image to the clicked image
	modal.style.display = "flex"; // Show the modal
  }
  
  // Function to close the fullscreen modal when clicked
  function closeFullscreen() {
	var modal = document.getElementById("fullscreenModal");
	modal.style.display = "none"; // Hide the modal
  }




  document.querySelectorAll('.play-video').forEach(button => {
    button.addEventListener('click', function() {
      const videoId = this.getAttribute('data-video-id');
      const urlInput = document.getElementById(`videoUrl${videoId.replace('video', '')}`).value;
      const youtubeId = extractYouTubeId(urlInput);

      if (youtubeId) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '200');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');

        const videoContainer = document.getElementById(videoId);
        videoContainer.innerHTML = ''; // Clear previous video if any
        videoContainer.appendChild(iframe);
      } else {
        alert('Please enter a valid YouTube URL');
      }
    });
  });

  function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  const words = ['Mechanical Engineer', 'Robotics Enthusiast', 'Coder', 'Machine Learning Enthusiast', 'CAD Expert'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 30;
  let deletingSpeed = 30;
  let pauseBetweenWords = 2000;

  function type() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) {
      console.error("Typewriter element not found during animation!");
      return;
    }
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typewriterElement.textContent = currentWord.substring(0, charIndex);
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, deletingSpeed);
      }
    } else {
      typewriterElement.textContent = currentWord.substring(0, charIndex);
      charIndex++;
      if (charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(type, pauseBetweenWords);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) {
      console.error("Typewriter element not found on page load!");
      return;
    }
    setTimeout(type, 1000);
  });



  document.addEventListener('DOMContentLoaded', function() {
	const sliders = document.querySelectorAll('.award-images-slider');
	
	sliders.forEach((slider) => {
	  const track = slider.querySelector('.award-slider-track');
	  const slides = track.querySelectorAll('.award-slide');
	  let currentIndex = 0;
	  const totalSlides = slides.length;
  
	  function moveToNextSlide() {
		currentIndex = (currentIndex + 1) % totalSlides;
		track.style.transform = `translateX(-${currentIndex * 100}%)`;
	  }
  
	  // Move to the next slide every 2 seconds
	  setInterval(moveToNextSlide, 2000);
	});
  });
  
