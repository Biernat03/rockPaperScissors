var score = 0;
function playerChooseR()
{
    var playerChoose = 1;
    play(playerChoose)
}
function playerChooseP()
{
    var playerChoose = 2;
    play(playerChoose);
}
function playerChooseS()
{
    var playerChoose = 3;
    play(playerChoose);
}
function play(choose)
{
    randomChooseP = document.getElementById("randomChoose");
    final = document.getElementById("final");
    scoreP = document.getElementById("score");
    var randomChoose = Math.floor(Math.random() * (3) + 1);
    switch(randomChoose)
    {
        case 1:
            randomChooseText = "Rock";
            break;
        case 2:
            randomChooseText = "Paper";
            break;
        case 3:
            randomChooseText = "Scissors";
            break;
    }
    console.log(randomChooseText);
    switch(choose)
    {
        case 1:
            if(choose == randomChoose)
            {
                finalDecision = "Draw";
            }
            else if(randomChoose == 2)
            {
                finalDecision = "Loser";
            }
            else if(randomChoose == 3)
            {
                finalDecision = "Winner";
                score++;
            }
            break;
        case 2:
            if(choose == randomChoose)
            {
                finalDecision = "Draw";
            }
            else if(randomChoose == 3)
            {
                finalDecision = "Loser";
            }
            else if(randomChoose == 1)
            {
                finalDecision = "Winner";
                score++;
            }
            break;
        case 3:
            if(choose == randomChoose)
            {
                finalDecision = "Draw";
            }
            else if(randomChoose == 1)
            {
                finalDecision = "Loser";
            }
            else if(randomChoose == 2)
            {
                finalDecision = "Winner";
                score++;
            }
            break;
    }
    randomChooseP.innerHTML = "Bot choose: "+randomChooseText;
    final.innerHTML = finalDecision;
    scoreP.innerHTML = "Score: "+score;
}