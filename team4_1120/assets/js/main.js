/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

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

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center'
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

	//Weather
	setInterval(myTimer, 1000); // 1초마다 호출되게 한다.

    function myTimer() {
        let today = new Date(); //데이트객체생성
        let y = today.getFullYear();
        let m = today.getMonth() + 1; //0부터 시작하므로 +1을 더해야 현재 월 이 된다.
        let d = today.getDate(); //일 값을 받아낸다.
        let day = today.getDay(); // 요일의 값을 받아낸다.
        let weekday = new Array(7); // array 각 요일을 할당하고
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        let t_time = today.toLocaleTimeString();

        $(".today-time .year").text(y);
        $(".today-time .month").text(m);
        $(".today-time .date").text(d);
        $(".day").text(weekday[today.getDay()]); //array 요일의 값을 할당해 요일 출력
        $(".today-time .todayTimes").text(t_time);
    }

	$.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=Chuncheon&limit=5&appid=b5a277d737988703843bf7b07cb2a0db&units=metric`, function (result) {
   
    // 현재온도
    $(".temp").append(result.main.temp); //현재온도
    $(".max").append(result.main.temp_min); //최고온도
    $(".min").append(result.main.temp_max); //최저온도
    $(".wind").append(result.wind.speed); //바람
    $(".clouds").append(result.clouds.all); //구름
    $(".city").append(result.name); //도시이름

    })