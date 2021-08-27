let socket = io();
$('.create').submit(function(e){
	e.preventDefault();
	socket.emit("create-deck",$('#new_folder').val(), username,"red");
	window.location.href= "/decks"
});

