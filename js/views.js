function mappingSpecialityBtns(section){
    let btnsDivId = section + 'SpecialityBtns';
    $(btnsDivId).append(`<button type="button" class="btn btn-outline-dark m-3" id="btn0"></button>
    <button type="button" class="btn btn-outline-dark m-3" id="btn1"></button>
    <button type="button" class="btn btn-outline-dark m-3" id="btn2"></button>
    <button type="button" class="btn btn-outline-dark m-3" id="btn3"></button>`);

    let sch = JSON.parse(localStorage.getItem('schedule'));
    
    for (let i = 0; i < 4; i++){
        let speciality = sch[i].especialidad;
        let btn = '#btn' + i;

        $(btn).html(speciality);
    }
}

function deleteSpecialityBtns(section){
    let btnsDivId = section + 'SpecialityBtns';
    $(btnsDivId).empty();
}

function show(section){
    let sections = ['#welcome', '#checkIn', '#timeLeft', '#quit', '#notification'];
    for (s of sections){
        deleteSpecialityBtns(s)
        if (s == section){
            $(s).css({display: 'block'});
        }else{
            $(s).css({display: 'none'});
        }
    }
}

function selectSpeciality(option){
    /* Permite definir las variables 'speciality', 'waitingRoom', 'givenTurns', 'maxDayTurn' y 'turnDuration' que corresponden según el botón seleccionado por el usuario. */
    speciality = option;

    waitingRoom = localStorage.getItem('waitingRoom' + speciality) ? localStorage.getItem('waitingRoom'  + speciality) : []
    if (waitingRoom.length != 0){
        waitingRoom = JSON.parse(waitingRoom);
    }
    givenTurns = parseInt(localStorage.getItem('givenTurns'  + speciality));
    let sch = JSON.parse(localStorage.getItem('schedule'));
    maxDayTurn = sch[speciality].cantTurnos;
    turnDuration = sch[speciality].tiempoTurno;
}

function unlockOkBtn(section){
    let btn = section + 'OkBtn';
    document.getElementById(btn).disabled = false;
}

function lockOkBtn(section){
    let btn = section + 'OkBtn';
    document.getElementById(btn).disabled = true;
}

function setSpecialityBtnBehavior(section){
    var btn0 = document.getElementById('btn0');
    btn0.addEventListener("click", () => {selectSpeciality(0);
                                        unlockOkBtn(section);});
    var btn1 = document.getElementById('btn1');
    btn1.addEventListener("click", () => {selectSpeciality(1);
                                        unlockOkBtn(section);});
    var btn2 = document.getElementById('btn2');
    btn2.addEventListener("click", () => {selectSpeciality(2);
                                        unlockOkBtn(section);});
    var btn3 = document.getElementById('btn3');
    btn3.addEventListener("click", () => {selectSpeciality(3);
                                        unlockOkBtn(section);});
}