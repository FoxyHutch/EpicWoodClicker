$(document).ready(function() {
// Variable
var numHolz = 0;
var numStein = 0;
var numNahrung = 0;
var numGold = 0;
//Holzbauten
var numForsthaus = 0;
var numSaegewerk = 0;
var numAxtschmiede = 0;
var numHolzmine = 0;
var numBaumfabrik = 0;
var numHolzfarm = 0;
var numAxtrobotter = 0;
var numBaumplantage = 0;
var numHolzportal = 0;
var numKunstholzlabor = 0;
var numBaumplanet = 0;

//Steinbauten
var numSteinbruch = 0;
var numBergwerk = 0;
var numHammerschmiede = 0;
var numSteinlabor = 0;
var numFelsfabrik = 0;
var numKieselfarm = 0;
var numSteinsonde = 0;
var numLaserschneider = 0;
var numFelsportal = 0;
var numGranitbeißer = 0;
var numSteinplanet = 0;

//---------------Holzbauten_kosten---------

//Forsthaus_kosten
var forsthausCost_holz = 50;
var forsthausCost_stein = 25;

//Saegewerk_kosten
var saegewerkCost_holz = 250;
var saegewerkCost_stein = 100;

//Axtschmiede_kosten
var axtschmiedeCost_holz = 1250;
var axtschmiedeCost_stein = 400;

//Holzmine_kosten
var holzmineCost_holz = 5000;
var holzmineCost_stein = 1500;

//Baumfabrik_kosten
var baumfabrikCost_holz = 25000;
var baumfabrikCost_stein = 6000;

//Holzfarm_kosten
var holzfarmCost_holz = 90000;
var holzfarmCost_stein = 20000;
var holzfarmCost_gold = 2500;

//Axtrobotter_kosten
var axtrobCost_holz = 435000;
var axtrobCost_stein = 100000;
var axtrobCost_gold = 12500;

//Baumplantage_kosten
var baumplaCost_holz = 2500000;
var baumplaCost_stein = 500000;
var baumplaCost_gold = 50000;

//Holzportal_kosten
var holzportalCost_holz = 12000000;
var holzportalCost_stein = 2500000;
var holzportalCost_gold = 125000;

//Kunstholzlabor_kosten
var khlCost_holz = 60000000;
var khlCost_stein = 10000000;
var khlCost_gold = 500000;

//Baumplanet_kosten
var baumplanetCost_holz = 2999000000;
var baumplanetCost_stein = 232000000;
var baumplanetCost_gold = 12000000;

//Stein

//Steinbauten_kosten

//Steinbruch
var steinbruchCost_holz = 50;
var steinbruchCost_gold = 25;

//Bergwerk
var bergwerkCost_holz = 250;
var bergwerkCost_gold = 100;

//Hammerschmiede
var hammerschmiedeCost_holz = 1250;
var hammerschmiedeCost_gold = 400;

//Steinlabor
var steinlaborCost_holz = 5000;
var steinlaborCost_gold = 1500;

//Felsfabrik
var felsfabrikCost_holz = 25000;
var felsfabrikCost_gold = 6000;

//Kieselfarm
var kieselfarmCost_holz = 90000;
var kieselfarmCost_gold = 20000;
var kieselfarmCost_stein = 2500;

//Steinsonde
var steinsondeCost_holz = 435000;
var steinsondeCost_gold = 100000;
var steinsondeCost_stein = 12500;

//Laserschneider
var laserschneiderCost_holz = 2500000;
var laserschneiderCost_gold = 500000;
var laserschneiderCost_stein = 50000;

//Felsportal
var felsportalCost_holz = 12000000;
var felsportalCost_gold = 2500000;
var felsportalCost_stein = 125000;

//Granitbeißer
var granitbeißerCost_holz = 60000000;
var granitbeißerCost_gold = 10000000;
var granitbeißerCost_stein = 500000;

//Steinplanet
var steinplanetCost_holz = 2999000000;
var steinplanetCost_gold = 232000000;
var steinplanetCost_stein = 12000000;

//Nahrung
var numBeerensucher = 0;
var beerensucherCost = 0; //debug werte auf 0 für test

//Gold
var numErzminer = 0;
var erzminerCost = 0; //debug werte auf 0 für test


//Upgrades
var numKlickupgrade = 0;
var upgrade1Interval = 50;
var klickupgradeCost = 10;

//proSekunde
var holzProSekunde = 0;
var steinProSekunde = 0;
var nahrungProSekunde = 0;
var goldProSekunde = 0;

//Save data to local storage

$('#save_btn').on('click', function() {
save();
});
//load data from local storage
$('#load_btn').on('click', function(){
alert("Spiel geladen!");
load();
});

//saving function
function save(){
    var save = {
        numHolz: numHolz,
        numStein: numStein,
        numNahrung: numNahrung,
        numGold: numGold,
        numForsthaus: numForsthaus,
        numSaegewerk: numSaegewerk,
        numAxtschmiede: numAxtschmiede,
        numHolzmine: numHolzmine,
        numBaumfabrik: numBaumfabrik,
        numHolzfarm: numHolzfarm,
        numAxtrobotter: numAxtrobotter,
        numBaumplantage: numBaumplantage,
        numHolzportal: numHolzportal,
        numKunstholzlabor: numKunstholzlabor,
        numBaumplanet: numBaumplanet,
        numSteinbruch: numSteinbruch,
        numBergwerk: numBergwerk,
        numHammerschmiede: numHammerschmiede,
        numSteinlabor: numSteinlabor,
        numFelsfabrik: numFelsfabrik,
        numKieselfarm: numKieselfarm,
        numSteinsonde: numSteinsonde,
        numLaserschneider: numLaserschneider,
        numFelsportal: numFelsportal,
        numGranitbeißer: numGranitbeißer,
        numSteinplanet: numSteinplanet,
        forsthausCost_holz: forsthausCost_holz,
        forsthausCost_stein: forsthausCost_stein,
        saegewerkCost_holz: saegewerkCost_holz,
        saegewerkCost_stein: saegewerkCost_stein,
        axtschmiedeCost_holz: axtschmiedeCost_holz,
        axtschmiedeCost_stein: axtschmiedeCost_stein,
        holzmineCost_holz: holzmineCost_holz,
        holzmineCost_stein: holzmineCost_stein,
        baumfabrikCost_holz: baumfabrikCost_holz,
        baumfabrikCost_stein: baumfabrikCost_stein,
        holzfarmCost_holz: holzfarmCost_holz,
        holzfarmCost_stein: holzfarmCost_stein,
        holzfarmCost_gold: holzfarmCost_gold,
        axtrobCost_holz: axtrobCost_holz,
        axtrobCost_stein: axtrobCost_stein,
        axtrobCost_gold:  axtrobCost_gold,
        baumplaCost_holz: baumplaCost_holz,
        baumplaCost_stein: baumplaCost_stein,
        baumplaCost_gold: baumplaCost_gold,
        holzportalCost_holz: holzportalCost_holz,
        holzportalCost_stein: holzportalCost_stein,
        holzportalCost_gold: holzportalCost_gold,
        khlCost_holz: khlCost_holz,
        khlCost_stein: khlCost_stein,
        khlCost_gold: khlCost_gold,
        baumplanetCost_holz: baumplanetCost_holz,
        baumplanetCost_stein: baumplanetCost_stein,
        baumplanetCost_gold: baumplanetCost_gold,
        steinbruchCost_holz: steinbruchCost_holz,
        steinbruchCost_gold: steinbruchCost_gold,
        bergwerkCost_holz: bergwerkCost_holz,
        bergwerkCost_gold: bergwerkCost_gold,
        hammerschmiedeCost_holz: hammerschmiedeCost_holz,
        hammerschmiedeCost_gold: hammerschmiedeCost_gold,
        steinlaborCost_holz: steinlaborCost_holz,
        steinlaborCost_gold: steinlaborCost_gold,
        felsfabrikCost_holz: felsfabrikCost_holz,
        felsfabrikCost_gold: felsfabrikCost_gold,
        kieselfarmCost_holz: kieselfarmCost_holz,
        kieselfarmCost_gold: kieselfarmCost_gold,
        kieselfarmCost_stein: kieselfarmCost_stein,
        steinsondeCost_holz: steinsondeCost_holz,
        steinsondeCost_gold: steinsondeCost_gold,
        steinsondeCost_stein: steinsondeCost_stein,
        laserschneiderCost_holz: laserschneiderCost_holz,
        laserschneiderCost_gold: laserschneiderCost_gold,
        laserschneiderCost_stein: laserschneiderCost_stein,
        felsportalCost_holz: felsportalCost_holz,
        felsportalCost_gold: felsportalCost_gold,
        felsportalCost_stein: felsportalCost_stein,
        granitbeißerCost_holz: granitbeißerCost_holz,
        granitbeißerCost_gold: granitbeißerCost_gold,
        granitbeißerCost_stein: granitbeißerCost_stein,
        steinplanetCost_holz: steinplanetCost_holz,
        steinplanetCost_gold: steinplanetCost_gold,
        steinplanetCost_stein: steinplanetCost_stein
    };
    localStorage.setItem("save",JSON.stringify(save));
    alert("Spiel gespeichert!");
};

//Upgrades Progressbar
function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, upgrade1Interval);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            numKlickupgrade++;
            klickupgradeCost = Math.ceil(klickupgradeCost * 1.5);
            upgrade1Interval = Math.ceil(upgrade1Interval * 1.5);
            $("#upgrade1_btn").show();
            alert("Upgrade 1 wurde erforscht!")
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
};



