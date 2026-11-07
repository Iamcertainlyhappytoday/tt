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


//console.log(cardArray);

const resultDisplay = document.querySelector('#result');
const ally=document.querySelector('#alerter')
let cardsChosen=[];
let cardsChosenIds = [];
let cardsWon=[];
async  function createBoard(){
    try{
    await cardArray.sort(()=> 0.5 - Math.random());
     const gridDisplay = document.querySelector('#grid');
//to create and element for each item in the array use
//forEach or a for loop    
    for(let i= 0 ; i<cardArray.length; i++){
        const card= document.createElement('img');
//this creates an img tag i number of times
       // card.src=cardArray[i].img there is still a block so this does not really load helpfully
        card.src='imgBam/orange.PNG'  //setAttribute('src', 'imgBam/orange.PNG' );     
        card.style='flex:1 2 221px;max-width:32%;max-height:127px';       
        card.id=i //setAttribute('dataid', i); 
//this gives a unique data id for each img, print i number beside
//NEXT TO PUT IT INTO THE GRID, ie between the <div> tags
//So get the grid display..
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card)//no '' because is a variable!!
    }   
    }catch(e){console.log('error:' e.message)
             }
    
};
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];    
    //console.log('check for a match');
    if (optionOneId == optionTwoId) {
        ally.innerHTML='You have clicked the same image!'        
        //alert('You have clicked the same image!');
      // cards[optionOneId].removeAttribute('src')
       cards[optionOneId].src='imgBam/white.png' //setAttribute('src', 'imgBam/white.png')
    }else if (cardsChosen[0] == cardsChosen[1]){
            ally.innerHTML='You found a match!'          
            //alert('You found a match!');
            //cards[optionOneId].removeAttribute('src');
            cards[optionOneId].src='imgBam/blank.PNG' //setAttribute('src', 'imgBam/blank.PNG');
            //cards[optionTwoId].removeAttribute('src');
            cards[optionTwoId].src='imgBam/blank.PNG'  //setAttribute('src', 'imgBam/blank.PNG');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen[1]);
    }else{
            //cards[optionOneId].removeAttribute('src');  
            cards[optionOneId].src='imgBam/white.png'  //setAttribute('src', 'imgBam/white.png');  
            //cards[optionTwoId].removeAttribute('src');
            cards[optionTwoId].src='imgBam/white.png'  //setAttribute('src', 'imgBam/white.png'); 
            ally.innerHTML='Sorry try again!'         
            //alert('Sorry try again!');}
    }        
    resultDisplay.textContent = cardsWon.length;
    cardsChosen.splice(0, cardsChosen.length);  //or cardsChosen.lenght=0
    cardsChosenIds.splice(0, cardsChosenIds.length);
    if (cardsWon.length == (cardArray.length/2)){
        //alert or
        resultDisplay.innerHTML = ' congratulations, you\'ve found all '+cardsWon.length+'<br>try again?';
        ally.innerHTML='';     
      resp()
    }
}
function resp(){
    document.querySelector('#grid').innerHTML=''
    cardsWon.splice(0, cardsWon.length); // or cardsWon.length=0
    //cardArray.sort(()=> 0.5 - Math.random());
    createBoard()
}
 function flipCard(e) {
    ally.innerHTML="um thinking...what next?"    
   // console.log(cardArray);
    //think of which card I flipped on. 
    //need a listener on each card, get the dataid
    let targett=e.target;// target is readonly
     
    const cardId =  targett.id  //getAttribute('dataid');
    //this does this to the flipCard. this keyword interracts with whatever
    //element is clicked.    
    cardsChosen.push(cardArray[cardId].name) ;  //gets the name of the random array where clicked
    //put it into a new array by push.
    cardsChosenIds.push(cardId);
    //console.log('clicked', cardId);
    //console.log(cardsChosen);
    //console.log(cardsChosenIds);
     if (cardsChosen.length === 1) {            
         // this.removeAttribute('src');
     targett.src=cardArray[cardId].img;  //setAttribute('src', cardArray[cardId].img),50);
    }else {if (cardsChosen.length === 2) {
        checkMatch()
     }
    }
   
}

  
