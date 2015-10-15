var beerMug = "🍺";

exports.pour = function (mugs) {
    var beers = "";

    for (var i = 0; i < mugs; i++) {
        beers += beerMug;
    }

    console.log(beers);
};
