import { LocalData } from '../modules/local-data.js';
import { Ajax } from '../modules/ajax.js';
const baseUrl = "https://api-voting-system.herokuapp.com";
class AgendaManager {
    constructor() {
        this.xhrRequest = new Ajax(baseUrl);
        this.localDataStorage = new LocalData();
        this.agendas = [];
        //this.initAgendaList();
        this.initAgendaServerList();
    }

    init() {
        var idList = JSON.parse(this.localDataStorage.getLocalStorageItem('idList'));
        if (!idList) {
            this.initAgendaServerList();
        } else {
            for (var i = 0; i < idList.length; i++) {
                this.agendas.push(this.localDataStorage.getLocalStorageItem(idList[i]));
            }
        }
        this.populateList(idList);
    }

    /**
     * @function getAgendaList retrieves the agenda from server
     */
    initAgendaServerList() {
        this.clearSessionList();
        this.xhrRequest.getMinutes((data) => {
            console.log(data)
            // for(var i = 0; i < data.length; i++){
            //     this.agendas.push(data[i]);
            // }
            this.populateList(data);
        })
    }

    /**
     * @function populateList fill the list with agendas
     * @param {*} agendaList the list with agendas from localstorage
     */
    populateList(agendaList) {
        var agendaItemsContainer = document.getElementById("agenda-list-manager");
        // Populate with agendas.
        for (var i = 0; i < agendaList.length; i++) {
            var newItem = document.createElement("a");
            newItem.id = agendaList[i].id;
            newItem.name = "itemAgenda";
            newItem.appendChild(document.createTextNode(`Sesión N° ${agendaList[i].id} \n Nombre: ${agendaList[i].title}`));
            newItem.addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
                //llamar funcion para mostrar agenda
                document.getElementById('container-id').style.display = '';
            });
            agendaItemsContainer.appendChild(newItem);
        }
    }

    clearSessionList() {
        var agendaItemsContainer, sessionList, i;
        agendaItemsContainer = document.getElementById("agenda-list-manager");
        sessionList = agendaItemsContainer.getElementsByTagName("a");        
        for (i = 0; i < sessionList.length; i++) {
            agendaItemsContainer.removeChild(sessionList[i]);
        }
    }

    searchFilter() {
        var input, filter, agendaItemsContainer, sessionList, i, txtValue;
        agendaItemsContainer = document.getElementById("agenda-list-manager");
        input = document.getElementById("searchFilterInput");
        filter = input.value.toLowerCase();
        sessionList = agendaItemsContainer.getElementsByTagName("a");
        for (i = 0; i < sessionList.length; i++) {
            txtValue = sessionList[i].id;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                sessionList[i].style.display = "";
            } else {
                sessionList[i].style.display = "none";
            }
        }
    }
}

export { AgendaManager };

