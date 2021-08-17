function checkInPatient(){   
    console.log('Ejecutando recepción del paciente...');
    let message = document.getElementById('notification');
    if(givenTurns < maxDayTurn){
        let name = document.getElementById('input-name').value;
        let lastname = document.getElementById('input-lastname').value;

        let patient = new Patient(name, lastname);
        patientJSON = JSON.stringify(patient);
        waitingRoom.push(patientJSON);
        waitingRoom = JSON.stringify(waitingRoom);
        localStorage.setItem('waitingRoom' + speciality, waitingRoom);
        localStorage.setItem('givenTurns' + speciality, givenTurns + 1);
        console.log('El paciente fue ingresado...');

        message.innerHTML = 'Usted ha sido ingresado correctamente. Será llamado a la brevedad.\n' + 
                            'Recuerde su ID: ' + patient.getID();
    } else {
        message.innerHTML = 'Superamos los cupos de atención. Usted no pudo ser ingresado.'
        console.log('El paciente NO fue ingresado...');
    }
    show('#notification');
    setTimeout(() => show('#welcome'), 3000);
}

function clearInputs(){
    document.getElementById('input-lastname').value = '';
    document.getElementById('input-name').value = '';
}

var checkInBtn = document.getElementById('checkInOkBtn');
checkInBtn.addEventListener("click", () => {checkInPatient();
                                            lockOkBtn('checkIn');
                                            clearInputs();});

var cancelBtn = document.getElementById('checkinCancelBtn');
cancelBtn.addEventListener("click", () => {show('#welcome');
                                            lockOkBtn('checkIn');
                                            clearInputs();});