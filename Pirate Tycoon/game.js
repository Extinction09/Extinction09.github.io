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

//function for buying a cog
function buyCog() {
    if(player.gold.num >= player.cog.price) {
        player.cog.num++;
        player.gold.num = player.gold.num - player.cog.price;
        player.influence = player.influence + player.cog.influence;
        player.cog.income = player.cog.num * player.cog.gain;
        gameLog('Ye bought yerself a cog!');
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
        player.gold.num = player.gold.num - player.schooner.price;
        player.influence = player.influence + player.schooner.influence;
        player.schooner.income = player.schooner.num * player.schooner.gain;
        gameLog('A schooner? What is a bloody pirate going to do with that?');
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
        player.gold.num = player.gold.num - player.barquentine.price;
        player.influence = player.influence + player.barquentine.influence;
        player.barquentine.income = player.barquentine.num * player.barquentine.gain;
    } else {
        return;
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
        player.gold.num = player.gold.num - player.clipper.price;
        player.influence = player.influence + player.clipper.influence;
        player.clipper.income = player.clipper.num * player.clipper.gain;
    };
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
        player.gold.num = player.gold.num - player.gunboat.price;
        player.influence = player.influence + player.gunboat.influence;
        player.gunboat.income = player.gunboat.num * player.gunboat.gain;
        gameLog('Shiver me timbers! A ship to feel slightly threatened by!')
    } else if(player.gold.num < player.gunboat.price || player.influence < player.gunboat.infMin) {
        gameLog('Avast Cap\'n, ye\'ve not enough resources!');
    } else {
        return;
    };
    player.gunboat.price = Math.floor(20 * Math.pow(1.47, player.gunboat.num - 1));
    document.getElementById('gunCost').innerHTML = player.gunboat.price;
    document.getElementById('gunNum').innerHTML = player.gunboat.num;
    document.getElementById('gunGain').innerHTML = player.gunboat.income;
    document.getElementById('gold').innerHTML = player.gold.num;
    document.getElementById('influence').innerHTML = player.influence;
};


//function of gain
function goldGain() {
    player.gold.num = player.gold.num + (player.cog.num * player.cog.gain);
    player.gold.num = player.gold.num + (player.schooner.num * player.schooner.gain);
    player.gold.num = player.gold.num + (player.barquentine.num * player.barquentine.gain);
    player.gold.num = player.gold.num + (player.gunboat.num * player.gunboat.gain);
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
goldGain();
}, 1000);