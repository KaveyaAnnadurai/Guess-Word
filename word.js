var answerWord = "", noOfLetters = "",level = "", chosenWordList = "";
var chooseLevelDiv =  document.getElementById('chooseLevel') ;
var mainDiv = document.getElementById('main');
var swapHint = 1;
var points = 0,flag = 0;
var wordListOfLevel1 = {
    data : [
        {
            word: "CAT",
            hint1:"It's an animal.",
            hint2:"It's a pet.",
            number:"1",
           
        },
        {
            word: "COW",
            hint1:"It's an animal",
            hint2:"Herbivore",
            number:"2",
           
        },
        {   word: "HAT",
            hint1: "Wear it on a sunny day",
            hint2: "Worn on head.",
            number: "3",

        }
    ]
}
var wordListOfLevel2 = {
    data : [
        {   
            word: "MILK",
            hint1:"We drink it everyday.",
            hint2:"Baby's only food.",
            number:"1",
            
        },
        {
            word: "BALL",
            hint1:"We can play with it.",
            hint2:"Used in cricket.",
            number:"2",
        },
        {   word: "LAMB",
            hint1:"We get wool from it.",
            hint2:"It's a baby animal.",
            number:"3",

        }
    ]
}
var wordListOfLevel3 = {
    data : [
        {   
            word: "PHONE",
            hint1:"One can call with it.",
            hint2:"It uses network.",
            number:"1",
            
        },
        {
            word: "HANDS",
            hint1:"A body part.",
            hint2:"It's in a pair.",
            number:"2",
        },
        {   word: "SNAKE",
            hint1:"It's a reptile",
            hint2:"Poisonous",
            number:"3",

        }
    ]
}

function guessWord(){
    var parent = document.getElementById('blanks');
    var guessedAnswer = "";
    
    // console.log(parent.children[0].value);
    for(let i = 0; i < noOfLetters; i++){
    // console.log(parent.children[i].value);
    guessedAnswer = guessedAnswer + parent.children[i].value;
    }
    console.log("guess:" + guessedAnswer.toUpperCase());
    console.log("ans:"+ answerWord);
    if(guessedAnswer.toUpperCase() == answerWord){
        if(flag == 1){
            document.getElementById('result').innerHTML = "You guessed it right! Points = 50";
            document.getElementById('new').style.display = "flex";
        }
        else{
            document.getElementById('result').innerHTML = "You guessed it right! Points = 100";
            document.getElementById('new').style.display = "flex";
        }
      
      

    }
    else{
        document.getElementById('result').innerHTML = "Try again :(";
    }
}

function getHint(){
    for(let i of chosenWordList.data){
        if(i.word == answerWord){
            flag = 1;
            document.getElementById('hint2').innerHTML = i.hint2;
            setTimeout(function(){
                document.getElementById("hint2").innerHTML = '';
            }, 3000);
            
           
        }
        }
    }


function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function startGame(a) {
    points= 0;
    level = a;
    flag = 0;
    answerWord = "";
    noOfLetters = "";
    document.getElementById('hint2').innerHTML = "";
    document.getElementById('hint1').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    var parent = document.getElementById('blanks');
    // removeAllChildNodes(parent);
    parent.innerHTML = '';
    

    if(level == 1){
        chosenWordList = wordListOfLevel1;
    }
    else if(level ==2){
            chosenWordList = wordListOfLevel2;
    }
    else{
        chosenWordList = wordListOfLevel3;
    }

    //showing required divs
   chooseLevelDiv.style.display = "none";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "column";

//to generate a random word from the list
   var num =  Math.round(randomNumber(1,3));
   console.log(num);
   for(let i of chosenWordList.data){
    if(i.number == num){
        console.log(i.word);
        answerWord = i.word;
        document.getElementById('hint1').innerHTML = i.hint1 ;
    }
   
   }
 
   noOfLetters = answerWord.length;
   console.log(noOfLetters);
  
   var indexOfLetterToBeShown = Math.round(randomNumber( 0, noOfLetters-1 ));
   //creating textboxes for each letter
   for(let i = 1; i <= noOfLetters; i++){
       
    var  inputTextbox = document.createElement('input');
    inputTextbox.setAttribute("type","text");
    inputTextbox.setAttribute("maxlength","1");
    inputTextbox.classList.add("show");
    // to show a random letter of word in the textbox
    if( indexOfLetterToBeShown == (i-1)){
        inputTextbox.setAttribute("value",answerWord[i-1]);
    }
    document.getElementById('blanks').appendChild(inputTextbox);
   }
};

function back(){
    chooseLevelDiv.style.display = "flex";
    mainDiv.style.display = "none";
    document.getElementById('finaldiv').style.display = "none";

}