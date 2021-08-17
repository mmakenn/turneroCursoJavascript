const SCHEDULE = '/data/schedule.json'; /* Ruta del .json que contiene la información sobre las especialidades que brindan atención cada día. */

function chargeSchedule(){
    /* Se busca en el .json la información que corresponde al día en que se ejecuta el script. */
    $.getJSON(SCHEDULE, function(data, status) {
        if (status === "success") {
            let today = new Date();
            let dayIndex = today.getDay(); /* Día de hoy: dom=0, lun=1, mar=2, ... */
            
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
    localStorage.setItem('givenTurns0', 0);
    localStorage.setItem('givenTurns1', 0);
    localStorage.setItem('givenTurns2', 0);
    localStorage.setItem('givenTurns3', 0);
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
    /* Se eliminan todas las variables del LocalStorage. */
    localStorage.removeItem('schedule');
    localStorage.removeItem('waitingRoom0');
    localStorage.removeItem('waitingRoom1');
    localStorage.removeItem('waitingRoom2');
    localStorage.removeItem('waitingRoom3');
    localStorage.removeItem('givenTurns0');
    localStorage.removeItem('givenTurns1');
    localStorage.removeItem('givenTurns2');
    localStorage.removeItem('givenTurns3');
}

var schedule;
chargeSchedule();

var openBtn = document.getElementById('openBtn');
openBtn.addEventListener("click", initializeRoom);

/* MENÚ DE OPCIONES, UNA VEZ ABIERTO EL TURNERO */
var checkInLink = document.getElementById('checkInLink');
checkInLink.addEventListener("click", () => {show('#checkIn');
                                            mappingSpecialityBtns('#checkIn');
                                            setSpecialityBtnBehavior();
                                            }
                            );

var timeLeftLink = document.getElementById('timeLeftLink');
timeLeftLink.addEventListener("click", () => {show('#timeLeft');
                                            mappingSpecialityBtns('#timeLeft');
                                            setSpecialityBtnBehavior();
                                            }
                            );

var quitLink = document.getElementById('quitLink');
quitLink.addEventListener("click", () => {show('#quit');
                                        mappingSpecialityBtns('#quit');
                                        setSpecialityBtnBehavior();
                                        }
                            );