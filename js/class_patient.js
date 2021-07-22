function createUserID(){
    /* Creación de los ID que identifican a los pacientes. */
    var array = new Uint32Array(1);
    return window.crypto.getRandomValues(array)[0];
}

class Patient{
    constructor(name, lastname, turn = createUserID()){
        this.name = name;
        this.lastname = lastname;
        this.turn = turn;
    }

    getID(){
        return this.turn;
    }

    getFullName(){
        return (this.name + " " + this.lastname);
    }

    compare(turn){
        return (this.turn == turn);
    }
}