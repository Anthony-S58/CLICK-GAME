const clic = document.getElementById("clic");
const compteurDeClics = document.getElementById("compteurDeClics");
const Crono = document.getElementById("timer");
let message = document.getElementById("message");
const demarrer = document.getElementById("demarrer");
const body = document.querySelector("body");



demarrer.addEventListener("click", function (){

        let nombreDeClics = 0;

        clic.addEventListener("click", incrementerCompteur);
        
        function incrementerCompteur ()
            {
                nombreDeClics++;
                compteurDeClics.textContent=nombreDeClics;
            };
        

    var cpt = 10;
 
    timer = setInterval(function(){


        if(cpt>0)
        {
            --cpt; // décrémente le compteur
            document.getElementById("Crono").innerHTML = "Il vous reste : " + cpt + " secondes" ;
        }
        else
        {
            clearInterval(timer);
        }
        
        if (cpt == 0) {
            alert('Vous avez fait ' + nombreDeClics);
            document.location.reload();
            clic.addEventListener("click", tricheur);
    
        function tricheur() {
           
        nombreDeClics--;
        compteurDeClics.textContent=nombreDeClics;
        message.textContent="Ce n'est pas bien de vouloir tricher !!!";
        

        }
            
        }
        
        
}, 1000)});



    
    

    