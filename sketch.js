var points = 0;
var pointsDiv;
var pointsParent;
var rewardJSON;
var bigPapa;
///Cards!
var cardMain;
var cardImg;
var cardBody;
var cardTitle;
var cardText;
var cardButton;
//Items
var validate = false;
var mimos2;
var ow2;
var steam2;
var chibi2;
var alcohol2;
var jsonL2;
var objP52;
var tagH2;
var tagP52;
var bootstrap2;
var photoshop2;
var vegas2;
var cuarto2;
//Button test
buttonID = 0;
//Variables for redeeeming

var inputBox;
var goBtn;
var inputPapa;
var codes = [
    {
        pass:"Z4M81MsKl",
        addition:"5"

    },
    {
        pass:"ZVR4ZkIwT",
        addition:"5"
    },
    {
        pass:"rvgUpQ2tI",
        addition:"5"
    },
    {
        pass:"xYygowmYm",
        addition:"10"
    },
    {
        pass:"LUpIQuXyr",
        addition:"10"
    },
    {
        pass:"jiuASY8Wu",
        addition:"10"
    },
    {
        pass:"xrw7JeNy5",
        addition:"10"
    },
    {
        pass:"1sEGDyYPE",
        addition:"20"
    },
    {
        pass:"8gwN8dGYi",
        addition:"20"
    },
    {
        pass:"umdIFMbow",
        addition:"20"
    },
    {
        pass:"5AC6ScYAq",
        addition:"20"
    },
    {
        pass:"0wTsAfVoe",
        addition:"50"
    },
    {
        pass:"Q9vs6vDco",
        addition:"50"
    },
    {
        pass:"kCQTuB9V4",
        addition:"50"
    },
    {
        pass:"f0AOXzAlZ",
        addition:"50"
    },
    {
        pass:"FjszzDYQq",
        addition:"100"
    },
    {
        pass:"elK5IiZA0",
        addition:"100"
    },
    {
        pass:"Z25tzXPmK",
        addition:"100"
    },
    {
        pass:"zBI1PokFD",
        addition:"100"
    },
    {
        pass:"HfclmtmL0",
        addition:"100"
    },
    {
        pass:"test",
        addition:"100"
    }

];
var cnv;
var invalidImg;
function preload() {
    rewardJSON = loadJSON('data.json')
    points = getItem('points');
    pointsParent = document.getElementById('pointsID');
    bigPapa = document.getElementById('deck');
    bigMommy = document.getElementById('redeemDeck');
    invalidImg = loadImage('/img/invalid.png')
}
function setup() {

    pointsDiv = createDiv(points);
    pointsDiv.class('mx-auto ');
    pointsDiv.id('points');
    pointsDiv.parent(pointsParent);
    //Items
    if(bigPapa == null){
        console.log("Daddy doesnt exist u,w,u")
    }
    else{
        createItem(rewardJSON[0].img, rewardJSON[0].name, rewardJSON[0].desc, 0)
        createItem(rewardJSON[1].img, rewardJSON[1].name, rewardJSON[1].desc, 1)
        createItem(rewardJSON[2].img, rewardJSON[2].name, rewardJSON[2].desc, 2)
        createItem(rewardJSON[3].img, rewardJSON[3].name, rewardJSON[3].desc, 3)
        createItem(rewardJSON[4].img, rewardJSON[4].name, rewardJSON[4].desc, 4)
        createItem(rewardJSON[5].img, rewardJSON[5].name, rewardJSON[5].desc, 5)
        createItem(rewardJSON[6].img, rewardJSON[6].name, rewardJSON[6].desc, 6)
        createItem(rewardJSON[7].img, rewardJSON[7].name, rewardJSON[7].desc, 7)
        createItem(rewardJSON[8].img, rewardJSON[8].name, rewardJSON[8].desc, 8)
        createItem(rewardJSON[9].img, rewardJSON[9].name, rewardJSON[9].desc, 9)
        createItem(rewardJSON[10].img, rewardJSON[10].name, rewardJSON[10].desc, 10)
        createItem(rewardJSON[11].img, rewardJSON[11].name, rewardJSON[11].desc, 11)
        createItem(rewardJSON[12].img, rewardJSON[12].name, rewardJSON[12].desc, 12)

    }
    inputBox = createInput();
    inputBox.class('form-control form-control-lg');
    inputBox.attribute('placeholder','Input your code here!')
    inputPapa = document.getElementById('redeem');
    inputBox.parent(inputPapa)
    //Button to validate
    goBtn = createButton("Exchange!");
    goBtn.parent(inputPapa)
    goBtn.class('btn btn-primary btn-lg btn-block')
    goBtn.mouseClicked(validateButton)
}
function draw() {
    pointsDiv.html(points)
}

