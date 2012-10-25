/*
window.setTimeout = global.setTimeout;
window.clearTimeout = global.clearTimeout;
window.setInterval = global.setInterval;
window.clearInterval = global.clearInterval;
*/

var Main = {
	mode: "none"
};

var AppList = {
	show: function() {
		ApplicationContainer.hide();
		TitleBar.hide();
		jQuery('#AppList').fadeIn();
		Main.mode = this;
	},
	hide: function() {
		jQuery('#AppList').fadeOut();
		TitleBar.show();
		Main.mode = "none";
	}
};

var StatusMenu = {
	init: function() {
		$("body").click(function(event) {
			StatusMenu.hide();
		});
	},
	show: function() {
		jQuery('#StatusMenu').slideDown();
	},
	hide: function() {
		jQuery('#StatusMenu').slideUp();
	}
};

var StatusBar = {
	init: function() {
		$("#statusBar").click(function(event) {
			event.stopPropagation();
			StatusMenu.show();
		});
	}
}

var TitleBar = {
	show: function() {
		jQuery('#TitleBar').show();
	},
	hide: function() {
		jQuery('#TitleBar').hide();
	}
};

var ApplicationContainer = {
	apps: [],
	init: function() {
		jQuery('#home').click(function(event) {
			ApplicationContainer.hide();
		});
	},
	start: function(app) {
		var appDom = jQuery(app.render());
		jQuery('#appContainer .app').hide();
		jQuery('#appContainer').append(appDom);
		appDom.find('.closeButton').click({app: app},function(event){
			event.stopPropagation();
			ApplicationContainer.stop(event.data.app);
		});
		appDom.find('.appMenuClickHover').click({app: appDom},function(event){
			event.stopPropagation();
			jQuery('#appContainer .app').hide();
			jQuery('#appSuperContainer').removeClass('list');
			jQuery(appDom).show();
			Main.mode = "none";
		});
		this.apps[app.id] = app;
		jQuery('#appContainer').show();
		jQuery('#appSuperContainer').removeClass('list');
		Main.mode = "none";
	},
	stop: function(app){
		jQuery('#app_' + app.id).remove();
		delete this.apps[app.id];
		if(this.size() == 0 ) {
			this.hide();
		}
	},
	size: function(){
		var size = 0, key;
		for (key in this.apps) {
			if (this.apps.hasOwnProperty(key)) size++;
		}
		return size;
	},
	hide: function(){
		//ApplicationContainer.show();
		TitleBar.show();
		Main.mode = "none";
		jQuery('#appContainer').fadeOut();
	},
	showList: function(){
		Main.mode = this;
		jQuery('#appSuperContainer').addClass('list');
		jQuery('#appContainer').fadeIn();
		jQuery('#appContainer .app').show();
	}
};

var HomeScreen = {


};

var TaskSwitcher = {
	init: function() {
		$("#taskSwitcher").click(TaskSwitcher.click);
	},
	click: function(event){
		event.stopPropagation();
		StatusMenu.hide();
		if(Main.mode=="none" && ApplicationContainer.size()!=0){
			ApplicationContainer.showList();
		} else {
			AppList.show();
		}
	}
};

var appIndex = 0;

function Application (name) {
	this.name = name,
	this.id = 'aa_' + (appIndex++),
	this.render = function() {
		return '<div id="app_' + this.id + '" class="app"><div class="appInner"><div class="titleBar"><div class="closeButton"></div></div><div class="appFrame"><div class="appMenuClickHover"></div><iframe class="appFrame" src="apps/' + this.name + '.html" width="100%" height="100%" ></iframe></div></div></div>';
	}
}

var Clock = {
	init: function() {
		this.update();
		setInterval('Clock.update()', 1000 );
	},
	update: function() {
		var currentTime = new Date ( );
		var currentHours = currentTime.getHours();
		if(currentHours<10) {
			currentHours = '0'+currentHours;
		}
		var currentMinutes = currentTime.getMinutes();
		if(currentMinutes<10) {
			currentMinutes = '0'+currentMinutes;
		}
		jQuery('#clock').html(currentHours + ':' + currentMinutes);
	}
}

function startApp(name) {
	ApplicationContainer.start(new Application(name));
}
jQuery(document).ready(function(){
	ApplicationContainer.init();
	StatusMenu.init();
	TaskSwitcher.init();
	StatusBar.init();
	Clock.init();
	
});




