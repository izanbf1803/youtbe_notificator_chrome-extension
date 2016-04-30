function videoLoader(name, url){
	document.write('<iframe class="link" src="'+url+'" frameborder="0" allowfullscreen></iframe>');
}

var bg = chrome.extension.getBackgroundPage();
var bgUrl = bg.embedLink;
var video = new videoLoader(bg.videoName, bgUrl);

/*var notification = webkitNotifications.createNotification(
  'src/img48.png',  // icon url - can be relative
  'New video',  // notification title
  'Lorem ipsum...'  // notification body text
);*/

$(function(){
	$(".link").click(function(e){
		e.preventDefault();
		window.open(bgUrl,"popup","width=640,height=360");
	});
	$("#settingsImg").click(function(e){
		e.preventDefault();
		window.open("src/settings.html","popup","width=800,height=500");
	});
});