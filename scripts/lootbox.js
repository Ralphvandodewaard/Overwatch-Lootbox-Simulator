var tscore = 0;																				// Zes variabelen die scores bijhouden. Deze starten alle op 0
var cscore = 0;
var rscore = 0;
var escore = 0;
var lscore = 0;
var credit = 0;

document.getElementById("tscore").innerHTML = tscore;										// De tabellen op de HTML pagina nemen de getallen van de zes variabelen over
document.getElementById("cscore").innerHTML = cscore;
document.getElementById("rscore").innerHTML = rscore;
document.getElementById("escore").innerHTML = escore;
document.getElementById("lscore").innerHTML = lscore;
document.getElementById("credit").innerHTML = credit;

var quality = ['Common', 'Rare', 'Epic', 'Legendary'];										// Array met de vier verschillende kwaliteiten die een item kan hebben, van laag naar hoog

var common = ['Spray', 'Player Icon', 'Voice Line', 'Credits'];								// Een array per kwaliteit met de items die de kwaliteit kunnen hebben
var rare = ['Skin', 'Victory Pose', 'Credits'];
var epic = ['Highlight Intro', 'Emote', 'Skin', 'Credits'];
var legend = ['Skin', 'Credits'];

function openbox() {																		// Functie die uitgevoerd wordt als de gebruiker een loot box opent op de HTML pagina
	var prefix																				// Vier variabelen die gebruikt worden in de functie
	var rndm
	var loot
	var fade

	document.querySelectorAll("td")[0].innerHTML = "";										// De tabel die de resultaten weergeeft op de HTML pagina wordt leeg gemaakt
	document.querySelectorAll("td")[1].innerHTML = "";
	document.querySelectorAll("td")[2].innerHTML = "";
	document.querySelectorAll("td")[3].innerHTML = "";

	document.querySelectorAll("td")[0].style.background = "";								// De achtergronden van de tabel die de resultaten weergeeft op de HTML pagina wordt leeg gemaakt
	document.querySelectorAll("td")[1].style.background = "";
	document.querySelectorAll("td")[2].style.background = "";
	document.querySelectorAll("td")[3].style.background = "";

	// ITEM 1
	prefix = quality[1]; 																	// Het eerste item in de loot box heeft altijd de 'rare' kwaliteit

	rndm = Math.floor((Math.random() * 100) + 1); 											// Berekent een willekeurig getal van 1 tot 100
	if (rndm <= 50) {
		loot = rare[0]; 																	// Als het berekende getal 50 of lager is (50%), wordt de variabele 'loot' het eerste item uit de 'rare' array
	} else if (rndm > 50 && rndm <= 90) {
		loot = rare[1]; 																	// Als het berekende getal tussen de 51 en 90 ligt (40%), wordt 'loot' het tweede item uit de array
	} else {											 									// Als het berekende getal geen van het bovenstaande is, dus 91 of hoger (10%), wordt 'loot' het derde item uit de array
		loot = rare[2];
		prefix = "100"; 																	// Het item 'credits' heeft een hoeveelheid die de prefix vervangt
		credit+=100;																		// In de tabel op de HTML pagina worden 100 credits opgeteld
		document.getElementById("credit").innerHTML = credit;
	};

	document.querySelectorAll("td")[0].innerHTML = prefix + " " + loot;						// In het eerste vak van de resultaten wordt de kwaliteit van het item (prefix) en het item zelf (loot) weergeven
	document.querySelectorAll("td")[0].style.background = "blue";							// Een item met de 'rare' kwaliteit krijgt een blauwe achtergrond
	rscore++;																				// In de tabel wordt er 1 opgeteld bij het aantal 'rare' items
	document.getElementById("rscore").innerHTML = rscore;

	// ITEM 2, 3, 4
	for (x = 0; x < 3; x++) {																// Het onderstaande wordt drie keer uitgevoerd, namelijk voor items 2, 3 en 4
		rndm = Math.floor((Math.random() * 100) + 1); 										// Eerst wordt de kwaliteit van het item berekend, op basis van een willekeurig getal van 1 tot 100

		if (rndm <= 80) {																	// Er is 80% kans op de 'common' kwaliteit
			// COMMON LOOTTABLE
			prefix = quality[0];
			rndm = Math.floor((Math.random() * 100) + 1); 									// Er wordt nu een opnieuw een kans berekend, voor het item
			if (rndm <= 35) {																// 35% kans op het eerste item uit de array
				loot = common[0];
			} else if (rndm > 35 && rndm <= 70) {											// 35% kans op het tweede item uit de array
				loot = common[1];
			} else if (rndm > 70 && rndm <= 90) {											// 20% kans op het derde item uit de array
				loot = common[2];
			} else {																		// 10% kans op het laatste item uit de array
				loot = common[3];
				prefix = "50";
				credit+=50;
				document.getElementById("credit").innerHTML = credit;
			};

			if (document.querySelectorAll("td")[1].innerHTML == "") {						// Deze constructie bepaald in welk vakje van de tabel het resultaat weergeven moet worden
				document.querySelectorAll("td")[1].innerHTML = prefix + " " + loot;
			} else if (document.querySelectorAll("td")[2].innerHTML == "") {
				document.querySelectorAll("td")[2].innerHTML = prefix + " " + loot;
			} else if (document.querySelectorAll("td")[3].innerHTML == "") {
				document.querySelectorAll("td")[3].innerHTML = prefix + " " + loot;
			};

			cscore++;
			document.getElementById("cscore").innerHTML = cscore;

		} else if (rndm > 80 && rndm <= 92) {												// Er is 12% kans op de 'rare' kwaliteit
			// RARE LOOTTABLE
			prefix = quality[1];
			rndm = Math.floor((Math.random() * 100) + 1);
			if (rndm <= 50) {																// 50% kans op het eerste item uit de array
				loot = rare[0];
			} else if (rndm > 50 && rndm <= 90) {											// 40%
				loot = rare[1];
			} else {																		// 10%
				loot = rare[2];
				prefix = "100";
				credit+=100;
				document.getElementById("credit").innerHTML = credit;
			};

			if (document.querySelectorAll("td")[1].innerHTML == "") {
				document.querySelectorAll("td")[1].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[1].style.background = "blue";
			} else if (document.querySelectorAll("td")[2].innerHTML == "") {
				document.querySelectorAll("td")[2].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[2].style.background = "blue";
			} else if (document.querySelectorAll("td")[3].innerHTML == "") {
				document.querySelectorAll("td")[3].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[3].style.background = "blue";
			};

			rscore++;
			document.getElementById("rscore").innerHTML = rscore;

		} else if (rndm > 92 && rndm <= 98) {												// Er is 6% kans op de 'epic' kwaliteit
			// EPIC LOOTTABLE
			prefix = quality[2];
			rndm = Math.floor((Math.random() * 100) + 1);
			if (rndm <= 35) {																// 35% kans op het eerste item uit de array
				loot = epic[0];
			} else if (rndm > 35 && rndm <= 70) {											// 35%
				loot = epic[1];
			} else if (rndm > 70 && rndm <= 90) {											// 20%
				loot = epic[2];
			} else {																		// 10%
				loot = epic[3];
				prefix = "150";
				credit+=150;
				document.getElementById("credit").innerHTML = credit;
			};

			if (document.querySelectorAll("td")[1].innerHTML == "") {
				document.querySelectorAll("td")[1].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[1].style.background = "purple";
			} else if (document.querySelectorAll("td")[2].innerHTML == "") {
				document.querySelectorAll("td")[2].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[2].style.background = "purple";
			} else if (document.querySelectorAll("td")[3].innerHTML == "") {
				document.querySelectorAll("td")[3].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[3].style.background = "purple";
			};

			escore++;
			document.getElementById("escore").innerHTML = escore;

		} else {																		// Er is 2% kans op de 'legendary' kwaliteit
			// LEGENDARY LOOTTABLE
			prefix = quality[3];
			rndm = Math.floor((Math.random() * 100) + 1);
			if (rndm <= 90) {															// 90% kans op het eerste item uit de array
				loot = legend[0];
			} else {																	// 10%
				loot = legend[1];
				prefix = "500";
				credit+=500;
				document.getElementById("credit").innerHTML = credit;
			};

			if (document.querySelectorAll("td")[1].innerHTML == "") {
				document.querySelectorAll("td")[1].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[1].style.background = "orange";
			} else if (document.querySelectorAll("td")[2].innerHTML == "") {
				document.querySelectorAll("td")[2].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[2].style.background = "orange";
			} else if (document.querySelectorAll("td")[3].innerHTML == "") {
				document.querySelectorAll("td")[3].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[3].style.background = "orange";
			};

			lscore++;
			document.getElementById("lscore").innerHTML = lscore;
		};
	};

	tscore++;																			// Er wordt 1 opgeteld in de tabel die weergeeft hoeveel loot boxes er geopend zijn
	document.getElementById("tscore").innerHTML = tscore;

	fade = document.getElementById("results");
	if (fade.className == "fade") {								// De resultaten in de tabel worden weergeven door middel van een animatie. De animatie is geschreven als een class in de CSS
		fade.className = "fade2";
	} else {																			// Er moesten twee dezelfde classes aangemaakt worden die elkaar steeds afwisselen. Anders wordt de animatie bij het openen van de tweede lootbox niet getoond
		fade.className = "fade";										// Bron: https://css-tricks.com/restart-css-animation/
	};
}

