import { LocalData } from '../modules/local-data.js';
import { Ajax } from '../modules/ajax.js';
const baseUrl = "https://api-voting-system.herokuapp.com";
class AgendaManager {
    constructor() {
        this.xhrRequest = new Ajax(baseUrl);
        this.localDataStorage = new LocalData();
        this.agendas = [];
        //this.initAgendaList();
    }

    init(){
        var idList = JSON.parse(this.localDataStorage.getLocalStorageItem('idList'));
        if (!idList){
            this.initAgendaServerList();
        } else {
            for(var i = 0; i < idList.length; i++){
                this.agendas.push(this.localDataStorage.getLocalStorageItem(idList[i]));
            }
        }
        this.populateList(idList);
    }

    /**
     * @function getAgendaList retrieves the agenda from server
     */
    initAgendaServerList() {
        this.xhrRequest.getAgendas((data) => {
            for(var i = 0; i < data.length; i++){
                this.agendas.push(data[i]);
            }
        })
    }

    /**
     * @function populateList fill the list with agendas
     * @param {*} agendaList the list with agendas from localstorage
     */
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
            newItem.name = "itemAgenda";
            newItem.appendChild(document.createTextNode(`Sesión N° ${agendaList[i].id} \n Nombre: ${agendaList[i].name_a}`));
            newItem.addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
                //llamar funcion para mostrar agenda
                document.getElementById('container-id').style.display='';
            });
            agendaItemsContainer.appendChild(newItem);
        }
    }
}

export { AgendaManager };

