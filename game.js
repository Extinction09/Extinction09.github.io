var player = {


        //currency
        gold: {
            num: 7,
            gain: 0,
        },
        influence: 0,
        //commerce ships
        cog: {
            num: 0,
            price: 7,
            influence: 3,
            gain: 1,
            income: 0,
        },
        schooner: {
            num: 0,
            price: 100,
            influence: 7,
            infMin: 75,
            gain: 10,
            income: 0,
        },
        barquentine: {
            num: 0,
            price: 2750,
            influence: 25,
            infMin: 215,
            gain: 125,
            income: 0,
        },
        clipper: {
            num: 0,
            price: 25000,
            influence: 75,
            infMin: 750,
            gain: 375,
            income: 0,
        },
        //fighting ships - gives more influence than commerce ships, but less money
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
            price: 27750,
            incluence: 135,
            infMin: 925,
            gain: 500,
            income: 0,
        },
        mow: 0,  // man of war
        sotl: 0,  // ship of the line

        //land based economy
        tavern: {
            num: 0,
            price: 15000,
            influence: 125,
            infMin: 500,
            gain: 125,
            income: 0,
        },
        plantation: {
            num: 0,
            price: 45075,
            influence: 375,
            infMin: 1750,
            gain: 1250,
            income: 0,
        },
        
        fortress: {
            num: 0,
            price: 50000,
            influence: 1250,
            infMin: 2000,
            gain: 350,
            income: 0,
        },   
};
var achievements = {
    unlocks: {
        cog: 0,
        gunboat: 0,
        schooner: 0,
        brig: 0,
        barquentine: 0,
        clipper: 0,
        frigate: 0,
        mow: 0,
        sotl: 0,
        //buildings
        tavern: 0,
        plantation: 0,
        fortress: 0,
    },     
};
var unlocks = {
        cog: {
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

//function for buying a cog
function buyCog() {
    if(player.gold.num >= player.cog.price) {
        player.cog.num++;
        player.gold.num -= player.cog.price;
        player.influence += player.cog.influence;
        player.cog.income = player.cog.num * player.cog.gain;
        gameLog('Ye bought yerself a cog!');

        //handles unlock 1
        if(player.cog.num > 9 && unlocks.cog.a1 != 1) {
            gameLog('Yer cogs have become more profitable! (+1 to Cog Income)');
            player.cog.gain++;
            unlocks.cog.a1 = 1;
            document.getElementById('cogGain').innerHTML = player.cog.income;
        };
        //handles unlock 2
        if(player.cog.num > 19 && unlocks.cog.a2 != 1){
            gameLog('Yer cogs have been upgraded! (x2 Cog Income, 10% Cog Price Reduction)');
            player.cog.gain *= 2;
            player.cog.price *= 0.90;
            unlocks.cog.a2 = 1;
            document.getElementById('cogGain').innerHTML = player.cog.income;
        };
        //handles unlock 3
        if(player.cog.num > 29 && unlocks.cog.a3 != 1){
            gameLog('Bigger hulls, better buildin\' for yer cogs! (X5 Cog Income, +50 influence, 15% Cog Price Reduction)');
            player.cog.gain *= 5;
            player.influence += 50;
            player.cog.price *= 0.85;
            unlocks.cog.a3 = 1;
            document.getElementById('cogGain').innerHTML = player.cog.income;
            document.getElementById('cogInf').innerHTML = player.cog.influence;
        };

    } else if(player.gold.num < player.cog.price){
        gameLog('Ye \'aven\'t enough gold fer that, Cap\'n.');
    } else {
        return;
    };
    player.cog.price = Math.floor(9 * Math.pow(1.30, player.cog.num - 1));
    document.getElementById('cogCost').innerHTML = player.cog.price;
    document.getElementById('cogNum').innerHTML = player.cog.num;
    document.getElementById('cogGain').innerHTML = player.cog.income;
    document.getElementById('cogInf').innerHTML = player.cog.influence; 
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
        gameLog('A schooner? What are ye going to do with that?');

        //handles unlock 1
        if(player.schooner.num > 4 && unlocks.schooner.a1 != 1) {
            gameLog('Yer crews have become more experienced! (+5 to Schooner Income)');
            player.schooner.gain += 5;
            unlocks.schooner.a1 = 1;
            document.getElementById('schoGain').innerHTML = player.schooner.income;
            document.getElementById('schoCost').innerHTML = player.schooner.price;
        };
        //handles unlock 2
        if(player.schooner.num > 9 && unlocks.schooner.a2 != 1) {
            gameLog('Yer fleet has grown big enough to attract influential merchants! (+7 to Schooner Income, +50 Influence)');
            player.schooner.gain += 7;
            player.influence += 50;
            unlocks.schooner.a2 = 1;
            document.getElementById('influence').innerHTML = player.influence;
            document.getElementById('schoGain').innerHTML = player.schooner.income;
            document.getElementById('schoCost').innerHTML = player.schooner.price;
        };
    } else if (player.gold.num < player.schooner.price || player.influence < player.schooner.infMin){
        gameLog('Ye \'aven\'t the resources to do that!');
    } else {
        return;
    };
    player.schooner.price = Math.floor(127 * Math.pow(1.27, player.schooner.num - 1));
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
        gameLog('A handsome vessel, perfect for bein\' "civil".')
    } else {
        gameLog('Keep an eye on yer resources, Cap\'n!')
    };
    player.barquentine.price = Math.floor(3217 * Math.pow(1.17, player.barquentine.num - 1));
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
        gameLog('Blimey! Ye now\'ve a clipper!')
    } else {
        gameLog('Check yer resources, Capn\'n!')
    }
    player.clipper.price = Math.floor(26000 * Math.pow(1.04, player.clipper.num - 1));
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
        gameLog('Shiver me timbers! A ship to feel slightly threatened by!')
        //handles unlock 1
        if(player.gunboat.num > 4 && unlocks.gunboat.a1 != 1) {
            gameLog('Yer crews have gotten better at privateering, but they demand more wages, Cap\'n. (+1 to Gunboat Income, x1.02 increase to Gunboat Price)');
            player.gunboat.gain++;
            player.gunboat.price *= 1.02;
            unlocks.gunboat.a1 = 1;
            document.getElementById('gunGain').innerHTML = player.gunboat.income;
            document.getElementById('gunCost').innerHTML = player.gunboat.price;
        };
        //handles unlock 2
        if(player.gunboat.num > 14 && unlocks.gunboat.a2 != 1) {
            gameLog('The Gunboats have been updated for current times, Cap\'n! (x3 increase to Gunboat Income)');
            player.gunboat.gain *= 3;
            unlocks.gunboat.a2 = 1;
            document.getElementById('gunGain').innerHTML = player.gunboat.income;
        };
    } else {
        gameLog('Avast Cap\'n, ye\'ve not enough resources!');
    }; 
    player.gunboat.price = Math.floor(20 * Math.pow(1.35, player.gunboat.num - 1));
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
        //handles unlock 1
        if(player.brig.num > 4 && unlocks.brig.a1 != 1) {
            gameLog('Larger brigs have given ye more cannons! (+3 to Brig Income)');
            player.brig.gain += 3;
            unlocks.brig.a1 = 1;
            document.getElementById('brigGain').innerHTML = player.brig.income;
        };

    } else {
        gameLog('Ye be too poor, Cap\'n.');
    };
    player.brig.price = Math.floor(179 * Math.pow(1.33, player.brig.num - 1));
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
        gameLog('Not yet, Cap\'n');
    };
    player.frigate.price = Math.floor(4000 * Math.pow(1.28, player.frigate.num - 1));
    document.getElementById('frigCost').innerHTML = player.frigate.price;
    document.getElementById('frigNum').innerHTML = player.frigate.num;
    document.getElementById('frigGain').innerHTML = player.frigate.income;
    document.getElementById('frigInf').innerHTML = player.frigate.influence;
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
        gameLog('A perfect place to splice the mainbrace, to get loaded to the gunwales, to engorge on some Nelson\'s folly! You get the idea, Cap\'n.');
        //handles unlock 1
    } else {
        gameLog('Now\'s not a time to be squiffy, Cap\'n. Get more resources!');
    };
    player.tavern.price = Math.floor(15750 * Math.pow(1.05, player.tavern.num - 1));
    document.getElementById('tavCost').innerHTML = player.tavern.price;
    document.getElementById('tavNum').innerHTML = player.tavern.num;
    document.getElementById('tavGain').innerHTML = player.tavern.income;
    document.getElementById('tavInf').innerHTML = player.tavern.influence;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

