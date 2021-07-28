const MAX_DAY_TURN = 10;
const TURN_TIME = 15; //en minutos
const SCHEDULE = '/data/schedule.json';

function chargeSchedule(){
    $.getJSON(SCHEDULE, function(data, status) {
        if (status === "success") {
            let today = new Date();
            let dayIndex = today.getDay();
            
            switch(dayIndex){
                case 0:
                    schedule = data.domingo;
                case 1:
                    schedule = data.lunes;
                case 2:
                    schedule = data.martes;
                case 3:
                    schedule = data.miercoles;
                case 4:
                    schedule = data.jueves;
                case 5:
                    schedule = data.viernes;
                case 6:
                    schedule = data.sabado;
            }
        }
    });
}

function initializeRoom(){
    /* Inicio del día, se almacenan las variables en el localStorage para ser accedidas desde las distintas secciones. */
    localStorage.setItem('givenTurns', 0);
    localStorage.setItem('schedule', JSON.stringify(schedule));

    $(".left-panel").fadeToggle(function(){
        if ($('#openBtn').html() == 'ABRIR CENTRAL TURNOS'){
            $('#openBtn').html('CERRAR CENTRAL TURNOS');
        }else{
            resetRoom();
            $('#openBtn').html('ABRIR CENTRAL TURNOS');
        }
    });
}

function resetRoom(){
    localStorage.removeItem('schedule');
    localStorage.removeItem('waitingRoom');
    localStorage.removeItem('todayIDs');
    localStorage.removeItem('givenTurns');
}


var schedule;
chargeSchedule();

var openBtn = document.getElementById('openBtn');
openBtn.addEventListener("click", initializeRoom);

/* MENÚ DE OPCIONES, UNA VEZ ABIERTO EL TURNERO */
var checkInLink = document.getElementById('checkInLink');
checkInLink.addEventListener("click", showCheckIn);

var timeLeftLink = document.getElementById('timeLeftLink');
timeLeftLink.addEventListener("click", showTimeLeft);

var quitLink = document.getElementById('quitLink');
quitLink.addEventListener("click", showQuit);