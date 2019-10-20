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
     * @function init Fill the agenda list with the info from database and localstorage
     */
    init() {
        this.clearSessionList();
        var idList = JSON.parse(this.localDataStorage.getLocalStorageItem('idList'));
        if (idList === undefined || idList === null) { //There's no agendas in localstorage
            localStorage.setItem("idList", JSON.stringify({ ids: [] }));
        } else {
            if (idList.ids !== []) {
                for (var i = 0; i < idList.ids.length; i++) {
                    this.agendas.push(JSON.parse(this.localDataStorage.getLocalStorageItem(idList.ids[i].id)));
                }
            }
        }
        this.initAgendaServerList();
        this.getVotesData();
    }

    /**
     * @function getAgendaList retrieves the agenda from server
     */
    initAgendaServerList() {

        this.xhrRequest.getMinutes((data) => {
            for (var i = 0; i < data.length; i++) {
                data[i].agenda.saved = true; //property to make item no editable  
                this.agendas.push(data[i].agenda);
            }
            console.log(this.agendas);
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
        agendaList.forEach(element => {
            var newItem = document.createElement("a");
            var agenda = element;
            newItem.id = agenda.id;
            newItem.name = "itemAgenda";
            newItem.appendChild(document.createTextNode(`Sesión N° ${agenda.id} \n Nombre: ${agenda.title.match(/<h1>(.*?)<\/h1>/)[1]}`));
            newItem.addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
                document.getElementById('container-id').style.display = '';
                window.agenda.showAgendaPreview(agenda);
            });
            agendaItemsContainer.appendChild(newItem);
        });
    }

    /**
     * @function showAgendaPreview show the agenda
     * @param {json} agenda 
     */
    showAgendaPreview(agenda) {
        document.getElementById("elements").innerHTML = "";
        window.listElementsCreated = [];
        if (agenda.saved != null || agenda.saved != undefined) {
            window.minute.generateInfo(!agenda.saved, agenda);
        } else {
            window.minute.generateInfo(true, agenda);
        }

    };

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
        this.agendas = [];
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

    /**
     * @function createNewMinute used for create a new minute and show it in the view
     */
    createNewMinute() {
        document.getElementById("elements").innerHTML = "";
        window.listElementsCreated = [];
        document.getElementById('container-id').style.display = '';
        window.minute.createAgenda();
    }

    /**
     * @function refreshMinute used for refresh the view when we add a new element to the minute
     */
    refreshMinute() {
        document.getElementById("elements").innerHTML = "";
        let data = window.minute.saveData();
        if (data.saved != null || data.saved != undefined) {
            window.minute.generateInfo(!data.saved, data);
        } else {
            window.minute.generateInfo(true, data);
        }
    }

    saveFinal() {
        let dato = window.minute.saveData()
        this.localDataStorage.saveIntoServerItem(dato);
        alert("Guardado en la base de datos")
        this.initAgendaServerList();
    }

    /**
     * @function saveLocalStorage used for save all data of minute in local storage
     */
    saveLocalStorage() {
        let dato = window.minute.saveData()
        this.localDataStorage.saveLocalStorageItem(dato.id, dato);
        this.emptyList();
        this.init();

    }

    /**
     * @function getVotesData used for get all votes from database
     */
    getVotesData() {
        this.xhrRequest.getVotes((data) => {
            console.log(data);
            window.listVotation = data
        })
    }

    /**
     * @function emptyList used for empty list
     */
    emptyList() {
        var agendaItemsContainer = document.getElementById("agenda-list-manager");
        agendaItemsContainer.innerHTML = ``
        agendaItemsContainer.innerHTML = "";
        var crearMinute = document.createElement("input");
        crearMinute.setAttribute("type", "button");
        crearMinute.setAttribute("value", "Crear Nueva Acta");
        crearMinute.setAttribute("class", "addMinute");
        crearMinute.setAttribute("onclick", "agenda.createNewMinute()");
        var search = document.createElement("input");
        search.setAttribute("type", "text");
        search.setAttribute("id", "searchFilterInput");
        search.setAttribute("placeholder", "Buscar acta por ID...");
        search.setAttribute("onkeyup", "agenda.searchFilter()");

        agendaItemsContainer.appendChild(crearMinute);
        agendaItemsContainer.appendChild(search);

        this.agendas = [];
    }


}

export { AgendaManager };