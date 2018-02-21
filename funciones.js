$(document).on('click','.active', function (event) {

    var opcion = $(this);
    var type = opcion.data('type');

    if(type == 1){
        $("#video").attr("src","skate.mp4");
    }

    if(type == 2){
        $("#video").attr("src","animales.mp4");
    }

    if(type == 3){
        $("#video").attr("src","buenosDias.mp4");
    }

    if(type== 4){
        $("#video").attr("src","gaviotas.mp4");
    }
});