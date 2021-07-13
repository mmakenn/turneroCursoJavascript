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
    $('#welcome').css({display: 'none'});
    $('#checkIn').css({display: 'block'});
}

var waitingRoom = JSON.parse(localStorage.getItem('waitingRoom'));
var todayIDs = JSON.parse(localStorage.getItem('todayIDs'));
var givenTurns = parseInt(localStorage.getItem('givenTurns'));

function checkInPatient(){
    console.log('Ejecutando recepción del paciente...');
    let message = document.createElement("p");
    let form = document.getElementById('checkInForm');
    let formContainer = document.getElementById('checkIn');

    if(givenTurns < MAX_DAY_TURN){
        let name = document.getElementById('input-name').value;
        let lastname = document.getElementById('input-lastname').value;
        let id = todayIDs[givenTurns];

        const patient = new Patient(name, lastname, id);
        waitingRoom.push(patient);
        localStorage.setItem('waitingRoom', waitingRoom);
        localStorage.setItem('givenTurns', givenTurns + 1);
        console.log('El paciente fue ingresado...');

        message.innerHTML = "Usted ha sido ingresado correctamente. Será llamado a la brevedad."
    } else {
        message.innerHTML = "Superamos los cupos de atención. Usted no pudo ser ingresado."
        console.log('El paciente NO fue ingresado...');
    }
    formContainer.removeChild(form);
    formContainer.appendChild(message);

    /* setTimeout(() => {window.location.href = '../index.html'; }, 3000); */
}


var checkInBtn = document.getElementById('okCheckIn');
checkInBtn.addEventListener("click", checkInPatient);