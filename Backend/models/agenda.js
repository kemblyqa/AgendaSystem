function Agenda(id, name, agenda) {
    this.id = id;
    this.name = name;
    this.agenda = agenda;
}

// * Setter
Agenda.prototype.setId = function setId(id) {
    this.id = id;
}
Agenda.prototype.setName = function setName(name) {
    this.name = name;
}
Agenda.prototype.setAgenda = function setAgenda(agenda) {
    this.agenda = agenda;
}

// * Getters
Agenda.prototype.getId = function getId() {
    return this.id;
}
Agenda.prototype.getName = function getName() {
    return this.name;
}
Agenda.prototype.getAgenda = function getAgenda() {
    return this.agenda;
}


module.exports = Agenda;