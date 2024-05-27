let hours =0;

let minut=0;

let second=0;

let milisecond=0;

let timer;

let stop="stop"

function Start(){
    timer = setInterval(()=>{
        milisecond++
        if(milisecond >=100){
            second++
            milisecond = 0;

        }
        if(second >=60){
            minut++
            second = 0;

        }
        if(minut >=60){
            hours++
            minut=0;
        }
        document.getElementById('watch').innerHTML = `${hours}:${minut}:${second}:${milisecond}`


    },10)
}

function startstop(){
    if( stop == "stop"){
        clearInterval(timer)
stop =  "stop"
document.getElementById("startstop").innerText = "stop";

    }
    else{
        start()
        document.getElementById("startstop").innerText= "Start";
    }

}

function reset(){
    location.reload();
}











