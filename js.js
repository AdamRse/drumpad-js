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
    // else if(e.key == "é"){
    //     beatBox(1);
    // }
    // else if(e.key == "\""){
    //     beatBox(2);
    // }
    // else{
    //     beatBox(3);
    // }
    
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

function rand(min, max){
    return Math.floor(Math.random() * (++max - min) + min);
}
let selectMelodie = 3;//0 à 3
let melodies = [];
resetMelody();
function resetMelody(){
    let melodie1 = [];//serpentin sonore
    let melodie2 = [];//we will rock you
    let melodie3 = [];//random
    let melodie0 = [
        ["z", 500],
        ["z", 0],["w", 500],
        ["z", 500],
        ["z", 0],["q", 500],
        ["z", 500],
        ["z", 0],["w", 500],
        ["z", 500],
        ["z", 0],["q", 500],
        ["z", 500],
        ["z", 0],["w", 500],
        ["z", 500],
        ["z", 0],["q", 500],
        ["z", 500],
        ["z", 0],["w", 500],
        ["z", 500],
        ["z", 0],["q", 500],
    ];
    for(let i = 0; i<10; i++){
        melodie1.push(["a", 0],["z", 0],["e", 0],["q", 0],["s", 0],["d", 0],["w", 0],["x", 0],["c", 0])
    }
    for(let i = 0; i<10; i++){
        melodie2.push(["e", 780],["e", 390],["a", 390])
    }
    let keys = ["a","z","e","q","s","d","w","x","c"];
    let rdm = rand(10, 50)
    for(let i = 0; i<rdm; i++){
        melodie3.push([keys[rand(0, 8)], rand(0, 1000)]);
    }
    melodies=[melodie0, melodie1, melodie2, melodie3];
}

function beatBox(n = false){
    console.log(n);
    // if(n !== false){
    //     selectMelodie = n;
    // }
    simulateKey(melodies[selectMelodie][0][0], 100).then(() => {
        if(melodies[selectMelodie].length != 0){
            setTimeout(function(){ beatBox(); }, melodies[selectMelodie][0][1]);
        }
        else{
            resetMelody();
        }
    });
}
function simulateKey(key, duree = 200){
    return new Promise((resolve) => {
        const event = new KeyboardEvent('keydown', { key });
        document.dispatchEvent(event);
        melodies[selectMelodie].shift();

        const keyUpEvent = new KeyboardEvent('keyup', { key });
        document.dispatchEvent(keyUpEvent);
        resolve();
        // setTimeout(() => {
        //     const keyUpEvent = new KeyboardEvent('keyup', { key });
        //     document.dispatchEvent(keyUpEvent);
        //     resolve();
        // }, duree);
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