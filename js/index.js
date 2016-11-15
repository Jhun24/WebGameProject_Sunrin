//canvas Set
var canvas = document.getElementById('gameCanvas')
var context = canvas.getContext('2d')
alert(document.body.clientHeight);


canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;


//canvsss Set Finish

//canvas img Set
var player = new Image()
player.src = "img/player.png"

var arrow = new Image()
arrow.src = "img/arrow.png"

var enemy = new Image()
enemy.src= "img/slime.png"

var boss = new Image()
boss.src = "img/enemy.png"
//canvas img Set Finish

//canvas object Set
var playerX = playerX = (canvas.width)/2;
var playerY = canvas.height-50;

var bossX = 0;
var bossY = 0;

var health = 5

//canvas object Set Finish
var shot = new Array()

for(var a = 0; a<window.clientWidth+1; a++){
    shot[a] = 1;
}

var enemyX = new Array()

for(var i = 0; i<window.clientWidth+1; i++){
    enemyX[i] = 3;
}

var enemyY = new Array()

for(var b = 0; b<window.clientHeight+1; b++){
    enemyY[b] = 3;
}
//canvas etc Set
var i = 0;
var e = 0;

var bossMoving = 25

//canvas etc Set Finish

setInterval(init,50)

function init(){
       console.log(playerX+"+"+playerY)
       context.clearRect(0,0,canvas.width,canvas.height)
       drawPlayer()
       drawArrow()
       bossUltimate()
       drawBoss()
}



function bossUltimate(){
    makeEnemy();
    drawEnemy();
}

function drawPlayer(){
    context.drawImage(player,playerX,playerY,50,50)
}

function makeEnemy(){
    var checkXY = Math.floor(Math.random()*2)
    
    if(checkXY == 0){
        // x좌표 기반
        var checkX =Math.floor(Math.random()*200+900)
        var inputY = Math.floor(Math.random()*window.innerHeight)
        enemyX[checkX] = inputY
        
    }
    else if(checkXY == 1){
        var checkY = Math.floor(Math.random()*200+500)
        var inputX = Math.floor(Math.random()*window.innerWidth);
        enemyY[checkY] = inputX
    
    }
}

function drawEnemy(){
    for(var a = 0; a<window.innerWidth+1; a++){
        if(enemyX[a] != 3){
            context.drawImage(enemy,a,enemyX[a])
            enemyX[a-25] = enemyX[a];
            
            if(playerX > a-1 && playerX<a+51 && playerY > enemyX[a]-1 && playerY < enemyX[a]+50){
                enemyY[a-75] = enemyY[a-25];
                health--;
            }
            
            enemyX[a] = 3
        }
    }
    
    for(var b = 0; b<window.innerHeight+1; b++){
        if(enemyY[b] != 3){ 
            context.drawImage(enemy,enemyY[b],b)
            enemyY[b-25] = enemyY[b];
            
            if(playerY > b-1 && playerY<b+51 && playerX > enemyY[b]-1 && playerX < enemyY[b]+50){
                enemyY[b-70] = enemyY[b-25];
                health--;
            }
            
            enemyY[b] = 3
        }
    }
    

}

function drawArrow(){
    for(i=0; i<canvas.width+1; i++){
        if(shot[i] != 1){
            context.drawImage(arrow,i,shot[i])
            shot[i] = shot[i] - 35;
        
        }
        
    }
}

function drawBoss(){
    context.drawImage(boss,bossX,bossY)
    if(bossX < 1){
        bossX = 0
        bossMoving = 25
    }
    else if(bossX > window.innerWidth-81){
        bossX = window.innerWidth-80
        bossMoving = -25
    }
    
    bossX = bossX + bossMoving;
    
}

window.onkeydown = function(e){
    if(e.keyCode == 32){
        shot[playerX+20]= playerY;
    }
    
    if(e.keyCode == 38){
        playerY = playerY - 25;
        if(playerY < 1){
            playerY = 0;
        }
    }
    else if(e.keyCode == 40){
        playerY = playerY + 25;
        if(playerY > canvas.height-50){
            playerY = canvas.height-50;
        }
    }
    else if(e.keyCode == 37){
        playerX = playerX - 25;
        if(playerX < 1){
            playerX = 0;
        }
    }
    else if(e.keyCode == 39){
        playerX = playerX + 25;
        if(playerX > canvas.width-100){
            playerX = canvas.width-100;
        }
    }
    
  
}