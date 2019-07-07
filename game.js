var player = {


        //currency
        gold: {
            num: 7,
            gain: 0,
        },
        influence: 0,
        //commerce ships
        sloop: {
            num: 0,
            price: 7,
            influence: 3,
            gain: 1,
            income: 0,
        },
        caravel: {
            num: 0,
            price: 100,
            influence: 7,
            infMin: 75,
            gain: 10,
            income: 0,
        },
        schooner: {
            num: 0,
            price: 2750,
            influence: 25,
            infMin: 215,
            gain: 70,
            income: 0,
        },
        barquentine: {
            num: 0,
            price: 12550,
            influence: 75,
            infMin: 875,
            gain: 185,
            income: 0,
        },
        clipper: {
            num: 0,
            price: 32550,
            influence: 90,
            infMin: 3000,
            gain: 315,
            income: 0,
        },
        //military ships - gives more influence than commerce ships, but less money
        gunboat: {
            num: 0,
            price: 15,
            influence: 5,
            infMin: 15,
            gain: 1,
            income: 0,
        },
        brig: {
            num: 0,
            price: 135,
            influence: 15,
            infMin: 90,
            gain: 7,
            income: 0,
        },
        frigate: {
            num: 0,
            price: 3125,
            influence: 55,
            infMin: 250,
            gain: 45,
            income: 0,
        },
        galleon: {
            num: 0,
            price: 19750,
            influence: 135,
            infMin: 1500,
            gain: 95,
            income: 0,
        },
        mow: {// man of war
            num: 0,
            price: 75000,
            influence: 475,
            infMin: 7025,
            gain: 250,
            income: 0,
        },  
        sotl: 0,  // ship of the line

        //land based economy
        tavern: {
            num: 0,
            price: 15000,
            influence: 115,
            infMin: 500,
            gain: 125,
            income: 0,
        },
        mansion: {
            num: 0,
            price: 25525,
            influence: 95,
            infMin: 3500,
            gain: 450,
            income: 0,
        },
        plantation: {
            num: 0,
            price: 65050,
            influence: 375,
            infMin: 11250,
            gain: 1250,
            income: 0,
        },
        fortress: {
            num: 0,
            price: 125000,
            influence: 1250,
            infMin: 10000,
            gain: 550,
            income: 0,
        },   
};
var achievements = {
    unlocks: {
        //merchant ships
        sloop: 0,
        caravel: 0,
        schooner: 0,
        barquentine: 0,
        clipper: 0,
        //military ships
        gunboat: 0,
        brig: 0,
        frigate: 0,
        galleon: 0,
        mow: 0,
        sotl: 0,
        //buildings
        tavern: 0,
        mansion: 0,
        plantation: 0,
        fortress: 0,
    },     
};
var unlocks = {
    //merchant ships
        sloop: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },
        caravel: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },
        schooner: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },
        barquentine: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },
        clipper: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },
        //mlitary ships
        gunboat: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },
        brig: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },
        frigate: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },
        galleon: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },
        //land based economy
        tavern: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },
        mansion: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },
    };

var logRepeat = 1;

//info box
var modal = document.getElementById("infoBox");
var btn = document.getElementById("infoButton");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
};
span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};


function ruinFun() {
    player.gold.num = 10000000;
    player.influence = 10000000;
};

//function for buying a sloop
function buySloop() {
    if(player.gold.num >= player.sloop.price) {
        player.sloop.num++;
        player.gold.num -= player.sloop.price;
        player.influence += player.sloop.influence;
        player.sloop.income = player.sloop.num * player.sloop.gain;
        gameLog('Ye bought yerself a Sloop!');
    } else {
        gameLog('Ye \'aven\'t enough gold fer that, Cap\'n.');
    };
    player.sloop.price = Math.floor(7 * Math.pow(1.33, player.sloop.num));
    document.getElementById('sloopCost').innerHTML = player.sloop.price;
    document.getElementById('sloopNum').innerHTML = player.sloop.num;
    document.getElementById('sloopGain').innerHTML = player.sloop.income;
    document.getElementById('sloopInf').innerHTML = player.sloop.influence; 
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
    
};

