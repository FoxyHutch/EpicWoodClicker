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

//---------------Holzbauten_kosten---------

//Forsthaus_kosten
var forsthausCost_holz = 100;
var forsthausCost_stein = 50;

//Saegewerk_kosten
var saegewerkCost_holz = 500;
var saegewerkCost_stein = 200;

//Axtschmiede_kosten
var axtschmiedeCost_holz = 2500;
var axtschmiedeCost_stein = 800;

//Holzmine_kosten
var holzmineCost_holz = 10000;
var holzmineCost_stein = 3000;

//Baumfabrik_kosten
var baumfabrikCost_holz = 50000;
var baumfabrikCost_stein = 12000;

//Holzfarm_kosten
var holzfarmCost_holz = 180000;
var holzfarmCost_stein = 40000;
var holzfarmCost_gold = 5000;

//Axtrobotter_kosten
var axtrobCost_holz = 870000;
var axtrobCost_stein = 200000;
var axtrobCost_gold = 25000;

//Baumplantage_kosten
var baumplaCost_holz = 5000000;
var baumplaCost_stein = 1000000;
var baumplaCost_gold = 100000;

//Holzportal_kosten
var holzportalCost_holz = 24000000;
var holzportalCost_stein = 5000000;
var holzportalCost_gold = 250000;

//Kunstholzlabor_kosten
var khlCost_holz = 125000000;
var khlCost_stein = 19000000;
var khlCost_gold = 1000000;

//Baumplanet_kosten
var baumplanetCost_holz = 2999000000;
var baumplanetCost_stein = 232000000;
var baumplanetCost_gold = 12000000;

//Stein
var numSteinsammler = 0;
var steinsammlerCost = 0; //debug werte auf 0 für test

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
$('#stein-sammler').on('click', function() {
  numSteinsammler++;
  steinProSekunde = numSteinsammler * 1;

  numHolz -= steinsammlerCost;

  steinsammlerCost = Math.ceil(steinsammlerCost * 2.2);
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
  numStein += (numSteinsammler * 3 / 100);

  //Für NAHRUNG
  // 1 Nahrung pro Sekunde (1/100 pro 10ms)
  numNahrung += (numBeerensucher * 20 / 100);

  //Für GOLD
  // 1 Gold pro Sekunde (1/100 pro 10ms)
  numGold += (numErzminer * 5 / 100);

  // Anzahl an gekauften Objekten updaten und ausgeben
  $('#holz-zaehler').text(Math.floor(numHolz));
  $('#stein-zaehler').text(Math.floor(numStein));
  $('#nahrung-zaehler').text(Math.floor(numNahrung));
  $('#gold-zaehler').text(Math.floor(numGold));
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
  $('#numSteinsammler').text(Math.floor(numSteinsammler));
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
  
  
  $('#stein-sammler').text('Kosten: ' + steinsammlerCost);
  $('#beeren-sucher').text('Kosten: ' + beerensucherCost);
  $('#erz-miner').text('Kosten: ' + erzminerCost);

  // Upgrades
  $('#klickupgrade').text('Kosten: ' + klickupgradeCost);

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
  $('#stein-sammler').prop('disabled', steinsammlerCost > numHolz);
  //Nahrung
  $('#beeren-sucher').prop('disabled', beerensucherCost > numStein);
  //Gold
  $('#erz-miner').prop('disabled', erzminerCost > numNahrung);
}, 10);
});
