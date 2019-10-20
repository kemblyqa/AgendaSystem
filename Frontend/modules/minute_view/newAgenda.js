import { elementMinute } from './elementMinute.js'

class newAgenda {
    /**
     * @function titleConvert create a new html title and also add a id to the minute
     */
    createHtmlTitle() {
        let assign = new Date();
        let date = `${assign.getDate()}${assign.getSeconds()}${assign.getMilliseconds()}${Math.floor(Math.random() * 100000)}`;
        let creation = new elementMinute();
        let pointAgendaEdit = creation.createTitle('<h1>Titulo..</h1>', true);
        listElementsCreated = { "id": date, "title": pointAgendaEdit.id, "general": 0, "agenda": [] };
    }

    /**
     * @function createGeneralAspects create a new genral aspects in the html
     */
    createGeneralAspects() {
        let creation = new elementMinute();
        let pointAgendaEdit = creation.createGeneralAspects('<h2>Aspectos Generales..</h2>', true);
        listElementsCreated.general = pointAgendaEdit.id;

        var agendaItemsContainer = document.getElementById("agenda-list-manager");
        // Populate with agendas.
        let element = window.minute.saveData();
        var newItem = document.createElement("a");
        var agenda = element;
        newItem.id = agenda.id;
        newItem.name = "itemAgenda";
        newItem.appendChild(document.createTextNode(`Sesión N° ${agenda.id} \n Nombre: ${agenda.title.match(/<h1>(.*?)<\/h1>/)[1]}`));
        newItem.addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
            document.getElementById('container-id').style.display = '';
            window.agenda.showAgendaPreview(agenda);
        });
        agendaItemsContainer.appendChild(newItem);
        window.agenda.saveLocalStorage();


    }

    /**
     * @function createpointAgenda create point point of agenda in html and insert in list of ids
     * @param {html} identifier 
     */
    createpointAgenda() {
        let agenda = new elementMinute();
        let pointAgendaEdit = agenda.createElementAgenda('<p><em>Punto Agenda.</em></p>', 1, true)
        listElementsCreated.agenda.push({ "point": pointAgendaEdit.id, "recitals": [], "agreements": [] })
        window.agenda.saveLocalStorage()
    }

    /**
     * @function addRecitals create recitals in html and insert in list of ids
     * @param {html} identifier 
     */
    addRecitals(identifier) {
        let agenda = new elementMinute();
        let pointRecitals = agenda.createElementAgenda('<p><strong>Considerando.</strong></p>', 2, true)
        listElementsCreated.agenda.forEach(element => {
            if (element["point"] === identifier.id) {
                identifier.parentNode.lastChild.disabled = true;
                element["recitals"].push(pointRecitals.id)
            }
        });
        window.agenda.saveLocalStorage();
        window.agenda.refreshMinute();
    }

    /**
     * @function addAgreement create Agreement in html and insert in list of ids
     * @param {html} identifier 
     */
    addAgreement(identifier) {
        let agenda = new elementMinute();
        let pointAgreement = agenda.createElementAgenda('<ul><li>Acuerdo.</li></ul>', 3, true)
        listElementsCreated.agenda.forEach(element => {
            if (element["point"] === identifier.id) {
                identifier.parentNode.lastChild.disabled = true;
                element["agreements"].push({ "agreement": pointAgreement.id, "vote": 0 })
            }
        });
        window.agenda.saveLocalStorage();
        window.agenda.refreshMinute();

    }

    /**
     * @function addVotation create a votation element in html
     * @param {html} identifier of Agreement 
     * @param {json} json element selected of the list of votes
     */
    addVotation(json, identifier) {
        let agenda = new elementMinute();
        agenda.createVote(json, identifier, true);
        let flag = false;
        let sizeList = listElementsCreated.agenda.length;
        while (sizeList > 0 && !flag) {
            listElementsCreated.agenda[sizeList - 1].agreements.forEach(Agreement => {
                if (Agreement.agreement === identifier.id) {
                    identifier.parentNode.lastChild.disabled = true;
                    Agreement.vote = json.id
                    flag = true;
                }
            });
            sizeList = sizeList - 1;
        }
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        window.agenda.saveLocalStorage();
        window.agenda.refreshMinute();
    }
}

export { newAgenda };