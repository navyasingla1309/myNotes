let socket = io();
$('.create').submit(function(e){
	e.preventDefault();
	socket.emit("create-folder",$('#new_folder').val(), username,"red");
	window.location.href= "/folders"
});