function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.numHolz !== "undefined") numHolz = savegame.numHolz;
    if (typeof savegame.numStein !== "undefined") numStein = savegame.numStein;
    if (typeof savegame.numNahrung !== "undefined") numNahrung = savegame.numNahrung;
    if (typeof savegame.numGold !== "undefined") numGold = savegame.numGold;
    if (typeof savegame.numForsthaus !== "undefined") numForsthaus = savegame.numForsthaus;
    if (typeof savegame.numSaegewerk !== "undefined") numSaegewerk = savegame.numSaegewerk;
    if (typeof savegame.numAxtschmiede !== "undefined") numAxtschmiede = savegame.numAxtschmiede;
    if (typeof savegame.numHolzmine !== "undefined") numHolzmine = savegame.numHolzmine;
    if (typeof savegame.numBaumfabrik !== "undefined") numBaumfabrik = savegame.numBaumfabrik;
    if (typeof savegame.numHolzfarm !== "undefined") numHolzfarm = savegame.numHolzfarm;
    if (typeof savegame.numAxtrobotter !== "undefined") numAxtrobotter = savegame.numAxtrobotter;
    if (typeof savegame.numBaumplantage !== "undefined") numBaumplantage = savegame.numBaumplantage;
    if (typeof savegame.numHolzportal !== "undefined") numHolzportal = savegame.numHolzportal;
    if (typeof savegame.numKunstholzlabor !== "undefined") numKunstholzlabor = savegame.numKunstholzlabor;
    if (typeof savegame.numBaumplanet !== "undefined") numBaumplanet = savegame.numBaumplanet;
    if (typeof savegame.numSteinbruch !== "undefined") numSteinbruch = savegame.numSteinbruch;
    if (typeof savegame.numBergwerk !== "undefined") numBergwerk = savegame.numBergwerk;
    if (typeof savegame.numHammerschmiede !== "undefined") numHammerschmiede = savegame.numHammerschmiede;
    if (typeof savegame.numSteinlabor !== "undefined") numSteinlabor = savegame.numSteinlabor;
    if (typeof savegame.numFelsfabrik !== "undefined") numFelsfabrik = savegame.numFelsfabrik;
    if (typeof savegame.numKieselfarm !== "undefined") numKieselfarm = savegame.numKieselfarm;
    if (typeof savegame.numSteinsonde !== "undefined") numSteinsonde = savegame.numSteinsonde;
    if (typeof savegame.numLaserschneider !== "undefined") numLaserschneider = savegame.numLaserschneider;
    if (typeof savegame.numFelsportal !== "undefined") numFelsportal = savegame.numFelsportal;
    if (typeof savegame.numGranitbeißer !== "undefined") numGranitbeißer = savegame.numGranitbeißer;
    if (typeof savegame.numSteinplanet !== "undefined") numSteinplanet = savegame.numSteinplanet;
    if (typeof savegame.forsthausCost_holz !== "undefined") forsthausCost_holz = savegame.forsthausCost_holz;
    if (typeof savegame.forsthausCost_stein !== "undefined") forsthausCost_stein = savegame.forsthausCost_stein;
    if (typeof savegame.saegewerkCost_holz !== "undefined") saegewerkCost_holz = savegame.saegewerkCost_holz;
    if (typeof savegame.saegewerkCost_stein !== "undefined") saegewerkCost_stein = savegame.saegewerkCost_stein;
    if (typeof savegame.axtschmiedeCost_holz !== "undefined") axtschmiedeCost_holz = savegame.axtschmiedeCost_holz;
    if (typeof savegame.axtschmiedeCost_stein !== "undefined") axtschmiedeCost_stein = savegame.axtschmiedeCost_stein;
    if (typeof savegame.holzmineCost_holz !== "undefined") holzmineCost_holz = savegame.holzmineCost_holz;
    if (typeof savegame.holzmineCost_stein !== "undefined") holzmineCost_stein = savegame.holzmineCost_stein;
    if (typeof savegame.baumfabrikCost_holz !== "undefined") baumfabrikCost_holz = savegame.baumfabrikCost_holz;
    if (typeof savegame.baumfabrikCost_stein !== "undefined") baumfabrikCost_stein = savegame.baumfabrikCost_stein;
    if (typeof savegame.holzfarmCost_holz !== "undefined") holzfarmCost_holz = savegame.holzfarmCost_holz;
    if (typeof savegame.holzfarmCost_stein !== "undefined") holzfarmCost_stein = savegame.holzfarmCost_stein;
    if (typeof savegame.holzfarmCost_gold !== "undefined") holzfarmCost_gold = savegame.holzfarmCost_gold;
    if (typeof savegame.axtrobCost_holz !== "undefined") axtrobCost_holz = savegame.axtrobCost_holz;
    if (typeof savegame.axtrobCost_stein !== "undefined") axtrobCost_stein = savegame.axtrobCost_stein;
    if (typeof savegame.axtrobCost_gold !== "undefined") axtrobCost_gold = savegame.axtrobCost_gold;
    if (typeof savegame.baumplaCost_holz !== "undefined") baumplaCost_holz = savegame.baumplaCost_holz;
    if (typeof savegame.baumplaCost_stein !== "undefined") baumplaCost_stein = savegame.baumplaCost_stein;
    if (typeof savegame.baumplaCost_gold !== "undefined") baumplaCost_gold = savegame.baumplaCost_gold;
    if (typeof savegame.holzportalCost_holz !== "undefined") holzportalCost_holz = savegame.holzportalCost_holz;
    if (typeof savegame.holzportalCost_stein !== "undefined") holzportalCost_stein = savegame.holzportalCost_stein;
    if (typeof savegame.holzportalCost_gold !== "undefined") holzportalCost_gold = savegame.holzportalCost_gold;
    if (typeof savegame.khlCost_holz !== "undefined") khlCost_holz = savegame.khlCost_holz;
    if (typeof savegame.khlCost_stein !== "undefined") khlCost_stein = savegame.khlCost_stein;
    if (typeof savegame.khlCost_gold !== "undefined") khlCost_gold = savegame.khlCost_gold;
    if (typeof savegame.baumplanetCost_holz !== "undefined") baumplanetCost_holz = savegame.baumplanetCost_holz;
    if (typeof savegame.baumplanetCost_stein !== "undefined") baumplanetCost_stein = savegame.baumplanetCost_stein;
    if (typeof savegame.baumplanetCost_gold !== "undefined") baumplanetCost_gold = savegame.baumplanetCost_gold;
    if (typeof savegame.steinbruchCost_holz !== "undefined") steinbruchCost_holz = savegame.steinbruchCost_holz;
    if (typeof savegame.steinbruchCost_gold !== "undefined") steinbruchCost_gold = savegame.steinbruchCost_gold;
    if (typeof savegame.bergwerkCost_holz !== "undefined") bergwerkCost_holz = savegame.bergwerkCost_holz;
    if (typeof savegame.bergwerkCost_gold !== "undefined") bergwerkCost_gold = savegame.bergwerkCost_gold;
    if (typeof savegame.hammerschmiedeCost_holz !== "undefined") hammerschmiedeCost_holz = savegame.hammerschmiedeCost_holz;
    if (typeof savegame.hammerschmiedeCost_gold !== "undefined") hammerschmiedeCost_gold = savegame.hammerschmiedeCost_gold;
    if (typeof savegame.steinlaborCost_holz !== "undefined") steinlaborCost_holz = savegame.steinlaborCost_holz;
    if (typeof savegame.steinlaborCost_gold !== "undefined") steinlaborCost_gold = savegame.steinlaborCost_gold;
    if (typeof savegame.felsfabrikCost_holz !== "undefined") felsfabrikCost_holz = savegame.felsfabrikCost_holz;
    if (typeof savegame.felsfabrikCost_gold !== "undefined") felsfabrikCost_gold = savegame.felsfabrikCost_gold;
    if (typeof savegame.kieselfarmCost_holz !== "undefined") kieselfarmCost_holz = savegame.kieselfarmCost_holz;
    if (typeof savegame.kieselfarmCost_gold !== "undefined") kieselfarmCost_gold = savegame.kieselfarmCost_gold;
    if (typeof savegame.kieselfarmCost_stein !== "undefined") kieselfarmCost_stein = savegame.kieselfarmCost_stein;
    if (typeof savegame.steinsondeCost_holz !== "undefined") steinsondeCost_holz = savegame.steinsondeCost_holz;
    if (typeof savegame.steinsondeCost_gold !== "undefined") steinsondeCost_gold = savegame.steinsondeCost_gold;
    if (typeof savegame.steinsondeCost_stein !== "undefined") steinsondeCost_stein = savegame.steinsondeCost_stein;
    if (typeof savegame.laserschneiderCost_holz !== "undefined") laserschneiderCost_holz = savegame.laserschneiderCost_holz;
    if (typeof savegame.laserschneiderCost_gold !== "undefined") laserschneiderCost_gold = savegame.laserschneiderCost_gold;
    if (typeof savegame.laserschneiderCost_stein !== "undefined") laserschneiderCost_stein = savegame.laserschneiderCost_stein;
    if (typeof savegame.felsportalCost_holz !== "undefined") felsportalCost_holz = savegame.felsportalCost_holz;
    if (typeof savegame.felsportalCost_gold !== "undefined") felsportalCost_gold = savegame.felsportalCost_gold;
    if (typeof savegame.felsportalCost_stein !== "undefined") felsportalCost_stein = savegame.felsportalCost_stein;
    if (typeof savegame.granitbeißerCost_holz !== "undefined") granitbeißerCost_holz = savegame.granitbeißerCost_holz;
    if (typeof savegame.granitbeißerCost_gold !== "undefined") granitbeißerCost_gold = savegame.granitbeißerCost_gold;
    if (typeof savegame.granitbeißerCost_stein !== "undefined") granitbeißerCost_stein = savegame.granitbeißerCost_stein;
    if (typeof savegame.steinplanetCost_holz !== "undefined") steinplanetCost_holz = savegame.steinplanetCost_holz;
    if (typeof savegame.steinplanetCost_gold !== "undefined") steinplanetCost_gold = savegame.steinplanetCost_gold;
    if (typeof savegame.steinplanetCost_stein !== "undefined") steinplanetCost_stein = savegame.steinplanetCost_stein;

    document.getElementById('numHolz').innerHTML = numHolz;
    document.getElementById('numStein').innerHTML = numStein;
    document.getElementById('numNahrung').innerHTML = numNahrung;
    document.getElementById('numGold').innerHTML = numGold;
    document.getElementById('numForsthaus').innerHTML = numForsthaus;
    document.getElementById('numSaegewerk').innerHTML = numSaegewerk;
    document.getElementById('numAxtschmiede').innerHTML = numAxtschmiede;
    document.getElementById('numHolzmine').innerHTML = numHolzmine;
    document.getElementById('numBaumfabrik').innerHTML = numBaumfabrik;
    document.getElementById('numHolzfarm').innerHTML = numHolzfarm;
    document.getElementById('numAxtrobotter').innerHTML = numAxtrobotter;
    document.getElementById('numBaumplantage').innerHTML = numBaumplantage;
    document.getElementById('numHolzportal').innerHTML = numHolzportal;
    document.getElementById('numKunstholzlabor').innerHTML = numKunstholzlabor;
    document.getElementById('numBaumplanet').innerHTML = numBaumplanet;
    document.getElementById('numSteinbruch').innerHTML = numSteinbruch;
    document.getElementById('numBergwerk').innerHTML = numBergwerk;
    document.getElementById('numHammerschmiede').innerHTML = numHammerschmiede;
    document.getElementById('numSteinlabor').innerHTML = numSteinlabor;
    document.getElementById('numFelsfabrik').innerHTML = numFelsfabrik;
    document.getElementById('numKieselfarm').innerHTML = numKieselfarm;
    document.getElementById('numSteinsonde').innerHTML = numSteinsonde;
    document.getElementById('numLaserschneider').innerHTML = numLaserschneider;
    document.getElementById('numFelsportal').innerHTML = numFelsportal;
    document.getElementById('numGranitbeißer').innerHTML = numGranitbeißer;
    document.getElementById('numSteinplanet').innerHTML = numSteinplanet;
    document.getElementById('forsthausCost_holz').innerHTML = forsthausCost_holz;
    document.getElementById('forsthausCost_stein').innerHTML = forsthausCost_stein;
    document.getElementById('saegewerkCost_holz').innerHTML = saegewerkCost_holz;
    document.getElementById('saegewerkCost_stein').innerHTML = saegewerkCost_stein;
    document.getElementById('axtschmiedeCost_holz').innerHTML = axtschmiedeCost_holz;
    document.getElementById('axtschmiedeCost_stein').innerHTML = axtschmiedeCost_stein;
    document.getElementById('holzmineCost_holz').innerHTML = holzmineCost_holz;
    document.getElementById('holzmineCost_stein').innerHTML = holzmineCost_stein;
    document.getElementById('baumfabrikCost_holz').innerHTML = baumfabrikCost_holz;
    document.getElementById('baumfabrikCost_stein').innerHTML = baumfabrikCost_stein;
    document.getElementById('holzfarmCost_holz').innerHTML = holzfarmCost_holz;
    document.getElementById('holzfarmCost_stein').innerHTML = holzfarmCost_stein;
    document.getElementById('holzfarmCost_gold').innerHTML = holzfarmCost_gold;
    document.getElementById('axtrobCost_holz').innerHTML = axtrobCost_holz;
    document.getElementById('axtrobCost_stein').innerHTML = axtrobCost_stein;
    document.getElementById('axtrobCost_gold').innerHTML = axtrobCost_gold;
    document.getElementById('baumplaCost_holz').innerHTML = baumplaCost_holz;
    document.getElementById('baumplaCost_stein').innerHTML = baumplaCost_stein;
    document.getElementById('baumplaCost_gold').innerHTML = baumplaCost_gold;
    document.getElementById('holzportalCost_holz').innerHTML = holzportalCost_holz;
    document.getElementById('holzportalCost_stein').innerHTML = holzportalCost_stein;
    document.getElementById('holzportalCost_gold').innerHTML = holzportalCost_gold;
    document.getElementById('khlCost_holz').innerHTML = khlCost_holz;
    document.getElementById('khlCost_stein').innerHTML = khlCost_stein;
    document.getElementById('khlCost_gold').innerHTML = khlCost_gold;
    document.getElementById('baumplanetCost_holz').innerHTML = baumplanetCost_holz;
    document.getElementById('baumplanetCost_stein').innerHTML = baumplanetCost_stein;
    document.getElementById('baumplanetCost_gold').innerHTML = baumplanetCost_gold;
    document.getElementById('steinbruchCost_holz').innerHTML = steinbruchCost_holz;
    document.getElementById('steinbruchCost_gold').innerHTML = steinbruchCost_gold;
    document.getElementById('bergwerkCost_holz').innerHTML = bergwerkCost_holz;
    document.getElementById('bergwerkCost_gold').innerHTML = bergwerkCost_gold;
    document.getElementById('hammerschmiedeCost_holz').innerHTML = hammerschmiedeCost_holz;
    document.getElementById('hammerschmiedeCost_gold').innerHTML = hammerschmiedeCost_gold;
    document.getElementById('steinlaborCost_holz').innerHTML = steinlaborCost_holz;
    document.getElementById('steinlaborCost_gold').innerHTML = steinlaborCost_gold;
    document.getElementById('felsfabrikCost_holz').innerHTML = felsfabrikCost_holz;
    document.getElementById('felsfabrikCost_gold').innerHTML = felsfabrikCost_gold;
    document.getElementById('kieselfarmCost_holz').innerHTML = kieselfarmCost_holz;
    document.getElementById('kieselfarmCost_gold').innerHTML = kieselfarmCost_gold;
    document.getElementById('kieselfarmCost_stein').innerHTML = kieselfarmCost_stein;
    document.getElementById('steinsondeCost_holz').innerHTML = steinsondeCost_holz;
    document.getElementById('steinsondeCost_gold').innerHTML = steinsondeCost_gold;
    document.getElementById('steinsondeCost_stein').innerHTML = steinsondeCost_stein;
    document.getElementById('laserschneiderCost_holz').innerHTML = laserschneiderCost_holz;
    document.getElementById('laserschneiderCost_gold').innerHTML = laserschneiderCost_gold;
    document.getElementById('laserschneiderCost_stein').innerHTML = laserschneiderCost_stein;
    document.getElementById('felsportalCost_holz').innerHTML = felsportalCost_holz;
    document.getElementById('felsportalCost_gold').innerHTML = felsportalCost_gold;
    document.getElementById('felsportalCost_stein').innerHTML = felsportalCost_stein;
    document.getElementById('granitbeißerCost_holz').innerHTML = granitbeißerCost_holz;
    document.getElementById('granitbeißerCost_gold').innerHTML = granitbeißerCost_gold;
    document.getElementById('granitbeißerCost_stein').innerHTML = granitbeißerCost_stein;
    document.getElementById('steinplanetCost_holz').innerHTML = steinplanetCost_holz;
    document.getElementById('steinplanetCost_gold').innerHTML = steinplanetCost_gold;
    document.getElementById('steinplanetCost_stein').innerHTML = steinplanetCost_stein;


};

