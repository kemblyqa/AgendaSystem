import { LocalData } from '../modules/local-data.js';
import { Ajax } from '../modules/ajax.js';
const baseUrl = "https://api-voting-system.herokuapp.com";
class AgendaManager {
    constructor() {
        this.xhrRequest = new Ajax(baseUrl);
        this.getAgendaList();
    }

    getAgendaList() {
        this.xhrRequest.getAgendas(this.response.bind(this))
    }

    response(data){
        console.log(data);
    }

    populateList(agendaList) {
        var agendaItemsContainer = document.getElementById("agenda-list-manager");

        // Remove all items added.
        while (agendaItemsContainer.hasChildNodes()) {
            agendaItemsContainer.removeChild(agendaItemsContainer.firstChild);
        }
        // Populate with agendas.
        for (var i = 0; i < this.prueba.data.length; i++) {
            var newItem = document.createElement("a");
            newItem.id = this.prueba.data[i].agenda.id;
            newItem.appendChild(document.createTextNode(`Sesión N° ${this.prueba.data[i].id} \n Nombre: ${this.prueba.data[i].name}`));
            agendaItemsContainer.appendChild(newItem);
        }
    }
}

export { AgendaManager };

