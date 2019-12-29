var max_videos = 50;

var description_length = 150;

var playlist_link = "https://www.youtube.com/playlist?list=PL7z8SQeih5AdUZvp2JUdYW7WKfF9xa7Rh";

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/player_api";

var firstScriptTag = document.getElementsByTagName("script")[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubePlayerAPIReady() {

	console.log("onYouTubePlayerAPIReady has been called");

	player = new YT.Player("display", {

		events: {

			onReady: onPlayerReady,

			onError: onPlayerError

		}

	});

}

function onPlayerReady (event) {

	console.log("onPlayerReady has been called");

}

function onPlayerError (data) {

	console.log("onPlayerError has been called");

	if (data == 2) {

		alert("The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");

	}

	if (data == 5) {

		alert("The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");

	}

	if (data == 100) {

		alert("The video requested was not found. This error occurs when a video has been removed or has been marked as private.");

	}

	if (data == 101 || data == 150) {

		alert("The owner of the requested video does not allow it to be played in embedded players.");

	}

}

var key = "AIzaSyDS4ozFAC4l0QlTMi8SU9vKWANjL4ZShvg";

var playlistId = playlist_link.replace(/^.*list=/, "");

var url = "https://www.googleapis.com/youtube/v3/playlistItems";

function display (id, playId) {

	$("#display").attr("src", `https://www.youtube.com/embed/${id}?enablejsapi=1&html5=1&rel=0&list=${playId}`);

}

function changePanel (panel) {

	if (panel === 0) {

		$(".panel").hide();

		$("#playlist-panel").show();

	}

	if (panel === 1) {

		$(".panel").hide();

		$("#control-panel").show();

	}

	if (panel === 2) {

		$(".panel").hide();

		$("#help-panel").show();

	}

}

function convert () {

	link = document.querySelector("#link").value;

	cal = link;

	cal = cal.replace("https://www.youtube.com/watch?v=", "");

	cal = cal.replace("https://www.youtube.com/playlist?", "");

	cal = cal.replace("https://www.youtube.com/embed?v=", "");

	cal = cal.replace("https://www.youtube.com/embed/", "");

	cal = cal.replace("https://www.youtu.be/", "");

	cal = cal.replace(/^https:\/\/www\.youtu.be\/.*?/, "");

	cal = cal.replace("http://youtube.com/watch?v=", "");

	cal = cal.replace("http://www.youtube.com/playlist?", "");

	cal = cal.replace("http://www.youtube.com/embed?v=", "");

	cal = cal.replace("http://www.youtube.com/embed/", "");

	cal = cal.replace("http://www.youtu.be/", "");

	cal = cal.replace(/^http:\/\/youtu\.be\/.*?/, "");

	cal = cal.replace("https://m.youtube.com/watch?v=", "");

	cal = cal.replace("https://m.youtube.com/playlist?", "");

	cal = cal.replace("https://m.youtube.com/embed?v=", "");

	cal = cal.replace("https://m.youtube.com/embed/", "");

	cal = cal.replace("https://m.youtu.be/", "");

	cal = cal.replace(/^https:\/\/m\.youtu\.be\/.*?/, "");

	cal = cal.replace("http://m.youtube.com/watch?v=", "");

	cal = cal.replace("http://m.youtube.com/playlist?", "");

	cal = cal.replace("http://m.youtube.com/embed?v=", "");

	cal = cal.replace("http://m.youtube.com/embed/", "");

	cal = cal.replace("http://m.youtu.be/", "");

	cal = cal.replace(/^http:\/\/m\.youtu\.be\/.*?/, "");

	cal = cal.replace("https://youtube.com/watch?v=", "");

	cal = cal.replace("https://youtube.com/playlist?", "");

	cal = cal.replace("https://youtube.com/embed?v=", "");

	cal = cal.replace("https://youtube.com/embed/", "");

	cal = cal.replace("https://youtu.be/", "");

	cal = cal.replace(/^https:\/\/youtu\.be\/.*?/, "");

	cal = cal.replace("http://youtube.com/watch?v=", "");

	cal = cal.replace("http://youtube.com/playlist?", "");

	cal = cal.replace("http://youtube.com/embed?v=", "");

	cal = cal.replace("http://youtube.com/embed/", "");

	cal = cal.replace("http://youtu.be/", "");

	cal = cal.replace(/^http:\/\/youtu\.be\/.*?/, "");

	cal = cal.replace("www.youtube.com/watch?v=", "");

	cal = cal.replace("www.youtube.com/playlist?", "");

	cal = cal.replace("www.youtube.com/embed?v=", "");

	cal = cal.replace("www.youtube.com/embed/", "");

	cal = cal.replace("www.youtu.be/", "");

	cal = cal.replace(/^www\.youtu\.be\/.*?/, "");

	cal = cal.replace("m.youtube.com/watch?v=", "");

	cal = cal.replace("m.youtube.com/playlist?", "");

	cal = cal.replace("m.youtube.com/embed?v=", "");

	cal = cal.replace("m.youtube.com/embed/", "");

	cal = cal.replace("m.youtu.be/", "");

	cal = cal.replace(/^m\.youtu\.be\/.*?/, "");

	cal = cal.replace("youtube.com/watch?v=", "");

	cal = cal.replace("youtube.com/playlist?", "");

	cal = cal.replace("youtube.com/embed?v=", "");

	cal = cal.replace("youtube.com/embed/", "");

	cal = cal.replace("youtu.be/", "");

	cal = cal.replace(/^youtu\.be\/.*?/, "");

	result = cal;

	if (/list/.test(result)) {

		id = result.replace(/.*&/, "");

		document.querySelector("#link").value = id;

		document.querySelector("#id").value = id;

		start();

	} else {

		id = `v=${result}`;

		document.querySelector("#link").value = id;

		document.querySelector("#id").value = id;

		start();

	}

}

function start () {

	id = document.querySelector("#id").value;

	if (/^list=.*/.test(id) || /^v=.*/.test(id)) {

		if (/^.*list/.test(id)) {

			playlist = id.replace(/^.*list=/, "");

			load(playlist);

		} else {

			video = id.replace(/^v=/, "");

			display(video, "none");

		}

	} else {

		alert("Invalid ID");

	}

}

function load(playList) {

	$("#playlist-panel").html("");

	changePanel(0);

	var options = {

		part: "snippet",

		key: key,

		playlistId: playList,

		maxResults: max_videos

	};

	$.getJSON(url, options, (data) => {

		var id = data.items[0].snippet.resourceId.videoId;

		display(id, playList);

		playlistPanel(data, playList);

		controlPanel();

		helpPanel();

	});

}

function playlistPanel (data, playlist) {

	$.each(data.items, (i, item) => {

		var id = item.snippet.resourceId.videoId;

		var thumbnail = item.snippet.thumbnails.medium.url;

		var title = item.snippet.title;

		var description = item.snippet.description.substring(0, 150) + "...";

		var list = playlist;

		$("#playlist-panel").append(`

			<article class="playlist-video" data-id="${id}" data-list="${list}">

			

			<img src="${thumbnail}" class="playlist-video-thumbnail">

			

			<div class="playlist-video-details">

				

				<h4 class="playlist-video-title">${title}</h4>

				

				<p class="playlist-video-description">${description}</p>

				

			</div>

			

			</article>

		`);

	});

}

function controlPanel () {

	$("#control-panel").html(`

		<div>

			<label class="control-type">Player Controls</label>

			<hr>

			<div id="link-converter" class="button-container">

				<div>

					<input id="link" class="input" placeholder="Link Goes Here">

					<div id="link-button" class="button" onclick="convert();">Submit Link</div>

				</div>

				<div>

					<input id="id" class="input" placeholder="Id Goes Here">

					<div id="id-button" class="button" onclick="start();">Submit ID</div>

				</div>

			</div>

			

			<br>

		</div>

		<div>

			<label class="control-type">Play Controls</label>

			<hr>

			<div class="button-container">

				<div id="play-button" class="button" onclick="play();">Play</div>

				<div id="pause-button" class="button" onclick="pause();">Pause</div>

				<div id="stop-button" class="button" onclick="stop();">Stop</div>

			</div>

			

			<br>

		</div>

		<div>

			<label class="control-type">Playlist Controls</label>

			<hr>

			<div class="input-button-container">

				<div id="playprevious-button" class="button" onclick="playPrevious();">Play Previous</div>

				<div id="playnext-button" class="button" onclick="playNext();">Play Next</div>

				<input id="index" class="input" placeholder="Index In Playlist">

				<div id="playindex-button" class="button" onclick="doPlayIndex();">Play Number</div>

			</div>

			

			<br>

		</div>

		<div>

			<label class="control-type">Mute Controls</label>

			<hr>

			<div class="input-button-container">

				<div id="mute-button" class="button" onclick="mute();">Mute</div>

				<div id="unmute-button" class="button" onclick="unmute();">Unmute</div>

			</div>

			

			<br>

		</div>

		<div>

			<label class="control-type">Loop Controls</label>

			<hr>

			<div class="input-button-container">

				<div id="unloop-button" class="button" onclick="loop(false);">No Loop</div>

				<div id="loop-button" class="button" onclick="loop(true);">Loop</div>

			</div>

			

			<br>

		</div>

		<div>

			<label class="control-type">Time Controls</label>

			<hr>

			<div class="input-button-container">

				<input id="minute" class="input" placeholder="Minutes">

				<input id="second" class="input" placeholder="Seconds">

				<div id="time-button" class="button" onclick="doTime();">Jump To Time</div>

			</div>

			<br>

		</div>

		<div>

			<label class="control-type">Volume Controls</label>

			<hr>

			<div class="input-button-container">

				<input id="volume" class="input" placeholder="Volume">

				<div id="volume-button" class="button" onclick="doSetVolume();">Set Volume</div>

			</div>

			

			<br>

		</div>

		<div>

			<label class="control-type">Speed Controls</label>

			<hr>

			<div class="input-button-container">

				<input id="speed" class="input" placeholder="Playback Speed">

				<div id="speed-button" class="button" onclick="doSetSpeed();">Set Speed</div>

			</div>

			

			<br>

		</div>

	

	`);

}

function helpPanel () {

	$("#help-panel").html(`

			<h1 class="title">How To Use The Player?</h1>

			<p class="text">

				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to the tutorial on how to use the player above. This tutorial will guide you through the process of displaying a video or playlist. It will also show you how to use the voice commands. As for the controls, they are pretty self-explanatory.

			</p>

			<br>

			<h2 class="heading">Why Not Use The YouTube Website</h2>

      <p class="text">

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspThe main question some of you may be asking is, why not just use the YouTube website? That is a very good question and my answer is that the YouTube website theme is mostly black and white. There is no color and no inspiration. It was meant to serve its purpose as an online video sharing site and it has served its purpose well. But there is almost no creativity in its design.

      </p>

      <br>

      <h2 class="heading">Getting An Id</h2>

			<p class="text">

				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now, to the part you came for. The player works mostly by using the YouTube API and the YouTube Iframe API. These are two different APIs that allow this project to function properly. However these APIs like to work with the IDs of a video or playlist, not the actual link. So I included a link converter. Paste in the link and the converter will turn it into an ID.

			</p>

			<br>

			<h2 class="heading">Loading A Video Or Playlist</h2>

			<p class="text">

				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After you put an ID into the input box, simply press Submit ID and watch the magic happen. The video will turn into your chosen video and if it is a playlist then the playlist will fill in the other videos. Please note that the playlist can only hold 50 videos because the YouTube API Request will only return the last 50 videos in the playlist.

			</p>

		

			<br>

			<h2 class="heading">Using Voice Commands</h2>

			<p class="text">

				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, there are voice commands in this website. See, how much work I put into it? Say Reset to reset the video and playlist. Say Next to play the next video in the playlist. Say Previous to play the previous video in the playlist. Say Play to play the video. Say Pause to pause the video. Say Stop to stop the video. Say Loop On to turn loop on. Say Loop Off to turn loop off. Say Mute to mute the video. Say Unmute to unmute the video.

			</p>

	`);

}

function play () {

	player.playVideo();

}

function pause () {

	player.pauseVideo();

}

function stop () {

	player.stopVideo();

}

function doTime () {

	var minutes = parseFloat(document.querySelector("#minute").innerHTML);

	var seconds = parseFloat(document.querySelector("#second").innerHTML);

	var total = (minutes * 60) + seconds;

	time(total);

}

function time (seconds) {

	player.seekTo(seconds, false);

}

function playNext () {

	player.nextVideo();

}

function playPrevious () {

	player.previousVideo();

}

function doPlayIndex () {

	var index = parseFloat(document.querySelector("#index").innerHTML);

	playIndex(index);

}

function playIndex (index) {

	player.playVideoAt(index - 1);

}

function mute () {

	player.mute();

}

function unmute () {

	player.unMute();

}

function getMuted () {

	return player.isMuted();

}

function doSetVolume () {

	var volume = parseFloat(document.querySelector("#volume").innerHTML);

	setVolume(volume);

}

function setVolume (volume) {

	player.setVolume(volume);

}

function getVolume () {

	player.getVolume();

}

function doSetSpeed () {

	var speed = parseFloat(document.querySelector("#speed").innerHTML);

	setSpeed(speed);

}

function setSpeed (speed) {

	player.setPlaybackRate(speed);

}

function getSpeed () {

	return player.getPlaybackRate();

}

function loop (boolean) {

	player.setLoop(boolean);

}

$("#playlist-panel").on("click", "article", () => {

	var id = $(this).attr("data-id");

	var list = $(this).attr("data-list");

	display(id, list);

});

$("#play-buttton").on("click", () => {

	play();

});

load(playlistId);