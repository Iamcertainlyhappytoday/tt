const cardArray = [
    {  name: 'a1',  img: '  imgBam/a1.JPG', },
    {  name: 'a2',  img: '  imgBam/a2.JPG', },
    {  name: 'a3',  img: '  imgBam/a3.JPG', },
    {  name: 'a4',  img: '  imgBam/a4.JPG', },
    {  name: 'a5',  img: '  imgBam/a5.JPG', },
    {  name: 'a6',  img: '  imgBam/a6.JPG', },
    {  name: 'a1',  img: '  imgBam/a1.JPG', },
    {  name: 'a2',  img: '  imgBam/a2.JPG', },
    {  name: 'a3',  img: '  imgBam/a3.JPG', },
    {  name: 'a4',  img: '  imgBam/a4.JPG', },
    {  name: 'a5',  img: '  imgBam/a5.JPG', },
    {  name: 'a6',  img: '  imgBam/a6.JPG', }
    ];
let gridDisplay=document.querySelector('#grid');
 //cardArray=cardArr.sort(()=> 0.5 - Math.random());
const resultDisplay = document.querySelector('#result');
const ally=document.querySelector('#alerter')
let cardsChosen=[];
let cardsChosenIds = [];
let cardsWon=[];
let cardId;

 function createBoard(){   
  cardArray.sort(()=> 0.5 - Math.random());
    let card=document.querySelectorAll('#grid .cardsize img')
        for(let i= 0 ; i<card.length; i++){ 
            card[i].addEventListener('click', flipCard);
            console.log(cardArray[i])
    }   
};
createBoard();

 function checkMatch(){
    const cards = document.querySelectorAll('#grid .cardsize  img');    
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1]; 
    optionOneId;
    optionTwoId;    
    if (optionOneId === optionTwoId) {
        ally.innerHTML='You have clicked the same image!';    
       cards[optionOneId].src='imgBam/white.png';      
    }else{
        if (cardsChosen[0][1] ===cardsChosen[1][1]){
            ally.innerHTML='You found a match!'          
            cards[optionOneId].src='imgBam/blank.PNG';      
            cards[optionTwoId].src='imgBam/blank.PNG';    
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen[1]);          
        }else{           
            cards[optionOneId].src='imgBam/white.png';            
            cards[optionTwoId].src='imgBam/white.png';           
            ally.innerHTML='Sorry try again!'         
            //alert('Sorry try again!');
        }    
    }
}
    resultDisplay.innerHTML = cardsWon.length;
    cardsChosen.splice(0,cardsChosen.length)// 0 is start and deletes the whole way
    // or while (arr.length > 0) {  arr.pop();}  = the slower method
    cardsChosenIds.splice(0,cardsChosenIds.length);
    if (cardsWon.length == (cardArray.length/2)){
        //alert or
        resultDisplay.innerHTML = ' congratulations, you\'ve found all '+cardsWon.length+'<br>try again?';
        ally.innerHTML='';       
    resp()
}
   

function resp(){
    document.querySelector('#grid').innerHTML=gridDisplay.innerHTML;
    cardsWon=[]    
    createBoard()
}
function flipCard(e) {    
    ally.innerHTML="um thinking...what next?"   
   let target= e.target
   let targett=target.parentElement  
    console.log(targett)//show the parent is not clicked
    let cardId =targett.getAttribute('dataid');
     cardId;
    console.log(cardId)     
    cardsChosen.push(cardArray[cardId].name) ;  //gets the name of the random array where clicked
    //put it into a new array by push.
    cardsChosenIds.push(cardId);
     if (cardsChosen.length === 1) {        
     // e.target.src= cardArray[cardId].img       ; 
         document.querySelectorAll('#grid .cardsize img')[cardId].src=cardArray[cardId].img  
    }else {if (cardsChosen.length === 2) {
        checkMatch()
     }
    }  
}

  
  