//Upgrade Research Buttons
$('#upgrade1_btn').on('click', function() {
numHolz -= klickupgradeCost;
$("#upgrade1_btn").hide();
move();
});

// numHolz pro BTN Klick mit Upgradelogik
$('#holz-btn').click(function() {
  if (numKlickupgrade > 0) {
    numHolz += 1 + holzProSekunde;
  } else {
    numHolz++;
  }
});

// numStein pro BTN Klick mit Upgradelogik
$('#stein-btn').click(function() {
  if (numKlickupgrade > 0) {
    numStein += 1 + steinProSekunde;
  } else {
    numStein++;
  }
});

// numNahrung pro BTN Klick mit Upgradelogik
$('#nahrung-btn').click(function() {
  if (numKlickupgrade > 0) {
    numNahrung += 1 + nahrungProSekunde;
  } else {
    numNahrung++;
  }
});

// numGold pro BTN Klick mit Upgradelogik
$('#gold-btn').click(function() {
  if (numKlickupgrade > 0) {
    numGold += 1 + goldProSekunde;
  } else {
    numGold++;
  }
});

// Forsthaus + Holz pro Sekunde
$('#forsthaus_btn').on('click', function() {
  numForsthaus++;
  holzProSekunde = numForsthaus +
  (numSaegewerk * 4) +
  (numAxtschmiede * 12) +
  (numHolzmine * 40) +
  (numBaumfabrik * 125) +
  (numHolzfarm * 380) +
  (numAxtrobotter * 1250) +
  (numBaumplantage * 3600) +
  (numHolzportal * 12999) +
  (numKunstholzlabor * 56666) +
  (numBaumplanet * 777777);
  // Kosten abziehen
  numHolz -= forsthausCost_holz;
  numStein -= forsthausCost_stein;
  // Kosten erhöhen und runden
  forsthausCost_holz = Math.ceil(forsthausCost_holz * 1.1);
  forsthausCost_stein = Math.ceil(forsthausCost_stein * 1.1);
});