function legendbox() {																	// Dit is een tweede soort loot box die hetzelfde uitvoerd als de bovengenoemde functie. Het verschil is dat de kansen op betere items hier hoger is
	var prefix
	var rndm
	var loot
	var fade

	document.querySelectorAll("td")[0].innerHTML = "";
	document.querySelectorAll("td")[1].innerHTML = "";
	document.querySelectorAll("td")[2].innerHTML = "";
	document.querySelectorAll("td")[3].innerHTML = "";

	document.querySelectorAll("td")[0].style.background = "";
	document.querySelectorAll("td")[1].style.background = "";
	document.querySelectorAll("td")[2].style.background = "";
	document.querySelectorAll("td")[3].style.background = "";

	// ITEM 1
	prefix = quality[2]; 																	// Het eerste item uit deze legendary box is altijd van 'epic' kwaliteit

	rndm = Math.floor((Math.random() * 100) + 1);
	if (rndm <= 35) {																		// 35% op het eerste item uit de array
		loot = epic[0];
	} else if (rndm > 35 && rndm <= 70) {													// 35%
		loot = epic[1];
	} else if (rndm > 70 && rndm <= 90) {													// 20%
		loot = epic[2];
	} else {																				// 10%
		loot = epic[3];
		prefix = "150";
		credit+=150;
		document.getElementById("credit").innerHTML = credit;
	};

	document.querySelectorAll("td")[0].innerHTML = prefix + " " + loot;
	document.querySelectorAll("td")[0].style.background = "purple";
	escore++;
	document.getElementById("escore").innerHTML = escore;

	// ITEM 2, 3, 4
	for (x = 0; x < 3; x++) {																// Het onderstaande wordt drie keer uitgevoerd, voor items 2, 3 en 4
		rndm = Math.floor((Math.random() * 100) + 1);

		if (rndm <= 50) {																	// Er is 50% kans op de 'rare' kwaliteit
			// RARE LOOTTABLE
			prefix = quality[1];
			rndm = Math.floor((Math.random() * 100) + 1);
			if (rndm <= 50) {																// 50% kans op het eerste item uit de array
				loot = rare[0];
			} else if (rndm > 50 && rndm <= 90) {											// 40%
				loot = rare[1];
			} else {																		// 10%
				loot = rare[2];
				prefix = "100";
				credit+=100;
				document.getElementById("credit").innerHTML = credit;
			};

			if (document.querySelectorAll("td")[1].innerHTML == "") {
				document.querySelectorAll("td")[1].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[1].style.background = "blue";
			} else if (document.querySelectorAll("td")[2].innerHTML == "") {
				document.querySelectorAll("td")[2].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[2].style.background = "blue";
			} else if (document.querySelectorAll("td")[3].innerHTML == "") {
				document.querySelectorAll("td")[3].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[3].style.background = "blue";
			};

			rscore++;
			document.getElementById("rscore").innerHTML = rscore;

		} else if (rndm > 50 && rndm <= 80) {												// Er is 30% kans op de 'epic' kwaliteit
			// EPIC LOOTTABLE
			prefix = quality[2];
			rndm = Math.floor((Math.random() * 100) + 1);
			if (rndm <= 35) {																// 35% kans op het eerste item uit de array
				loot = epic[0];
			} else if (rndm > 35 && rndm <= 70) {											// 35%
				loot = epic[1];
			} else if (rndm > 70 && rndm <= 90) {											// 20%
				loot = epic[2];
			} else {																		// 10%
				loot = epic[3];
				prefix = "150";
				credit+=150;
				document.getElementById("credit").innerHTML = credit;
			};

			if (document.querySelectorAll("td")[1].innerHTML == "") {
				document.querySelectorAll("td")[1].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[1].style.background = "purple";
			} else if (document.querySelectorAll("td")[2].innerHTML == "") {
				document.querySelectorAll("td")[2].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[2].style.background = "purple";
			} else if (document.querySelectorAll("td")[3].innerHTML == "") {
				document.querySelectorAll("td")[3].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[3].style.background = "purple";
			};

			escore++;
			document.getElementById("escore").innerHTML = escore;

		} else {																		// Er is 20% kans op de 'legendary' kwaliteit
			// LEGENDARY LOOTTABLE
			prefix = quality[3];
			rndm = Math.floor((Math.random() * 100) + 1);
			if (rndm <= 90) {															// 90% kans op het eerste item uit de array
				loot = legend[0];
			} else {																	// 10%
				loot = legend[1];
				prefix = "500";
				credit+=500;
				document.getElementById("credit").innerHTML = credit;
			};

			if (document.querySelectorAll("td")[1].innerHTML == "") {
				document.querySelectorAll("td")[1].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[1].style.background = "orange";
			} else if (document.querySelectorAll("td")[2].innerHTML == "") {
				document.querySelectorAll("td")[2].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[2].style.background = "orange";
			} else if (document.querySelectorAll("td")[3].innerHTML == "") {
				document.querySelectorAll("td")[3].innerHTML = prefix + " " + loot;
				document.querySelectorAll("td")[3].style.background = "orange";
			};

			lscore++;
			document.getElementById("lscore").innerHTML = lscore;
		};
	};

	tscore++;																			// Ook deze speciale loot box wordt meegeteld bij het totale aantal geopende boxes
	document.getElementById("tscore").innerHTML = tscore;

	fade = document.getElementById("results");
	if (fade.className == "fade") {
		fade.className = "fade2";
	} else {
		fade.className = "fade";
	};
}

