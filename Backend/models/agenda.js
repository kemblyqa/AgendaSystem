function Agenda(id, name, agenda) {
    this.id = id;
    this.name = name;
    this.agenda;
}

// * Setter
Agenda.prototype.setId = (id) => {
    this.id = id;
}
Agenda.prototype.setName = (name) => {
    this.name = name;
}
Agenda.prototype.setAgenda = (agenda) => {
    this.agenda = agenda;
}

// * Getters
Agenda.prototype.getId = () => {
    return this.id;
}
Agenda.prototype.getName = () => {
    return this.name;
}
Agenda.prototype.getAgenda = () => {
    return this.agenda;
}


module.exports = Agenda;