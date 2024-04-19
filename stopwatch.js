let display = document.querySelector("#display");
let seconds = document.querySelector(".second");
let minutes = document.querySelector(".minute");
let hours = document.querySelector(".hour");
let startbtn = document.querySelector("#start");
let pausebtn = document.querySelector("#pause");
let resetbtn = document.querySelector("#reset");
let hourspoints = document.querySelector("#hourpoints");
let minutespoints = document.querySelector("#minutepoints");


let second = 0;
let minute = 0;
let hour = 0;

minutes.style.display="none";
hours.style.display="none";
minutespoints.style.display="none";
hourspoints.style.display="none";

//=============================================START TIMER=======================================//
function startTimer(){
    id=setInterval(() => {
        second++
        if(second >= 60){
            second=00;
            minute++;
            minutes.style.display="block";
            minutespoints.style.display="block"
        }
        if(minute >= 60){
            minute=00;
            hour++
            hours.style.display="block";
            hourspoints.style.display="block";
        }
        seconds.innerHTML=(second < 10 ? "0":"")+second+"<span>s</span>";
        minutes.innerHTML=(minute < 10 ? "0":"")+minute+"<span>m</span>";
        hours.innerHTML=(hour < 10 ? "0":"")+hour+"<span>h</span>";
    }, 1000);

    startbtn.disabled=true;
    pausebtn.disabled=false;
    startbtn.style.background="lightblue";
    pausebtn.style.background="red";

}
startbtn.addEventListener("click", startTimer)



//==============================================STOP TIMER======================================//
function stopTimer(){
    clearInterval(id);
    pausebtn.disabled=true;
    startbtn.disabled=false;

    startbtn.style.background="blue";
    pausebtn.style.background="coral"
}
pausebtn.addEventListener("click", stopTimer);



//===============================================RESET TIMER=====================================//
function resetTimer(){
    clearInterval(id);
    second=00;
    minute=00;
    hour=00;

    seconds.innerHTML="00"+"<span>s</span>";
    minutes.textContent="00";
    hours.textContent="00";

    minutes.style.display="none";
    hours.style.display="none";
    minutespoints.style.display="none";
    hourspoints.style.display="none";
    startbtn.disabled=false;

    startbtn.style.background="blue";
    pausebtn.style.background="red";
}
resetbtn.addEventListener("click", resetTimer);