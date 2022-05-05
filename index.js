console.log('hi');


let sec =00;
let min=00;
let milli=00;
let myInterval;
let myInterval2
function start(){
    sec+=01
    document.getElementById('sec').innerHTML=sec.toString().padStart(2,"0")
    if(sec==60){
        sec=00
        min++;
        document.getElementById('min').innerHTML=min.toString().padStart(2,"0")
    }
}
var start_secs=document.getElementById('start');
start_secs.addEventListener('click',start1)
function start1(){
    myInterval=setInterval(start,1000);
    myInterval2=setInterval(milli_secs,10)
    var button_panel = document.getElementById('button_panel')
    var start_stop = document.getElementById('start_stop')
    var stop = document.getElementById('stop');
    stop.style.display="block"
    start_stop.appendChild(stop)
    var start_button = document.getElementById('start')
    start_button.style.display="none"
    document.getElementById('laps').style.display="block"
}   
function milli_secs(){
    milli+=1
    if(milli==100){
        milli=0;
    }
    document.getElementById('milli_id').innerHTML=milli
}

var stop_secs = document.getElementById('stop');
stop_secs.addEventListener('click',stop1)
function stop1(){
    clearInterval(myInterval);
    clearInterval(myInterval2);
    var button_panel = document.getElementById('button_panel')
    var start_button = document.getElementById('start');
    start_button.style.display="block"
    var reset = document.getElementById('reset');
    reset.style.display="block"
    button_panel.appendChild(reset);
    var stop = document.getElementById('stop');
    stop.style.display="none";
}
var reset_secs= document.getElementById('reset');
reset_secs.addEventListener('click',reset)
function reset(){
    clearInterval(myInterval);
    clearInterval(myInterval2);
    document.getElementById('sec').innerHTML='00'
    document.getElementById('min').innerHTML='00'
    document.getElementById('milli_id').innerHTML='00'
    document.getElementById('stop').style.display="none"
    document.getElementById('reset').style.display="none"
    document.getElementById('start').style.display="block" 
    document.getElementById(`lap_log`).style.display="none"
    document.getElementById('Lap_title').style.display="none"
    document.getElementById(`split_log`).style.display="none"
    document.getElementById('Split_title').style.display="none"
    document.getElementById('laps').style.display="none"
}


var lap_btn = document.getElementById('laps');
lap_btn.addEventListener('click',lap)

function lap(){
    // console.log(`${min}:${sec}:${milli}`);
    document.getElementById(`lap_log`).innerHTML+=`${min}:${sec}:${milli} <br>`   
    document.getElementById('split_log').innerHTML+=`${sec}:${milli} <br>`
    document.getElementById('main_lap_panel').style.display="flex"
}

var share_btn = document.getElementById('share');
share_btn.addEventListener('click',share)

function share(){
    console.log('hi');
    document.getElementById(`pen_url`).innerHTML=`${min}:${sec}:${milli}`  
}

const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
    shareDialog.classList.add('is-open');
     document.getElementById('pen_url').value =`${min}:${sec}:${milli}`;
 
//     navigator.share({
//         title:"My time",
//         url:`http://127.0.0.1:5502/session26.html`,
//         text:"time"
//     }).then(()=>{
//         console.log('Thanks');
//     })
//     .catch(console.error)
// }else{
    
// }
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});
// var pen_url = document.getElementById('pen_url').innerHTML=`${min}:${sec}:${milli}`;
// pen_url.value=`${min}:${sec}:${milli}`

function myfunc(){
    var copy_time = document.getElementById('pen_url')
    copy_time.select();
    navigator.clipboard.writeText(copy_time.value); 
    alert("Copied"); 
}
