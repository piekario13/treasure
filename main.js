// $("html").mousemove(function (zdarzenie) {
//     $("#title").offset({
//         left: zdarzenie.pageX,
//         top: zdarzenie.pageY
//     });
// });

var uzyskajLosowąLiczbę = function (rozmiar) {
    return Math.floor(Math.random() * rozmiar);
};

var obliczOdleglosc = function (zdarzenie, cel) {
    var roznicaX = zdarzenie.offsetX - cel.x;
    var roznicaY = zdarzenie.offsetY - cel.y;
    return Math.sqrt((roznicaX * roznicaX) + (roznicaY * roznicaY));
};

var skonstruujPodpowiedz = function (odleglosc) {
    if (odleglosc < 10) {
        return "Parzy!";
    } else if (odleglosc < 20) {
        return "Gorąco!";
    } else if (odleglosc < 40) {
        return "Ciepło!";
    } else if (odleglosc < 80) {
        return "Letnio";
    } else if (odleglosc < 160) {
        return "Zimno";
    } else if (odleglosc < 320) {
        return "Mróz!";
    } else {
        return "Syberia!";
    }
};

var szerokość = 400;
var wysokość = 400;
var klikniecia = 0;

var cel = {
    x: uzyskajLosowąLiczbę(szerokość),
    y: uzyskajLosowąLiczbę(wysokość)
};

$("#mapa").click(function (zdarzenie) {
    klikniecia++;
    var odleglosc = obliczOdleglosc(zdarzenie, cel);
    var podpowiedz = skonstruujPodpowiedz(odleglosc);
    $("#odleglosc").text(podpowiedz);

    if (odleglosc < 8) {
    alert("Skarbzostał znaleziony po " + klikniecia + " kliknięciach!");
    }
})