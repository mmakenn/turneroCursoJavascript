function foundPatientPosition(id){
    for (let i = 0; i < waitingRoom.length; i++){
        let patient = waitingRoom[i];
        if (patient.compare(id)){
            return i;
        }
    }
    return -1;
}

function getTimeLeft(position){
    return TURN_TIME * position;
}