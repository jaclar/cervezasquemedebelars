#!/usr/bin/env node

process.title = 'cervezasquemedebelars';

var beer = require("../beer.js"),
    request = require("request");

request({
    json: true,
    url: "https://raw.githubusercontent.com/jaclar/cervezasquemedebelars/gh-pages/beerDept.json"
}, function (err, res, body) {
    if (err) {
        console.error("Couldn't connect. If you wanna see your beer status, get a internet connection, boludo!");
        return;
    }

    if (res.statusCode !== 200) {
        console.error("No beer for you! HTTP status code: " + res.statusCode);
        return;
    }

    console.log("Hola Fran! Lars te debe:");
    beer.pour(body.fran);
});