//function for buying a caravel
function buyCara() {
    if(player.gold.num >= player.caravel.price && player.influence >= player.caravel.infMin) {
        player.caravel.num++;
        player.gold.num -= player.caravel.price;
        player.influence += player.caravel.influence;
        player.caravel.income = player.caravel.num * player.caravel.gain;
        gameLog('A Caravel - a perfect fit for a passive pirate.');
    } else {
        gameLog('Get more resources, Cap\'n!');
    };
    player.caravel.price = Math.floor(100 * Math.pow(1.28, player.caravel.num));
    document.getElementById('caraCost').innerHTML = player.caravel.price;
    document.getElementById('caraNum').innerHTML = player.caravel.num;
    document.getElementById('caraGain').innerHTML = player.caravel.income;
    document.getElementById('caraInf').innerHTML = player.caravel.influence; 
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

//function for buying a schooner
function buySchooner() {
    if(player.gold.num >= player.schooner.price && player.influence >= player.schooner.infMin) {
        player.schooner.num++;
        player.gold.num -= player.schooner.price;
        player.influence += player.schooner.influence;
        player.schooner.income = player.schooner.num * player.schooner.gain;
        gameLog('A Schooner? What are ye going to do with that?');
    } else {
        gameLog('Ye \'aven\'t the resources to do that!');
    };
    player.schooner.price = Math.floor(2750 * Math.pow(1.23, player.schooner.num));
    document.getElementById('schoCost').innerHTML = player.schooner.price;
    document.getElementById('schoNum').innerHTML = player.schooner.num;
    document.getElementById('schoGain').innerHTML = player.schooner.income;
    document.getElementById('schoInf').innerHTML = player.schooner.influence;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

//function for buying a barquentine
function buyBarq() {
    if(player.gold.num >= player.barquentine.price && player.influence >= player.barquentine.infMin) {
        player.barquentine.num++;
        player.gold.num -= player.barquentine.price;
        player.influence += player.barquentine.influence;
        player.barquentine.income = player.barquentine.num * player.barquentine.gain;
        gameLog('A handsome vessel, perfect for bein\' "civil".');
    } else {
        gameLog('Keep an eye on yer resources, Cap\'n!')
    };
    player.barquentine.price = Math.floor(12550 * Math.pow(1.13, player.barquentine.num));
    document.getElementById('barqCost').innerHTML = player.barquentine.price;
    document.getElementById('barqNum').innerHTML = player.barquentine.num;
    document.getElementById('barqGain').innerHTML = player.barquentine.income;
    document.getElementById('barqInf').innerHTML = player.barquentine.influence;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

//function for buying a clipper
function buyClip() {
    if(player.gold.num >= player.clipper.price && player.influence >= player.clipper.infMin) {
        player.clipper.num++;
        player.gold.num -= player.clipper.price;
        player.influence += player.clipper.influence;
        player.clipper.income = player.clipper.num * player.clipper.gain;
        gameLog('Blimey! Ye now\'ve a clipper! One of the fastest ships in world, it is.');
    } else {
        gameLog('Check yer resources, Capn\'n!')
    }
    player.clipper.price = Math.floor(32550 * Math.pow(1.03, player.clipper.num));
    document.getElementById('clipCost').innerHTML = player.clipper.price;
    document.getElementById('clipNum').innerHTML = player.clipper.num;
    document.getElementById('clipGain').innerHTML = player.clipper.income;
    document.getElementById('clipInf').innerHTML = player.clipper.influence;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};



//function for buying a gunboat
function buyGB() {
    if(player.gold.num >= player.gunboat.price && player.influence >= player.gunboat.infMin) {
        player.gunboat.num++;
        player.gold.num -= player.gunboat.price;
        player.influence += player.gunboat.influence;
        player.gunboat.income = player.gunboat.num * player.gunboat.gain;
        gameLog('Shiver me timbers! A ship to feel slightly threatened by!');
    } else {
        gameLog('Avast Cap\'n, ye\'ve not enough resources!');
    }; 
    player.gunboat.price = Math.floor(15 * Math.pow(1.37, player.gunboat.num));
    document.getElementById('gunCost').innerHTML = player.gunboat.price;
    document.getElementById('gunNum').innerHTML = player.gunboat.num;
    document.getElementById('gunGain').innerHTML = player.gunboat.income;
    document.getElementById('gunInf').innerHTML = player.gunboat.influence;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

//function for buying a brig
function buyBrig() {
    if(player.gold.num >= player.brig.price && player.influence >= player.brig.infMin) {
        player.brig.num++;
        player.gold.num -= player.brig.price;
        player.influence += player.brig.influence;
        player.brig.income = player.brig.num * player.brig.gain;
        gameLog('A bigger boat, fit for bigger plans!');
    } else {
        gameLog('Ye be too poor, Cap\'n.');
    };
    player.brig.price = Math.floor(135 * Math.pow(1.30, player.brig.num));
    document.getElementById('brigCost').innerHTML = player.brig.price;
    document.getElementById('brigNum').innerHTML = player.brig.num;
    document.getElementById('brigGain').innerHTML = player.brig.income;
    document.getElementById('brigInf').innerHTML = player.brig.influence;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

//function for buying a frigate
function buyFrig() {
    if(player.gold.num >= player.frigate.price && player.influence >= player.frigate.infMin) {
        player.frigate.num++;
        player.gold.num -= player.frigate.price;
        player.influence += player.frigate.influence;
        player.frigate.income = player.frigate.num * player.frigate.gain;
        gameLog('Now that\'s a warship, Cap\'n');
    } else {
        gameLog('Not \'appenin\', Cap\'n');
    };
    player.frigate.price = Math.floor(3125 * Math.pow(1.25, player.frigate.num));
    document.getElementById('frigCost').innerHTML = player.frigate.price;
    document.getElementById('frigNum').innerHTML = player.frigate.num;
    document.getElementById('frigGain').innerHTML = player.frigate.income;
    document.getElementById('frigInf').innerHTML = player.frigate.influence;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

//function for buying a galleon
function buyGall() {
    if(player.gold.num >= player.galleon.price && player.influence >= player.galleon.infMin) {
        player.galleon.num++;
        player.gold.num -= player.galleon.price;
        player.influence += player.galleon.influence;
        player.galleon.income = player.galleon.num * player.galleon.gain;
        gameLog('Cap\'n, ye be sure yer not building a war fleet?');
    } else {
        gameLog('Not chance, Cap\'n');
    };
    player.galleon.price = Math.floor(13525 * Math.pow(1.15, player.galleon.num));
    document.getElementById('gallCost').innerHTML = player.galleon.price;
    document.getElementById('gallNum').innerHTML = player.galleon.num;
    document.getElementById('gallGain').innerHTML = player.galleon.income;
    document.getElementById('gallInf').innerHTML = player.galleon.influence;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

//function for buying a tavern
function buyTav() {
    if(player.gold.num >= player.tavern.price && player.influence >= player.tavern.infMin) {
        player.tavern.num++;
        player.gold.num -= player.tavern.price;
        player.influence += player.tavern.influence;
        player.tavern.income = player.tavern.num * player.tavern.gain;
        gameLog('A perfect place to splice the mainbrace, to get loaded to the gunwales, to engorge on some Nelson\'s folly! Well, you get the idea, Cap\'n.');
    } else {
        gameLog('Now\'s not a time to be squiffy, Cap\'n. Get more resources!');
    };
    player.tavern.price = Math.floor(15000 * Math.pow(1.09, player.tavern.num));
    document.getElementById('tavCost').innerHTML = player.tavern.price;
    document.getElementById('tavNum').innerHTML = player.tavern.num;
    document.getElementById('tavGain').innerHTML = player.tavern.income;
    document.getElementById('tavInf').innerHTML = player.tavern.influence;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

//function for buying a mansion
function buyMans() {
    if(player.gold.num >= player.mansion.price && player.influence >= player.mansion.infMin) {
        player.mansion.num++;
        player.gold.num -= player.mansion.price;
        player.influence += player.mansion.influence;
        player.mansion.income = player.mansion.num * player.mansion.gain;
        gameLog('Are ye looking to settle down now, Cap\'n?');
    } else {
        gameLog('It be a sign, Cap\'n.');
    };
    player.mansion.price = Math.floor(25525 * Math.pow(1.09, player.mansion.num));
    document.getElementById('mansCost').innerHTML = player.mansion.price;
    document.getElementById('mansNum').innerHTML = player.mansion.num;
    document.getElementById('mansGain').innerHTML = player.mansion.income;
    document.getElementById('mansInf').innerHTML = player.mansion.influence;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

//updates boat prices, costs, and gain
function resourceUpdate() {
    document.getElementById('sloopCost').innerHTML = player.sloop.price;
    document.getElementById('sloopNum').innerHTML = player.sloop.num;
    document.getElementById('sloopGain').innerHTML = player.sloop.income;
    document.getElementById('sloopInf').innerHTML = player.sloop.influence;
    document.getElementById('caraCost').innerHTML = player.caravel.price;
    document.getElementById('caraNum').innerHTML = player.caravel.num;
    document.getElementById('caraGain').innerHTML = player.caravel.income;
    document.getElementById('caraInf').innerHTML = player.caravel.influence;
    document.getElementById('schoCost').innerHTML = player.schooner.price;
    document.getElementById('schoNum').innerHTML = player.schooner.num;
    document.getElementById('schoGain').innerHTML = player.schooner.income;
    document.getElementById('schoInf').innerHTML = player.schooner.influence;
    document.getElementById('barqCost').innerHTML = player.barquentine.price;
    document.getElementById('barqNum').innerHTML = player.barquentine.num;
    document.getElementById('barqGain').innerHTML = player.barquentine.income;
    document.getElementById('barqInf').innerHTML = player.barquentine.influence;
  /*document.getElementById('clipCost').innerHTML = player.clipper.price;
    document.getElementById('clipNum').innerHTML = player.clipper.num;
    document.getElementById('clipGain').innerHTML = player.clipper.income;
    document.getElementById('clipInf').innerHTML = player.clipper.influence;*/
    document.getElementById('gunCost').innerHTML = player.gunboat.price;
    document.getElementById('gunNum').innerHTML = player.gunboat.num;
    document.getElementById('gunGain').innerHTML = player.gunboat.income;
    document.getElementById('gunInf').innerHTML = player.gunboat.influence;
    document.getElementById('brigCost').innerHTML = player.brig.price;
    document.getElementById('brigNum').innerHTML = player.brig.num;
    document.getElementById('brigGain').innerHTML = player.brig.income;
    document.getElementById('brigInf').innerHTML = player.brig.influence;
    document.getElementById('frigCost').innerHTML = player.frigate.price;
    document.getElementById('frigNum').innerHTML = player.frigate.num;
    document.getElementById('frigGain').innerHTML = player.frigate.income;
    document.getElementById('frigInf').innerHTML = player.frigate.influence;
    document.getElementById('tavCost').innerHTML = player.tavern.price;
    document.getElementById('tavNum').innerHTML = player.tavern.num;
    document.getElementById('tavGain').innerHTML = player.tavern.income;
    document.getElementById('tavInf').innerHTML = player.tavern.influence;
    document.getElementById('influence').innerHTML = player.influence;
};


function influenceUpdate() {
    //handles unlock of gunboat
    if (player.influence >= player.gunboat.infMin && achievements.unlocks.gunboat != 1) {
        gameLog('Yer gonna need to defend these here cogs! (Unlocked Gunboat)');
        achievements.unlocks.gunboat = 1;
        document.getElementById('gunboatOutline').style.display = 'block';
        document.getElementById('milOutline').style.display = 'block';
    };
    //handles unlock of caravel
    if (player.influence >= player.caravel.infMin && achievements.unlocks.caravel != 1) {
        gameLog('A fine trading ship she is (Unlocked Caravel');
        achievements.unlocks.caravel = 1;
        document.getElementById('caravelOutline').style.display = 'block';
    }
    //handles unlock of schooner
    if(player.influence >= player.schooner.infMin && achievements.unlocks.schooner != 1) {
        gameLog('Bigger boats? Blimey! (Unlocked Schooner)');
        achievements.unlocks.schooner = 1;
        document.getElementById('schoonerOutline').style.display = 'block';
    };
    //handles unlock of brig
    if(player.influence >= player.brig.infMin && achievements.unlocks.brig != 1) {
        gameLog('Yer recent expansions have given ye the opportunity to purchase, or bribe, the local warships. (Unlocked Brig)');
        achievements.unlocks.brig = 1;
        document.getElementById('brigOutline').style.display = 'block';
    };
    //handles unlock of barquentine
    if(player.influence >= player.barquentine.infMin && achievements.unlocks.barquentine != 1) {
        gameLog('The pirate merchants have caught on to your expansion! (Unlocked Barquentine)');
        achievements.unlocks.barquentine = 1;
        document.getElementById('barqOutline').style.display = 'block';
    };
    //handles unlock of frigate
    if(player.influence >= player.frigate.infMin && achievements.unlocks.frigate != 1) {
        gameLog('The Spanish have, you could say, "let go" of some of their ships, Cap\'n. (Unlocked Frigate)');
        achievements.unlocks.frigate = 1;
        document.getElementById('frigOutline').style.display = 'block';
    };
    //handles unlock of galleon
    if(player.influence >= player.galleon.infMin && achievements.unlocks.galleon != 1) {
        gameLog('Yer use of warships have gotten ye access to large fightin\' vessels, Cap\'n. (Unlocked Galleon)');
        achievements.unlocks.galleon = 1;
        document.getElementById('gallOutline').style.display = 'block';
    };
    //handles unlock of tavern
    if(player.influence >= player.tavern.infMin && achievements.unlocks.tavern != 1) {
        gameLog('Ye wish to get into the grog business? Taverns be the place! (Unlocked Tavern)');
        achievements.unlocks.tavern = 1;
        document.getElementById('tavOutline').style.display = 'block';
        document.getElementById('landOutline').style.display = 'block';
    };
    //handles unlock of mansion
    if(player.influence >= player.mansion.infMin && achievements.unlocks.mansion != 1) {
        gameLog('Decidin\' to settle down, Cap\'n? (Unlocked Mansion)');
        achievements.unlocks.mansion = 1;
        document.getElementById('mansOutline').style.display = 'block';
    };
};


//update and check for achievements
function updateAchievements() {
    //merchant ships
        //sloop achievements
            //handles unlock 1
                if(player.sloop.num >= 10 && unlocks.sloop.a1 != 1) {
                    gameLog('Yer Sloops have become more profitable! (x2 to Sloop Income)');
                    player.sloop.gain++;
                    unlocks.sloop.a1 = 1;
                    document.getElementById('sloopGain').innerHTML = player.sloop.income;
                };
            //handles unlock 2
                if(player.sloop.num >= 20 && unlocks.sloop.a2 != 1){
                    gameLog('Yer Sloops have been upgraded! (x2 Sloop Income, 10% Sloop Price Reduction)');
                    player.sloop.gain *= 2;
                    player.sloop.price *= 0.90;
                    unlocks.sloop.a2 = 1;
                    document.getElementById('sloopGain').innerHTML = player.sloop.income;
                };
            //handles unlock 3
                if(player.sloop.num >= 30 && unlocks.sloop.a3 != 1){
                    gameLog('Bigger hulls, better buildin\' for yer Sloops! (X5 Sloop Income, +50 influence, 20% Sloop Price Reduction)');
                    player.sloop.gain *= 5;
                    player.influence += 50;
                    player.sloop.price *= 0.80;
                    unlocks.sloop.a3 = 1;
                    document.getElementById('sloopGain').innerHTML = player.sloop.income;
                    document.getElementById('influence').innerHTML = player.influence;
                };
        //caravel achievements
            //handles unlock 1
                if(player.caravel.num >= 5 && unlocks.caravel.a1 != 1){
                    gameLog('Yer Caravels have become more efficient! (x3 to Caravel Income)');
                    player.caravel.gain *= 3;
                    unlocks.caravel.a1 = 1;
                    document.getElementById('caraGain').innerHTML = player.caravel.income;
                };
            //handles unlock 2
                if(player.caravel.num >= 10 && unlocks.caravel.a2 != 1){
                    gameLog('The Caravel hulls have been reduced in weight! (x2 to Caravel Income)');
                    player.caravel.gain *= 2;
                    unlocks.caravel.a2 = 1;
                    document.getElementById('caraGain').innerHTML = player.caravel.income;
                };
            //handles unlock 3
            if(player.caravel.num >= 20 && unlocks.caravel.a3 != 1){
                gameLog('The Caravel hulls have been reduced in weight! (25% Caravel Price Reduction)');
                player.caravel.price *= 0.75;
                unlocks.caravel.a3 = 1;
                document.getElementById('caraCost').innerHTML = player.caravel.price;
            };
        //schooner achievements
             //handles unlock 1
                if(player.schooner.num >= 5 && unlocks.schooner.a1 != 1) {
                    gameLog('Yer crews have become more experienced! (+5 to Schooner Income)');
                    player.schooner.gain += 5;
                    unlocks.schooner.a1 = 1;
                    document.getElementById('schoGain').innerHTML = player.schooner.income;
                };
            //handles unlock 2
                if(player.schooner.num >= 10 && unlocks.schooner.a2 != 1) {
                    gameLog('Yer fleet has grown big enough to attract influential merchants! (+7 to Schooner Income, +50 Influence)');
                    player.schooner.gain += 7;
                    player.influence += 50;
                    unlocks.schooner.a2 = 1;
                    document.getElementById('influence').innerHTML = player.influence;
                    document.getElementById('schoGain').innerHTML = player.schooner.income;
                    document.getElementById('schoCost').innerHTML = player.schooner.price;
                };
        //barquentine acheivements


    //military ships
        //gunboat achievements
            //handles unlock 1
                if(player.gunboat.num >= 5 && unlocks.gunboat.a1 != 1) {
                    gameLog('Yer crews have gotten better at privateering, but they demand more wages, Cap\'n. (+1 to Gunboat Income, x1.02 increase to Gunboat Price)');
                    player.gunboat.gain++;
                    player.gunboat.price *= 1.02;
                    unlocks.gunboat.a1 = 1;
                    document.getElementById('gunGain').innerHTML = player.gunboat.income;
                    document.getElementById('gunCost').innerHTML = player.gunboat.price;
                };
            //handles unlock 2
                if(player.gunboat.num >= 15 && unlocks.gunboat.a2 != 1) {
                    gameLog('The Gunboats have been updated for current times, Cap\'n! (x3 increase to Gunboat Income)');
                    player.gunboat.gain *= 3;
                    unlocks.gunboat.a2 = 1;
                    document.getElementById('gunGain').innerHTML = player.gunboat.income;
                };
            //handles unlock 3
                if(player.gunboat.num >= 25 && unlocks.gunboat.a3 != 1) {
                    gameLog('Upgrades to the gunboats\' sails make \'em faster, Cap\'n! (x2 increase to Gunboat Income)');
                    player.gunboat.gain *= 2;
                    unlocks.gunboat.a3 = 1;
                    document.getElementById('gunGain').innerHTML = player.gunboat.income;
                };
        //brig achievements
            //handles unlock 1
                if(player.brig.num >= 5 && unlocks.brig.a1 != 1) {
                    gameLog('Larger brigs have given ye more cannons! (+3 to Brig Income)');
                    player.brig.gain += 3;
                    unlocks.brig.a1 = 1;
                    document.getElementById('brigGain').innerHTML = player.brig.income;
                };
            //handles unlock 2
                if(player.brig.num >= 10 && unlocks.brig.a2 != 1) {
                    gameLog('Reinforced hulls can take more damage! (x2 to Brig Income)');
                    player.brig.gain *= 2;
                    unlocks.brig.a2 = 1;
                    document.getElementById('brigGain').innerHTML = player.brig.income;
                };
                if(player.brig.num >= 20 && unlocks.brig.a3 != 1) {
                    gameLog('Yer Brig hulls now require less materials! (35% Brig Price Reduction)');
                    player.brig.price *= 0.65;
                    unlocks.brig.a3 = 1;
                    document.getElementById('brigCost').innerHTML = player.brig.price;
                };
        //frigate achievements
            //handles unlock 1
                if(player.frigate.num >= 10 && unlocks.frigate.a1 != 1) {
                    gameLog('\'Avin\' more frigates in a formation makes them more effective! (x2 to Frigate Income)');
                    player.frigate.gain *= 2;
                    unlocks.frigate.a1 = 1;
                    document.getElementById('frigGain').innerHTML = player.frigate.income;
                };
        //galleon achievements


    //building achievements
        //tavern achievements

        //mansion achievements

        //plantation achievements

        //fortress achievements


};

//function of gain
function goldGain() {
    //merchant
    player.gold.num += player.sloop.num * player.sloop.gain;
    player.gold.num += player.caravel.num * player.caravel.gain;
    player.gold.num += player.schooner.num * player.schooner.gain;
    player.gold.num += player.barquentine.num * player.barquentine.gain;
    player.gold.num += player.clipper.num * player.clipper.gain;
    //military
    player.gold.num += player.gunboat.num * player.gunboat.gain;
    player.gold.num += player.brig.num * player.brig.gain;
    player.gold.num += player.frigate.num * player.frigate.gain;
    player.gold.num += player.galleon.num * player.galleon.gain;
    player.gold.num += player.mow.num * player.mow.gain;
    //land
    player.gold.num += player.tavern.num * player.tavern.gain;
    player.gold.num += player.mansion.num * player.mansion.gain;
    document.getElementById('gold').innerHTML = player.gold.num;
};

function calcIncome() {
    player.gold.gain += (player.sloop.income + player.caravel.income + player.schooner.income + player.barquentine.income + player.clipper.income + player.gunboat.income + player.frigate.income + player.galleon.income + player.tavern.income + player.mansion.income + player.plantation.income);
    document.getElementById('goldGain').innerHTML = player.gold.gain;
};

function gameLog(message) {
    if (document.getElementById('logL').innerHTML == message){
        logRepeat += 1;
        document.getElementById('log0').innerHTML = '<td id="logT">' + '</td><td id="logL">' + message + '</td><td id="logR">(x' + logRepeat + ')</td>';
    } else {
        logRepeat = 1;
        document.getElementById('log4').innerHTML = document.getElementById('log3').innerHTML
		document.getElementById('log3').innerHTML = document.getElementById('log2').innerHTML
		document.getElementById('log2').innerHTML = document.getElementById('log1').innerHTML
			//Since ids need to be unique, log1 strips the ids from the log0 elements when copying the contents.
		document.getElementById('log1').innerHTML = '<td>' + document.getElementById('logT').innerHTML + '</td><td>' + document.getElementById('logL').innerHTML + '</td><td>' + document.getElementById('logR').innerHTML + '</td>';
			//creates new contents with new time, message, and x1
        document.getElementById('log0').innerHTML = '<td id="logT">' + '</td><td id="logL">' + message + '</td><td id="logR">(x' + logRepeat + ')</td>';
    };  
};


window.setInterval(function(){
updateAchievements();
resourceUpdate();
influenceUpdate();
goldGain();
}, 1000);