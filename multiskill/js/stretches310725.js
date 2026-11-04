let entryBLast;
let fileble= [];
let filebleStore=[];
let capture=document.querySelector('#tablearea');
let tbody=document.querySelector('#tablearea tbody');
let entryB=document.querySelector('#entryB');
let entryE=document.querySelector('#entryE');
let arrB=document.getElementById('entryArr');
let entryTa=document.getElementById('tablenew');
let arrBa=document.getElementById('entryArra');  //new
let entryTaa=document.getElementById('tablenew')        //new
let demo2=document.querySelector('#demo2');
demo2.setAttribute('class','hide');
let demo3=document.querySelector('#demo3');
let demo4=document.querySelector('#demo4');
demo4.setAttribute('class', 'hideno')
let demo5=document.querySelector('#demo5');
let demo6=document.querySelector('#demo6');
entryB.addEventListener('click', namenter);
let entryBa=document.querySelector('#entryBa');//new
entryBa.addEventListener('click', namenter);//new
entryE.addEventListener('click',newEdition);
let entryEa=document.querySelector('#entryEa');//new
entryEa.addEventListener('click',newEditiona);//new
let togitt=document.getElementById('togit');
togitt.addEventListener('click', togit);        //new
let togitta=document.getElementById('togita');      //new
togitta.addEventListener('click', togit);
arrB.addEventListener('click', fileblll);  
entryE.setAttribute('class','hide');
arrBa.addEventListener('click', fileblll);  
entryEa.setAttribute('class','hide');;
let imageFile=[/*of course you cannot save the image with the wrong format*/
        {name:'backover', img:'stretch9and/backover.JPG', alt:'backover'},
        {name:'forwardstretch', img:'stretch9and/forwardstretch.JPG', alt:'forwardstretch'},
        {name:'planthold', img:'stretch9and/planthold.JPG', alt:'planthold'},
        {name:'hurdlestretch', img:'stretch9and/hurdlestretch.JPG', alt:'hurdlestretch'},
        {name:'itb4ward', img:'stretch9and/itb4ward.JPG', alt:'itb4ward'},
        {name:'itbhip', img:'stretch9and/itbhip.JPG', alt:'itbhip'},
        {name:'legacross', img:'stretch9and/legacross.JPG', alt:'legacross'},
        {name:'longbackneeling', img:'stretch9and/longbackneeling.JPG', alt:'longbackneeling'},
        {name:'plough', img:'stretch9and/plough.JPG', alt:'plough'},
        {name:'ploughb', img:'stretch9and/ploughb.JPG', alt:'ploughb'},
        {name:'quadsupper', img:'stretch9and/quadsupper.JPG', alt:'quadsupper'},
        {name:'seestars', img:'stretch9and/seestars.JPG', alt:'seestars'},
        {name:'sides', img:'stretch9and/sides.JPG', alt:'sides'},
        {name:'sidesb', img:'stretch9and/sidesb.JPG', alt:'sidesb'},
        {name:'touchtoes', img:'stretch9and/touchtoes.JPG', alt:'touchtoes'},
        {name:'upsidewheel', img:'stretch9and/upsidewheel.JPG', alt:'upsidewheel'},
        {name:'achilles', img:'stretch9and/achilles.JPG', alt:'achilles'},
        {name:'biceporigin', img:'stretch9and/biceporigin.JPG', alt:'biceporigin'},
        {name:'carpalwrist', img:'stretch9and/carpalwrist.JPG', alt:'carpalwrist'},
        {name:'chestcollar', img:'stretch9and/chestcollar.JPG', alt:'chestcollar'},
        {name:'iliacrest', img:'stretch9and/iliacrest.JPG', alt:'iliacrest'},
        {name:'lowerback', img:'stretch9and/lowerback.JPG', alt:'lowerback'},
        {name:'neckshoulder', img:'stretch9and/neckshoulder.JPG', alt:'neckshoulder'},
        {name:'quadb', img:'stretch9and/quadb.JPG', alt:'quadb'},
        {name:'ribs', img:'stretch9and/ribs.JPG', alt:'ribs'},
        {name:'shoulderitb', img:'stretch9and/shoulderitb.JPG', alt:'shoulderitb'},
        {name:'quad', img:'stretch9and/quad.JPG', alt:'quad'}
];

