class UI{
    //(1)this show an error with choosen theme and choosen text
    massage(message,typ){
        BTN.disabled = true;
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
            masPlace.classList.remove(typ);
            BTN.disabled = false;
        }, 1700);
    }
     //(2)show gifs and photos to show the User that everyting is done
    gifdone(){
        BTN.disabled = true;
        let place   = document.querySelector('#massage'),
            loadgif = document.createElement('img');
            
         //add an gif to show
        loadgif.setAttribute('src','img/a.gif');
        loadgif.classList.add('iimg');

        
        place.appendChild(loadgif);
        setTimeout(function() {
                place.removeChild(loadgif)
                document.querySelector('.form').reset();
                BTN.disabled = false;
            }, 3400);
    }
     //(3)valid inputs too be macth
    validpass(field){
        
        if(field[5].value === field[4].value){
            return 'yes';
        }
        else {
            return 'no';
        }
        
    }
} 