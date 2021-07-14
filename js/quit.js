function showQuit(){
    changeStatus('#quit', '#welcome');
    changeStatus('#quitForm', '#quitMessage');
}

function resetQuit(){
    changeStatus('#welcome', '#quit');
}

function quitPatient(){
    let waitingRoom = localStorage.getItem('waitingRoom').split(',');
    let newWaitingRoom = []
    let idUser = document.getElementById('inputTimeLeft').value;
    
    let founded = false;
    for (let patient of waitingRoom){
        patientJSON = JSON.parse(patient);
        if (patientJSON.compare(idUser)){
            founded = true;
            let patientName = patientJSON.getFullName();
            console.log('Paciente encontrado');
        }else{
            newWaitingRoom.push(patient);
        }
    }
    let message = document.getElementById('quitMessage');
    if (founded){
        localStorage.setItem('waitingRoom', newWaitingRoom)
        message.innerHTML = 'El paciente ' + patientName + ' ha sido quitado de la fila correctamente.'
    }else{
        message.innerHTML = 'El paciente con ID: ' + idUser + ' no existe. Verifique su ID e intente nuevamente.'
    }
    
    setTimeout(resetQuit, 3000);
}

var quitBtn = document.getElementById('okQuit');
quitBtn.addEventListener("click", quitPatient);

var cancelBtn = document.getElementById('cancelQuit');
cancelBtn.addEventListener("click", resetQuit);