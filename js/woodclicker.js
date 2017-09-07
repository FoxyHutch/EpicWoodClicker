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
var numStein1 = 0;

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


//Steinplaceholder_kosten
var stein1Cost_holz = 50;
var stein1Cost_gold = 25;

//Nahrung
var numBeerensucher = 0;
var beerensucherCost = 0; //debug werte auf 0 für test

//Gold
var numErzminer = 0;
var erzminerCost = 0; //debug werte auf 0 für test


//Upgrades
var numKlickupgrade = 0;
var klickupgradeCost = 125000;

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
        numStein1: numStein1,
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
        stein1Cost_holz: stein1Cost_holz,
        stein1Cost_gold: stein1Cost_gold

    }
    localStorage.setItem("save",JSON.stringify(save));
    alert("Spiel gespeichert!");
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
    if (typeof savegame.numStein1 !== "undefined") numStein1 = savegame.numStein1;
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
    if (typeof savegame.holzportalCost_holz !== "undefined") holzportalCost_holz = holzportalCost_holz.numHolz;
    if (typeof savegame.holzportalCost_stein !== "undefined") holzportalCost_stein = savegame.holzportalCost_stein;
    if (typeof savegame.holzportalCost_gold !== "undefined") holzportalCost_gold = savegame.holzportalCost_gold;
    if (typeof savegame.khlCost_holz !== "undefined") khlCost_holz = savegame.khlCost_holz;
    if (typeof savegame.khlCost_stein !== "undefined") khlCost_stein = savegame.khlCost_stein;
    if (typeof savegame.khlCost_gold !== "undefined") khlCost_gold = savegame.khlCost_gold;
    if (typeof savegame.baumplanetCost_holz !== "undefined") baumplanetCost_holz = savegame.baumplanetCost_holz;
    if (typeof savegame.baumplanetCost_stein !== "undefined") baumplanetCost_stein = savegame.baumplanetCost_stein;
    if (typeof savegame.baumplanetCost_gold !== "undefined") baumplanetCost_gold = savegame.baumplanetCost_gold;
    if (typeof savegame.stein1Cost_holz !== "undefined") stein1Cost_holz = savegame.stein1Cost_holz;
    if (typeof savegame.stein1Cost_gold !== "undefined") stein1Cost_gold = savegame.stein1Cost_gold;
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
    document.getElementById('numStein1').innerHTML = numStein1;
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
    document.getElementById('stein1Cost_holz').innerHTML = stein1Cost_holz;
    document.getElementById('stein1Cost_gold').innerHTML = stein1Cost_gold;


};

// numHolz pro BTN Klick mit Upgradelogik
$('#holz-btn').click(function() {
  if (numKlickupgrade > 0) {
    numHolz = 1 + (numHolz + holzProSekunde);
  } else {
    numHolz++;
  }
});

// numStein pro BTN Klick mit Upgradelogik
$('#stein-btn').click(function() {
  if (numKlickupgrade > 0) {
    numStein = 1 + (numStein + steinProSekunde);
  } else {
    numStein++;
  }
});

// numNahrung pro BTN Klick mit Upgradelogik
$('#nahrung-btn').click(function() {
  if (numKlickupgrade > 0) {
    numNahrung = 1 + (numNahrung + nahrungProSekunde);
  } else {
    numNahrung++;
  }
});

// numGold pro BTN Klick mit Upgradelogik
$('#gold-btn').click(function() {
  if (numKlickupgrade > 0) {
    numGold = 1 + (numGold + goldProSekunde);
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
$('#stein1_btn').on('click', function() {
  numStein1++;
  steinProSekunde = numStein1 * 1;
//kosten abziehen
  numHolz -= stein1Cost_holz;
  numGold -= stein1Cost_gold;
   // Kosten erhöhen und runden
  stein1Cost_holz = Math.ceil(stein1Cost_holz * 2.2);
    stein1Cost_gold = Math.ceil(stein1Cost_gold * 2.2);
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


$('#klickupgrade').on('click', function() {
  numKlickupgrade++;

  numHolz -= klickupgradeCost;
  document.getElementById('klickupgrade').style.visibility = 'hidden';

});

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
  numStein += (numStein1 * 3 / 100);

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

  //todo
  $('#numStein1').text(Math.floor(numStein1));
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

//todo
  $('#stein1_btn').text("Holz: " + stein1Cost_holz + " Gold: " + stein1Cost_gold);
  $('#beeren-sucher').text('Kosten: ' + beerensucherCost);
  $('#erz-miner').text('Kosten: ' + erzminerCost);

  // Upgrades
  $('#klickupgrade').text('Kosten: ' + klickupgradeCost);

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

  //upgrade buttons
  $('#klickupgrade').prop('disabled', klickupgradeCost > numHolz);

  //Stein
  $('#stein1_btn').prop('disabled', stein1Cost_holz > numHolz || stein1Cost_gold > numGold);
  //Nahrung
  $('#beeren-sucher').prop('disabled', beerensucherCost > numStein);
  //Gold
  $('#erz-miner').prop('disabled', erzminerCost > numNahrung);
}, 10);
});
