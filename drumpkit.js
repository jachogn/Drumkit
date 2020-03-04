
function playSound(e){
    const audio = document.querySelector(`audio[data-key= "${e.which}"]`)
    const key = document.querySelector(`.key[data-key = "${e.which}"]`);
    console.log(e.which);
    if(!audio){
        return;
    }

    audio.currentTime = 0;
    console.log(key);
    key.classList.add('playing');
    
    
    audio.play();
}

window.addEventListener("keydown",playSound);

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition=(e)=>{
    if(e.propertyName !== 'transform'){
        return;
    }
    key.classList.remove('playing');
})
    
);