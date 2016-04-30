var STRINGS = {
	a:'<a class="yt-uix-sessionlink yt-uix-tile-link  spf-link  yt-ui-ellipsis yt-ui-ellipsis-2"',
	b:'href="/watch?v=',
	c:'https://www.youtube.com/embed/'
};

var interval;
var url = "https://www.youtube.com/channel/UCo59OZDomuYE_9j1CxaAgVg";
var videoName = "ERROR";
var embedLink = "";

function getVideoName(response){
	var index1, index2, index3, videoNameString;
	index1 = response.indexOf(STRINGS.a);
	index2 = response.indexOf(">", index1)+1;
	index3 = response.indexOf("</a>", index2);
	videoNameString = response.substring(index2,index3);
	videoName = videoNameString;
}

function getEmbedLink(response){
	var index1, index2, index3, videoEmbedString;
	index1 = response.indexOf(STRINGS.b)+STRINGS.b.length;
	index2 = response.indexOf('"',index1);
	videoEmbedString = response.substring(index1, index2);
	embedLink = STRINGS.c+videoEmbedString;
}

function analyze(response){
	getVideoName(response);
	getEmbedLink(response);
}

function check(){
	if (localStorage.youtubechannel) url = localStorage.youtubechannel;	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            analyze(xmlhttp.responseText);
        }
    }
	xmlhttp.open("GET", url, true);
	xmlhttp.send(null);
	interval = setTimeout(check, 2000);
}

check();
/*
setInterval(function(){
	chrome.notifications.create(string notificationId, NotificationOptions options, function callback);
},2000);
*/