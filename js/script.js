const MAX_DAY_TURN = 10;
const TURN_TIME = 15; //en minutos

function createDayIDs(amount){
    /* Creación de los ID que identifican a los pacientes. */
    var array = new Uint32Array(amount);
    return window.crypto.getRandomValues(array);
}

function initializeRoom(){
    /* Inicio del día, se almacenan las variables en el localStorage para ser accedidas desde las distintas secciones. */
    localStorage.setItem('waitingRoom', []);
    
    var todayIDs = createDayIDs(MAX_DAY_TURN);
    localStorage.setItem('todayIDs', todayIDs);

    localStorage.setItem('givenTurns', 0);

    $("#openBtn").css({display: 'none'});
    $("#closeBtn").css({display: 'block'});
    $(".left-panel").css({display: 'block'});
}

function resetRoom(){
    localStorage.removeItem('waitingRoom');
    localStorage.removeItem('todayIDs');
    localStorage.removeItem('givenTurns');

    $("#closeBtn").css({display: 'none'});
    $(".left-panel").css({display: 'none'});
    $("#openBtn").css({display: 'block'});
}

var openBtn = document.getElementById('openBtn');
openBtn.addEventListener("click", initializeRoom);

var closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener("click", resetRoom);

/* MENÚ DE OPCIONES, UNA VEZ ABIERTO EL TURNERO */
var checkInLink = document.getElementById('checkInLink');
checkInLink.addEventListener("click", showCheckIn);

var timeLeftLink = document.getElementById('timeLeftLink');
timeLeftLink.addEventListener("click", showTimeLeft);

var quitLink = document.getElementById('quitLink');
quitLink.addEventListener("click", showQuit);