let body = document.querySelector('body');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let pc = document.querySelector('.ai');
let msg = document.querySelector('.msg');
let newGame = document.querySelector('.newGame');
let ai_score = document.querySelector(".ai-score");
let user_score = document.querySelector(".user-score");

let aicount = 0;
let playercount = 0;

newGame.onclick = () =>{
    reset();
}

const reset = () =>{
    pc.innerText=``;
    msg.innerText="";
    ai="";
    aicount=0;
    playercount=0;
    ai_score.innerText=`${aicount}`;
    user_score.innerText=`${playercount}`;
}

rock.onclick = () => {
    winner("ROCK")
};
paper.onclick = () => {
    winner("PAPER")
};
scissors.onclick = () => {
    winner("SCISSORS");
};
let ai = "";
const winner = (player) =>{
    const Options = ["ROCK","PAPER","SCISSORS"];
    ai = Options[Math.floor(Math.random() * Options.length)];

    if(ai==player)
        {
            console.log(`COMPUTER's CHOICE : ${ai} `)
            console.log("it's a tie");
            msg.innerText = "It's a Tie";
            winScreen(ai);
        }
    else if((player == "ROCK" && ai == "SCISSORS") ||
            (player == "PAPER" && ai == "ROCK") ||
            (player == "SCISSORS" && ai == "PAPER"))
        {
            console.log(`COMPUTER's CHOICE : ${ai} `)
            console.log("YOU WIN");
            msg.innerText = "YOU WIN";
            winScreen(ai);
            playercount++;
            playerscore(playercount);
        }
    else
        {
            console.log(`COMPUTER's CHOICE : ${ai} `)
            console.log("YOU LOSE");
            msg.innerText = "YOU LOSE";
            winScreen(ai);
            aicount++;
            aiscore(aicount);
        }
};

const winScreen = (ai)=> {
    pc.innerText=`COMPUTER's CHOICE : ${ai}`;
};
const playerscore =(playercount)=>{
    user_score.innerText=`${playercount}`;
};
const aiscore =(aicount)=>{
    ai_score.innerText=`${aicount}`;
};