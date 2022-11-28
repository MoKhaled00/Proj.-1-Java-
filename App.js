let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Night = document.querySelector('.Night');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*4 + 'px';
    mountains3.style.top = value*2 + 'px';
    mountains4.style.top = value*1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value*3 + 'px';
    Night.style.fontSize = value + 'px';
    if(scrollY >= 67){
        Night.style.fontSize = 67 + 'px';
        Night.style.position = 'fixed';
        if(scrollY >= 420){
            Night.style.display = 'none';
        }else{
            Night.style.display = 'block';
        }
        if(scrollY >= 109){
            document.querySelector('.Main').style.background = 'linear-gradient(#113554,#10001f)'
        }else{
            document.querySelector('.Main').style.background = 'linear-gradient(#200016,#10001f)'

        }
    }
}