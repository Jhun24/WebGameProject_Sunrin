//canvas Set
var canvas = document.getElementById('gameCanvas')
var context = canvas.getContext('2d')
alert(document.body.clientHeight);


canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;


//canvas Set Finish

//canvas img Set
var player = new Image()
player.src = "../img/player.png"

var arrow = new Image()
arrow.src = "../img/arrow.png"

//canvas img Set Finish

//canvas object Set
var playerX = playerX = (canvas.width)/2;
var playerY = canvas.height-50;

//canvas object Set Finish
var shot = new Array()

for(var a = 0; a<window.clientWidth+1; a++){
    shot[a] = 1;
}
//canvas etc Set
var i = 0;
var e = 0;


//canvas etc Set Finish

setInterval(init,50)

function init(){
       console.log(playerX+"+"+playerY)
       context.clearRect(0,0,canvas.width,canvas.height)
       drawPlayer()
       drawArrow()
}

function drawPlayer(){
    context.drawImage(player,playerX,playerY,50,50)
}

function drawArrow(){
    for(i=0; i<canvas.width+1; i++){
        if(shot[i] != 1){
            context.drawImage(arrow,i,shot[i])
            shot[i] = shot[i] - 35;
        
        }
        
    }
}

window.onkeydown = function(e){
    if(e.keyCode == 32){
        shot[playerX+20]= playerY;
    }
    
    if(e.keyCode == 38){
        playerY = playerY - 8;
        if(playerY < 1){
            playerY = 0;
        }
    }
    else if(e.keyCode == 40){
        playerY = playerY + 8;
        if(playerY > canvas.height-50){
            playerY = canvas.height-50;
        }
    }
    else if(e.keyCode == 37){
        playerX = playerX - 8;
        if(playerX < 1){
            playerX = 0;
        }
    }
    else if(e.keyCode == 39){
        playerX = playerX + 8;
        if(playerX > canvas.width-100){
            playerX = canvas.width-100;
        }
    }
    
    init()
}