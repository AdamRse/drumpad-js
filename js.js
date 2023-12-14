let touches = document.querySelectorAll(".key");
let audios = document.querySelectorAll("audio");

document.addEventListener("keydown", function(e){
    touches.forEach(function(touche){
        if(touche.querySelector("kbd").innerHTML.toLowerCase() == e.key){
            touche.classList.add("playing")
            audios.forEach(function(audio){
                if(audio.dataset.key == touche.dataset.key){
                    audio.currentTime = 0;
                    audio.play();
                }
            })
            
        }
    })
    if(e.key == "&"){
        beatBox();
    }
    
})
document.addEventListener("keyup", function(e){
    touches.forEach(function(touche){
        if(touche.querySelector("kbd").innerHTML.toLowerCase() == e.key){
            touche.classList.remove("playing")
            audios.forEach(function(audio){
                if(audio.dataset.key == touche.dataset.key){
                    // audio.pause();
                    // audio.currentTime = 0;
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
                audio.currentTime = 0;
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

//PARTIE 2
melodie1 = [
    ["z", 200],
    ["z", 200],["w", 0],
    ["z", 200],
    ["z", 200],["q", 0],
    ["z", 200],
    ["z", 200],["w", 0],
    ["z", 200],
    ["z", 200],["q", 0],
    ["z", 200],
    ["z", 200],["w", 0],
    ["z", 200],
    ["z", 200],["q", 0],
    ["z", 200],
    ["z", 200],["w", 0],
    ["z", 200],
    ["z", 200],["q", 0],
];
function beatBox(){
    simulateKey(melodie1[0][0], 200).then(() => {
        if(melodie1.length != 0){
            setTimeout(function(){ beatBox(); }, melodie1[0][1]);
        }

    });
}
function simulateKey(key, duree = 200){
    return new Promise((resolve) => {
        const event = new KeyboardEvent('keydown', { key });
        document.dispatchEvent(event);
         melodie1.shift();

        setTimeout(() => {
            const keyUpEvent = new KeyboardEvent('keyup', { key });
            document.dispatchEvent(keyUpEvent);
            resolve();
        }, duree);
    });
}

document.querySelector("button").addEventListener("click", function(){
    beatBox();
})



//PARTIE 2 METHODE 2
// let btn = document.querySelector('button');
// btn.addEventListener('click',  function(){
//       if(play) 
//         beatBox();
// })

// async function beatBox(){
//     play = false
//     function simulateKeyy(key){
//         let ev = new KeyboardEvent('keydown', {key})
//         document.dispatchEvent(ev)
//         let ev1 = new KeyboardEvent('keyup', {key});
//         setTimeout(() => {
//             document.dispatchEvent(ev1)
//         }, 500);
//     }
//     function playBeat(key){
//         return new Promise( (resolve) => {
//             setTimeout(() => {
//                 resolve(simulateKeyy(key))
//             }, 1000);
//         })
//     }
// }