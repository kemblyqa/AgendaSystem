import { LocalData } from '../modules/local-data.js';
import { Ajax } from '../modules/ajax.js';
const baseUrl = "https://api-voting-system.herokuapp.com";
class AgendaManager {
    constructor() {
        this.xhrRequest = new Ajax(baseUrl);
        this.localDataStorage = new LocalData();
        this.agendas = [];
        this.init();
    }
    /**
     * @function init Fill the agenda lista with the info from database and localstorage
     */
    init() {
        this.clearSessionList();
        var idList = JSON.parse(this.localDataStorage.getLocalStorageItem('idList'));
        if (!idList === undefined || !idList === null) {//There's no agendas in localstorage
            for (var i = 0; i < idList.length; i++) {
                this.agendas.push(JSON.parse(this.localDataStorage.getLocalStorageItem(idList[i])));
            }
        }
        this.initAgendaServerList();
    }

    /**
     * @function getAgendaList retrieves the agenda from server
     */
    initAgendaServerList() {
        this.xhrRequest.getMinutes((data) => {
            for (var i = 0; i < data.length; i++) {
                data[i].saved = true; //property to make item no editable  
                this.agendas.push(data[i]);
            }
            this.populateList(this.agendas);
        })
    }

    /**
     * @function populateList fill the listview with agendas
     * @param {*} agendaList the list with agendas from server and localstorage
     */
    populateList(agendaList) {
        var agendaItemsContainer = document.getElementById("agenda-list-manager");
        // Populate with agendas.
        for (var i = 0; i < agendaList.length; i++) {
            var newItem = document.createElement("a");
            var agenda = agendaList[i];
            newItem.id = agenda.id;
            newItem.name = "itemAgenda";
            newItem.appendChild(document.createTextNode(`Sesión N° ${agenda.id} \n Nombre: ${agenda.title}`));
            newItem.addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
                //llamar funcion para mostrar agenda
                document.getElementById('container-id').style.display = '';
                window.agenda.showAgendaPreview(agenda);
            });
            agendaItemsContainer.appendChild(newItem);
        }
    }

    showAgendaPreview(agenda) {
        console.log(agenda);
        //aqui va lo de mostrar la agenda
        //si posee un editable: fase es porque viene de la DB
    }
    /**
     * @function clearSessionList clear the session listview
     */
    clearSessionList() {
        var agendaItemsContainer, sessionList, i;
        agendaItemsContainer = document.getElementById("agenda-list-manager");
        sessionList = agendaItemsContainer.getElementsByTagName("a");
        for (i = 0; i < sessionList.length; i++) {
            agendaItemsContainer.removeChild(sessionList[i]);
        }
    }

    /**
     * @function searchFilter filter by session id from the listview
     */
    searchFilter() {
        var input, filter, agendaItemsContainer, sessionList, i, txtValue;
        agendaItemsContainer = document.getElementById("agenda-list-manager");
        input = document.getElementById("searchFilterInput");
        filter = input.value.toLowerCase();
        sessionList = agendaItemsContainer.getElementsByTagName("a");
        for (i = 0; i < sessionList.length; i++) {
            txtValue = sessionList[i].id;
            sessionList[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
}

export { AgendaManager };

