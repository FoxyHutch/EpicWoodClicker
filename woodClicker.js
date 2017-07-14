$(document).ready(function() {
// Variable
var numHolz = 0;
var numStein = 0;
var numNahrung = 0;
var numGold = 0;
//Holz
var numHF = 0;
var numPA = 0;
var numAutoKlicker3 = 0;
var numAutoKlicker4 = 0;
var numFabrik1 = 0;
var numFabrik2 = 0;
var numHolzplanet = 0;
var HFCost = 10;
var PACost = 250;
var autoklicker3Cost = 5000;
var autoklicker4Cost = 75000;
var fabrik1Cost = 500000;
var fabrik2Cost = 2500000;
var holzplanetCost = 75000000;

//Stein
var numSteinsammler = 0;
var steinsammlerCost = 10000;

//Nahrung
var numBeerensucher = 0;
var beerensucherCost = 10000;

//Gold
var numErzminer = 0;
var erzminerCost = 10000;


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

// Holzfaeller + Holz pro Sekunde
$('#hf-btn').on('click', function() {
  numHF++;
  holzProSekunde = numHF +
    (numPA * 5) +
    (numAutoKlicker3 * 35) +
    (numAutoKlicker4 * 100) +
    (numFabrik1 * 2500) +
    (numFabrik2 * 37500) +
    (numHolzplanet * 500000);

  // Kosten abziehen
  numHolz -= HFCost;

  // Kosten erhöhen und runden
  HFCost = Math.ceil(HFCost * 1.1);
});

//Platinaxt
$('#master-widgeteer').on('click', function() {
  numPA++;
  holzProSekunde = numHF +
    (numPA * 5) +
    (numAutoKlicker3 * 35) +
    (numAutoKlicker4 * 100) +
    (numFabrik1 * 2500) +
    (numFabrik2 * 37500) +
    (numHolzplanet * 500000);
  numHolz -= PACost;
  PACost = Math.ceil(PACost * 1.1);
});


$('#auto-klicker3').on('click', function() {
  numAutoKlicker3++;
  holzProSekunde = numHF +
    (numPA * 5) +
    (numAutoKlicker3 * 35) +
    (numAutoKlicker4 * 100) +
    (numFabrik1 * 2500) +
    (numFabrik2 * 37500) +
    (numHolzplanet * 500000);


  numHolz -= autoklicker3Cost;

  autoklicker3Cost = Math.ceil(autoklicker3Cost * 1.1);
});

$('#auto-klicker4').on('click', function() {
  numAutoKlicker4++;
  holzProSekunde = numHF +
    (numPA * 5) +
    (numAutoKlicker3 * 35) +
    (numAutoKlicker4 * 100) +
    (numFabrik1 * 2500) +
    (numFabrik2 * 37500) +
    (numHolzplanet * 500000);

  numHolz -= autoklicker4Cost;

  autoklicker4Cost = Math.ceil(autoklicker4Cost * 1.1);
});

$('#fabrik1').on('click', function() {
  numFabrik1++;
  holzProSekunde = numHF +
    (numPA * 5) +
    (numAutoKlicker3 * 35) +
    (numAutoKlicker4 * 100) +
    (numFabrik1 * 2500) +
    (numFabrik2 * 37500) +
    (numHolzplanet * 500000);

  numHolz -= fabrik1Cost;

  fabrik1Cost = Math.ceil(fabrik1Cost * 1.1);
});

$('#fabrik2').on('click', function() {
  numFabrik2++;
  holzProSekunde = numHF +
    (numPA * 5) +
    (numAutoKlicker3 * 35) +
    (numAutoKlicker4 * 100) +
    (numFabrik1 * 2500) +
    (numFabrik2 * 37500) +
    (numHolzplanet * 500000);

  numHolz -= fabrik2Cost;

  fabrik2Cost = Math.ceil(fabrik2Cost * 1.1);
});

$('#pizza').on('click', function() {
  numHolzplanet++;
  holzProSekunde = numHF +
    (numPA * 5) +
    (numAutoKlicker3 * 35) +
    (numAutoKlicker4 * 100) +
    (numFabrik1 * 2500) +
    (numFabrik2 * 37500) +
    (numHolzplanet * 500000);

  numHolz -= holzplanetCost;

  holzplanetCost = Math.ceil(holzplanetCost * 1.1);
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
  numHolz += (numHF * 1 / 100);

  // 5 Holz pro Sekunde (5/100 pro 10ms)
  numHolz += (numPA * 5 / 100);

  // 35 Holz pro Sekunde (35/100 pro 10ms)
  numHolz += (numAutoKlicker3 * 35 / 100);

  // 100 Holz pro Sekunde (100/100 pro 10ms)
  numHolz += (numAutoKlicker4 * 100 / 100);

  // 2500 Holz pro Sekunde (2500/100 pro 10ms)
  numHolz += (numFabrik1 * 2500 / 100);

  // 37500 Holz pro Sekunde (37500/100 pro 10ms)
  numHolz += (numFabrik2 * 37500 / 100);

  // 500000 Holz pro Sekunde (500000/100 pro 10ms)
  numHolz += (numHolzplanet * 500000 / 100);

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
  $('#numHF').text(Math.floor(numHF));
  $('#numPA').text(Math.floor(numPA));
  $('#numAutoKlicker3').text(Math.floor(numAutoKlicker3));
  $('#numAutoKlicker4').text(Math.floor(numAutoKlicker4));
  $('#numFabrik1').text(Math.floor(numFabrik1));
  $('#numFabrik2').text(Math.floor(numFabrik2));
  $('#numHolzplanet').text(Math.floor(numHolzplanet));
  $('#numSteinsammler').text(Math.floor(numSteinsammler));
  $('#numBeerensucher').text(Math.floor(numBeerensucher));
  $('#numErzminer').text(Math.floor(numErzminer));
  $('#holzProSekunde').text(Math.floor(holzProSekunde));
  $('#steinProSekunde').text(Math.floor(steinProSekunde));
  $('#nahrungProSekunde').text(Math.floor(steinProSekunde));
  $('#goldProSekunde').text(Math.floor(steinProSekunde));

  //Shop
  // Update der Kosten pro Button
  $('#hf-btn').text('Kosten: ' + HFCost);
  $('#master-widgeteer').text('Kosten: ' + PACost);
  $('#auto-klicker3').text('Kosten: ' + autoklicker3Cost);
  $('#auto-klicker4').text('Kosten: ' + autoklicker4Cost);
  $('#fabrik1').text('Kosten: ' + fabrik1Cost);
  $('#fabrik2').text('Kosten: ' + fabrik2Cost);
  $('#pizza').text('Kosten: ' + holzplanetCost);
  $('#stein-sammler').text('Kosten: ' + steinsammlerCost);
  $('#beeren-sucher').text('Kosten: ' + beerensucherCost);
  $('#erz-miner').text('Kosten: ' + erzminerCost);

  // Upgrades
  $('#klickupgrade').text('Kosten: ' + klickupgradeCost);

  // Buttons ausgrauen oder einblenden je nach Holz
  $('#hf-btn').prop('disabled', HFCost > numHolz);
  $('#master-widgeteer').prop('disabled', PACost > numHolz);
  $('#auto-klicker3').prop('disabled', autoklicker3Cost > numHolz);
  $('#auto-klicker4').prop('disabled', autoklicker4Cost > numHolz);
  $('#fabrik1').prop('disabled', fabrik1Cost > numHolz);
  $('#fabrik2').prop('disabled', fabrik2Cost > numHolz);
  $('#pizza').prop('disabled', holzplanetCost > numHolz);
  $('#klickupgrade').prop('disabled', klickupgradeCost > numHolz);

  //Stein
  $('#stein-sammler').prop('disabled', steinsammlerCost > numHolz);
  //Nahrung
  $('#beeren-sucher').prop('disabled', beerensucherCost > numStein);
  //Gold
  $('#erz-miner').prop('disabled', erzminerCost > numNahrung);
}, 10);
});