//Saegewerk
$('#saegewerk_btn').on('click', function() {
  numSaegewerk++;
  holzProSekunde = numForsthaus +
  (numSaegewerk * 4) +
  (numAxtschmiede * 12) +
  (numHolzmine * 40) +
  (numBaumfabrik * 125) +
  (numHolzfarm * 380) +
  (numAxtrobotter * 1250) +
  (numBaumplantage * 3600) +
  (numHolzportal * 12999) +
  (numKunstholzlabor * 56666) +
  (numBaumplanet * 777777);
  // Kosten abziehen
  numHolz -= saegewerkCost_holz;
  numStein -= saegewerkCost_stein;
   // Kosten erhöhen und runden
  saegewerkCost_holz = Math.ceil(saegewerkCost_holz * 1.1);
  saegewerkCost_stein = Math.ceil(saegewerkCost_stein * 1.1);
});

//Axtschmiede
$('#axtschmiede_btn').on('click', function() {
  numAxtschmiede++;
  holzProSekunde = numForsthaus +
  (numSaegewerk * 4) +
  (numAxtschmiede * 12) +
  (numHolzmine * 40) +
  (numBaumfabrik * 125) +
  (numHolzfarm * 380) +
  (numAxtrobotter * 1250) +
  (numBaumplantage * 3600) +
  (numHolzportal * 12999) +
  (numKunstholzlabor * 56666) +
  (numBaumplanet * 777777);
  // Kosten abziehen
  numHolz -= axtschmiedeCost_holz;
  numStein -= axtschmiedeCost_stein;
   // Kosten erhöhen und runden
  axtschmiedeCost_holz = Math.ceil(axtschmiedeCost_holz * 1.1);
  axtschmiedeCost_stein = Math.ceil(axtschmiedeCost_stein * 1.1);
});

// Holzmine
$('#holzmine_btn').on('click', function() {
  numHolzmine++;
  holzProSekunde = numForsthaus +
  (numSaegewerk * 4) +
  (numAxtschmiede * 12) +
  (numHolzmine * 40) +
  (numBaumfabrik * 125) +
  (numHolzfarm * 380) +
  (numAxtrobotter * 1250) +
  (numBaumplantage * 3600) +
  (numHolzportal * 12999) +
  (numKunstholzlabor * 56666) +
  (numBaumplanet * 777777);
  // Kosten abziehen
  numHolz -= holzmineCost_holz;
  numStein -= holzmineCost_stein;
   // Kosten erhöhen und runden
  holzmineCost_holz = Math.ceil(holzmineCost_holz * 1.1);
  holzmineCost_stein = Math.ceil(holzmineCost_stein * 1.1);
});

