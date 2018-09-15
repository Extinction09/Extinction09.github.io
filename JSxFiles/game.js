var money = 0;
var sandstone = 0;
var sandstoneCapacity = 30;

function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.money !== "undefined") money = savegame.money;
    if (typeof savegame.sandstone !== "undefined") sandstone = savegame.sandstone;
    if (typeof savegame.sandstoneMiner !== "undefined") sandstoneMiner = savegame.sandstoneMiner;
    if (typeof savegame.sAutoSeller !== "undefined") sAutoSeller = savegame.sAutoSeller;
    if (typeof savegame.sStorage !== "undefined") sStorage = savegame.sStorage;
    game = savegame;
};


function save(){
    var game = {
        money: money,
        sandstone: sandstone,
        sandstoneMiner: sandstoneMiner,
        sAutoSeller: sAutoSeller,
        sStorage: sStorage
    };
    localStorage.setItem("save",JSON.stringify(game));
};


//Function for the "mine sandstone" button
function sandstoneClick(number) {
    if(sandstone >= sandstoneCapacity) {
        return;
    } else {
    sandstone = sandstone + number;
    document.getElementById('sandstone').innerHTML = sandstone;
        };
};






//Function for the "sAutoSeller"
function smallSell(number) {
    if(sandstone >= 0) {
        sandstone = sandstone - sAutoSeller;
        money = money + (number * sandstonePrice);
    } else {
        return;
    };
    document.getElementById('money').innerHTML = money;
    document.getElementById('sandstone').innerHTML = sandstone;
};


//Purchase Sandstone Miner
var sandstoneMiner = 0;

function buySandstoneMiner() {
    var sandstoneMinerCost = Math.floor(30 * Math.pow(1.10, sandstoneMiner));   // works out the cost of current sandstoneMiner
    if(money >= sandstoneMinerCost) {                                           // checks if the player can afford the sandstoneMiner
        sandstoneMiner = sandstoneMiner + 1;                                    // increases the number of sandstoneMiners
        money = money - sandstoneMinerCost;                                     // removes the money spent
        sandstoneMinerUK = sandstoneMinerUK + 1;                                // increases the ukpeep per miner
        document.getElementById('sandstoneMiner').innerHTML = sandstoneMiner;   // updates the number of sandstoneMiners for player
        document.getElementById('money').innerHTML = money;                     // updates the amount of money the player has
    };
    var nextCost = Math.floor(30 * Math.pow(1.10, sandstoneMiner));             // works out the cost of the next sandstoneMiner
    document.getElementById('sandstoneMinerCost').innerHTML = nextCost;         // updates the sandstoneMiner cost for player
};


//Function for the Sandstone Miner
var sandstoneMinerUK= 0;

function sandstoneMinerClick(number) {
    var currentUpkeep = 0;
    if(sandstone <= sandstoneCapacity) { 
        if(money >= 0) {
            currentUpkeep = currentUpkeep + sandstoneMinerUK;
            sandstone = sandstone + number;
    } else {
            return;
        };
    };
        document.getElementById('sandstone').innerHTML = sandstone;
        document.getElementById('currentUpkeep').innerHTML = currentUpkeep;
        document.getElementById('money').innerHTML = money;
};


//Selling button
var sandstonePrice = 4;

function sellSandstone() {
    if(sandstone >= 1) {
        sandstone = sandstone * sandstonePrice;
        money = money + sandstone;
        sandstone = 0;
        document.getElementById('money').innerHTML = money;
        document.getElementById('sandstone').innerHTML = sandstone;
    }; 
}; 


// Purchase Small Auto Seller
var sAutoSeller = 0;

function buySAutoSeller() {
    var sAutoSellerCost = Math.floor(50 * Math.pow(1.13, sAutoSeller));
    if(money >= sAutoSellerCost) {
        if(sAutoSeller < sandstoneMiner) {
            sAutoSeller = sAutoSeller + 1;
            money = money - sAutoSellerCost;
            document.getElementById('sAutoSeller').innerHTML = sAutoSeller;
            document.getElementById('money').innerHTML = money;
        } else {
            return;
        };
    var nextCost2 = Math.floor(50 * Math.pow(1.13, sAutoSeller));
    document.getElementById('sAutoSellerCost').innerHTML = nextCost2;   
    };
};


//Small Storage Unit
var sStorage = 1;

function buySStorage() {
    var sStorageCost= Math.floor(25 * Math.pow(1.5, sStorage));
    if(money >= sStorageCost) {
        money = money - sStorageCost;
        sStorage = sStorage + 1;
        sandstoneCapacity = sandstoneCapacity + 30;
        document.getElementById('sStorage').innerHTML = sStorage;
        document.getElementById('money').innerHTML = money;
        document.getElementById('sandstoneCapacity').innerHTML = sandstoneCapacity;
    };
    var nextCost3 = Math.floor(25 * Math.pow(1.5, sStorage));
    document.getElementById('sStorageCost').innerHTML = nextCost3;
};


window.setInterval(function(){

        sandstoneMinerClick(sandstoneMiner);
        smallSell(sAutoSeller);
}, 1000);
