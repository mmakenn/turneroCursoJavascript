class Patient{
    constructor(name, lastname, turn){
        this.name = name;
        this.lastname = lastname;
        this.turn = turn;
    }

    getFullName(){
        return (this.name + " " + this.lastname);
    }

    compare(id){
        return (this.id == id);
    }
}

function showCheckIn(){
    changeStatus('#checkIn', '#welcome');
    changeStatus('#checkInForm', '#checkInMessage');
}

function resetCheckIn(){
    changeStatus('#welcome', '#checkIn');
}

function checkInPatient(){
    let waitingRoom = localStorage.getItem('waitingRoom').split(',');
    let todayIDs = localStorage.getItem('todayIDs').split(',');
    let givenTurns = parseInt(localStorage.getItem('givenTurns'));
    
    console.log('Ejecutando recepción del paciente...');
    let message = document.getElementById('checkInMessage');
    if(givenTurns < MAX_DAY_TURN){
        let name = document.getElementById('input-name').value;
        let lastname = document.getElementById('input-lastname').value;
        let id = todayIDs[givenTurns];

        const patient = new Patient(name, lastname, id);
        const patientJSON = JSON.stringify(patient);
        waitingRoom.push(patientJSON);
        localStorage.setItem('waitingRoom', waitingRoom);
        localStorage.setItem('givenTurns', givenTurns + 1);
        console.log('El paciente fue ingresado...');

        message.innerHTML = 'Usted ha sido ingresado correctamente. Será llamado a la brevedad.\n' + 
                            'Recuerde su ID: ' + id;
    } else {
        message.innerHTML = 'Superamos los cupos de atención. Usted no pudo ser ingresado.'
        console.log('El paciente NO fue ingresado...');
    }

    changeStatus('#checkInMessage', '#checkInForm');
    setTimeout(resetCheckIn, 3000);
}


var checkInBtn = document.getElementById('okCheckIn');
checkInBtn.addEventListener("click", checkInPatient);

var cancelBtn = document.getElementById('cancelCheckIn');
cancelBtn.addEventListener("click", resetCheckIn);