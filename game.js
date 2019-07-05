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
            influence: 35,
            infMin: 215,
            gain: 65,
            income: 0,
        },
        clipper: {
            num: 0,
            price: 25000,
            influence: 100,
            infMin: 750,
            gain: 100,
            income: 0,
        },
        //fighting ships - gives more influence than commerce ships
        gunboat: {
            num: 0,
            price: 15,
            influence: 7,
            infMin: 15,
            gain: 1,
            income: 0,
        },
        brig: {
            num: 0,
            price: 135,
            influence: 20,
            infMin: 90,
            gain: 7,
            income: 0,
        },
        frigate: 0,
        galleon: 0,
        mow: 0,  // man of war
        sotl: 0,  // ship of the line

        //land based economy
        plantation: {
            num: 0,
            price: 7500,
            influence: 500,
            infMin: 1350,
            gain: 175,
            income: 0,
        },
        tavern: 0,
        fortress: 0,   
};
var achievements = {
    unlocks: {
        schooner: 0,
        clipper: 0,
        gunboat: 0,
        barquentine: 0,
        cog: 0,
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
        clipper: {
            a1: 0,
            a2: 0,
            a3: 0,
            a4: 0,
            a5: 0,
        },

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
        if(player.cog.num >= 10 && unlocks.cog.a1 != 1) {
            gameLog('Yer cogs have become more profitable! (+1 to Cog Income)');
            player.cog.gain++;
            unlocks.cog.a1 = 1;
            document.getElementById('cogGain').innerHTML = player.cog.income;
        };
        //handles unlock 2
        if(player.cog.num >= 20 && unlocks.cog.a2 != 1){
            gameLog('The ships have been upgraded! (Cog Income x2)');
            player.cog.gain *= 2;
            unlocks.cog.a2 = 1;
            document.getElementById('cogGain').innerHTML = player.cog.income;
        };

    } else if(player.gold.num < player.cog.price){
        gameLog('Ye \'aven\'t enough gold fer that!');
    } else {
        return;
    };
    player.cog.price = Math.floor(8 * Math.pow(1.28, player.cog.num - 1));
    document.getElementById('cogCost').innerHTML = player.cog.price;
    document.getElementById('cogNum').innerHTML = player.cog.num;
    document.getElementById('cogGain').innerHTML = player.cog.income; 
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
    } else if (player.gold.num < player.schooner.price || player.influence < player.schooner.infMin){
        gameLog('Ye \'aven\'t the resources to do that!');
    } else {
        return;
    };
    player.schooner.price = Math.floor(139 * Math.pow(1.39, player.schooner.num - 1));
    document.getElementById('schoCost').innerHTML = player.schooner.price;
    document.getElementById('schoNum').innerHTML = player.schooner.num;
    document.getElementById('schoGain').innerHTML = player.schooner.income;
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
        gameLog('A handsome vessel, perfect for bein\' civil!')
    } else {
        gameLog('Keep an eye on yer resources, Cap\'n!')
    };
    player.barquentine.price = Math.floor(4042 * Math.pow(1.47, player.barquentine.num - 1));
    document.getElementById('barqCost').innerHTML = player.barquentine.price;
    document.getElementById('barqNum').innerHTML = player.barquentine.num;
    document.getElementById('barqGain').innerHTML = player.barquentine.income;
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
    player.clipper.price = Math.floor(20 * Math.pow(1.47, player.clipper.num - 1));
    document.getElementById('clipCost').innerHTML = player.clipper.price;
    document.getElementById('clipNum').innerHTML = player.clipper.num;
    document.getElementById('clipGain').innerHTML = player.clipper.income;
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
    } else {
        gameLog('Avast Cap\'n, ye\'ve not enough resources!');
    }; 
    player.gunboat.price = Math.floor(20 * Math.pow(1.47, player.gunboat.num - 1));
    document.getElementById('gunCost').innerHTML = player.gunboat.price;
    document.getElementById('gunNum').innerHTML = player.gunboat.num;
    document.getElementById('gunGain').innerHTML = player.gunboat.income;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

