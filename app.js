const hole = document.querySelector('.hole');
const char = document.querySelector('.character');

hole.addEventListener('animationiteration', ()=>{
    let random = ((Math.random()*150)+100);
    hole.style.top = random + 'px';
});

let count = 0;
setInterval(()=>{
    count += 1;
    char.style.top =  count +'px'
    if (count === 380) {
        alert('you died');
        count=140;
    }
},10)
