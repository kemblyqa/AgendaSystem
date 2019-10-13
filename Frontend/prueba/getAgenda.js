class getAgenda {
    /**
     * @function generateAgenda principal function for generate agenda from previous data
     * @param {json} json data for generate
     */
    generateAgenda(json) {
        let element = new elementAgenda();
        let creation = new Creation();
        creation.createTitle(json.name);
        json.agenda.forEach(pointAgenda => {
            let pointAgendaEdit = element.createElement(pointAgenda.point, 1)
            listElementsCreated.push({ "point": pointAgendaEdit.id, "recitals": [], "agreements": [] })
            if (pointAgenda.recitals) {
                this.generateRecitals(pointAgenda.recitals, pointAgendaEdit);
            }
            if (pointAgenda.agreements) {
                this.generateAgreements(pointAgenda.agreements, pointAgendaEdit);
            }
        });
    }

    /**
     * @function generateRecitals function that generate recitals 
     * @param {array} array list recitals in json
     * @param {html} pointAgenda used for insert in list
     */
    generateRecitals(array, pointAgenda) {
        let agenda = new elementAgenda();
        array.forEach(recitalElement => {
            let pointRecitals = agenda.createElement(recitalElement, 2)
            listElementsCreated.forEach(element => {
                if (element["point"] === pointAgenda.id) {
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
    generateAgreements(array, pointAgenda) {
        let agenda = new elementAgenda();
        array.forEach(recitalElement => {
            console.log("inicio")
            let pointAgreement = agenda.createElement(recitalElement.agreement, 3)
            console.log("fin")
            listElementsCreated.forEach(element => {
                if (element.point === pointAgenda.id) {
                    element.agreements.push({ "id": pointAgreement.id, "vote": recitalElement.vote })
                    this.generateVotes(recitalElement.vote, pointAgreement);
                }
            });
        });

    }

    /**
     * @function generateVotes function that generate votes
     * @param {array} array list recitals in json
     * @param {html} pointAgenda used for insert in list
     */
    generateVotes(idVote, identifierAgreetment) {
        let agenda = new elementAgenda();
        listVotation.forEach(voteID => {
            if (voteID.id === idVote) {
                agenda.createVote(voteID, identifierAgreetment);
            }
        });

    }
}