//Baumfabrik
$('#baumfabrik_btn').on('click', function() {
  numBaumfabrik++;
  holzProSekunde = numForsthaus +
  (numSaegewerk * 4) +
  (numAxtschmiede * 12) +
  (numHolzmine * 40) +
  (numBaumfabrik * 125) +
  (numHolzfarm * 380) +
  (numAxtrobotter * 1250) +
  (numBaumplantage * 3600) +
  (numHolzportal * 12999) +
  (numKunstholzlabor * 56666) +
  (numBaumplanet * 777777);
  // Kosten abziehen
  numHolz -= baumfabrikCost_holz;
  numStein -= baumfabrikCost_stein;
   // Kosten erhöhen und runden
  baumfabrikCost_holz = Math.ceil(baumfabrikCost_holz * 1.1);
  baumfabrikCost_stein = Math.ceil(baumfabrikCost_stein * 1.1);
});

//Holzfarm
$('#holzfarm_btn').on('click', function() {
  numHolzfarm++;
  holzProSekunde = numForsthaus +
  (numSaegewerk * 4) +
  (numAxtschmiede * 12) +
  (numHolzmine * 40) +
  (numBaumfabrik * 125) +
  (numHolzfarm * 380) +
  (numAxtrobotter * 1250) +
  (numBaumplantage * 3600) +
  (numHolzportal * 12999) +
  (numKunstholzlabor * 56666) +
  (numBaumplanet * 777777);
  // Kosten abziehen
	numHolz -= holzfarmCost_holz;
	numStein -= holzfarmCost_stein;
	numGold -= holzfarmCost_gold;
   // Kosten erhöhen und runden
	holzfarmCost_holz = Math.ceil(holzfarmCost_holz * 1.1);
	holzfarmCost_stein = Math.ceil(holzfarmCost_stein * 1.1);
	holzfarmCost_gold = Math.ceil(holzfarmCost_gold * 1.1);
});

//Axtrobotter
$('#axtrob_btn').on('click', function() {
  numAxtrobotter++;
  holzProSekunde = numForsthaus +
  (numSaegewerk * 4) +
  (numAxtschmiede * 12) +
  (numHolzmine * 40) +
  (numBaumfabrik * 125) +
  (numHolzfarm * 380) +
  (numAxtrobotter * 1250) +
  (numBaumplantage * 3600) +
  (numHolzportal * 12999) +
  (numKunstholzlabor * 56666) +
  (numBaumplanet * 777777);
  // Kosten abziehen
	numHolz -= axtrobCost_holz;
	numStein -= axtrobCost_stein;
	numGold -= axtrobCost_gold;
   // Kosten erhöhen und runden
	axtrobCost_holz = Math.ceil(axtrobCost_holz * 1.1);
  axtrobCost_stein = Math.ceil(axtrobCost_stein * 1.1);
	axtrobCost_gold = Math.ceil(axtrobCost_gold * 1.1);
});

//Baumplantage
$('#baumpla_btn').on('click', function() {
  numBaumplantage++;
  holzProSekunde = numForsthaus +
  (numSaegewerk * 4) +
  (numAxtschmiede * 12) +
  (numHolzmine * 40) +
  (numBaumfabrik * 125) +
  (numHolzfarm * 380) +
  (numAxtrobotter * 1250) +
  (numBaumplantage * 3600) +
  (numHolzportal * 12999) +
  (numKunstholzlabor * 56666) +
  (numBaumplanet * 777777);
  // Kosten abziehen
	numHolz -= baumplaCost_holz;
	numStein -= baumplaCost_stein;
	numGold -= baumplaCost_gold;
   // Kosten erhöhen und runden
	baumplaCost_holz = Math.ceil(baumplaCost_holz * 1.1);
  baumplaCost_stein = Math.ceil(baumplaCost_stein * 1.1);
	baumplaCost_gold = Math.ceil(baumplaCost_gold * 1.1);
});

//Holzportal
$('#holzportal_btn').on('click', function() {
  numHolzportal++;
  holzProSekunde = numForsthaus +
  (numSaegewerk * 4) +
  (numAxtschmiede * 12) +
  (numHolzmine * 40) +
  (numBaumfabrik * 125) +
  (numHolzfarm * 380) +
  (numAxtrobotter * 1250) +
  (numBaumplantage * 3600) +
  (numHolzportal * 12999) +
  (numKunstholzlabor * 56666) +
  (numBaumplanet * 777777);
  // Kosten abziehen
	numHolz -= holzportalCost_holz;
	numStein -= holzportalCost_stein;
	numGold -= holzportalCost_gold;
   // Kosten erhöhen und runden
	holzportalCost_holz = Math.ceil(holzportalCost_holz * 1.1);
  holzportalCost_stein = Math.ceil(holzportalCost_stein * 1.1);
	holzportalCost_gold = Math.ceil(holzportalCost_gold * 1.1);
});

//Kunstholzlabor
$('#khl_btn').on('click', function() {
  numKunstholzlabor++;
  holzProSekunde = numForsthaus +
  (numSaegewerk * 4) +
  (numAxtschmiede * 12) +
  (numHolzmine * 40) +
  (numBaumfabrik * 125) +
  (numHolzfarm * 380) +
  (numAxtrobotter * 1250) +
  (numBaumplantage * 3600) +
  (numHolzportal * 12999) +
  (numKunstholzlabor * 56666) +
  (numBaumplanet * 777777);
  // Kosten abziehen
	numHolz -= khlCost_holz;
	numStein -= khlCost_stein;
	numGold -= khlCost_gold;
   // Kosten erhöhen und runden
	khlCost_holz = Math.ceil(khlCost_holz * 1.1);
  khlCost_stein = Math.ceil(khlCost_stein * 1.1);
	khlCost_gold = Math.ceil(khlCost_gold * 1.1);
});

//Baumplanet
$('#baumplanet_btn').on('click', function() {
  numBaumplanet++;
  holzProSekunde = numForsthaus +
  (numSaegewerk * 4) +
  (numAxtschmiede * 12) +
  (numHolzmine * 40) +
  (numBaumfabrik * 125) +
  (numHolzfarm * 380) +
  (numAxtrobotter * 1250) +
  (numBaumplantage * 3600) +
  (numHolzportal * 12999) +
  (numKunstholzlabor * 56666) +
  (numBaumplanet * 777777);
  // Kosten abziehen
	numHolz -= baumplanetCost_holz;
	numStein -= baumplanetCost_stein;
	numGold -= baumplanetCost_gold;
   // Kosten erhöhen und runden
	baumplanetCost_holz = Math.ceil(baumplanetCost_holz * 1.1);
  baumplanetCost_stein = Math.ceil(baumplanetCost_stein * 1.1);
	baumplanetCost_gold = Math.ceil(baumplanetCost_gold * 1.1);
});

//stein

//steinbruch
$('#steinbruch_btn').on('click', function() {
  numSteinbruch++;
  steinProSekunde = numSteinbruch +
  (numBergwerk * 4) +
  (numHammerschmiede * 12) +
  (numSteinlabor * 40) +
  (numFelsfabrik * 125) +
  (numKieselfarm * 380) +
  (numSteinsonde * 1250) +
  (numLaserschneider * 3600) +
  (numFelsportal * 12999) +
  (numGranitbeißer * 56666) +
  (numSteinplanet * 777777);
//kosten abziehen
  numHolz -= steinbruchCost_holz;
  numGold -= steinbruchCost_gold;
   // Kosten erhöhen und runden
  steinbruchCost_holz = Math.ceil(steinbruchCost_holz * 1.1);
  steinbruchCost_gold = Math.ceil(steinbruchCost_gold * 1.1);
});

