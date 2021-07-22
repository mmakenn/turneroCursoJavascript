const MAX_DAY_TURN = 10;
const TURN_TIME = 15; //en minutos

function initializeRoom(){
    /* Inicio del día, se almacenan las variables en el localStorage para ser accedidas desde las distintas secciones. */
    localStorage.setItem('givenTurns', 0);

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
    localStorage.removeItem('waitingRoom');
    localStorage.removeItem('todayIDs');
    localStorage.removeItem('givenTurns');
}

var openBtn = document.getElementById('openBtn');
openBtn.addEventListener("click", initializeRoom);

/* MENÚ DE OPCIONES, UNA VEZ ABIERTO EL TURNERO */
var checkInLink = document.getElementById('checkInLink');
checkInLink.addEventListener("click", showCheckIn);

var timeLeftLink = document.getElementById('timeLeftLink');
timeLeftLink.addEventListener("click", showTimeLeft);

var quitLink = document.getElementById('quitLink');
quitLink.addEventListener("click", showQuit);