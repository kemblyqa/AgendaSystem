import { elementMinute } from './elementMinute.js'


class getAgenda {

    /**
     * @function generateTitle used for call create title and also add the item to the json
     * @param {name} general 
     * @param {boolean} editable 
     */
    generateTitle(title, editable, id) {
        let creation = new elementMinute();
        let pointAgendaEdit = creation.createTitle(title, editable);
        listElementsCreated = { "id": id, "title": pointAgendaEdit.id, "general": 0, "agenda": [] };
    }

    /**
     * @function generateGeneralAspects used for call create general aspects and also add the item to the json
     * @param {name} general 
     * @param {boolean} editable 
     */
    generateGeneralAspects(general, editable) {
        let creation = new elementMinute();
        let pointAgendaEdit = creation.createGeneralAspects(general, editable);
        listElementsCreated.general = pointAgendaEdit.id;
    }

    /**
     * @function generateAgenda principal function for generate agenda from previous data
     * @param {json} json data for generate
     */
    generateAgenda(json, editable) {
        let agenda = new elementMinute();
        json.forEach(pointAgenda => {
            let pointAgendaEdit = agenda.createElementAgenda(pointAgenda.point, 1, editable)
            listElementsCreated.agenda.push({ "point": pointAgendaEdit.id, "recitals": [], "agreements": [] })
            if (pointAgenda.recitals) {
                this.generateRecitals(pointAgenda.recitals, pointAgendaEdit, editable);
            }
            if (pointAgenda.agreements) {
                this.generateAgreements(pointAgenda.agreements, pointAgendaEdit, editable);
            }
        });
    }

    /**
     * @function generateRecitals function that generate recitals 
     * @param {array} array list recitals in json
     * @param {html} pointAgenda used for insert in list
     */
    generateRecitals(array, pointAgenda, editable) {
        let agenda = new elementMinute();
        array.forEach(recitalElement => {

            let pointRecitals = agenda.createElementAgenda(recitalElement, 2, editable)
            listElementsCreated.agenda.forEach(element => {
                if (element["point"] === pointAgenda.id) {
                    pointAgenda.parentNode.lastChild.disabled = true;
                    element["recitals"].push(pointRecitals.id)
                }
            });
        });

    }

    /**
     * @function generateAgreements function that generate agreements 
     * @param {array} array list recitals in json
     * @param {html} pointAgenda used for insert in list
     */
    generateAgreements(array, pointAgenda, editable) {
        let agenda = new elementMinute();
        array.forEach(agreementElement => {
            let pointAgreement = agenda.createElementAgenda(agreementElement.agreement, 3, editable)
            listElementsCreated.agenda.forEach(element => {
                if (element.point === pointAgenda.id) {
                    pointAgenda.parentNode.lastChild.disabled = true;
                    element.agreements.push({ "agreement": pointAgreement.id, "vote": agreementElement.vote })
                    this.generateVotes(agreementElement.vote, pointAgreement, editable);
                }
            });
        });

    }

    /**
     * @function generateVotes function that generate votes
     * @param {number} idVote list recitals in json
     * @param {html} identifierAgreetment used for insert in list
     */
    generateVotes(idVote, identifierAgreetment, editable) {
        let agenda = new elementMinute();
        listVotation.forEach(voteID => {
            if (voteID.id === idVote) {
                identifierAgreetment.parentNode.lastChild.disabled = true;
                agenda.createVote(voteID, identifierAgreetment, editable);
            }
        });

    }
}

export { getAgenda };