function reset() {																		// deze functie wist alle gegevens die bijgehouden werden
	tscore = 0;																			// Alle getallen worden weer op 0 gezet
	cscore = 0;
	rscore = 0;
	escore = 0;
	lscore = 0;
	credit = 0;
	document.getElementById("tscore").innerHTML = tscore;
	document.getElementById("cscore").innerHTML = cscore;
	document.getElementById("rscore").innerHTML = rscore;
	document.getElementById("escore").innerHTML = rscore;
	document.getElementById("lscore").innerHTML = lscore;
	document.getElementById("credit").innerHTML = credit;

	document.querySelectorAll("td")[0].innerHTML = " ";									// De resultaten uit de laatst geopende loot box worden verwijderd
	document.querySelectorAll("td")[1].innerHTML = " ";
	document.querySelectorAll("td")[2].innerHTML = " ";
	document.querySelectorAll("td")[3].innerHTML = " ";

	document.querySelectorAll("td")[0].style.background = "";							// De achtergronden van de resultaten uit de laatst geopende loot box worden verwijderd
	document.querySelectorAll("td")[1].style.background = "";
	document.querySelectorAll("td")[2].style.background = "";
	document.querySelectorAll("td")[3].style.background = "";
};

function buylegend() {																	// Deze functie wordt uitgevoerd als de gebruiker op de button klikt om een legendary box te kopen
	credit = document.getElementById("credit").innerHTML;
	if (credit >= 1000) {																// Het kost 1000 credits om deze speciale loot box te kopen
		credit-=1000;
		legendbox();
		document.getElementById("credit").innerHTML = credit;
	} else {
		alert("Not enough credits!");													// Als de gebruiker niet genoeg credits heeft krijgt hij een alert
	};
};

function overimg() {																	// Deze functie wordt uitgevoerd als de gebruiker met zijn muis over de afbeelding van de loot box gaat
	document.getElementById("button").src = "images/box2.png";							// De afbeelding veranderd naar andere afbeelding met een gloed
};

function outimg() {																		// Deze functie wordt uitgevoerd als de gebruiker met zijn muis weer van de afbeelding af gaat
	document.getElementById("button").src = "images/box.png";							// De afbeelding wordt terug veranderd naar de vorige afbeelding
};

document.getElementById("button").addEventListener("mouseover", overimg);				// Wanneer de gebruiker met zijn muis over de afbeelding beweegt wordt de funtie overimg() uitgevoerd
document.getElementById("button").addEventListener("mouseout", outimg);					// Wanneer de gebruiker weer met zijn muis van de afbeelding af gaat wordt de funtie outimg() uitgevoerd

document.getElementById("button").addEventListener("click", openbox);					// Wanneer de gebruiker met zijn muis klikt op de afbeelding wordt de funtie openbox() uitgevoerd
