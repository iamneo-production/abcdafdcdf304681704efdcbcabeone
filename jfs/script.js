const selectBox=document.querySelector(".select-box"),
selectBtnX=selectBox.querySelector(".options.playerX"),
selectBtnO=selectBox.querySelector(".options.playerO"),
playBoard=document.querySelector(".play-board"),
players=document.querySelector(".players"),
allBox=document.querySelectorAll("section span"),
resultBox=document.querySelector(".result-box"),
wonText=resultBox.querySelector(".won-text"),
replayBtn=resultBox.querySelector("button");
let currentPlayer="X";

window.onload=()=>{
    for(let i =0; i<allBox.length;i++){
        allBox[i].setAttribute("onclick","clickedBox(this)");

    }
};
selectBtnX.onclick=()=>{
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
};

function clickedBox(element){
    if(!element.classList.contains("disable")){
        element.innerHTML='<i class="${currentPlayer==="X"?"fas fa-times":"fat fa-circle"}"></i>';
        element.classList.add("disable");
        currentPlayer=currentPlayer==="X"?"O":"X";
        selectWinner();
        btoa();
    }
}

function bot(){
    let emptyBoxes=[];
    for(let i =0;i<allBox.length;i++){
        if(!allBox[i].classList.contains("disable")){
            emptyBoxes.push(allBox[i]);
        }
    }
    const randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
  if (emptyBoxes.length > 0) {
    randomBox.innerHTML = `<i class="${currentPlayer === "X" ? "fas fa-times" : "far fa-circle"}"></i>`;
    randomBox.classList.add("disable");
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    selectWinner();
  }
}

function selectWinner() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winner = null;

  for (let i = 0; i < winCombinations.length; i++) {
    const [a, b, c] = winCombinations[i];
    if (
      allBox[a].innerHTML === allBox[b].innerHTML &&
      allBox[b].innerHTML === allBox[c].innerHTML &&
      allBox[a].innerHTML !== ""
    ) {
      winner = allBox[a].innerHTML;
      break;
    }
  }

  if (winner) {
    wonText.innerHTML = `Player ${winner} won the game!`;
    resultBox.classList.add("show");
    playBoard.classList.remove("show");
  } else if ([...allBox].every((box) => box.classList.contains("disable"))) {
    wonText.textContent = "Match has been drawn!";
    resultBox.classList.add("show");
    playBoard.classList.remove("show");
  }
}
replayBtn.onclick = ()=>{
    window.location.reload(); 
}