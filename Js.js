//classes
let ui = new UI();

//evenliseners
evenlisener();
function evenlisener() {
     //after user select the sub bottun validation must be began(in after sub)
    document.querySelector('.btn').addEventListener('click', afterSub);             
}


//functions
 //all validation are in this function
function afterSub (e) {
    let counter = 0,
        clases = document.querySelectorAll('.fieldp input');
    
    clases.forEach(function (elem) {
         //real validation is in html in here we are just checked if not valid write it down
        if(!elem.checkValidity()){
            counter += 1
        }
    })
     //if all html validattion was right its js validation Time
    if(counter == 0){
         //see if pss s are same or not
        let confirm = ui.validpass(clases);
        if(confirm === 'yes'){
         //if pss math send info and show user that it s Done       
        ui.gifdone();
        radyInfo(clases);
        }
        else if(confirm === 'no'){
             //if not math show error to user
            ui.massage('please match the passworads','error');
        }
}
     //if Html validations are not right(not valid)
    else if(counter > 0){
        ui.massage('please fill all the fields','error');
         counter = 0;
    }  
}
 //this Function is send info(thats an exampl)
function radyInfo(field) {
      //the array that will be Send
     let sendArray = {
        name : field[0].value,
        phone : field[1].value,
        email : field[2].value,
        site : field[3].value,
        pass : field[4].value
    }
         //after sending info , info should not be saved and should be clear for next Info 
        document.querySelector('.form').reset();     
}

