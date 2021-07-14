function showTimeLeft(){
    changeStatus('#timeLeft', '#welcome');
    changeStatus('#timeLeftForm', '#timeLeftMessage');
}

function resetTimeLeft(){
    changeStatus('#welcome', '#timeLeft');
}

function foundPatientPosition(id){
    for (let i = 0; i < waitingRoom.length; i++){
        let patient = waitingRoom[i];
        if (patient.compare(id)){
            return i;
        }
    }
    return -1;
}

function getTimeLeft(position){
    let time = TURN_TIME * position;

    setTimeout(resetTimeLeft, 3000);
}

var timeLeftBtn = document.getElementById('okTimeLeft');
timeLeftBtn.addEventListener("click", getTimeLeft);

var cancelBtn = document.getElementById('cancelTimeLeft');
cancelBtn.addEventListener("click", resetTimeLeft);