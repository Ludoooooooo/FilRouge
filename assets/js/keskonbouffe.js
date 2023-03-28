let rep = ["assets/image/rep/mcdo.png", "assets/image/rep/subway.png", "assets/image/rep/sushi.png"]

let metz = ["assets/image/metz/mcdo.png", "assets/image/metz/subway.png", "assets/image/metz/bk.jpg", "assets/image/metz/kefan.png", 
            "assets/image/metz/sushi.png", "assets/image/metz/poulaillon.jpeg", "assets/image/metz/tonton.png"]

let muse = ["assets/image/muse/bk.jpg", "assets/image/muse/subway.png", "assets/image/muse/sushi.png", "assets/image/muse/kefan.png", 
            "assets/image/muse/poulaillon.jpeg", "assets/image/muse/tonton.png"]


var img = new Image();
img.src="assets/image/rep/mcdo.png";
img.src="assets/image/rep/subway.png";
img.src="assets/image/rep/sushi.png";

img.src="assets/image/metz/bk.jpg";
img.src="assets/image/metz/subway.png";
img.src="assets/image/metz/bk.jpg";
img.src="assets/image/metz/kefan.png";
img.src="assets/image/metz/sushi.png";
img.src="assets/image/metz/poulaillon.jpeg";

img.src="assets/image/muse/bk.jpg";
img.src="assets/image/muse/subway.png";
img.src="assets/image/muse/sushi.png";
img.src="assets/image/muse/kefan.png";
img.src="assets/image/muse/poulaillon.jpeg";


let previmage = 0;



document.querySelector("#rep").onclick = function(){
    let changeImage = document.querySelector("#illustration");              //change image en fonction de a ligne suivante

    let nouvelleimage = Math.round(Math.random()*(rep.length-1));          //Prend un chiffre aléa du tableau
    while(previmage == nouvelleimage){                                      //Tant que chiffre prev = nouvelleimage    
        nouvelleimage = Math.round(Math.random()*(rep.length-1));          //Repiocher un nouveau chiffre
    }
    changeImage.src = rep[nouvelleimage];                                  //L'image est remplacée
    previmage = nouvelleimage;   
}

document.querySelector("#metz").onclick = function(){
    let changeImage = document.querySelector("#illustration");              

    let nouvelleimage = Math.round(Math.random()*(metz.length-1));        
    while(previmage == nouvelleimage){                                       
        nouvelleimage = Math.round(Math.random()*(metz.length-1));        
    }
    changeImage.src = metz[nouvelleimage];                              
    previmage = nouvelleimage;                                             
}

document.querySelector("#muse").onclick = function(){                       
    let changeImage = document.querySelector("#illustration");              

    let nouvelleimage = Math.round(Math.random()*(muse.length-1));        
    while(previmage == nouvelleimage){                                     
        nouvelleimage = Math.round(Math.random()*(muse.length-1));          
    }
    changeImage.src = muse[nouvelleimage];                                
    previmage = nouvelleimage;                                             
}



