    
    function printoutwb(){        
        document.querySelector('header').setAttribute('class', 'hider'); 
        document.querySelector('.containerfoot').setAttribute('class', 'hider');   
       
        /*let allborders = document.querySelectorAll('.page');
        for(let i=0; i<allborders.length ; i++){
            allborders[i].firstElementChild.style='border:0;';
        } */    
            let allpages=document.querySelectorAll('.rowcentredk');
            for(let ii=0; ii<allpages.length; ii++){
            allpages[ii].setAttribute('class','hider');
            };        
        }
    function printout(){ 

    let lf=document.querySelectorAll('#frameleft img');
    for(let ii=0; ii<lf.length; ii++){
            lf[ii].setAttribute('class', 'hider');
            };
    let rf=document.querySelectorAll('#frameright img');
    for(let ii=0; ii<rf.length; ii++){
           rf[ii].setAttribute('class', 'hider');
            };
        document.querySelector('header').setAttribute('class', 'hider'); 
        document.querySelector('.containerfoot').setAttribute('class', 'hider');   
        
       
       document.querySelector('.page').style='border:0;';
        let allborders = document.querySelectorAll('.page div');
        for(let i=0; i<allborders.length ; i++){
            allborders[i].style='border:0; overflow:hidden';
        }     
            let allpages=document.querySelectorAll('.rowcentredk');
            for(let ii=0; ii<allpages.length; ii++){
            allpages[ii].setAttribute('class', 'hider');
            };        
    } 
     function showp(){
        document.querySelector('#commentp').classList.toggle('hider');
     }
     function endshowp(){
        document.querySelector('#commentp').classList.toggle('hider');
     }
     function showb(){
        document.querySelector('#commentwb').classList.toggle('hider');
     }
     function endshowb(){
        document.querySelector('#commentwb').classList.toggle('hider');
     }
