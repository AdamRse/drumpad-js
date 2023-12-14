let touches = document.querySelectorAll(".key");
let audios = document.querySelectorAll("audio");

document.body.addEventListener("keydown", function(e){
    touches.forEach(function(touche){
        if(touche.querySelector("kbd").innerHTML.toLowerCase() == e.key){
            touche.classList.add("playing")
            audios.forEach(function(audio){
                if(audio.dataset.key == touche.dataset.key){
                    audio.play();
                }
            })
            
        }
    })
    
})
document.body.addEventListener("keyup", function(e){
    touches.forEach(function(touche){
        if(touche.querySelector("kbd").innerHTML.toLowerCase() == e.key){
            touche.classList.remove("playing")
            audios.forEach(function(audio){
                if(audio.dataset.key == touche.dataset.key){
                    audio.pause();
                    audio.currentTime = 0;
                }
            })
            
        }
    })
})
touches.forEach(function(touche){
    touche.addEventListener("mousedown", function(){
        this.classList.add("playing")
        audios.forEach(function(audio){
            if(audio.dataset.key == touche.dataset.key){
                audio.play();
            }
        })
    })

    touche.addEventListener("mouseup", function(){
        this.classList.remove("playing")
        audios.forEach(function(audio){
            if(audio.dataset.key == touche.dataset.key){
                audio.pause();
                audio.currentTime = 0;
            }
        })
    })
    touche.addEventListener("mouseleave", function(){
        this.classList.remove("playing")
        audios.forEach(function(audio){
            if(audio.dataset.key == touche.dataset.key){
                audio.pause();
                audio.currentTime = 0;
            }
        })
    })
})



// function playAndStop(key, ){
    

// }