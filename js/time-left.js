function getTimeLeft(){
    let turnUser = document.getElementById('inputTimeLeft').value;

    var founded = false;
    for (let i = 0; i < waitingRoom.length; i++){
        var patientJSON = JSON.parse(waitingRoom[i]);
        var thisPatient = new Patient(patientJSON.name, patientJSON.lastname, patientJSON.turn);
        if (thisPatient.compare(turnUser)){
            founded = true;
            var position = i;
            console.log('Paciente encontrado');
        }
    }

    let message = document.getElementById('notification');
    if (founded){
        let timeLeft = position * turnDuration;
        message.innerHTML = 'Usted tiene ' + timeLeft + ' minutos de espera.'
    }else{
        message.innerHTML = 'El paciente con ID: ' + turnUser + ' no existe. Verifique su ID e intente nuevamente.'
    }

    show('#notification');
    setTimeout(() => show('#welcome'), 3000);
}

var timeLeftBtn = document.getElementById('timeLeftOkBtn');
timeLeftBtn.addEventListener("click", () => {getTimeLeft();
                                            lockOkBtn('timeLeft');
                                            document.getElementById('inputTimeLeft').value = '';});

var cancelBtn = document.getElementById('timeLeftCancelBtn');
cancelBtn.addEventListener("click", () => {show('#welcome');
                                            lockOkBtn('timeLeft');
                                            document.getElementById('inputTimeLeft').value = '';});