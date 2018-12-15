var player = {


    //country stats
        provinces: 1,
        manpower: 0,
        income: 0,
        totalMoney: 100,
        totalMoneyEarned: 0,
        population: 0,
        
    //province stats
        provTypeTax: 1,
        provTypeManpower: 1,
        provManpowerIncome: 0.05,
        provTypeProduction: 1,
        developmentCost: 10,
    //province stats - buildings
        buildingSlots: 0,
    //taxation
        temple: 0,
        templeCost: 100,
        templeIncome: 0.1,
    //production
        workshop: 0,
        workshopCost: 100,
    //manpower
        barracks: 0,
        barracksCost: 140,
        barracksIncrease: 0.5,
    //amount of regiments
        regimentQuarters: 0,
        rQuartersCost: 150,
        rQuartersIncrease: 0.25,
    
    
    //army stats
        totalRegiments: 0,
        regimentUK: 0,
        morale: 1,
        discipline: 0.5,
        infantryAmount: 0,
        infantryDamage: 1,
        infantryCost: 11,
        infantryUK: 0.2,
        infantryHealth: 1,
        cavalryAmount: 0,
        cavalryCost: 25,
        cavalryDamage: 1.35,
        cavalryUK: 0.5,
        cavalryHealth: 0.7,
        cannonAmount: 0,
        cannonDamage: 2,
        cannonCost: 52,
        cannonUK: 0.7,
        cannonHealth: 0.5,
    //army stats - manpower
        manpowerCap: 4,
        manpowerOL: 0,
    //enemy stats
        totalEnemyAttack: 7,
    };
    
    var defaultPlayer = player;
    var totalEarthProvinces = 36524;
    var totalMaxAttack = Math.floor((player.cavalryDamage * player.cavalryAmount) + (player.cannonDamage * player.cannonAmount) + (player.infantryDamage * player.infantryAmount) * 6);
    var totalMinAttack = Math.floor((player.cavalryDamage * player.cavalryAmount) + (player.cannonDamage * player.cannonAmount) + (player.infantryDamage * player.infantryAmount) * 1);
    var totalHealth = Math.floor((player.cavalryHealth * player.cavalryAmount) + (player.cannonHealth * player.cannonAmount) + (player.infantryHealth * player.infantryAmount));
    

    function set_cookie(cookie_name,value) {
        expiry = new Date();   
        expiry.setTime(new Date().getTime() + (365*24*60*60*1000)); 
        var c_value=escape(btoa(JSON.stringify(value))) + 
        "; expires="+expiry.toUTCString();
        document.cookie=cookie_name + "=" + c_value;
    }
    
    function get_cookie(cookie_name) {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + cookie_name + "=");
        if (c_start == -1) {
            c_start = c_value.indexOf(cookie_name + "=");
        }
        if (c_start == -1) return false;
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = atob(unescape(c_value.substring(c_start,c_end)));
        return JSON.parse(c_value);
    }
    
    function load_game() {
        var save_data = get_cookie('save');
           if (!save_data) return;
      player = save_data;
      }
      function save_game() {
        set_cookie('save', player);
    }


//html stuff
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
        document.getElementById(pageName).style.display = "block";
        elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();



//help menu
function openNav() {
    document.getElementById("myNav").style.display = "block";
}
  
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}






//rng
var getRandom = 0;
function randomGet() {
    getRandom = Math.round(Math.random() * (6 - 0));
    document.getElementById('randomGet').innerHTML = getRandom;
}

