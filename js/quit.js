function showQuit(){
    changeStatus('#quit', '#welcome');
    changeStatus('#quitForm', '#quitMessage');
}

function resetQuit(){
    changeStatus('#welcome', '#quit');
}

function quitPatient(){
    let waitingRoom = localStorage.getItem('waitingRoom') ? localStorage.getItem('waitingRoom') : []
    if (waitingRoom.length != 0){
        waitingRoom = JSON.parse(waitingRoom);
    }
    let turnUser = document.getElementById('inputQuit').value;
    
    let newWaitingRoom = [];
    let founded = false;
    for (let patient of waitingRoom){
        patientJSON = JSON.parse(patient);
        if (patientJSON.turn == turnUser){
            founded = true;
            var patientName = patientJSON.name;
            var patientLastname = patientJSON.lastname;
            console.log('Paciente encontrado');
        }else{
            newWaitingRoom.push(patient);
        }
    }
    let message = document.getElementById('quitMessage');
    if (founded){
        newWaitingRoom = JSON.stringify(newWaitingRoom);
        localStorage.setItem('waitingRoom', newWaitingRoom)
        message.innerHTML = 'El paciente ' + patientName + ' ' + patientLastname + ' ha sido quitado de la fila correctamente.'
    }else{
        message.innerHTML = 'El paciente con ID: ' + turnUser + ' no existe. Verifique su ID e intente nuevamente.'
    }
    
    changeStatus('#quitMessage', '#quitForm');
    setTimeout(resetQuit, 3000);
}

var quitBtn = document.getElementById('okQuit');
quitBtn.addEventListener("click", quitPatient);

var cancelBtn = document.getElementById('cancelQuit');
cancelBtn.addEventListener("click", resetQuit);