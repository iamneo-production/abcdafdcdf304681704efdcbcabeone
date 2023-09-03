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
        current
    }
}