//random country name
function generate() {
	var adjectives = ["Revolutionary","Greater","Northern","North","Southern","Western","Eastern","Higher","Polluted","Ruined","The Empire of","Ancient","","Racist","Humanist",
    "Militaristic","Rebellious","Sanctioned","Bankrupt","Exiled","Excommunicated","Upside Down","Right Side Up","Crooked","Gargantuan","Obese","Lower","The Island Nation of",
    "Cocaine Filled","Weed Loaded","Inhumane","Underwater","Heavenly","Hellish","Embargoed","Shooketh","Starved","Famine Filled","Casualtyville","One Province Minor",
    "The Duchy of","The Kingdom of","Refugeeville","Nuclear Plant Filled","Massive CO2 Generator","Hypocritcal","A Failure Named","Sultanate of","Daimyo of","Imperial","Terrible",
    "Toasty","Angelic"];
	var nouns= ["Austria","Australia","France","England","Wales","Mexico","Spain","Portugal","Germany","Prussia","Italy","Pope Boi","Switzerland","Denmark","Ireland","Scotland",
    "Poland","Muscovy","Sweden","Morocco","Tunis","Byzantium","Hungary","Brandenburg","Norway","Korea","Greece","Ming","US","Canada","Japan","Britain","Netherlands","Rome",
    "Russia","Persia","Holland","Egypt","Novgorod","Ethiopia","New Zealand","Philippines","T-Series","FYROM","Estonia","Latvia","Lithuania","Ukraine","China","Vietnam",
    "Mongolia","Scandinavia","Greenland","Brazil","Union of Soviet Socialist Republics","German Reich","Nationalist France","East Germany","Cuba","Austria-Hungary","Czechia","Slovakia","Belarus","Qing",
    "Manchu","Ashikaga","Obama","Algeria","Bolivia","Zimbabwe","Nicagaragua","Macedon"];
	var rand_adjectives = Math.floor(Math.random()*adjectives.length); 
	var rand_nouns = Math.floor(Math.random()*nouns.length); 
    document.getElementById('countryName').innerHTML = adjectives[rand_adjectives]+" "+nouns[rand_nouns];
    document.getElementById('title').innerHTML = adjectives[rand_adjectives]+" "+nouns[rand_nouns];
}





//buy province
function buyProvince() {
    var provCost = Math.floor(20 * Math.pow(1.10, (player.provinces - 1)));
    if (player.totalMoney >= provCost) {
        player.totalMoney = player.totalMoney - provCost;
        player.provinces++;
        player.provTypeTax = player.provTypeTax + Math.round(Math.random() * 6 - 0);
        player.provTypeProduction = player.provTypeProduction + Math.round(Math.random() * 3 - 0);
        player.provTypeManpower = player.provTypeProduction + Math.round(Math.random() * 4 - 0);
        document.getElementById('provinces').innerHTML = player.provinces;
        document.getElementById('pTax').innerHTML = player.provTypeTax;
        document.getElementById('pProduction').innerHTML = player.provTypeProduction;
        document.getElementById('pManpower').innerHTML = player.provTypeManpower;
        document.getElementById('income').innerHTML = player.income;
        document.getElementById('provCost').innerHTML = provCost;
    } else {
        return;
    };
    var nextCost = Math.floor(20 * Math.pow(1.10, (player.provinces - 1)));
    document.getElementById('provCost').innerHTML = nextCost;
};

//attack province





//calculate building slots per province
function getSlots() {
    player.buildingSlots = player.provinces * 20;
    document.getElementById('totalSlots').innerHTML = player.buildingSlots;
};

function getDev() {
    var totalDevelopment = player.provTypeManpower + player.provTypeTax + player.provTypeProduction;
    document.getElementById('totalDev').innerHTML = totalDevelopment;
};

function getMoney() {
    document.getElementById('totalMoney').innerHTML = player.totalMoney.toFixed(2);
};

function getIncome() {
    document.getElementById('income').innerHTML = player.income.toFixed(2);
};


//develop provTypeTax
function devProvTypeTax() {
    var devCost = player.provTypeManpower + player.provTypeTax + player.provTypeProduction;
    if(player.totalMoney >= devCost) {
        player.totalMoney = player.totalMoney - devCost;
        player.provTypeTax++;
        document.getElementById('pTax').innerHTML = player.provTypeTax;
        document.getElementById('totalDev').innerHTML = totalDevelopment;
        document.getElementById('totalMoney').innerHTML = player.totalMoney.toFixed(2);
        document.getElementById('income').innerHTML = player.income;
    };
    var nextCost = Math.floor(10 * Math.pow(1.10, devCost - 3));
    document.getElementById('devCost').innerHTML = nextCost;
};

//function of provTypeTax
function provTypeTaxIncome() {
    var provTaxIncome = 0.1;
    provTaxIncome = Math.round(provTaxIncome * player.provTypeTax);
    player.totalMoney = player.totalMoney + provTaxIncome;
    document.getElementById('totalMoney').innerHTML = player.totalMoney.toFixed(2);
    document.getElementById('income').innerHTML = player.income;
};





//develop provTypeProduction
function devProvTypeProduction() {
    if(player.totalMoney >= player.developmentCost) {
        player.totalMoney = player.totalMoney - player.developmentCost;
        player.provTypeProduction++;
        document.getElementById('pProduction').innerHTML = player.provTypeProduction;
        document.getElementById('totalDev').innerHTML = totalDevelopment;
        document.getElementById('totalMoney').innerHTML = player.totalMoney.toFixed(2);
    };
    var nextCost = Math.floor(10 * Math.pow(1.10, totalDevelopment));
    document.getElementById('devCost').innerHTML = nextCost;
};

