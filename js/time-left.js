function showTimeLeft(){
    changeStatus('#timeLeft', '#welcome');
    changeStatus('#timeLeftForm', '#timeLeftMessage');
}

function resetTimeLeft(){
    changeStatus('#welcome', '#timeLeft');
}

function getTimeLeft(){
    let waitingRoom = localStorage.getItem('waitingRoom') ? localStorage.getItem('waitingRoom') : []
    if (waitingRoom.length != 0){
        waitingRoom = JSON.parse(waitingRoom);
    }
    let turnUser = document.getElementById('inputTimeLeft').value;
    
    let founded = false;
    for (let i = 0; i < waitingRoom.length; i++){
        var patientJSON = JSON.parse(waitingRoom[i]);
        var thisPatient = new Patient(patientJSON.name, patientJSON.lastname, patientJSON.turn);
        if (thisPatient.compare(turnUser)){
            founded = true;
            var position = i;
            console.log('Paciente encontrado');
        }
    }
    let message = document.getElementById('timeLeftMessage');
    if (founded){
        let timeLeft = position * TURN_TIME;
        message.innerHTML = 'Usted tiene ' + timeLeft + ' minutos de espera.'
    }else{
        message.innerHTML = 'El paciente con ID: ' + turnUser + ' no existe. Verifique su ID e intente nuevamente.'
    }

    changeStatus('#timeLeftMessage', '#timeLeftForm');
    setTimeout(resetTimeLeft, 3000);
}

var timeLeftBtn = document.getElementById('okTimeLeft');
timeLeftBtn.addEventListener("click", getTimeLeft);

var cancelBtn = document.getElementById('cancelTimeLeft');
cancelBtn.addEventListener("click", resetTimeLeft);