let clicks = 0;
let mamieClicks = 1;
let mamieBoost = 10;
let rouleauClicks = 10;
let rouleauBoost = 200; 
let fourClicks = 100;
let fourBoost = 1000;
let usineClicks = 1000;
let usineBoost = 10000;
let doigtClicks = 50;
let doigtBoost = 50;
let doigtForce = 1;   //Force de base du clique (1)
let tourClicks = 10000
let tourBoost = 1000000;
let vaisseauClicks = 100000;
let vaisseauBoost = 10000000;
let alchimieClicks = 1000000;
let alchimieBoost = 100000000;
let bankClicks = 10000000;
let bankBoost = 1000000000;
let mamie2Clicks = 100000000;
let mamie2Boost = 10000000000;


let compteurdoigt = 0; // Compte le nombre de boost de doigts achetés

let total = 0;
document.querySelector(".cookie").onclick = function(){
    clicks += doigtForce;
    document.querySelector(".compteur").innerHTML = Math.round(clicks);
}


function upScore(){
    clicks +=  total/20;
    let formatted = Math.round(clicks);
    document.querySelector(".compteur").innerHTML = formatted.toLocaleString();
    document.querySelector(".compteurCookie").innerHTML = total.toLocaleString();
    document.querySelector(".compteurClick").innerHTML = doigtForce.toLocaleString();
    newPageTitle = clicks;
    document.title = formatted.toLocaleString() +" Cookies";
}

setInterval(upScore, 50)

document.querySelector(".mamie").onclick = function(){
    if (clicks >= mamieBoost){
        clicks -= mamieBoost;
        mamieBoost *= 1.2;
        let mb = Math.round(mamieBoost);
        total += mamieClicks;
        document.querySelector(".mamieprice").innerHTML = mb.toLocaleString() +" Cookies"; 
    }
    
}

document.querySelector(".rouleau").onclick = function(){
    if (clicks >= rouleauBoost){
        clicks -= rouleauBoost;
        rouleauBoost *= 1.2;
        let rb = Math.round(rouleauBoost);
        total +=rouleauClicks;
        document.querySelector(".rouleauprice").innerHTML = rb.toLocaleString() +" Cookies"; 
    }
}

document.querySelector(".four").onclick = function(){
    if (clicks >= fourBoost){
        clicks -= fourBoost;
        fourBoost *= 1.2;
        let fb = Math.round(fourBoost);
        total +=fourClicks;
        document.querySelector(".fourprice").innerHTML = fb.toLocaleString() +" Cookies"; 
    }
}

document.querySelector(".usine").onclick = function(){
    if (clicks >= usineBoost){
        clicks -= usineBoost;
        usineBoost *= 1.2;
        let ub = Math.round(usineBoost);
        total +=usineClicks;
        document.querySelector(".usineprice").innerHTML = ub.toLocaleString() +" Cookies"; 
    }
}

document.querySelector(".tour").onclick = function(){
    if (clicks >= tourBoost){
        clicks -= tourBoost;
        tourBoost *= 1.2;
        let tb = Math.round(tourBoost);
        total +=tourClicks;
        document.querySelector(".tourprice").innerHTML = tb.toLocaleString() +" Cookies"; 
    }
}

document.querySelector(".vaisseau").onclick = function(){
    if (clicks >= vaisseauBoost){
        clicks -= vaisseauBoost;
        vaisseauBoost *= 1.2;
        let vb = Math.round(vaisseauBoost);
        total +=vaisseauClicks;
        document.querySelector(".vaisseauprice").innerHTML = vb.toLocaleString() +" Cookies"; 
    }
}

document.querySelector(".alchimie").onclick = function(){
    if (clicks >= alchimieBoost){
        clicks -= alchimieBoost;
        alchimieBoost *= 1.2;
        let ab = Math.round(alchimieBoost);
        total +=alchimieClicks;
        document.querySelector(".alchimieprice").innerHTML = ab.toLocaleString() +" Cookies"; 
    }
}

document.querySelector(".bank").onclick = function(){
    if (clicks >= bankBoost){
        clicks -= bankBoost;
        bankBoost *= 1.2;
        let bb = Math.round(bankBoost);
        total +=bankClicks;
        document.querySelector(".bankprice").innerHTML = bb.toLocaleString() +" Cookies"; 
    }
}

document.querySelector(".mamie2").onclick = function(){
    if (clicks >= mamie2Boost){
        clicks -= mamie2Boost;
        mamie2Boost *= 1.2;
        let mb2 = Math.round(mamie2Boost);
        total += mamie2Clicks;
        document.querySelector(".mamie2price").innerHTML = Mmb2.toLocaleString() +" Cookies"; 
    }
    
}

document.querySelector(".doigt").onclick = function(){
    if (clicks >= doigtBoost){
        compteurdoigt += 1;
        clicks -= doigtBoost;
        doigtBoost *= 1.5;
        let db = Math.round(doigtBoost);
        doigtForce += 1;
        document.querySelector(".doigtprice").innerHTML = db.toLocaleString() +" Cookies"; 
        
        if (compteurdoigt >=10){
            document.querySelector(".doigt").src="../style/images/golden-doigt.png";
            doigtForce += 9;
        }
    }
}

