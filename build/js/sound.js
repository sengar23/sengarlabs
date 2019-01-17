var win_w= window.innerWidth;
var win_h= window.innerHeight;
var ieBrowser = (navigator.userAgent.match(/MSIE/) || navigator.userAgent.match(/Trident/));
var mobilebrowser = (navigator.userAgent.match(/Android/i) ||
             navigator.userAgent.match(/webOS/i) ||
             navigator.userAgent.match(/iPhone/i) ||
             navigator.userAgent.match(/iPod/i) ||
             navigator.userAgent.match(/iPad/i) ||
             navigator.userAgent.match(/BlackBerry/)
             );
sound_activate = 1;
(function(){
	var music;
	soundManager.setup({
		onready: function() {
			music = soundManager.createSound({
	     
	      url: './sound/loop.mp3',
	      volume: 70
	    });
	    music.load();
	    setTimeout(function(){
	    	music.play({loops: 3});
	    },2000);
		},
	ontimeout: function() {

	},
	debugMode: false
	});

	$(window).focus(function(){
	  if(sound_activate == 1){
	    soundManager.unmute();
	    music.setVolume(70);
	    if(mobilebrowser){
          music.play({loops: 3});
        }

	  }
	});
	$(window).blur(function(){
	  if(sound_activate == 1){
	    if(mobilebrowser){
          music.pause();
        }
	    setTimeout(function(){
	      music.setVolume(60);
	      
	    },100);
	    setTimeout(function(){
	      music.setVolume(50);
	      
	    },200);
	    setTimeout(function(){
	      music.setVolume(40);
	      
	    },300);
	    setTimeout(function(){
	      music.setVolume(30);
	      
	    },400);
	    setTimeout(function(){
	      music.setVolume(20);
	      
	    },500);
	    setTimeout(function(){
	      music.setVolume(15);
	      
	    },600);
	    setTimeout(function(){
	      music.setVolume(10);
	      
	    },700);
	    setTimeout(function(){
	      music.setVolume(8);
	      
	    },800);
	    setTimeout(function(){
	      music.setVolume(4);
	      
	    },900);
	    setTimeout(function(){
	      music.setVolume(0);
	      
	    },1000);
	  }
	  
	});
})(window);