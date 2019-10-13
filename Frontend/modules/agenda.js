import { LocalData } from '../modules/local-data.js';
import { Ajax } from '../modules/ajax.js';
const baseUrl = "https://api-voting-system.herokuapp.com";
class AgendaManager {
    constructor() {
        this.xhrRequest = new Ajax(baseUrl);
        this.getAgendaList();
    }

    getAgendaList() {
        this.xhrRequest.getAgendas((data)=>{
            console.log(data);
            this.localData = new LocalData(data);
            this.populateList(this.localData.remoteData);
        })
    }

    populateList(agendaList) {
        var agendaItemsContainer = document.getElementById("agenda-list-manager");

        // Remove all items added.
        while (agendaItemsContainer.hasChildNodes()) {
            agendaItemsContainer.removeChild(agendaItemsContainer.firstChild);
        }
        // Populate with agendas.
        for (var i = 0; i < agendaList.length; i++) {
            var newItem = document.createElement("a");
            newItem.id = agendaList[i].id;
            newItem.appendChild(document.createTextNode(`Sesión N° ${agendaList[i].id} \n Nombre: ${agendaList[i].name_a}`));
            agendaItemsContainer.appendChild(newItem);
        }
    }
}

export { AgendaManager };