//Bergwerk
$('#bergwerk_btn').on('click', function() {
  numBergwerk++;
  steinProSekunde = numSteinbruch +
  (numBergwerk * 4) +
  (numHammerschmiede * 12) +
  (numSteinlabor * 40) +
  (numFelsfabrik * 125) +
  (numKieselfarm * 380) +
  (numSteinsonde * 1250) +
  (numLaserschneider * 3600) +
  (numFelsportal * 12999) +
  (numGranitbeißer * 56666) +
  (numSteinplanet * 777777);
//kosten abziehen
  numHolz -= bergwerkCost_holz;
  numGold -= bergwerkCost_gold;
   // Kosten erhöhen und runden
  bergwerkCost_holz = Math.ceil(bergwerkCost_holz * 1.1);
  bergwerkCost_gold = Math.ceil(bergwerkCost_gold * 1.1);
});

//hammerschmiede
$('#hammerschmiede_btn').on('click', function() {
  numHammerschmiede++;
  steinProSekunde = numSteinbruch +
  (numBergwerk * 4) +
  (numHammerschmiede * 12) +
  (numSteinlabor * 40) +
  (numFelsfabrik * 125) +
  (numKieselfarm * 380) +
  (numSteinsonde * 1250) +
  (numLaserschneider * 3600) +
  (numFelsportal * 12999) +
  (numGranitbeißer * 56666) +
  (numSteinplanet * 777777);
//kosten abziehen
  numHolz -= hammerschmiedeCost_holz;
  numGold -= hammerschmiedeCost_gold;
   // Kosten erhöhen und runden
  hammerschmiedeCost_holz = Math.ceil(hammerschmiedeCost_holz * 1.1);
  hammerschmiedeCost_gold = Math.ceil(hammerschmiedeCost_gold * 1.1);
});

//Steinlabor
$('#steinlabor_btn').on('click', function() {
  numSteinlabor++;
  steinProSekunde = numSteinbruch +
  (numBergwerk * 4) +
  (numHammerschmiede * 12) +
  (numSteinlabor * 40) +
  (numFelsfabrik * 125) +
  (numKieselfarm * 380) +
  (numSteinsonde * 1250) +
  (numLaserschneider * 3600) +
  (numFelsportal * 12999) +
  (numGranitbeißer * 56666) +
  (numSteinplanet * 777777);
//kosten abziehen
  numHolz -= steinlaborCost_holz;
  numGold -= steinlaborCost_gold;
   // Kosten erhöhen und runden
  steinlaborCost_holz = Math.ceil(steinlaborCost_holz * 1.1);
  steinlaborCost_gold = Math.ceil(steinlaborCost_gold * 1.1);
});

//felsfabrik
$('#felsfabrik_btn').on('click', function() {
  numFelsfabrik++;
  steinProSekunde = numSteinbruch +
  (numBergwerk * 4) +
  (numHammerschmiede * 12) +
  (numSteinlabor * 40) +
  (numFelsfabrik * 125) +
  (numKieselfarm * 380) +
  (numSteinsonde * 1250) +
  (numLaserschneider * 3600) +
  (numFelsportal * 12999) +
  (numGranitbeißer * 56666) +
  (numSteinplanet * 777777);
//kosten abziehen
  numHolz -= felsfabrikCost_holz;
  numGold -= felsfabrikCost_gold;
   // Kosten erhöhen und runden
  felsfabrikCost_holz = Math.ceil(felsfabrikCost_holz * 1.1);
  felsfabrikCost_gold = Math.ceil(felsfabrikCost_gold * 1.1);
});

//kieselfarm
$('#kieselfarm_btn').on('click', function() {
  numKieselfarm++;
  steinProSekunde = numSteinbruch +
  (numBergwerk * 4) +
  (numHammerschmiede * 12) +
  (numSteinlabor * 40) +
  (numFelsfabrik * 125) +
  (numKieselfarm * 380) +
  (numSteinsonde * 1250) +
  (numLaserschneider * 3600) +
  (numFelsportal * 12999) +
  (numGranitbeißer * 56666) +
  (numSteinplanet * 777777);
//kosten abziehen
  numHolz -= kieselfarmCost_holz;
  numGold -= kieselfarmCost_gold;
  numStein -= kieselfarmCost_stein;
   // Kosten erhöhen und runden
  kieselfarmCost_holz = Math.ceil(kieselfarmCost_holz * 1.1);
  kieselfarmCost_gold = Math.ceil(kieselfarmCost_gold * 1.1);
  kieselfarmCost_stein = Math.ceil(kieselfarmCost_stein * 1.1);
});

//steinsonde
$('#steinsonde_btn').on('click', function() {
  numSteinsonde++;
  steinProSekunde = numSteinbruch +
  (numBergwerk * 4) +
  (numHammerschmiede * 12) +
  (numSteinlabor * 40) +
  (numFelsfabrik * 125) +
  (numKieselfarm * 380) +
  (numSteinsonde * 1250) +
  (numLaserschneider * 3600) +
  (numFelsportal * 12999) +
  (numGranitbeißer * 56666) +
  (numSteinplanet * 777777);
//kosten abziehen
  numHolz -= steinsondeCost_holz;
  numGold -= steinsondeCost_gold;
  numStein -= steinsondeCost_stein;
   // Kosten erhöhen und runden
  steinsondeCost_holz = Math.ceil(steinsondeCost_holz * 1.1);
  steinsondeCost_gold = Math.ceil(steinsondeCost_gold * 1.1);
  steinsondeCost_stein = Math.ceil(steinsondeCost_stein * 1.1);
});

//laserschneider
$('#laserschneider_btn').on('click', function() {
  numLaserschneider++;
  steinProSekunde = numSteinbruch +
  (numBergwerk * 4) +
  (numHammerschmiede * 12) +
  (numSteinlabor * 40) +
  (numFelsfabrik * 125) +
  (numKieselfarm * 380) +
  (numSteinsonde * 1250) +
  (numLaserschneider * 3600) +
  (numFelsportal * 12999) +
  (numGranitbeißer * 56666) +
  (numSteinplanet * 777777);
//kosten abziehen
  numHolz -= laserschneiderCost_holz;
  numGold -= laserschneiderCost_gold;
  numStein -= laserschneiderCost_stein;
   // Kosten erhöhen und runden
  laserschneiderCost_holz = Math.ceil(laserschneiderCost_holz * 1.1);
  laserschneiderCost_gold = Math.ceil(laserschneiderCost_gold * 1.1);
  laserschneiderCost_stein = Math.ceil(laserschneiderCost_stein * 1.1);
});

//Felsportal
$('#felsportal_btn').on('click', function() {
  numFelsportal++;
  steinProSekunde = numSteinbruch +
  (numBergwerk * 4) +
  (numHammerschmiede * 12) +
  (numSteinlabor * 40) +
  (numFelsfabrik * 125) +
  (numKieselfarm * 380) +
  (numSteinsonde * 1250) +
  (numLaserschneider * 3600) +
  (numFelsportal * 12999) +
  (numGranitbeißer * 56666) +
  (numSteinplanet * 777777);
//kosten abziehen
  numHolz -= felsportalCost_holz;
  numGold -= felsportalCost_gold;
  numStein -= felsportalCost_stein;
   // Kosten erhöhen und runden
  felsportalCost_holz = Math.ceil(felsportalCost_holz * 1.1);
  felsportalCost_gold = Math.ceil(felsportalCost_gold * 1.1);
  felsportalCost_stein = Math.ceil(felsportalCost_stein * 1.1);
});

