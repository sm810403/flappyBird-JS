const hole = document.querySelector('.hole');
const char = document.querySelector('.character');

//hole random height
hole.addEventListener('animationiteration', ()=>{
    let random = ((Math.random()*150)+100);
    hole.style.top = random + 'px';
});

//gravity
let count = 0;
setInterval(()=>{
    count += 1;
    char.style.top =  count +'px'
    if (count === 380) {
        alert('you died');
        count=140;
    }
},10)

//jump
window.addEventListener('keydown', (e)=>{
    if (e.keyCode===32) {
        count -= 60;
        char.style.top =count+'px';    
    }
    
})
//score
let score = 0;
let scores = document.querySelector('.score');

function getScore() {
    if (block.style.left === -300) {
        score +=10;
        scores.innerHTML = score;
    }
}
          