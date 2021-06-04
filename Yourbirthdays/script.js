//challenge 1: Your Age in Days
function ageInDays(){
var birthyear = prompt('what year you were born?');
var ageInDayss =(2021-birthyear)*365;
// var ageInDayss =(2021-birthyear);
var h1 = document.createElement("h1")
var textanswer = document.createTextNode('you are '+ageInDayss+'days old')
// var textanswer1 = document.createTextNode(' Or '+ageInDayss1+'days old')
h1.setAttribute('id','ageInDays');
h1.appendChild(textanswer)
// h1.appendChild(textanswer1)

document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInDays').remove();

}

//Challenge 2: Cat generator

function generate(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="https://cdn.shopify.com/s/files/1/0344/6469/files/tumblr_oa1tspt5yH1uuyy36o1_500_large.gif?18126303191109649813";
    div.appendChild(image)
}

//Challenge 3 : Rock,Paper,scissors

function rpsGame(yourchoice){
    console.log(yourchoice)
    var humanchoice,botchoice;
    humanchoice = yourchoice.id;
    botchoice = numberToChoice(randToRpsInt());
    console.log(botchoice)
    results = decideWinner(humanchoice,botchoice); 
    message = finalMessge(results) 
    console.log(message)
    rpsFrontEnd(yourchoice.id,botchoice,message)
}
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return['rock','paper','scissors'][number]
}

function decideWinner(yourchoice,computerchoice){
    var rpsDatabase ={
        'rock':{'scissors':1, 'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    };
    var yourScore = rpsDatabase[yourchoice][computerchoice];
    var computerScore = rpsDatabase[computerchoice][yourchoice];
    return [yourScore,computerScore];
}
function finalMessge([yourScore,computerScore]){
    if(yourScore==0){
        return {'message':'you lost','color':'red'};
    }else if(yourScore==0.5){
        return{'message':'you tied','color':'yellow'};
    }else{
        return{'message':'you won','color':'green'}
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice,finalMessge){
    var imageDatabase={
        'rock':document.getElementById('rock').src,
       'paper' :document.getElementById('paper').src,
       'scissors':document.getElementById('scissors').src

    
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML="<img src='" + imageDatabase[humanImageChoice]+ "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML="<h1 style='color:"+finalMessge['color']+"; font-size:60px; padding:30px'>"+finalMessge['message']+"</h1>"
    botDiv.innerHTML="<img src='" + imageDatabase[botImageChoice]+ "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,);'>"
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

//Challenge 4:change the color of all buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for(let i=0;i<all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}



function buttonColorChange(buttonThingy){
    if(buttonThingy.value=='red'){
        buttonRed();
    }else if (buttonThingy.value=='green'){
        buttonsGreen();
    }else if(buttonThingy.value =='reset'){
        buttonThingyReset();
    }else if(buttonThingy.value=='random'){                        
        randomColors();
    }
}

function buttonsGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
        
    }
}

function buttonRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
        
    }
}

function buttonThingyReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    let choices = ['btn-primary','btn-danger','btn-warning','btn-success']
    for(let i=0;i<all_buttons.length;i++){
    let randomNumber = Math.floor(Math.random()*4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1])
    all_buttons[i].classList.add(choices[randomNumber]);
    }
}

//challenge 5: Your calorie deficit
function yourCalorie(){
    var age = parseFloat(document.getElementById("age").value);
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    var gender = document.getElementById("gender").value;
    if(gender === 'male'){
        document.getElementById('result').value=(66.5+(13.75*weight)+(5.003*height)-(6.755*age)).toFixed(0);
    }
    if(gender === 'female'){
        document.getElementById('result').value=(655+(9.563*weight)+(1.850*height)-(4.676*age)).toFixed(0);
    }
    if(gender === 'MaleLessActive'){
        document.getElementById('result').value=((66.5+(13.75*weight)+(5.003*height)-(6.755*age))*1.53).toFixed(0);
    }
    if(gender === 'MaleModeratelyActive'){
        document.getElementById('result').value=((66.5+(13.75*weight)+(5.003*height)-(6.755*age))*1.76).toFixed(0);
    }

    if(gender === 'MalemoreActive'){
        document.getElementById('result').value=((66.5+(13.75*weight)+(5.003*height)-(6.755*age))*2.25).toFixed(0);
    }
    if(gender === 'femaleLessActive'){
        document.getElementById('result').value=((655+(9.563*weight)+(1.850*height)-(4.676*age))*1.53).toFixed(0);
    }
    if(gender === 'femaleModeratelyActive'){
        document.getElementById('result').value=((655+(9.563*weight)+(1.850*height)-(4.676*age))*1.76).toFixed(0);
    }

    
    if(gender === 'femalemoreActive'){
        document.getElementById('result').value=((655+(9.563*weight)+(1.850*height)-(4.676*age))*2.25).toFixed(0);
    }

    
   }
    function reset(){
        document.getElementById('yourCalorie').remove();
    
    }




    
    
    
