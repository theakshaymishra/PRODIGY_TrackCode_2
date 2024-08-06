let timerDisplay = document.querySelector('.timerDisplay');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let min = 0;
let sec = 0;
let msec = 0;
let timer = null;
start.addEventListener('click' ,function(){
    
        if(timer !== null ){
        clearInterval(timer) ;
    } 
    timer = setInterval(startTimer,10);
    
});

stop.addEventListener('click', function(){
    console.log("clicked");
    clearInterval(timer) ;
});
reset.addEventListener('click', function(){
    console.log("clicked");
    clearInterval(timer) ;
    timerDisplay.innerHTML = `00 : 00 : 00`
    min = 0;
    sec = 0;
    msec = 0;
});
function startTimer(){
    msec++;
    if(msec==100){
        msec = 0;
        sec++;
        if(sec==60){
            sec = 0;
            min++;
        }
    }
let msecString = msec<10 ? `0${msec}` : msec;    
let secString = sec<10 ? `0${sec}` : sec;
let minString = min<10 ? `0${min}` : min;

timerDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`;

}


