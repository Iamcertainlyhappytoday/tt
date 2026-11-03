const cardArray = [
    {  name: 'a1',  img: ' imgBam/a1.JPG',   },
    {  name: 'a2',  img: ' imgBam/a2.JPG', },
    {  name: 'a3',  img: '  imgBam/a3.JPG',   },
    {  name: 'a4',  img: '   imgBam/a4.JPG', },
    {  name: 'a5',  img: '  imgBam/a5.JPG',   },
    {  name: 'a6',  img: '  imgBam/a6.JPG', },
    {  name: 'a1',  img: '  imgBam/a1.JPG',  },
    {  name: 'a2',  img: '  imgBam/a2.JPG',},
    {  name: 'a3',  img: '  imgBam/a3.JPG',  },
    {  name: 'a4',  img: '  imgBam/a4.JPG', },
    {  name: 'a5',  img: '  imgBam/a5.JPG',   },
    {  name: 'a6',  img: '  imgBam/a6.JPG', }
    ];

cardArray.sort(()=> 0.5 - Math.random());
//console.log(cardArray);
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen=[];
let cardsChosenIds = [];
let cardsWon=[];

function createBoard(){
//to create and element for each item in the array use
//forEach or a for loop 

    for(let i= 0 ; i<cardArray.length; i++){
        const card= document.createElement('img');
//this creates an img tag i number of times
        card.setAttribute('src', 'imgBam/orange.PNG' );
        card.style='display:flex; width:221px; height:127px;';       
        card.setAttribute('dataid', i); 
//this gives a unique data id for each img, print i number beside
//NEXT TO PUT IT INTO THE GRID, ie between the <div> tags
//So get the grid display..
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card)//no '' because is a variable!!
    }    
};
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    console.log()
    
    console.log('check for a match');
    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image!');
       cards[optionOneId].setAttribute('src', 'imgBam/orange.PNG')
    }else{
        if (cardsChosen[0] == cardsChosen[1]){
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'imgBam/blank.PNG');
            cards[optionTwoId].setAttribute('src', 'imgBam/blank.PNG');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneId].setAttribute('src', 'imgBam/white.png');  
            cards[optionTwoId].setAttribute('src', 'imgBam/white.png'); 
             alert('Sorry try again!');
        }    
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
    if (cardsWon.length == (cardArray.length/2)){
        //alert or
        resultDisplay.innerHTML = ' congratulations, you\'ve found all '+cardsWon.length+'<br>try again?'
      resp()
    }
}
function resp(){
    gridDisplay.innerHTML=''
    cardsWon=[]
    cardArray.sort(()=> 0.5 - Math.random());
    createBoard()
}
function flipCard() {
    
    console.log(cardArray);
    //think of which card I flipped on. 
    //need a listener on each card, get the dataid
    const cardId = this.getAttribute('dataid');
    //this does this to the flipCard. this keyword interracts with whatever
    //element is clicked.    
    cardsChosen.push(cardArray[cardId].name) ;  //gets the name of the random array where clicked
    //put it into a new array by push.
    cardsChosenIds.push(cardId);
    console.log('clicked', cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
     if (cardsChosen.length === 1) {
       this.setAttribute('src', cardArray[cardId].img);
    }else {if (cardsChosen.length === 2) {
        checkMatch();
     }
    }
}

  
