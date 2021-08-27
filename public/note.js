let socket = io();

$(".download").on("click",()=>{
	 	let data= document.querySelector(".editor").innerText;
	 	let file= "notes.txt";
	 	download(file,data);
});
function download(file, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8, '+ encodeURIComponent(text));
    element.setAttribute('download', file);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
if(roomid!="null"){
document.querySelector(".editor").addEventListener("keypress",()=>{
    socket.emit("taking-notes",roomid,document.querySelector(".editor").innerHTML);
});
    socket.on("copy-notes",(room,text)=>{
        if(room==roomid){
        document.querySelector(".editor").innerHTML= text;
    }
    });

    $(".save").on("click",()=>{
        let title= $(".title").val();
        let data= document.querySelector(".editor").innerHTML;
        socket.emit("save-collab",data,title,username);
});
}
if(roomid=="null"){
$(".save").on("click",()=>{
        let title= $(".title").val();
        let data= document.querySelector(".editor").innerHTML;
        socket.emit("save-note",data,title,fldr,username);
});
}

document.querySelector(".bold").addEventListener("click",()=>{
    document.execCommand('bold');
});
document.querySelector(".italic").addEventListener("click",()=>{
    document.execCommand('italic');	
});
document.querySelector(".underline").addEventListener("click",()=>{
    document.execCommand('underline');
});
document.querySelector(".right").addEventListener("click",()=>{
    document.execCommand('justifyRight');
});
document.querySelector(".left").addEventListener("click",()=>{
    document.execCommand('justifyLeft');
});
document.querySelector(".center").addEventListener("click",()=>{
    document.execCommand('justifyCenter');
});

document.querySelector(".share").addEventListener("click",()=>{
   let title= $(".title").val();
    let data= document.querySelector(".editor").innerHTML;
    let name= prompt("Share to: ");
    socket.emit("share-doc",name,title,data, username);

});

document.querySelector(".collab").addEventListener("click",()=>{
   let title= $(".title").val();
    let data= document.querySelector(".editor").innerHTML;
    let name= prompt("Collaborate With: ");
    socket.emit("collab-doc",name,title,data, username);

});
document.querySelector(".font-color").addEventListener("input",()=>{
    let color= $('.font-color').val();
    document.execCommand('foreColor',false,color);
});
