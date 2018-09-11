var money = 0;
var sandstone = 0;

//Function for the "mine sandstone" button
function sandstoneClick(number){
    sandstone = sandstone + number;
    document.getElementById('sandstone').innerHTML = sandstone;
};


//Function for the "sAutoSeller"
function smallSell(number){
    if(sandstone <= 0){
        return;
    }else{
        sandstone = sandstone - sAutoSeller;
        money = money + (number * sandstonePrice);
        
    };
    document.getElementById('money').innerHTML = money;
    document.getElementById('sandstone').innerHTML = sandstone;
};


//Sandstone Miner and upkeep
var sandstoneMiner = 0;
var sandstoneMinerUK = 0;

function buySandstoneMiner(){
    var sandstoneMinerCost = Math.floor(30 * Math.pow(1.10, sandstoneMiner));   // works out the cost of current sandstoneMiner
    if(money >= sandstoneMinerCost){                                            // checks if the player can afford the sandstoneMiner
        sandstoneMiner = sandstoneMiner + 1;                                    // increases the number of sandstoneMiners
        money = money - sandstoneMinerCost;                                     // removes the money spent
        document.getElementById('sandstoneMiner').innerHTML = sandstoneMiner;   // updates the number of sandstoneMiners for player
        document.getElementById('money').innerHTML = money;                     // updates the amount of money the player has
    };
    var nextCost = Math.floor(30 * Math.pow(1.10, sandstoneMiner));             // works out the cost of the next sandstoneMiner
    document.getElementById('sandstoneMinerCost').innerHTML = nextCost;         // updates the sandstoneMiner cost for player
};

//Selling button
var sandstonePrice = 3;

function sellSandstone(){
    if(sandstone >= 1){
        sandstone = sandstone * sandstonePrice;
        money = money + sandstone;
        sandstone = 0;
        document.getElementById('money').innerHTML = money;
        document.getElementById('sandstone').innerHTML = sandstone;
    }; 
}; 

//Small Auto Seller
var sAutoSeller = 0;

function buySAutoSeller(){
    var sAutoSellerCost = Math.floor(50 * Math.pow(1.13, sAutoSeller));
    if(money >= sAutoSellerCost){
        sAutoSeller = sAutoSeller + 1;
        money = money - sAutoSellerCost;
        document.getElementById('sAutoSeller').innerHTML = sAutoSeller;
         document.getElementById('money').innerHTML = money;
    };
    var nextCost2 = Math.floor(50 * Math.pow(1.13, sAutoSeller));
    document.getElementById('sAutoSellerCost').innerHTML = nextCost2;
};

window.setInterval(function(){

        sandstoneClick(sandstoneMiner);
        smallSell(sAutoSeller);
}, 1000);
