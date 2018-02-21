function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy" //move copy
}
function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.files;
    //var listado="";
    //localStorage.setItem(listado);
    var video=document.getElementById("videos");
    var sources=document.getElementsByTagName("source");
    //video.poster="video/maxresdefault.jpg";
    for (var i = 0; i <data.length; i++) {
    sources[0].src=window.URL.createObjectURL(data[i]);
    //console.log(window.URL.createObjectURL(data[i]));
    console.log(data[i]);
    document.getElementById("nombre").textContent=data[i].name;
    //video.src=window.URL.createObjectURL(data);
    localStorage.setItem("video",data[i]);
    video.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
    video.load();
    var elemento = document.getElementsByTagName('img');//en esta parte guardar el url del video para sacarlo desde local storage
	//elemento[0].getAttribute('name'); // "ejemplo"
	console.log(elemento[0].getAttribute('name'));

    }
    }
function modifica (numero){ 
if (numero===1) {
	document.getElementById("nombre").textContent ="Trailer Call Of Duty: Black Ops II";
	var video = document.getElementById('videos');//maandamos la etiqueta a una variable
    var sources = video.getElementsByTagName('source');//obtenemos todios los elemntos 
    video.poster="video/Captura3.JPG";//cambiamos el poster
    sources[0].src = "video/video1.mp4";//se genera un vector de sources y le cambiamos a cada uno
    sources[1].src="video/video1.webm";//el url viejo por el nuevo correspondiente al video seleccionado
    sources[2].src="video/video1.ogv";
    video.load();//para que los cambios entren en vigencia, si no se coloca el video no se carga
}
if (numero===2) {
	document.getElementById("nombre").textContent ="Dragon ball Z:La Batalla de los Dioses. bills vs goku."
	var video = document.getElementById('videos');
    var sources = video.getElementsByTagName('source');
    video.poster="video/Captura1.JPG";
    sources[0].src = "video/video2.mp4";
    sources[1].src="video/video1.webm";
    sources[2].src="video/video1.ogv";
    video.load();
}
if(numero===3){
	document.getElementById("nombre").textContent ="Trailer The Las Of Us"
	var video = document.getElementById('videos');
    var sources = video.getElementsByTagName('source');
    video.poster="video/Captura2.JPG";
    sources[0].src = "video/video3.mp4";
    sources[1].src="video/video1.webm";
    sources[2].src="video/video1.ogv";
    video.load();
}
if(numero===4){
	document.getElementById("nombre").textContent ="Trailer Anchorman II"
	var video = document.getElementById('videos');
    var sources = video.getElementsByTagName('source');
    video.poster="video/Captura1.JPG";
    sources[0].src = "video/video4.mp4";
    sources[1].src="video/video1.webm";
    sources[2].src="video/video1.ogv";
    video.load();
}
}
