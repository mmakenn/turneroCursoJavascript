function quitPatient(){
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
            localStorage.setItem('givenTurns' + speciality, givenTurns - 1);
        }else{
            newWaitingRoom.push(patient);
        }
    }
    let message = document.getElementById('notification');
    if (founded){
        newWaitingRoom = JSON.stringify(newWaitingRoom);
        localStorage.setItem('waitingRoom' + speciality, newWaitingRoom)
        message.innerHTML = 'El paciente ' + patientName + ' ha sido quitado de la fila correctamente.'
    }else{
        message.innerHTML = 'El paciente con ID: ' + turnUser + ' no existe. Verifique su ID e intente nuevamente.'
    }
    
    show('#notification');
    setTimeout(() => show('#welcome'), 3000);
}

var quitBtn = document.getElementById('okQuit');
quitBtn.addEventListener("click", quitPatient);

var cancelBtn = document.getElementById('cancelQuit');
cancelBtn.addEventListener("click", () => show('#welcome'));