//Granitbeißer
$('#granitbeißer_btn').on('click', function() {
  numGranitbeißer++;
  steinProSekunde = numSteinbruch +
  (numBergwerk * 4) +
  (numHammerschmiede * 12) +
  (numSteinlabor * 40) +
  (numFelsfabrik * 125) +
  (numKieselfarm * 380) +
  (numSteinsonde * 1250) +
  (numLaserschneider * 3600) +
  (numFelsportal * 12999) +
  (numGranitbeißer * 56666) +
  (numSteinplanet * 777777);
//kosten abziehen
  numHolz -= granitbeißerCost_holz;
  numGold -= granitbeißerCost_gold;
  numStein -= granitbeißerCost_stein;
   // Kosten erhöhen und runden
  granitbeißerCost_holz = Math.ceil(granitbeißerCost_holz * 1.1);
  granitbeißerCost_gold = Math.ceil(granitbeißerCost_gold * 1.1);
  granitbeißerCost_stein = Math.ceil(granitbeißerCost_stein * 1.1);
});

//steinplanet
$('#steinplanet_btn').on('click', function() {
  numSteinplanet++;
  steinProSekunde = numSteinbruch +
  (numBergwerk * 4) +
  (numHammerschmiede * 12) +
  (numSteinlabor * 40) +
  (numFelsfabrik * 125) +
  (numKieselfarm * 380) +
  (numSteinsonde * 1250) +
  (numLaserschneider * 3600) +
  (numFelsportal * 12999) +
  (numGranitbeißer * 56666) +
  (numSteinplanet * 777777);
//kosten abziehen
  numHolz -= steinplanetCost_holz;
  numGold -= steinplanetCost_gold;
  numStein -= steinplanetCost_stein;
   // Kosten erhöhen und runden
  steinplanetCost_holz = Math.ceil(steinplanetCost_holz * 1.1);
  steinplanetCost_gold = Math.ceil(steinplanetCost_gold * 1.1);
  steinplanetCost_stein = Math.ceil(steinplanetCost_stein * 1.1);
});

//nahrung
$('#beeren-sucher').on('click', function() {
  numBeerensucher++;
  nahrungProSekunde = numBeerensucher * 1;

  numStein -= beerensucherCost;

  beerensucherCost = Math.ceil(beerensucherCost * 1.5);
});

//gold
$('#erz-miner').on('click', function() {
  numErzminer++;
  goldProSekunde = numErzminer * 1;

  numNahrung -= erzminerCost;

  erzminerCost = Math.ceil(erzminerCost * 1.7);
});


//$('#klickupgrade').on('click', function() {
//  numKlickupgrade++;

//  numHolz -= klickupgradeCost;
//  document.getElementById('klickupgrade').style.visibility = 'hidden';

//});

