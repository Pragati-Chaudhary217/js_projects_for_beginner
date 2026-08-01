const box = ["","","","","","","","",""]
const status = document.getElementById('status');
let player;
let winnerDecided=false;
function checkWinner(player){
    if (box[0]==player&&box[1]==player&&box[2]==player)
        return true;
    else if(box[3]==player&&box[4]==player&&box[5]==player)
        return true;
    else if(box[6]==player&&box[7]==player&&box[8]==player)
        return true;
    else if(box[0]==player&&box[4]==player&&box[8]==player)
        return true;
    else if(box[2]==player&&box[4]==player&&box[6]==player)
        return true;
    else if(box[0]==player&&box[3]==player&&box[6]==player)
        return true;
    else if(box[1]==player&&box[4]==player&&box[7]==player)
        return true;
    else if(box[2]==player&&box[5]==player&&box[8]==player)
        return true;
    else{
        return false;
    }
}
let turn=true;
let chance = 0;

const board = document.getElementById('board');
board.addEventListener('click',(e)=>{

    if (winnerDecided || box[e.target.id]!==""){
        return;
    }


    console.log(e.target)
    index=e.target.id
    const button = document.getElementById(index)
    
    chance+=1;
    if (turn==true){
        button.textContent = 'X'
        box[index]=button.textContent
        if (checkWinner(button.textContent)==true){
            status.textContent = "Player X has won the game"
            winnerDecided=true;
            return;
        }
        else{
            winnerDecided=false;
        }
        status.textContent = "Player O's turn";
        turn = false;
    }
    else{
        button.textContent = 'O'
        box[index]=button.textContent
        if (checkWinner(button.textContent)==true){
            
            status.textContent = "Player O has won the game"
            winnerDecided=true;
            return;
        }
        else{
            winnerDecided=false;
        }
        status.textContent = "Player X's turn"
        turn=true;
    }
    
    
    if (chance==9){
        status.textContent="Game Over. Click 'Reset Game' to play again."
        return
    }
    console.log(box);
    
})

