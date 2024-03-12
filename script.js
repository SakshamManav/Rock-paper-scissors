let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let msg = document.querySelector(".msg");
let msg1 = document.querySelector(".msg1");
let compmove ;
let compvalue;
let comptry;
let result;

rock.onclick = () => {
  let compvalue = Math.floor(Math.random() * 3);

  if (compvalue === 0) {
    compmove = "rock";
  } else if (compvalue === 1) {
    compmove = "paper";
  } else if (compvalue === 2) {
    compmove = "scissor";
  }
  comptry = ("computer Move =",compmove);
  gameforrock();
  msg1.innerText = `Computer Move : ${comptry} , Your Move : rock`;
  msg.innerText =  (`${result}`)
};
paper.onclick = () => {
  let compvalue = Math.floor(Math.random() * 3);

  if (compvalue == 0) {
    compmove = "rock";
  } else if (compvalue == 1) {
    compmove = "paper";
  } else if (compvalue == 2) {
    compmove = "scissor";
  }
  comptry = (compmove);
  gameforpaper();
  msg1.innerText = `Computer Move : ${comptry} , Your Move : paper`;
  msg.innerText =  (`${result}`)
};
scissor.onclick = () => {
  let compvalue = Math.floor(Math.random() * 3);

  if (compvalue == 0) {
    compmove = "rock";
  } else if (compvalue == 1) {
    compmove = "paper";
  } else if (compvalue == 2) {
    compmove = "scissor";
  }
  comptry = (compmove);
  gameforscissor();
  msg1.innerText = `Computer Move : ${comptry} , Your Move : scissor`;
  msg.innerText =  (`${result}`)
};


gameforrock=()=>{
    if(compmove==="rock"){
        result = ("It's a tie, Try again!");
    }
    else if(compmove==="paper"){
        result = ("You lose, computer won!");
    }
    else if(compmove==="scissor"){
        result = ("You won !");
    }
}

gameforpaper=()=>{
    if(compmove==="rock"){
        result = ("You won !");
    }
    else if(compmove==="paper"){
        result = ("It's a tie, Try again!");
    }
    else if(compmove==="scissor"){
        result = ("You lose, computer won!");
    }
}

gameforscissor=()=>{
    if(compmove==="rock"){
        result = ("You lose, computer won!");
    }
    else if(compmove==="paper"){
        result = ("You won !");
    }
    else if(compmove==="scissor"){
        result = ("It's a tie, Try again!");
    }
}

