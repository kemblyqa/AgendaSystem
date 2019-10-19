import { elementMinute } from './elementMinute.js'

class newAgenda {
    /**
     * @function titleConvert convert id introduction in ckeditor
     */
    createHtmlTitle() {
        let creation = new elementMinute();
        let pointAgendaEdit = creation.createTitle('<h1>Titulo..</h1>', true);
        listElementsCreated = { "title": pointAgendaEdit.id, "general": 0, "agenda": [] };
    }

    createGeneralAspects() {
        let creation = new elementMinute();
        let pointAgendaEdit = creation.createGeneralAspects('<h2>Aspectos Generales..</h2>', true);
        listElementsCreated.general = pointAgendaEdit.id;
    }

    /**
     * @function createpointAgenda create point point of agenda in html and insert in list of ids
     * @param {html} identifier 
     */
    createpointAgenda() {
        let agenda = new elementMinute();
        let pointAgendaEdit = agenda.createElementAgenda('<p><em>Punto Agenda.</em></p>', 1, true)
        listElementsCreated.agenda.push({ "point": pointAgendaEdit.id, "recitals": [], "agreements": [] })
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
        window.agenda.refreshMinute();
    }
}

export { newAgenda };