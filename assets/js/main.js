

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);
// input#name
// 1: input#email
// 2: input#subject
// 3: textarea#message
// 4: input
// 5: input.alt

const sendEmail = document.getElementById('sendMessage')

sendEmail.addEventListener('click',(e)=>{
	e.preventDefault()
	let name = document.getElementById('name').value;
	let email = document.getElementById("email").value;
	let subject= document.getElementById("subject").value;
	let message = document.getElementById('message').value;
	window.open(`mailto:kdondidier@gmail.com?subject=${subject}&body=${message}`)
})