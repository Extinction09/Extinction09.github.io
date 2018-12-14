//country stats
var provinces = 1;
var manpower = 0;
var income = 0;
var totalMoney = 57;
var totalDevelopment = 0;
var population = 0;

var totalEarthProvinces = 36524;

//province stats
var provTypeTax = 1;
var provCost = 0;
var provTaxIncome = 0.1;
var provTypeManpower = 1;
var provManpowerIncome = 0.1;
var provTypeProduction = 1;
var developmentCost = Math.floor(10 * Math.pow(1.1, totalDevelopment));
//province stats - buildings
var temple = 0;
var templeCost = 100;
var templeIncome = 0.1;
var totalTempleIncome = 0;
var barracks = 0;
var barracksCost = 140;
var barracksIncrease = 0.5;
var regimentQuarters = 0;
var rQuartersCost = 150;
var rQuartersIncrease = 0.25;
var buildingSlots = 0;

//army stats
var totalRegiments = 0;
var regimentUK = 0;
var morale = 1;
var discipline = 0.5;
var infantryAmount = 0;
var infantryDamage = 1;
var infantryCost = 11;
var infantryUK = 0.2;
var infantryHealth = 1;
var cavalryAmount = 0;
var cavalryCost = 25;
var cavalryDamage = 1.35;
var cavalryUK = 0.5;
var cavalryHealth = 0.7;
var cannonAmount = 0;
var cannonDamage = 2;
var cannonCost = 52;
var cannonUK = 0.7;
var cannonHealth = 0.5; 

var totalMaxAttack = Math.floor((cavalryDamage * cavalryAmount) + (cannonDamage * cannonAmount) + (infantryDamage * infantryAmount) * 6);
var totalMinAttack = Math.floor((cavalryDamage * cavalryAmount) + (cannonDamage * cannonAmount) + (infantryDamage * infantryAmount) * 1);
var totalHealth = Math.floor((cavalryHealth * cavalryAmount) + (cannonHealth * cannonAmount) + (infantryHealth * infantryAmount));

//army stats - manpower
var manpowerCap = 0;
var manpowerOL = 0;

//enemy stats
var totalEnemyAttack = 7;



//html stuff
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


//rng
var getRandom = 0;
function randomGet() {
    getRandom = Math.round(Math.random() * (6 - 0));
    document.getElementById('randomGet').innerHTML = getRandom;
}

//random country name
function generate(){
	var adjectives = ["Revolutionary","Greater","Northern","North","Southern","Western","Eastern","Higher","Polluted","Ruined","The Empire of","Ancient","","Racist","Humanist",
    "Militaristic","Rebellious","Sanctioned","Bankrupt","Exiled","Excommunicated","Upside Down","Right Side Up","Crooked","Gargantuan","Obese","Lower","The Island Nation of",
    "Cocaine Filled","Weed Loaded","Inhumane","Underwater","Heavenly","Hellish","Embargoed","Shooketh","Starved","Famine Filled","Casualtyville","One Province Minor",
    "The Duchy of","The Kingdom of","Refugeeville","Nuclear Plant Filled","Massive CO2 Generator","Hypocritcal","A Failure Named"];
	var nouns= ["Austria","Australia","France","England","Wales","Mexico","Spain","Portugal","Germany","Prussia","Italy","Pope Boi","Switzerland","Denmark","Ireland","Scotland",
    "Poland","Muscovy","Sweden","Morocco","Tunis","Byzantium","Hungary","Brandenburg","Norway","Korea","Greece","Ming","US","Canada","Japan","Britain","Netherlands","Rome",
    "Russia","Persia","Holland","Egypt","Novgorod","Ethiopia","New Zealand","Philippines","T-Series","FYROM","Estonia","Latvia","Lithuania","Ukraine","China","Vietnam",
    "Mongolia","Scandinavia","Greenland","Brazil","Union of Soviet Socialist Republics","German Reich","Nationalist France","East Germany","Cuba","Austria-Hungary"];
	var rand_adjectives = Math.floor(Math.random()*adjectives.length); 
	var rand_nouns = Math.floor(Math.random()*nouns.length); 
	document.getElementById('result').innerHTML = "<div class='alert alert-success'><h2>"+adjectives[rand_adjectives]+" "+nouns[rand_nouns]+"</h2></div>";
 
}


