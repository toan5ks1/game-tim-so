var gameNumber = [...Array(100).keys()];
var player1 = {turn: 0, score : 0};
var player2 = {turn: 0, score : 0};
var flag1 = document.getElementById("flag1");
var flag2 = document.getElementById("flag2");
var score1 = document.getElementById("player1-score");
var score2 = document.getElementById("player2-score");
document.addEventListener('keydown', handleTurn);


function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

function handleTurn(e){
    if(e.key == "ArrowLeft"){
        player1.turn = 1;
        flag1.style.backgroundColor = "green";
        setTimeout(function(){
            player1.turn = 0;
            flag1.style.backgroundColor = "white";
        },2000);
    }
    if(e.key == "ArrowRight"){
        player2.turn = 1;
        flag2.style.backgroundColor = "green";
        setTimeout(function(){
            player2.turn = 0;
            flag2.style.backgroundColor = "white";
        },2000);
    }
    console.log(player1.turn, player2.turn);
}


function handleSelect(e) {
    if(player1.turn == 1 && e.target.value == gameNumber[0]){
        player1.score += 1;
        score1.innerHTML = player1.score;
        gameNumber.shift();
        document.getElementById(`${e.target.value}`).style.backgroundColor = "cyan";
    }
    if(player2.turn == 1 && e.target.value == gameNumber[0]){
        player2.score += 1;
        score2.innerHTML = player2.score;
        gameNumber.shift();
        document.getElementById(`${e.target.value}`).style.backgroundColor = "red";
    }
}

function replay(){
    render();
}

render = () => {
    var ranArr = shuffle([...Array(100).keys()]);
    let list = document.getElementById("num-list");
    list.innerHTML = null;
    ranArr.forEach((item) => {
        let li = document.createElement("div");
        li.setAttribute("class", "item");
        li.setAttribute("id", `${item}`);
        li.addEventListener("click", handleSelect);
        li.innerText = item;
        li.value = item;
        list.appendChild(li);
    });

    
}

render();