let startTa= tbody.innerHTML.replace(/,/g, '\/') ;        
let origTa = startTa.replace(/<tr>/g, '');
    origTa = origTa.replace(/<\/tr>/g, ',');
    origTa = origTa.replace(/<td.+>$/g, '');
    origTa = origTa.replace(/\s+/g, '');    
let origParts = origTa.split(',');//array now to get key/values on each line  
for(let j=0; j<origParts.length-1; j++){   
        filebleStore.push({'[]':'','thumb':'','name':'','status':'','description':''});   
        let newParts= origParts[j].replace(/<\/td>/g, ',').trim();//makes each part distinct array
        newParts = newParts.split(',') ;            // console.log(newParts) ;       
        filebleStore[j]['[]']= newParts[0];
        let thumber= filebleStore[j]['name']=newParts[2];        
        let thumbera=  thumber.replace(/<td.*>/,'');  
        if(filebleStore[j]['thumb']= `<a href='stretch9and/${thumbera}.JPG'>img<\a>`){       
            filebleStore[j]['thumb']= `<a href='stretch9and/${thumbera}.JPG' target='_blank'>img<\a>`;
        }/*
        if(filebleStore[j]['thumb']= `<a href='hotdimg/${thumbera}.PNG'>img<\a>`){ 
            filebleStore[j]['thumb']= `<a href='hotdimg/${thumbera}.PNG' target='_blank'>img<\a>`;    
        } */           
        filebleStore[j]['status']=newParts[3];  
        filebleStore[j]['description']=newParts[4];        
}
let arrby=[]
function arrbey(){
    if (arrby.length==1){
        demo4.innerHTML='';
        arrby=[];
    }
}
function fileblll(){
    arrby.push({'[]':'','thumb':'','name':'','status':'','description':''});    
    arrbey();  /*This stops the arrays stacking up each time you press for them
    then below I also make it toggle hidden. It should only be 1 long once as well.*/
    demo4.classList.toggle('display'); 
        for(let i=0; i<filebleStore.length; i++){               
        let finder="{'[]':'"+filebleStore[i]['[]']+
         "'"+",'thumb':'"+filebleStore[i]['thumb']+
        "'"+",'name':'"+ filebleStore[i]['name']+
        "'"+",'status':'"+filebleStore[i]['status']+
        "'"+",'description':'"+filebleStore[i]['description']+
        "'},";   
        demo4.innerHTML+=finder+'<br>';     
        }          
        for(let j=0; j<fileble.length; j++){               
        let finder="{'[]':'"+fileble[j]['[]']+
        "'"+",'thumb':'"+ fileble[j]['thumb']+
        "'"+",'name':'"+ fileble[j]['name']+
        "'"+",'status':'"+fileble[j]['status']+
        "'"+",'description':'"+fileble[j]['description']+
        "'},";   
        demo4.innerHTML+=finder+'<br>';           
        }    
} 
function togit(){
        //demo5.classList.toggle('hide');   
        if(demo5.innerHTML==''){
    demo5.textContent=`${capture.innerHTML}`;
        }
        else{
            demo5.innerHTML='';
        }
}
function namenterprepb4(){//getting the prior table elements live with edit on them
    let tbodyC=document.querySelectorAll('tbody tr');
    let l=tbodyC.length;  
    for(i=0; i<l; i++){ 
        let tbD=tbodyC[i].querySelectorAll('td');
        let ll=tbD.length;
        for(let j=0; j<ll; j++){
            tbD[j].addEventListener('click',edit);
           let k=j;
            switch(k){
                case 0:k='a';
                break;
                case 1:k='b';
                break;
                case 2:k='c';
                break;
                case 3:k='d';
                break;
                case 4:k='e';
                break;
                default:console.log('no valid data switch')
            }
            tbD[j].setAttribute('id',i+k)
        }
    }       
}
namenterprepb4();   
function namenter(){   
    fileble.push({'[]':'',thumb:'',name:'',status:'',description:''});//each time a row is prepped  
    let l=(fileble.length-1); 
    let fsl=filebleStore.length;
    let fsll=l+fsl; //make the 2 stores into 1
    let k=fsll.toString();    
    let entern=document.querySelector('#inputter').value||document.querySelector('#inputtera').value; //new alteration
    if(entern){   
        let grab=imageFile.length;         
        let td=document.createElement('td');              
        td.setAttribute('id', k + 'b'); 
        td.addEventListener('click', edit)      
        for(let i=0; i<grab; i++){    
            if(imageFile[i]['name']==entern){                 
                fileble[l]['thumb']=imageFile[i]['img'];             
                if(imageFile[i]['img']){ 
                    let n= imageFile[i]['img'];                                  
                    let tDatai=document.createElement('img');            
                    tDatai.style= "width:100px; height: 60px";                 
                    tDatai.setAttribute('src',n);                    
                    td.append(tDatai);   
                }       
            }        
        }  
        fileble[l]['name']=entern;
        entryBLast='status of '+ fileble[l]['name'];    
        let tRow=document.createElement('tr');
        let tData=document.createElement('td'); 
        tData.setAttribute('id', k + 'a')
        tData.addEventListener('click', edit) 
        let tData1=document.createElement('td'); 
        tData1.setAttribute('id', k + 'c');
        tData1.addEventListener('click', edit) 
        let td1=tData.textContent=fsll;  
        let td2=tData1.textContent=entern;      
        tRow.append(tData,td, tData1);
        tbody.append(tRow);     
        document.querySelector('#inputter').value='';   
        document.querySelector('#inputtera').value='';  //new
        descenterPrep()
    }   
}
function descenterPrep(){
    document.querySelector('#inputter').placeholder=entryBLast;  
    document.querySelector('#inputtera').placeholder=entryBLast;   //new      
    entryB.removeEventListener('click', namenter);
    entryB.addEventListener('click', descenter);
    entryBa.removeEventListener('click', namenter);         //new
    entryBa.addEventListener('click', descenter);           //new
}
function descenter(){     
    let enterd=document.querySelector('#inputter').value||document.querySelector('#inputtera').value;//new altered
    let l=fileble.length-1;  
    let k=l.toString();     
    if(enterd){ 
    fileble[l]['status']=enterd;
    entryBLast='description of '+fileble[l]['name'];    
    let tData1=document.createElement('td');
    tData1.setAttribute('id', k + 'd');
    tData1.addEventListener('click', edit) 
    let td1=tData1.textContent=enterd;    
    tbody.lastChild.append(tData1);
    document.querySelector('#inputter').value='';
    document.querySelector('#inputtera').value=''; //new
    locenterPrep(); 
    }   
}
function locenterPrep(){
    document.querySelector('#inputter').placeholder=entryBLast;
    document.querySelector('#inputtera').placeholder=entryBLast;
    entryB.removeEventListener('click', descenter);
    entryB.addEventListener('click', locenter);
    entryBa.removeEventListener('click', descenter);            //new
    entryBa.addEventListener('click', locenter);                //new
}
function locenter(){     
    let enterl=document.querySelector('#inputter').value||document.querySelector('#inputtera').value;   //new altered
    let l=fileble.length-1;    
    fileble[l]['description']=enterl; 
    if(enterl){  
    entryBLast='Next Name';
    let tData1=document.createElement('td');
    let k=l.toString()
    tData1.setAttribute('id', k + 'e');   
    tData1.addEventListener('click', edit)  
    //tData1.setAttribute('class', 'tawidth')
    let td1=tData1.textContent=enterl;         
    //tbody1=tbody;
    tbody.lastChild.append(tData1);    
    document.querySelector('#inputter').value='';
    document.querySelector('#inputtera').value='';
    namenterPrep();  
    }  
}
function namenterPrep(){    
    document.querySelector('#inputter').placeholder='Next name';
    document.querySelector('#inputtera').placeholder='Next name';
    entryB.removeEventListener('click',locenter);
    entryB.addEventListener('click', namenter);
    entryBa.removeEventListener('click',locenter);      //new
    entryBa.addEventListener('click', namenter);        //new
    demo2.textContent=tablearea.innerHTML;
}
let editing;
let editArr=[];
let demo=document.querySelector('#demo1');
let ender;
function edit(e){     
    let el=editArr.length-1;
    if(el==0){ 
       //edit();
       return;       
    }
    editing=e.target; 
    ender=editing.getAttribute('id');
    if(ender){
        editOn();    
    }
}
function editOn(){        
    editArr.push(editing);              
    editing.setAttribute('class', 'red') ;     
    entryB.setAttribute('class', 'hide');    
    entryBa.setAttribute('class', 'hide');     //new 
    editor();
}
function editor(){  //Edit button is revealed   
    entryE.removeAttribute('class', 'hide');     
    entryEa.removeAttribute('class', 'hide');     //new   
    let whatrows=document.querySelectorAll('.row textarea ');    //----new  alteration    
    whatrows[0].setAttribute('placeholder', editing.textContent);    
    whatrows[0].value=editing.textContent; 
    whatrows[1].setAttribute('placeholder', editing.textContent);    
    whatrows[1].value=editing.textContent;  
    editing.textContent='please update above' ;//edit button fires newEdition     
}
function childimager(){
    let grab=imageFile.length;  
    let ll=document.querySelectorAll('tr');  
    let l=ll.length;
    let dz=ender.match(/\d+(?=\w)/).toString(); 
    for(let j=0;j<l; j++){
        for(let i=0; i< grab; i++){ 
            if(ll[ Math.floor(dz)+1].children[2].textContent==imageFile[i]['name']){
                // if(imageFile[i]['name']==ll[ Math.floor(dz)+1].children[2].textContent)     
                console.log('has child image'); 
                let tdd=document.createElement('td')
                ll[ Math.floor(dz)+1].children[1].replaceWith(tdd);             
                let n=imageFile[i]['img']
                let newI=document.createElement('img');
                newI.setAttribute('src', n)
                newI.style= "width:100px; height: 60px";                 
                ll[ Math.floor(dz)+1].children[1].append(newI);  
                return;            
            } else   if(ll[ Math.floor(dz)+1].children[2].textContent!==imageFile[i]['name']){   
                let tdd=document.createElement('td')
                ll[ Math.floor(dz)+1].children[1].replaceWith(tdd);      
            }   
        }
    }console.log('does not have a child image')
}   
function imager(){
    let grab=imageFile.length;  
    let ll=document.querySelectorAll('tr');  
    let dz=ender.match(/\d+(?=\w)/).toString(); 
    for(let i=0; i< grab; i++){
        if(ll[ Math.floor(dz)+1].children[2].textContent==imageFile[i]['name']){
           // if(imageFile[i]['name']==ll[ Math.floor(dz)+1].children[2].textContent)     
                console.log('has child image');
                childimager();
                return;                
    }         
    } console.log('does not have child image')  
    childimager();
}
function newEdition(){   
    whatrow=document.querySelector('#inputter').value;
    if(whatrow){
    editing.textContent=whatrow;
    }
    newEdEd();
}
function newEditiona(){    
    whatrow=document.querySelector('#inputtera').value;     
    if(whatrow){               
        editing.textContent=whatrow;
    }
    newEdEd();   
}       
function newEdEd(){    
    //editing.textContent=whatrow;  
    let ppp=editing.parentElement;       
    let a=ender.match(/(?<!\w)\d+/); 
    let dz=ender.match(/\d+(?=\w)/).toString(); 
    let ll=document.querySelectorAll('tr');     //image check bit   
    if((ender.match(/c$/))){
        imager()
    }
    console.log(ppp.children.length) 
    console.log(dz);
    let pH;
    if(ppp.children.length<=4){    
        console.log(ll[ Math.floor(dz)+1].children[2].textContent)  
        let joiner=  ll[ Math.floor(dz)+1].children[2].textContent;
        let picupdate ;
        if(ender.match(/a$/)){         
            pH='Status of  '+joiner; //+editArr[dz+1]['Name'];       
        }else if(ender.match(/c$/)){         
            pH='Status of  '+joiner; //get the image updated if the name changed
        }else if(ender.match(/d$/)){              
                pH= 'Description of ' +joiner//fileble[a]['Name'];                     
        }else if(ender.match(/e$/)){              
                pH= 'Next Name ' //fileble[a]['Name'];                     
        }
    }
    if(ppp.children.length==5 ){  
        let f=filebleStore.length;       
        let r=tbody.querySelectorAll('tr').length ;       
        if (r==f){
            pH='enter new/next details';
        }else{     
        pH=entryBLast;
        }
        console.log('"spaces"')
    }
    document.querySelector('#inputter').value='';
    document.querySelector('#inputter').placeholder=pH; //entryBLast;    
    document.querySelector('#inputtera').value='';          //new
    document.querySelector('#inputtera').placeholder=pH; //entryBLast;  new  
    editing.removeAttribute('class', 'red');
    entryE.setAttribute('class', 'hide');
    entryB.removeAttribute('class', 'hide');  
    entryEa.setAttribute('class', 'hide');     //new
    entryBa.removeAttribute('class', 'hide');  //new
    editArr=[] ;
} 
/*let alpha=document.querySelector('#demo11');
let nameArr=[];
function sorter(a,b){
    if(a<b){
        return -1;

    }else if (a>b){ return 1;

    }else{ 
        return 0;
    }
}
function makeAlpha(){
    let l=imageFile.length;
    for(let i=0; i<l; i++){
                nameArr.push(imageFile[i].name);
    }
}
makeAlpha() 
let newOrder= nameArr.sort(sorter);
let ll=newOrder.length;
for(let i=0; i<ll; i++){    
alpha.innerHTML+= newOrder[i] + ', ' ;
}*/
let yourphoto=document.querySelector('#changephoto button');
yourphoto.addEventListener('click', changephoto);
function changephoto(){    
    let titlephoto=[ {img: 'mainimg/personalme.jpg', alt: 'personaltrainer-me'},
        {img: 'mainimg/climbme.JPG', alt: 'climbme'},
        {img: 'mainimg/samm.JPG', alt: 'raceme'}
    ];     
    let l = titlephoto.length; 
    let whatp = document.querySelector('#titlephoto img');
    let whatpq = whatp.alt;
    let texter=document.querySelector('#tphoto');
    let butter=document.querySelector('#changephoto button');
    let bigphoto=document.querySelector('body');     
    let tableget=document.querySelector('#tablearea');
    let tablegetw=document.querySelectorAll('#tablearea img');
    let writing=document.querySelector('#writing');
    let writetop=document.querySelector('#titles');
    switch(whatpq){
        case 'personaltrainer-me':whatp.src=titlephoto[1].img;
        whatp.alt=titlephoto[1].alt;
        texter.innerHTML='training for<br>example?';
        butter.textContent='click again';
        break;
        case 'climbme':whatp.src=titlephoto[2].img;
        whatp.alt=titlephoto[2].alt;
        bigphoto.style='background-image: url(mainimg/climbmesquare.JPG);background-size:cover;\
        background-repeat: no-repeat;color:orangered; ';
        tableget.style='opacity:0.8; color:thistle ;background-color:navy;'
        writetop.style='opacity:0.7; background-color:lavender;margin:auto;'
        writing.style='color:darkslategrey;background-color:snow;opacity:0.8;';
       texter.innerHTML='sams photo<br>you or client?';
       butter.textContent='click again';
        break;
        case 'raceme':whatp.src=titlephoto[0].img;        
        whatp.alt=titlephoto[0].alt;
        bigphoto.style=' ';
        tableget.style=''
        titles.style=''
        writing.style='';
       texter.textContent='my photo';
       butter.textContent='click here';
        break;
        default:whatp.src=titlephoto[0].img;  
        whatp.alt=titlephoto[0].alt;         
    }      
}
