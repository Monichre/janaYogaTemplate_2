

jQuery(document).ready(function($){
	var	scrolling = false;
	var contentSections = $('.cd-section'),
		verticalNavigation = $('.cd-vertical-nav'),
		navigationItems = verticalNavigation.find('a'),
		navTrigger = $('.cd-nav-trigger'),
		scrollArrow = $('.cd-scroll-down');

	$(window).on('scroll', checkScroll);

	//smooth scroll to the selected section
	verticalNavigation.on('click', 'a', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
        verticalNavigation.removeClass('open');
    });

    //smooth scroll to the second section
    scrollArrow.on('click', function(event){
    	event.preventDefault();
        smoothScroll($(this.hash));
    });

	// open navigation if user clicks the .cd-nav-trigger - small devices only
    navTrigger.on('click', function(event){
    	event.preventDefault();
    	verticalNavigation.toggleClass('open');
    });

	function checkScroll() {
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
		}
	}

	function updateSections() {
		var halfWindowHeight = $(window).height()/2,
			scrollTop = $(window).scrollTop();
		contentSections.each(function(){
			var section = $(this),
				sectionId = section.attr('id'),
				navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
			( (section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
				? navigationItem.addClass('active')
				: navigationItem.removeClass('active');
		});
		scrolling = false;
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	300
        );
	}
	function calendar() {
	    if ($.fn.fullCalendar && ($('#fitness-calendar').length || $('#yoga-calendar').length)) {
	        var fitnessCalendar = $('#fitness-calendar').fullCalendar({
	            minTime: '09:00:00',
	            maxTime: '18:00:00',
	            defaultView: 'agendaWeek',
	            allDaySlot: false,
	            columnFormat: 'dddd',
	            slotDuration: '01:00:00',
	            defaultDate: '2015-12-12',
	            handleWindowResize: true,
	            height: 'auto',
	            defaultEventMinutes: 60,
	            defaultTimedEventDuration: '01:00:00',
	            header: {
	                left: '',
	                center: '',
	                right: ''
	            },
	            hiddenDays: [0],
	            events: [{
	                title: 'Yoga Zen',
	                start: '2015-12-07 09:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'Crosspin',
	                start: '2015-12-07 10:00:00',
	                className: 'orange accent-4'
	            }, {
	                title: 'Bike Spin',
	                start: '2015-12-07 14:00:00',
	                className: 'grey darken-4'
	            }, {
	                title: 'Zumba Dance',
	                start: '2015-12-07 15:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Fight Cardio',
	                start: '2015-12-07 16:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'WeighLifting',
	                start: '2015-12-08 09:00:00',
	                className: 'red lighten-1'
	            }, {
	                title: 'Crosspin',
	                start: '2015-12-08 10:00:00',
	                className: 'orange accent-4'
	            }, {
	                title: 'Zumba Dance',
	                start: '2015-12-08 11:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'WeighLifting',
	                start: '2015-12-08 12:00:00',
	                className: 'red lighten-1'
	            }, {
	                title: 'Yoga Zen',
	                start: '2015-12-08 15:00:00',
	                className: 'blue lighten-2'
	            }, {
	                title: 'Fight Cardio',
	                start: '2015-12-08 17:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'Crosspin',
	                start: '2015-12-09 10:00:00',
	                className: 'orange accent-4'
	            }, {
	                title: 'Bike Spin',
	                start: '2015-12-09 11:00:00',
	                className: 'grey darken-4'
	            }, {
	                title: 'Zumba Dance',
	                start: '2015-12-09 14:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Yoga Zen',
	                start: '2015-12-09 15:00:00',
	                className: 'blue lighten-2'
	            }, {
	                title: 'Fight Cardio',
	                start: '2015-12-09 17:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'Bike Spin',
	                start: '2015-12-10 09:00:00',
	                className: 'grey darken-4'
	            }, {
	                title: 'Fight Cardio',
	                start: '2015-12-10 10:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'Zumba Dance',
	                start: '2015-12-10 11:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Crosspin',
	                start: '2015-12-10 14:00:00',
	                className: 'orange accent-4'
	            }, {
	                title: 'WeighLifting',
	                start: '2015-12-10 16:00:00',
	                className: 'red lighten-1'
	            }, {
	                title: 'Bike Spin',
	                start: '2015-12-10 17:00:00',
	                className: 'light-green darken-1'
	            }, {
	                title: 'Zumba Dance',
	                start: '2015-12-11 09:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Fight Cardio',
	                start: '2015-12-11 10:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'Yoga Zen',
	                start: '2015-12-11 11:00:00',
	                className: 'blue lighten-2'
	            }, {
	                title: 'Zumba Dance',
	                start: '2015-12-11 14:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Bike Spin',
	                start: '2015-12-11 16:00:00',
	                className: 'light-green darken-1'
	            }, {
	                title: 'Yoga Zen',
	                start: '2015-12-12 10:00:00',
	                className: 'blue lighten-2'
	            }, {
	                title: 'Bike Spin',
	                start: '2015-12-12 11:00:00',
	                className: 'grey darken-4'
	            }, {
	                title: 'Crosspin',
	                start: '2015-12-12 12:00:00',
	                className: 'orange accent-4'
	            }, {
	                title: 'WeighLifting',
	                start: '2015-12-12 15:00:00',
	                className: 'red lighten-1'
	            }, {
	                title: 'Zumba Dance',
	                start: '2015-12-12 16:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Yoga Zen',
	                start: '2015-12-12 17:00:00',
	                className: 'blue lighten-2'
	            }],
	            editable: false,
	            droppable: false
	        });
	        var yogaCalendar = $('#yoga-calendar').fullCalendar({
	            minTime: '09:00:00',
	            maxTime: '18:00:00',
	            defaultView: 'agendaWeek',
	            allDaySlot: false,
	            columnFormat: 'dddd',
	            slotDuration: '01:00:00',
	            defaultDate: '2015-12-12',
	            handleWindowResize: true,
	            height: 'auto',
	            defaultEventMinutes: 60,
	            defaultTimedEventDuration: '01:00:00',
	            header: {
	                left: '',
	                center: '',
	                right: ''
	            },
	            hiddenDays: [0],
	            events: [{
	                title: 'Yoga Zen',
	                start: '2015-12-07 09:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'Prenatal Exercices',
	                start: '2015-12-07 10:00:00',
	                className: 'orange accent-4'
	            }, {
	                title: 'Vitality',
	                start: '2015-12-07 14:00:00',
	                className: 'grey darken-4'
	            }, {
	                title: 'Yummy',
	                start: '2015-12-07 15:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Stretches',
	                start: '2015-12-07 16:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'Rise & Shine',
	                start: '2015-12-08 09:00:00',
	                className: 'red lighten-1'
	            }, {
	                title: 'Prenatal Exercices',
	                start: '2015-12-08 10:00:00',
	                className: 'orange accent-4'
	            }, {
	                title: 'Yummy',
	                start: '2015-12-08 11:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Rise & Shine',
	                start: '2015-12-08 12:00:00',
	                className: 'red lighten-1'
	            }, {
	                title: 'Yoga Zen',
	                start: '2015-12-08 15:00:00',
	                className: 'blue lighten-2'
	            }, {
	                title: 'Stretches',
	                start: '2015-12-08 17:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'Prenatal Exercices',
	                start: '2015-12-09 10:00:00',
	                className: 'orange accent-4'
	            }, {
	                title: 'Vitality',
	                start: '2015-12-09 11:00:00',
	                className: 'grey darken-4'
	            }, {
	                title: 'Yummy',
	                start: '2015-12-09 14:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Yoga Zen',
	                start: '2015-12-09 15:00:00',
	                className: 'blue lighten-2'
	            }, {
	                title: 'Stretches',
	                start: '2015-12-09 17:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'Vitality',
	                start: '2015-12-10 09:00:00',
	                className: 'grey darken-4'
	            }, {
	                title: 'Stretches',
	                start: '2015-12-10 10:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'Yummy',
	                start: '2015-12-10 11:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Prenatal Exercices',
	                start: '2015-12-10 14:00:00',
	                className: 'orange accent-4'
	            }, {
	                title: 'Rise & Shine',
	                start: '2015-12-10 16:00:00',
	                className: 'red lighten-1'
	            }, {
	                title: 'Vitality',
	                start: '2015-12-10 17:00:00',
	                className: 'light-green darken-1'
	            }, {
	                title: 'Yummy',
	                start: '2015-12-11 09:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Stretches',
	                start: '2015-12-11 10:00:00',
	                className: 'indigo lighten-2'
	            }, {
	                title: 'Yoga Zen',
	                start: '2015-12-11 11:00:00',
	                className: 'blue lighten-2'
	            }, {
	                title: 'Yummy',
	                start: '2015-12-11 14:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Vitality',
	                start: '2015-12-11 16:00:00',
	                className: 'light-green darken-1'
	            }, {
	                title: 'Yoga Zen',
	                start: '2015-12-12 10:00:00',
	                className: 'blue lighten-2'
	            }, {
	                title: 'Vitality',
	                start: '2015-12-12 11:00:00',
	                className: 'grey darken-4'
	            }, {
	                title: 'Prenatal Exercices',
	                start: '2015-12-12 12:00:00',
	                className: 'orange accent-4'
	            }, {
	                title: 'Rise & Shine',
	                start: '2015-12-12 15:00:00',
	                className: 'red lighten-1'
	            }, {
	                title: 'Yummy',
	                start: '2015-12-12 16:00:00',
	                className: 'teal lighten-2'
	            }, {
	                title: 'Yoga Zen',
	                start: '2015-12-12 17:00:00',
	                className: 'blue lighten-2'
	            }],
	            editable: false,
	            droppable: false
	        });
	    }
	}
	calendar();
});
