class newAgenda {
    /**
     * @function titleConvert convert id introduction in ckeditor
     */
    createHtmlTitle() {
        let creation = new Creation();
        creation.createTitle('<h1>Titulo..</h1>');
    }

    /**
     * @function createpointAgenda create point point of agenda in html and insert in list of ids
     * @param {html} identifier 
     */
    createpointAgenda() {
        let element = new elementAgenda();
        let pointAgendaEdit = element.createElement('<p><em>Punto Agenda.</em></p>', 1)
        listElementsCreated.push({ "point": pointAgendaEdit.id, "recitals": [], "agreements": [] })
    }

    /**
     * @function addRecitals create recitals in html and insert in list of ids
     * @param {html} identifier 
     */
    addRecitals(identifier) {
        let agenda = new elementAgenda();
        let pointRecitals = agenda.createElement('<p><strong>Considerando.</strong></p>', 2)
        listElementsCreated.forEach(element => {
            if (element["point"] === identifier.id) {
                element["recitals"].push(pointRecitals.id)
            }
        });
    }

    /**
     * @function addAgreement create Agreement in html and insert in list of ids
     * @param {html} identifier 
     */
    addAgreement(identifier) {
        let agenda = new elementAgenda();
        let pointAgreement = agenda.createElement('<ul><li>Acuerdo.</li></ul>', 3)
        listElementsCreated.forEach(element => {
            if (element["point"] === identifier.id) {
                element["agreements"].push({ "id": pointAgreement.id, "vote": 0 })
            }
        });
    }

    /**
     * @function addVotation create a votation element in html
     * @param {html} identifier of Agreement 
     * @param {json} json element selected of the list of votes
     */
    addVotation(json, identifier) {
        let agenda = new elementAgenda();
        agenda.createVote(json, identifier);

        let flag = false;
        let sizeList = listElementsCreated.length;
        while (sizeList > 0 && !flag) {
            listElementsCreated[sizeList - 1].agreements.forEach(Agreement => {
                if (Agreement.id === identifier.id) {
                    Agreement.vote = json.id
                    flag = true;
                }
            });
            sizeList = sizeList - 1;
        }
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
}