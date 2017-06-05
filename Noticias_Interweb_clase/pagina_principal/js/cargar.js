var data1 = null;
var data2 = null;
var cargar = 0;

$(function () {
    $.getJSON("data/pack1.json", function (jsonObject1) {
        data1 = jsonObject1;
    });
    $.getJSON("data/pack2.json", function (jsonObject2) {
        data2 = jsonObject2;
    });
        $(window).scroll(function(){
        if($(window).scrollTop()+$(window).height()>$(document).height()-1){
            cargarNews();
        }
    });
    $('#botoncargar').click(function () {
        cargarNews();
    });
});

function ponerPadre(json) {
    $.each(json, function (i, pack1) {
        $('#masnoticias').append($("<div class='col-sm-12'><br><img id='min-pic' src='" + pack1.imagen + "' align='left'><p id='titulo'>" + pack1.title + "</p><br><p id='noticia' >" + pack1.description + "</p></div>"));
    });
}

function cargarNews() {
    if (cargar === 1) {
        ponerPadre(data2);
        cargar++;
        $('#boton').hide();
    } else {
        if (cargar === 0) {
            ponerPadre(data1);
            cargar++;
        }
    }
}