//updates boat prices, costs, and gain
function resourceUpdate() {
    document.getElementById('cogCost').innerHTML = player.cog.price;
    document.getElementById('cogNum').innerHTML = player.cog.num;
    document.getElementById('cogGain').innerHTML = player.cog.income;
    document.getElementById('cogInf').innerHTML = player.cog.influence;
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
};


function influenceUpdate() {
    //handles unlock of gunboat
    if (player.influence >= player.gunboat.infMin && achievements.unlocks.gunboat != 1) {
        gameLog('Yer gonna need to defend these here cogs! (Unlocked Gunboat)');
        achievements.unlocks.gunboat = 1;
        document.getElementById('gunboatOutline').style.display = 'block';
        document.getElementById('milOutline').style.display = 'block';
    };
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
        gameLog('The pirate merchants have caught on to your expansion! (Unlocked Barquentine)');
        achievements.unlocks.frigate = 1;
        document.getElementById('frigOutline').style.display = 'block';
    };
    //handles unlock of tavern
    if(player.influence >= player.tavern.infMin && achievements.unlocks.tavern != 1) {
        gameLog('Ye wish to get into the grog business? Taverns be the place!');
        achievements.unlocks.tavern = 1;
        document.getElementById('tavOutline').style.display = 'block';
        document.getElementById('landOutline').style.display = 'block'
    };
};
//update and check for achievements
/*function updateAchievements(){
    if (achievements.unlocks.gunboat) document.getElementById('cogA1').style.display = "block";
    if (achievements.cog.a2) document.getElementById('cogA2').style.display = "block";
    if (achievements.cog.a3) document.getElementById('cogA3').style.display = "block";
    if (achievements.cog.a4) document.getElementById('cogA4').style.display = "block";
    if (achievements.cog.a5) document.getElementById('cogA5').style.display = "block";
    if (achievements.schooner.a1) document.getElementById('schoA1').style.display = "block";
    if (achievements.schooner.a2) document.getElementById('schoA2').style.display = "block";
    if (achievements.schooner.a3) document.getElementById('schoA3').style.display = "block";
    if (achievements.schooner.a4) document.getElementById('schoA4').style.display = "block";
    if (achievements.schooner.a5) document.getElementById('schoA5').style.display = "block";
    if (achievements.barquentine.a1) document.getElementById('barqA1').style.display = "block";
    if (achievements.barquentine.a2) document.getElementById('barqA2').style.display = "block";
    if (achievements.barquentine.a3) document.getElementById('barqA3').style.display = "block";
    if (achievements.barquentine.a4) document.getElementById('barqA4').style.display = "block";
    if (achievements.barquentine.a5) document.getElementById('barqA5').style.display = "block";
    
}; */

//function of gain
function goldGain() {
    player.gold.num += player.cog.num * player.cog.gain;
    player.gold.num += player.schooner.num * player.schooner.gain;
    player.gold.num += player.barquentine.num * player.barquentine.gain;
    player.gold.num += player.gunboat.num * player.gunboat.gain;
    player.gold.num += player.frigate.num * player.frigate.gain;
    player.gold.num += player.brig.num * player.brig.gain;
    player.gold.num += player.tavern.num * player.tavern.gain;
    document.getElementById('gold').innerHTML = player.gold.num;
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
//updateAchievements();
resourceUpdate();
influenceUpdate();
goldGain();
}, 1000);