function validateButton(){
    console.log("clicked")
    var found = false;
    for(var i =0;!found && i<20;i++){
        if(inputBox.value() == codes[i].pass && codes[i].found == false){
            console.log("true")
            let addition = int(codes[i].addition);
            points+= addition;
            storeItem('points', points)
            found = true
        }
        else{
            console.log("False")
            cnv = createCanvas(windowWidth*3,windowHeight*3);
            cnv.position(0,0);
            fill(255,0,0);
            background(0,0,0,150)
            image(invalidImg,(windowWidth/2)-220,windowHeight/2,1782/4,1053/4)
            cnv.mouseClicked(noCanvas)
        }
            
          
        
    }
    
}
function createButtonDOM(x) {

    if (x == 0) {
        mimos2 = createButton(rewardJSON[0].cost);
        mimos2.class('btn btn-info')
        mimos2.parent(cardBody);
        mimos2.mouseClicked(mimos) 
    }
    if (x == 1) {
        ow2 = createButton(rewardJSON[1].cost);
        ow2.class('btn btn-info')
        ow2.parent(cardBody);
        ow2.mouseClicked(ow)
    }
    if (x == 2) {
        steam2 = createButton(rewardJSON[2].cost);
        steam2.class('btn btn-info')
        steam2.parent(cardBody);
        steam2.mouseClicked(steam)
    }
    if (x == 3) {
        chibi2 = createButton(rewardJSON[3].cost);
        chibi2.class('btn btn-info')
        chibi2.parent(cardBody);
        chibi2.mouseClicked(chibi)
    }
    if (x == 4) {
        alcohol2 = createButton(rewardJSON[4].cost);
        alcohol2.class('btn btn-info')
        alcohol2.parent(cardBody);
        alcohol2.mouseClicked(alcohol)
    }
    if (x == 5) {
        jsonL2 = createButton(rewardJSON[5].cost);
        jsonL2.class('btn btn-info')
        jsonL2.parent(cardBody);
        jsonL2.mouseClicked(jsonL)
    }
    if (x == 6) {
        objP52 = createButton(rewardJSON[6].cost);
        objP52.class('btn btn-info')
        objP52.parent(cardBody);
        objP52.mouseClicked(objP5)
    }
    if (x == 7) {
        tagH2 = createButton(rewardJSON[7].cost);
        tagH2.class('btn btn-info')
        tagH2.parent(cardBody);
        tagH2.mouseClicked(tagH);
    }
    if (x == 8) {
        tagP52 = createButton(rewardJSON[8].cost);
        tagP52.class('btn btn-info')
        tagP52.parent(cardBody);
        tagP52.mouseClicked(tagP5)
    }
    if (x == 9) {
        bootstrap2 = createButton(rewardJSON[9].cost);
        bootstrap2.class('btn btn-info')
        bootstrap2.parent(cardBody);
        bootstrap2.mouseClicked(bootstrap)
    }
    if (x == 10) {
        photoshop2 = createButton(rewardJSON[10].cost);
        photoshop2.class('btn btn-info')
        photoshop2.parent(cardBody);
        photoshop2.mouseClicked(photoshop)
    }
    if (x == 11) {
        vegas2 = createButton(rewardJSON[11].cost);
        vegas2.class('btn btn-info')
        vegas2.parent(cardBody);
        vegas2.mouseClicked(vegas)

    }
    if (x == 12) {
        cuarto2 = createButton(rewardJSON[12].cost);
        cuarto2.class('btn btn-info')
        cuarto2.parent(cardBody);
        cuarto2.mouseClicked(cuarto)
    }

}
function createItem(cardImgSrc, cardTitleData, cardPText, y) {
    cardMain = createDiv();
    cardImg = createImg(cardImgSrc, "")
    cardBody = createDiv();
    cardTitle = createElement('h5', cardTitleData);
    cardText = createDiv(cardPText);
    ////Assign Classes
    cardMain.class('card text-center');
    cardImg.class('card-img-top mx-auto');
    cardBody.class('card-body');
    cardTitle.class('card-title');
    cardText.class('card-text')
    //Parenting
    cardMain.parent(bigPapa)
    cardImg.parent(cardMain);
    cardBody.parent(cardMain);
    cardTitle.parent(cardBody);
    cardText.parent(cardBody);
    createButtonDOM(y)

};
function resetAll() {
    points = 100;
    storeItem('points', points)
}

///Functions for the shop area ////
function mimos() {
    if (points >= rewardJSON[0].cost) {
        var cost = rewardJSON[0].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("0")
    }


};
function ow() {
    if (points >= rewardJSON[1].cost) {
        var cost = rewardJSON[1].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("1")
    }

};
function steam() {
    if (points >= rewardJSON[2].cost) {
        var cost = rewardJSON[2].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("2")
    }

};
function chibi() {
    if (points >= rewardJSON[3].cost) {
        var cost = rewardJSON[3].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("3")
    }

};
function alcohol() {
    if (points >= rewardJSON[4].cost) {
        var cost = rewardJSON[4].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("4")
    }

};
function jsonL() {
    if (points >= rewardJSON[5].cost) {
        var cost = rewardJSON[5].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("5")
    }

};
function objP5() {
    if (points >= rewardJSON[6].cost) {
        var cost = rewardJSON[6].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("6")
    }

};
function tagH() {
    if (points >= rewardJSON[7].cost) {
        var cost = rewardJSON[7].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("7")
    }

};
function tagP5() {
    if (points >= rewardJSON[8].cost) {
        var cost = rewardJSON[8].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("8")
    }

};
function bootstrap() {
    if (points >= rewardJSON[9].cost) {
        var cost = rewardJSON[9].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("9")
    }

};
function photoshop() {
    if (points >= rewardJSON[10].cost) {
        var cost = rewardJSON[10].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("10")
    }

};
function vegas() {
    if (points >= rewardJSON[11].cost) {
        var cost = rewardJSON[11].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("11")
    }

};
function cuarto() {
    if (points >= rewardJSON[12].cost) {
        var cost = rewardJSON[12].cost;
        points = points - cost;
        storeItem('points', points)
        validate = false
        console.log("12")
    }

};

///Functions for the redeem