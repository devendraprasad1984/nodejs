//constructor functions
function Player(id, name){
    this.gameWon=0
    this.gameLost=0
    this.playerRank=0
    this.email=''
    this.mobile=''
    this.playerId=id
    this.playerName=name
}
function Dice(numOfDice){
    this.dice= numOfDice
    this.rollDice=function(){
        return Math.floor(Math.random()*((6*this.dice - 1*this.dice)-1))
    }
}
function HopsUpDown(start,end){
    //can be used for snake as well as ladder
    //when snake: end point should be less than start as player will come down
    //when ladder: end point should be greater than start as player will go up
    this.start=start
    this.en=end
    this.isHitBySnake=start > end
    this.msg=console.log(
        this.isHitBySnake ? 'player is bitten by snake at ${start} and will reach at ${end}' :
            'player is going up for ladder start at ${start} and will reach at ${end}'
    )
}
function GameBoard(dice, playerQueue, snakes, ladders, curpos, boardSize){
    this.dice=dice
    this.playerQueue=playerQueue //[Player1, Player2]
    this.snakes=snakes //array of objects of HopsUpDown
    this.ladders=ladders //array of objects of HopsUpDown
    this.curpos=curpos //array of objects [{player1, curPos},{player2, curPos},{player3, curPos}]
    this.boardSize=boardSize

    function play(){
        while(true){
            for(let i=0; i<playerQueue.length;i++){
                let player=playerQueue[i]
                console.log('your trun', player.name)
                player.rollDice()
            }
        }
    }
}

function cell(){
    this.position=-1
    this.move=function(){

    }
    this.operation=function(){

    }
}
function Move(){
    this.nextPosition=-1
    this.getNextPosition=function(){

    }
}