//function of provTypeProduction
function provTypeProductionIncome() {
    var provProductionIncome = 0.1;
    provProductionIncome = provProductionIncome * player.provTypeProduction;
    player.totalMoney = player.totalMoney + provProductionIncome;
    document.getElementById('totalMoney').innerHTML = player.totalMoney.toFixed(2);
};





//develop provTypeManpower
function devProvTypeManpower() {
    if(player.totalMoney >= player.developmentCost) {
        player.totalMoney = player.totalMoney - player.developmentCost;
        player.provTypeManpower++;
        document.getElementById('pManpower').innerHTML = player.provTypeManpower;
        document.getElementById('totalDev').innerHTML = totalDevelopment;
        document.getElementById('totalMoney').innerHTML = player.totalMoney.toFixed(2);
    };
    var nextCost = Math.floor(10 * Math.pow(1.10, totalDevelopment));
    document.getElementById('devCost').innerHTML = nextCost;
};

//function of provTypeManpowerIncome
function provTypeManpowerIncome() {
    if(player.manpower < player.manpowerCap) {
        player.manpower = player.manpower + (player.provManpowerIncome * player.provTypeManpower);
        document.getElementById('manpower').innerHTML = player.manpower.toFixed(2);
    } else {
        if(player.manpower > player.manpowerCap) {
            player.manpower = player.manpowerCap;
            document.getElementById('manpower').innerHTML = player.manpower.toFixed(2);
        };
    };
};

//function for increasing manpower every 10 manpower development
function manpowerCapIncrease() {
    var x = 10;
    if(player.provTypeManpower >= x) {
        var i = 1;
        x *= i;
        i += 1;
        player.manpowerCap += 1;
    };
    document.getElementById('manpower').innerHTML = player.manpower.toFixed(2);
};





//purchase temple
function buyTemple() {
    if(player.totalMoney >= player.templeCost) {
        player.totalMoney = player.totalMoney - player.templeCost;
        player.temple++;
        document.getElementById('temple').innerHTML = player.temple;
        document.getElementById('totalMoney').innerHTML = player.totalMoney.toFixed(2);
        document.getElementById('templeIncome').innerHTML = templeIncome.toFixed(2);
    };
};

//function of temple
function templeIncrease() {
    var templeIncome = 0.1 * player.provTypeTax;
    templeIncome = templeIncome * player.temple;
    player.totalMoney = player.totalMoney + templeIncome;
    document.getElementById('totalMoney').innerHTML = player.totalMoney;
    document.getElementById('templeIncome').innerHTML = templeIncome.toFixed(2);
    document.getElementById('income').innerHTML = player.income.toFixed(2);
};

//purchase workshop
function buyWorkshop() {
    if(player.totalMoney >= player.workshopCost) {
        player.totalMoney = player.totalMoney - player.workshopCost;
        player.workshop++;
        document.getElementById('workshop').innerHTML = player.workshop;
        document.getElementById('totalMoney').innerHTML = player.totalMoney.toFixed(2);
    };
};

//function of workshop
function workshopIncrease() {
    var workshopIncome = 0.1 * player.provTypeProduction;
    workshopIncome = workshopIncome * player.workshop;
    player.totalMoney = player.totalMoney + workshopIncome;
    document.getElementById('totalMoney').innerHTML = player.totalMoney;
    document.getElementById('workshopIncome').innerHTML = workshopIncome.toFixed(2);
    document.getElementById('income').innerHTML = player.income.toFixed(2);
};





//purchase infantry
function purchaseInfantry() {
    if(player.totalMoney >= player.infantryCost) {
        player.infantry++;
        player.totalMoney = player.totalMoney - player.infantryCost;
    };
};

//purchase cavalry
function purchaseCavalry() {
    if(player.totalMoney >= player.cavalryCost) {
        player.cavalryAmount++;
        player.totalMoney = player.totalMoney - player.cavalryCost;
    };
};

//purchase cannon
function purchaseCannon() {
    if(player.totalMoney >= player.cannonCost) {
        player.cannonAmount++;
        player.totalMoney = player.totalMoney - player.cannonCost;
    };
};





//achievements




window.setInterval(function(){
    getDev();
    getSlots();
    getMoney();
    getIncome();
    manpowerCapIncrease();
}, 50);


window.setInterval(function(){
    provTypeTaxIncome(player.provTypeTax);
    provTypeManpowerIncome(player.provTypeManpower);
    provTypeProductionIncome(player.provTypeProduction);
    workshopIncrease(workshop);
    templeIncrease(temple);
}, 1000);