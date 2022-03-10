var txt = '<autos>';
txt += '<auto>';
txt += '<marca>Audi</marca>';
txt += '<modelo>A4</modelo>';
txt += '<placas>P02ADT</placas>';
txt += '<año>2020</año>';
txt += '<plazas>4</plazas>';
txt += '<comentarios>Ninguno</comentarios>';

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(txt, "text/xml");



function alta() {
    document.getElementById("alta").style.display = "block"
    document.getElementById("table").style.display = ("none");
}


function register() {

    marca = document.getElementById("marca").value;
    modelo = document.getElementById("modelo").value;
    placa = document.getElementById("placas").value;
    anio = document.getElementById("año").value;
    plazas = document.getElementById("plazas").value;
    comentarios = document.getElementById("valet").value;

    newEleMarca = xmlDoc.createElement("marca");
    newTxtMarca = xmlDoc.createTextNode(marca);
    newEleMarca.appendChild(newTxtMarca);

    newEleModelo = xmlDoc.createElement("modelo");
    newTxtModelo = xmlDoc.createTextNode(modelo);
    newEleModelo.appendChild(newTxtModelo);

    newElePlaca = xmlDoc.createElement("placa");
    newTxtPlaca = xmlDoc.createTextNode(placa);
    newElePlaca.appendChild(newTxtPlaca);

    newEleAnio = xmlDoc.createElement("año");
    newTxtAnio = xmlDoc.createTextNode(anio);
    newEleAnio.appendChild(newTxtPlaca);

    newElePlaza = xmlDoc.createElement("plazas");
    newTxtPlaza = xmlDoc.createTextNode(plazas);
    newElePlaza.appendChild(newTxtPlaza)

    newEleCom = xmlDoc.createElement("comentarios");
    newTxtCom = xmlDoc.createTextNode(comentarios);
    newEleCom.appendChild(newTxtCom);

    newEleA = xmlDoc.createElement("auto");
    newEleA.appendChild(newEleMarca);
    newEleA.appendChild(newEleModelo);
    newEleA.appendChild(newElePlaca);
    newEleA.appendChild(newEleAnio);
    newEleA.appendChild(newElePlaza);
    newEleA.appendChild(newEleCom);

    xmlDoc.getElementsByTagName("autos")[0].appendChild(newEleA);
    alert("Alta realizada");
}

function report() {
    document.getElementById("alta").style.display = ("none");
    document.getElementById("table").style.display = ("block");


    var table = document.getElementById("table");

    table.innerHTML = "<thead><tr>"
        + "<th>Marca</th>"
        + "<th>Modelo</th>"
        + "<th>Placas</th>"
        + "<th>Año</th>"
        + "<th>Plazas</th>"
        + "<th>Valet</th>"
        + "</tr></thead>"
        + "<tbody>";

    x = xmlDoc.getElementsByTagName("auto");
    l = x.length;

    for (i = 0; i < 1; i++) {
        table.innerHTML += "<tr>"
            + "<td>"
            + x[i].childNodes[0].childNodes[0].nodeValue
            + "</td>"

            + "<td>"
            + x[i].childNodes[1].childNodes[0].nodeValue
            + "</td>"

            + "<td>"
            + x[i].childNodes[2].childNodes[0].nodeValue
            + "</td>"

            + "<td>"
            + x[i].childNodes[3].childNodes[0].nodeValue
            + "</td>"

            + "<td>"
            + x[i].childNodes[4].childNodes[0].nodeValue
            + "</td>"

            + "<td>"
            + x[i].childNodes[5].childNodes[0].nodeValue
            + "</td>"

            + "</tr>";
    }
    table.innerHTML += "</tbody>"
}


