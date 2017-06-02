var data1 = null;
var data2 = null;
var cargar = 0;

$(function () {
    //cargar comunidades
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
    $('#cargarinfo').click(function () {
        cargarNews();
    });
});

function ponerPadre(json) {
    $.each(json, function (i, news) {
        //dos formas de hacer lo mismo, la segunda es más adecuada.
        //$("#comunidades").append( "<option value='" + comunidad.slug + "'>" + comunidad.comunidad + "</option>" );
        $('#padre').append($("<div class='col-sm-12'><br><img id='min-pic' src='" + pack1.imagen + "' align='left'><p id='titulo'>" + pack1.title + "</p><p id='fecha'>" + pack1.description + "</p><br><p id='noticia' ></p></div>"));
        //"slug" es la parte de la url, por si hay que visitar la página de la comunidad (no va con vuestro proyecto, es un ejemplo)
    });
}

function cargarNews() {
    if (cargar === 1) {
        ponerPadre(data2);
        cargar++;
        $('#cargarinfo').hide();
    } else {
        if (cargar === 0) {
            ponerPadre(data1);
            cargar++;
		$('#cargarinfo2').hide();
        }
    }
}