function buyBrig() {
    if(player.gold.num >= player.brig.price || player.influence >= player.brig.infMin) {
        player.gunboat.num++;
        player.gold.num -= player.brig.price;
        player.influence += player.brig.influence;
        player.brig.income = player.brig.num * player.brig.num;
        gameLog('A bigger boat, fit for bigger plans!');

    } else {
        gameLog('Yer too poor, Cap\'n!');
    };
    player.brig.price = Math.floor(179 * Math.pow(1.33, player.brig.num - 1));
    document.getElementById('brigCost').innerHTML = player.brig.price;
    document.getElementById('brigNum').innerHTML = player.brig.num;
    document.getElementById('brigGain').innerHTML = player.brig.income;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};

//updates boat prices, costs, and gain
function resourceUpdate() {
    document.getElementById('cogCost').innerHTML = player.cog.price;
    document.getElementById('cogNum').innerHTML = player.cog.num;
    document.getElementById('cogGain').innerHTML = player.cog.income;
    document.getElementById('schoCost').innerHTML = player.schooner.price;
    document.getElementById('schoNum').innerHTML = player.schooner.num;
    document.getElementById('schoGain').innerHTML = player.schooner.income;
    document.getElementById('barqCost').innerHTML = player.barquentine.price;
    document.getElementById('barqNum').innerHTML = player.barquentine.num;
    document.getElementById('barqGain').innerHTML = player.barquentine.income;
    /*document.getElementById('clipCost').innerHTML = player.clipper.price;
    document.getElementById('clipNum').innerHTML = player.clipper.num;
    document.getElementById('clipGain').innerHTML = player.clipper.income;*/
    document.getElementById('gunCost').innerHTML = player.gunboat.price;
    document.getElementById('gunNum').innerHTML = player.gunboat.num;
    document.getElementById('gunGain').innerHTML = player.gunboat.income;
    /*document.getElementById('brigCost').innerHTML = player.brig.price;
    document.getElementById('brigNum').innerHTML = player.brig.num;
    document.getElementById('brigGain').innerHTML = player.brig.income;*/
};


function influenceUpdate() {
    //handles unlock of gunboat
    if (player.influence >= player.gunboat.infMin && achievements.unlocks.gunboat != 1) {
        gameLog('Yer gonna need to defend these here cogs! (Unlocked Gunboats)');
        achievements.unlocks.gunboat = 1;
        document.getElementById('gunboatOutline').style.display = 'block';
    };
    //handles unlock of schooner
    if(player.influence >= player.schooner.infMin && achievements.unlocks.schooner != 1) {
        gameLog('Bigger boats? Blimey! (Unlocked Schooners)');
        achievements.unlocks.schooner = 1;
        document.getElementById('schoonerOutline').style.display = 'block';
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
    player.gold.num += (player.cog.num * player.cog.gain);
    player.gold.num += (player.schooner.num * player.schooner.gain);
    player.gold.num += (player.barquentine.num * player.barquentine.gain);
    player.gold.num += (player.gunboat.num * player.gunboat.gain);
    document.getElementById('gold').innerHTML = player.gold.num;
};

function gameLog(message) {
        document.getElementById('log4').innerHTML = document.getElementById('log3').innerHTML
		document.getElementById('log3').innerHTML = document.getElementById('log2').innerHTML
		document.getElementById('log2').innerHTML = document.getElementById('log1').innerHTML
			//Since ids need to be unique, log1 strips the ids from the log0 elements when copying the contents.
		document.getElementById('log1').innerHTML = '<td>' + document.getElementById('logT').innerHTML + '</td><td>' + document.getElementById('logL').innerHTML + '</td><td>' + document.getElementById('logR').innerHTML + '</td>';
			//creates new contents with new time, message, and x1
		document.getElementById('log0').innerHTML = '<td id="logT">' + '</td><td id="logL">' + message + '</td><td id="logR"></td>';
}


window.setInterval(function(){
//updateAchievements();
resourceUpdate();
influenceUpdate();
goldGain();
}, 1000);