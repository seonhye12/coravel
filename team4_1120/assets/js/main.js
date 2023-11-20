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
	setInterval(myTimer, 1000); // 1�ʸ��� ȣ��ǰ� �Ѵ�.

    function myTimer() {
        let today = new Date(); //����Ʈ��ü����
        let y = today.getFullYear();
        let m = today.getMonth() + 1; //0���� �����ϹǷ� +1�� ���ؾ� ���� �� �� �ȴ�.
        let d = today.getDate(); //�� ���� �޾Ƴ���.
        let day = today.getDay(); // ������ ���� �޾Ƴ���.
        let weekday = new Array(7); // array �� ������ �Ҵ��ϰ�
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
        $(".day").text(weekday[today.getDay()]); //array ������ ���� �Ҵ��� ���� ���
        $(".today-time .todayTimes").text(t_time);
    }

	$.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=Chuncheon&limit=5&appid=b5a277d737988703843bf7b07cb2a0db&units=metric`, function (result) {
   
    // ����µ�
    $(".temp").append(result.main.temp); //����µ�
    $(".max").append(result.main.temp_min); //�ְ�µ�
    $(".min").append(result.main.temp_max); //�����µ�
    $(".wind").append(result.wind.speed); //�ٶ�
    $(".clouds").append(result.clouds.all); //����
    $(".city").append(result.name); //�����̸�

    })