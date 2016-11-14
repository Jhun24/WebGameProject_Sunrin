//canvas Set
var canvas = document.getElementById('gameCanvas')
var context = canvas.getContext('2d')

context.scale(1,1)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//canvas Set Finish

//canvas img Set
var player = new Image()
player.src = "../img/player.png"

//canvas img Set Finish

//canvas object Set
var playerX = 0;
var playerY = 0;

//canvas object Set Finish

//canvas etc Set



//canvas etc Set Finish

setInterval(init,1000)

function init(){
       console.log(playerX+"+"+playerY)
       context.clearRect(0,0,canvas.width,canvas.height)
       drawPlayer()
}

function drawPlayer(){
    context.drawImage(player,playerX,playerY,50,50)
}

window.onkeydown = function(e){
    
    if(e.keyCode == 38){
        playerY = playerY - 8;
        if(playerY < 1){
            playerY = 0;
        }
    }
    else if(e.keyCode == 40){
        playerY = playerY + 8;
        if(playerY > canvas.height-1){
            playerY = canvas.height;
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
        if(playerX > canvas.width-1){
            playerX = canvas.width;
        }
    }
    
    init()
}