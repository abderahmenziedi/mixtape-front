/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Featured Album Player
6. InitMagic
7. Init Single Player


******************************/

// Remove the automatic document ready initialization to prevent conflicts with Angular
// We'll handle initialization in the Angular components instead

/* 

1. Vars and Inits

*/

// Export functions so they can be called from Angular components
window['initHomeSlider'] = function() {
	if($('.home_slider').length) {
		var homeSlider = $('.home_slider');
		homeSlider.owlCarousel(
		{
			animateOut: 'fadeOutLeft',
			animateIn: 'fadeInRight',
			items:1,
			loop:true,
			autoplay:false,
			autoplayTimeout:8000,
			smartSpeed:1200,
			autoplaySpeed:1200,
			dotsSpeed:1200,
			mouseDrag:false,
			nav:false,
			dots:true,
			margin:250
		});
	}
}

/* 

5. Init Featured Album Player

*/

window['initAlbumPlayer'] = function() {
	if($('#jplayer_1').length) {
		// Duration has to be entered manually
		var playlist = 
		[
			{
				title:"Better Days",
				artist:"Bensound",
				mp3:"files/bensound-betterdays.mp3",
				duration:"2.33"
			},
			{
				title:"Dubstep",
				artist:"Bensound",
				mp3:"files/bensound-dubstep.mp3",
				duration:"2.04"
			},
			{
				title:"Sunny",
				artist:"Bensound",
				mp3:"files/bensound-sunny.mp3",
				duration:"2.20"
			},
			{
				title:"Better Days",
				artist:"Bensound",
				mp3:"files/bensound-betterdays.mp3",
				duration:"2.33"
			},
			{
				title:"Dubstep",
				artist:"Bensound",
				mp3:"files/bensound-dubstep.mp3",
				duration:"2.04"
			},
			{
				title:"Sunny",
				artist:"Bensound",
				mp3:"files/bensound-sunny.mp3",
				duration:"2.20"
			}
		];

		var options =
		{
			playlistOptions:
			{
				autoPlay:false,
				enableRemoveControls:false
			},
			play: function() // To avoid multiple jPlayers playing together.
			{ 
				$(this).jPlayer("pauseOthers");
			},
			solution: 'html',
			supplied: 'oga, mp3',
			useStateClassSkin: true,
			preload: 'metadata',
			volume: 0.2,
			muted: false,
			backgroundColor: '#000000',
			cssSelectorAncestor: '#jp_container_1',
			errorAlerts: false,
			warningAlerts: false
		};

		var cssSel = 
		{
			jPlayer: "#jplayer_1",
			cssSelectorAncestor: "#jp_container_1",
			play: '.jp-play',
			pause: '.jp-pause',
			stop: '.jp-stop',
			seekBar: '.jp-seek-bar',
			playBar: '.jp-play-bar',
			globalVolume: true,
			mute: '.jp-mute',
			unmute: '.jp-unmute',
			volumeBar: '.jp-volume-bar',
			volumeBarValue: '.jp-volume-bar-value',
			volumeMax: '.jp-volume-max',
			playbackRateBar: '.jp-playback-rate-bar',
			playbackRateBarValue: '.jp-playback-rate-bar-value',
			currentTime: '.jp-current-time',
			duration: '.jp-duration',
			title: '.jp-title',
			fullScreen: '.jp-full-screen',
			restoreScreen: '.jp-restore-screen',
			repeat: '.jp-repeat',
			repeatOff: '.jp-repeat-off',
			gui: '.jp-gui',
			noSolution: '.jp-no-solution'
		};

		var myPlaylist = new window['jPlayerPlaylist'](cssSel,playlist,options);
		
		
		setTimeout(function()
		{
			var items = $('.jp-playlist ul li > div');
			for(var x = 0; x < items.length; x++)
			{
				var item = items[x];
				var dur = playlist[x].duration;
				var durationDiv = document.createElement('div');
				durationDiv.className = "song_duration";
				durationDiv.append(dur);
				item.append(durationDiv);
			}
		},200);
	}
}

/* 

6. Init Magic

*/

window['initMagic'] = function() {
	if($('.image_overlay').length) {
		var eles = $('.image_overlay');
		eles.each(function() {
			var ele = this;
			$(ele).addClass('active');
		});
	}
}

/* 

7. Init Single Player

*/

window['initSinglePlayer'] = function() {
	if($("#jplayer_2").length) {
		$("#jplayer_2").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title:"Better Days",
                artist:"Bensound",
                mp3:"files/bensound-betterdays.mp3"
            });
        },
        play: function() { // To avoid multiple jPlayers playing together.
            $(this).jPlayer("pauseOthers");
        },
        swfPath: "plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_2",
        wmode: "window",
        globalVolume: true,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: 'html',
        preload: 'metadata',
        volume: 0.2,
        muted: false,
        backgroundColor: '#000000',
        errorAlerts: false,
        warningAlerts: false
    });
	}	
}

/* 

2. Set Header

*/

window['setHeader'] = function() {
	var header = $('.header');
	if(header.length && $(window).scrollTop() > 91) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}
}

/* 

3. Init Menu

*/

window['initMenu'] = function() {
	if($('.menu').length) {
		var hamb = $('.hamburger');
		var menu = $('.menu');
		var menuOverlay = $('.menu_overlay');

		hamb.on('click', function() {
			menu.addClass('active');
		});

		menuOverlay.on('click', function() {
			menu.removeClass('active');
		});
	}
}

// Keep only the event listeners that don't conflict with Angular
$(window).on('resize', function() {
	window['setHeader']();
});

$(document).on('scroll', function() {
	window['setHeader']();
});