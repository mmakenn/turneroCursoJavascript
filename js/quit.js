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
        var patientJSON = JSON.parse(patient);
        var thisPatient = new Patient(patientJSON.name, patientJSON.lastname, patientJSON.turn);
        if (thisPatient.compare(turnUser)){
            founded = true;
            var patientName = thisPatient.getFullName();
            console.log('Paciente encontrado');
            let givenTurns = parseInt(localStorage.getItem('givenTurns'));
            localStorage.setItem('givenTurns', givenTurns - 1);
        }else{
            newWaitingRoom.push(patient);
        }
    }
    let message = document.getElementById('quitMessage');
    if (founded){
        newWaitingRoom = JSON.stringify(newWaitingRoom);
        localStorage.setItem('waitingRoom', newWaitingRoom)
        message.innerHTML = 'El paciente ' + patientName + ' ha sido quitado de la fila correctamente.'
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