//total development function
function devTotal() {
    totalDevelopment = provTypeTax + provTypeManpower + provTypeProduction;
    document.getElementById('totalDev').innerHTML = totalDevelopment;
};

//province total function
function provTotal() {
    totalProv = provinces;
    document.getElementById('totalProv').innerHTML = totalProv;
};





//buy province
function buyProvince() {
    if (totalMoney >= provCost) {
        province = province + 1;
        provTypeTax = proveTypeTax * getRandom;
        provTypeProduction = provTypeProduction * getRandom;
        provTypeManpower = provTypeProduction * getRandom;
        document.getElementById('provinces').innerHTML = province;
        document.getElementById('pTax').innerHTML = provTypeTax;
        document.getElementById('pProduction').innerHTML = provTypeProduction;
        document.getElementById('pManpower').innerHTML = provTypeManpower;
    } else {
        return;
    };
    var nextCost = Math.floor(50 * Math.pow(1.10, provinces));
    document.getElementById('provCost').innerHTML = nextCost;
};

//attack province






//function of provTypeManpowerIncome
function provTypeMI() {
    if (manpower >= manpowerCap) {
    return;
    } else {
        manpower = manpower + provManpowerIncome;
    };
};

//develop provTypeManpower
function devProvTypeManpower() {
    if(totalMoney >= developmentCost) {
        totalMoney - developmentCost;
        provTypeManpower + 1;
        document.getElementById('pManpower').innerHTML = provTypeManpower;
    };
    var nextCost = Math.floor(10 * Math.pow(1.10, totalDevelopment));
    document.getElementById('devCost').innerHTML = nextCost;
};





//function of provTypeTax
function provinceTI() {
    provTaxIncome + totalMoney;
};

//develop provTypeTax
function devProvTypeTax() {
    if(totalMoney >= developmentCost) {
        totalMoney - developmentCost;
        provTypeTax + 1;
        document.getElementById('pTax').innerHTML = provTypeTax;
    };
    var nextCost = Math.floor(10 * Math.pow(1.10, totalDevelopment));
    document.getElementById('devCost').innerHTML = nextCost;
};





//function of provTypeProduction
function provincePI() {
    provProdIncome + totalMoney;
};

//develop provTypeProduction
function devProvTypeProduction() {
    if(totalMoney >= developmentCost) {
        totalMoney - developmentCost;
        provTypeProduction + 1;
        document.getElementById('pProduction').innerHTML = provTypeProduction;
    };
    var nextCost = Math.floor(10 * Math.pow(1.10, totalDevelopment));
    document.getElementById('devCost').innerHTML = nextCost;
};





//purchase temple
function buyTemple() {
    if(totalMoney >= templeCost) {
        totalMoney - templeCost;
        temple + 1;
        document.getElementById('temple').innerHTML = temple;
    };
};

//function of temple
function templeIncrease() {
    totalTempleIncome = temple * templeIncome;
    totalMoney = totalMoney + totalTempleIncome;
};





//purchase infantry
function purchaseInfantry() {
    if(totalMoney >= infantryCost) {
        infantry = infantry + 1;
        totalMoney = totalMoney - infantryCost;
    };
};

//purchase cavalry
function purchaseCavalry() {
    if(totalMoney >= cavalryCost) {
        cavalryAmount = cavalryAmount + 1;
        totalMoney = totalMoney - cavalryCost;
    };
};

//purchase cannon
function purchaseCannon() {
    if(totalMoney >= cannonCost) {
        cannonAmount = cannonAmount + 1;
        totalMoney = totalMoney - cannonCost;
    };
};





window.setInterval(function(){

    provinceTI(provTypeTax);
    templeIncrease(temple);
}, 1000);