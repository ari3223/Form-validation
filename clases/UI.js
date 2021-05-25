class UI{
    //this show an error with choosen theme and choosen text
    massage(message,typ){
        let masPlace = document.querySelector('#massage');
         //Green theme
        if(typ === 'done'){
            masPlace.classList.add(typ);
            masPlace.textContent = message;
        }
         //Red theme
        else if(typ === 'error'){
            masPlace.classList.add(typ);
            masPlace.textContent = message;
        }
         //remove message for new message
        setTimeout(function() {
            masPlace.textContent = '';
            masPlace.classList.remove(typ)
        }, 2500);
    }
     //show gifs and photos to show the User that everyting is done
    gifdone(){
        let place   = document.querySelector('#massage'),
            loadgif = document.createElement('img'),
            BTN = document.querySelector('.btn');
         //add an gif to show
        loadgif.setAttribute('src','img/a.gif');
        loadgif.classList.add('iimg');
        
        BTN.style.display = 'none';
        
        
        place.appendChild(loadgif);
        setTimeout(function() {
                place.removeChild(loadgif)
                document.querySelector('.form').reset();
                BTN.style.display = 'block';   
            }, 3400);
    }
    
    validpass(field){
        
        if(field[5].value === field[4].value){
            return 'yes';
        }
        else {
            return 'no';
        }
        
    }
}