// UI Update alle 10ms
window.setInterval(function() {

  // FÜR HOLZ
  // 1 Holz pro Sekunde (1/100 pro 10ms)
  numHolz += (numForsthaus * 1 / 100);

  // 4 Holz pro Sekunde (4/100 pro 10ms)
  numHolz += (numSaegewerk * 4 / 100);

  // 12 Holz pro Sekunde (12/100 pro 10ms)
  numHolz += (numAxtschmiede * 12 / 100);

  // 40 Holz pro Sekunde (40/100 pro 10ms)
  numHolz += (numHolzmine * 40 / 100);

  // 125 Holz pro Sekunde (125/100 pro 10ms)
  numHolz += (numBaumfabrik * 125 / 100);

  // 380 Holz pro Sekunde (380/100 pro 10ms)
  numHolz += (numHolzfarm * 380 / 100);

  // 1250 Holz pro Sekunde (1250/100 pro 10ms)
  numHolz += (numAxtrobotter * 1250 / 100);

  // 3600 Holz pro Sekunde (3600/100 pro 10ms)
  numHolz += (numBaumplantage * 3600 / 100);

  // 12999 Holz pro Sekunde (12999/100 pro 10ms)
  numHolz += (numHolzportal * 12999 / 100);

  // 56666 Holz pro Sekunde (56666/100 pro 10ms)
  numHolz += (numKunstholzlabor * 56666 / 100);

  // 777777 Holz pro Sekunde (777777/100 pro 10ms)
  numHolz += (numBaumplanet * 777777 / 100);

  //Für STEIN
  // 1 Stein pro Sekunde (1/100 pro 10ms)
  numStein += (numSteinbruch * 1 / 100);

  // 4 Stein pro Sekunde (4/100 pro 10ms)
  numStein += (numBergwerk * 4 / 100);

  // 12 Stein pro Sekunde (12/100 pro 10ms)
  numStein += (numHammerschmiede * 12 / 100);

  // 40 Stein pro Sekunde (40/100 pro 10ms)
  numStein += (numSteinlabor * 40 / 100);

  // 125 Stein pro Sekunde (125/100 pro 10ms)
  numStein += (numFelsfabrik * 125 / 100);

  // 380 Stein pro Sekunde (380/100 pro 10ms)
  numStein += (numKieselfarm * 380 / 100);

  // 1250 Stein pro Sekunde (1250/100 pro 10ms)
  numStein += (numSteinsonde * 1250 / 100);

  // 3600 Stein pro Sekunde (3600/100 pro 10ms)
  numStein += (numLaserschneider * 3600 / 100);

  // 12999 Stein pro Sekunde (12999/100 pro 10ms)
  numStein += (numFelsportal * 12999 / 100);

  // 56666 Stein pro Sekunde (56666/100 pro 10ms)
  numStein += (numGranitbeißer * 56666 / 100);

  // 777777 Stein pro Sekunde (777777/100 pro 10ms)
  numStein += (numSteinplanet * 777777 / 100);


  //Für NAHRUNG
  // 1 Nahrung pro Sekunde (1/100 pro 10ms)
  numNahrung += (numBeerensucher * 20 / 100);

  //Für GOLD
  // 1 Gold pro Sekunde (1/100 pro 10ms)
  numGold += (numErzminer * 5 / 100);

  // Anzahl an gekauften Objekten updaten und ausgeben
  $('#woodCounter').text(Math.floor(numHolz));
  $('#stoneCounter').text(Math.floor(numStein));
  $('#foodCounter').text(Math.floor(numNahrung));
  $('#goldCounter').text(Math.floor(numGold));
  //holzbauten
  $('#numForsthaus').text(Math.floor(numForsthaus));
  $('#numSaegewerk').text(Math.floor(numSaegewerk));
  $('#numAxtschmiede').text(Math.floor(numAxtschmiede));
  $('#numHolzmine').text(Math.floor(numHolzmine));
  $('#numBaumfabrik').text(Math.floor(numBaumfabrik));
  $('#numHolzfarm').text(Math.floor(numHolzfarm));
  $('#numAxtrobotter').text(Math.floor(numAxtrobotter));
  $('#numBaumplantage').text(Math.floor(numBaumplantage));
  $('#numHolzportal').text(Math.floor(numHolzportal));
  $('#numKunstholzlabor').text(Math.floor(numKunstholzlabor));
  $('#numBaumplanet').text(Math.floor(numBaumplanet));
  //steinbauten
  $('#numSteinbruch').text(Math.floor(numSteinbruch));
  $('#numBergwerk').text(Math.floor(numBergwerk));
  $('#numHammerschmiede').text(Math.floor(numHammerschmiede));
  $('#numSteinlabor').text(Math.floor(numSteinlabor));
  $('#numFelsfabrik').text(Math.floor(numFelsfabrik));
  $('#numKieselfarm').text(Math.floor(numKieselfarm));
  $('#numSteinsonde').text(Math.floor(numSteinsonde));
  $('#numLaserschneider').text(Math.floor(numLaserschneider));
  $('#numFelsportal').text(Math.floor(numFelsportal));
  $('#numGranitbeißer').text(Math.floor(numGranitbeißer));
  $('#numSteinplanet').text(Math.floor(numSteinplanet));


  //todo
  $('#numKlickupgrade').text(Math.floor(numKlickupgrade));
  $('#numBeerensucher').text(Math.floor(numBeerensucher));
  $('#numErzminer').text(Math.floor(numErzminer));
  $('#holzProSekunde').text(Math.floor(holzProSekunde));
  $('#steinProSekunde').text(Math.floor(steinProSekunde));
  $('#nahrungProSekunde').text(Math.floor(nahrungProSekunde));
  $('#goldProSekunde').text(Math.floor(goldProSekunde));

  //Shop
  // Update der Kosten pro Button

  //holzbauten_buttons
  $('#forsthaus_btn').text("Holz: " + forsthausCost_holz + " Stein: " + forsthausCost_stein);
  $('#saegewerk_btn').text('Holz: ' + saegewerkCost_holz + " Stein: " + saegewerkCost_stein);
  $('#axtschmiede_btn').text('Holz: ' + axtschmiedeCost_holz + " Stein: " + axtschmiedeCost_stein);
  $('#holzmine_btn').text('Holz: ' + holzmineCost_holz + " Stein: " + holzmineCost_stein);
  $('#baumfabrik_btn').text('Holz: ' + baumfabrikCost_holz + " Stein: " + baumfabrikCost_stein);
  $('#holzfarm_btn').text('Holz: ' + holzfarmCost_holz + " Stein: " + holzfarmCost_stein + " Gold: " + holzfarmCost_gold);
  $('#axtrob_btn').text('Holz: ' + axtrobCost_holz + " Stein: " + axtrobCost_stein + " Gold: " + axtrobCost_gold);
  $('#baumpla_btn').text('Holz: ' + baumplaCost_holz + " Stein: " + baumplaCost_stein + " Gold: " + baumplaCost_gold);
  $('#holzportal_btn').text('Holz: ' + holzportalCost_holz + " Stein: " + holzportalCost_stein + " Gold: " + holzportalCost_gold);
  $('#khl_btn').text('Holz: ' + khlCost_holz + " Stein: " + khlCost_stein + " Gold: " + khlCost_gold);
  $('#baumplanet_btn').text('Holz: ' + baumplanetCost_holz  + " Stein: " + baumplanetCost_stein + " Gold: " + baumplanetCost_gold);

  //steinbauten_buttons
  $('#steinbruch_btn').text("Holz: " + steinbruchCost_holz + " Gold: " + steinbruchCost_gold);
  $('#bergwerk_btn').text("Holz: " + bergwerkCost_holz + " Gold: " + bergwerkCost_gold);
  $('#hammerschmiede_btn').text("Holz: " + hammerschmiedeCost_holz + " Gold: " + hammerschmiedeCost_gold);
  $('#steinlabor_btn').text("Holz: " + steinlaborCost_holz + " Gold: " + steinlaborCost_gold);
  $('#felsfabrik_btn').text("Holz: " + felsfabrikCost_holz + " Gold: " + felsfabrikCost_gold);
  $('#kieselfarm_btn').text("Holz: " + kieselfarmCost_holz + " Gold: " + kieselfarmCost_gold + " Stein " + kieselfarmCost_stein);
  $('#steinsonde_btn').text("Holz: " + steinsondeCost_holz + " Gold: " + steinsondeCost_gold + " Stein " + steinsondeCost_stein);
  $('#laserschneider_btn').text("Holz: " + laserschneiderCost_holz + " Gold: " + laserschneiderCost_gold + " Stein " + laserschneiderCost_stein);
  $('#felsportal_btn').text("Holz: " + felsportalCost_holz + " Gold: " + felsportalCost_gold + " Stein " + felsportalCost_stein);
  $('#granitbeißer_btn').text("Holz: " + granitbeißerCost_holz + " Gold: " + granitbeißerCost_gold + " Stein " + granitbeißerCost_stein);
  $('#steinplanet_btn').text("Holz: " + steinplanetCost_holz + " Gold: " + steinplanetCost_gold + " Stein " + steinplanetCost_stein);
//todo
  $('#beeren-sucher').text('Kosten: ' + beerensucherCost);
  $('#erz-miner').text('Kosten: ' + erzminerCost);

  // Upgrades
  $('#upgrade1_btn').text('Holz: ' + klickupgradeCost);

  //Save and load
  $('#save_btn').text('Speichern');
  $('#load_btn').text('Laden');
  // Holzbauten Buttons ausgrauen oder einblenden je nach Resourcen
  $('#forsthaus_btn').prop('disabled', forsthausCost_holz > numHolz || forsthausCost_stein > numStein);
  $('#saegewerk_btn').prop('disabled', saegewerkCost_holz > numHolz || saegewerkCost_stein > numStein);
  $('#axtschmiede_btn').prop('disabled', axtschmiedeCost_holz > numHolz || axtschmiedeCost_stein > numStein);
  $('#holzmine_btn').prop('disabled', holzmineCost_holz > numHolz || holzmineCost_stein > numStein);
  $('#baumfabrik_btn').prop('disabled', baumfabrikCost_holz > numHolz || baumfabrikCost_stein > numStein);
  $('#holzfarm_btn').prop('disabled', holzfarmCost_holz > numHolz || holzfarmCost_stein > numStein || holzfarmCost_gold > numGold);
  $('#axtrob_btn').prop('disabled', axtrobCost_holz > numHolz || axtrobCost_stein > numStein || axtrobCost_gold > numGold);
  $('#baumpla_btn').prop('disabled', baumplaCost_holz > numHolz || baumplaCost_stein > numStein || baumplaCost_gold > numGold);
  $('#holzportal_btn').prop('disabled', holzportalCost_holz > numHolz || holzportalCost_stein > numStein || holzportalCost_gold > numGold);
  $('#khl_btn').prop('disabled', khlCost_holz > numHolz || khlCost_stein > numStein || khlCost_gold > numGold);
  $('#baumplanet_btn').prop('disabled', baumplanetCost_holz > numHolz || baumplanetCost_stein > numStein || baumplanetCost_gold > numGold);

  //Stein
  $('#steinbruch_btn').prop('disabled', steinbruchCost_holz > numHolz || steinbruchCost_gold > numGold);
  $('#bergwerk_btn').prop('disabled', bergwerkCost_holz > numHolz || bergwerkCost_gold > numGold);
  $('#hammerschmiede_btn').prop('disabled', hammerschmiedeCost_holz > numHolz || hammerschmiedeCost_gold > numGold);
  $('#steinlabor_btn').prop('disabled', steinlaborCost_holz > numHolz || steinlaborCost_gold > numGold);
  $('#felsfabrik_btn').prop('disabled', felsfabrikCost_holz > numHolz || felsfabrikCost_gold > numGold);
  $('#kieselfarm_btn').prop('disabled', kieselfarmCost_holz > numHolz || kieselfarmCost_gold > numGold || kieselfarmCost_stein > numStein);
  $('#steinsonde_btn').prop('disabled', steinsondeCost_holz > numHolz || steinsondeCost_gold > numGold || steinsondeCost_stein > numStein);
  $('#laserschneider_btn').prop('disabled', laserschneiderCost_holz > numHolz || laserschneiderCost_gold > numGold || laserschneiderCost_stein > numStein);
  $('#felsportal_btn').prop('disabled', felsportalCost_holz > numHolz || felsportalCost_gold > numGold || felsportalCost_stein > numStein);
  $('#granitbeißer_btn').prop('disabled', granitbeißerCost_holz > numHolz || granitbeißerCost_gold > numGold || granitbeißerCost_stein > numStein);
  $('#steinplanet_btn').prop('disabled', steinplanetCost_holz > numHolz || steinplanetCost_gold > numGold || steinplanetCost_stein > numStein);
  //Nahrung
  $('#beeren-sucher').prop('disabled', beerensucherCost > numStein);
  //Gold
  $('#erz-miner').prop('disabled', erzminerCost > numNahrung);

  //upgrade buttons
  $('#upgrade1_btn').prop('disabled', klickupgradeCost > numHolz);

}, 10);
});
