console.log("a");
$.getJSON('partidos.json', function(datos) {
    console.log("a");
    $("#contenido").html('');
    $.each(datos["partidos"], function(idx, partido) {
        $("#contenido").append("<tr>" + "<td>" + partido["fecha"] + "</td><td>" + partido["equipo1"] + "</td><td>" + partido.equipo2 + "</td>" + "</tr>");
        console.log(partido["fecha"]);
    })
});