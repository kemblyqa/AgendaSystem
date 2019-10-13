class Creation {

    /**
     * @function createDivision create a division between elements
     */
    createDivision() {
        //Create the division between views
        let divison = document.createElement("div");
        divison.classList.add("division");
        document.getElementById('elements').appendChild(divison);
    }

    /**
     * @function createButtonRecitals create a button for create recitals with click listener
     * @param {html} itemAgendaEdit 
     */
    createButtonRecitals(itemAgendaEdit) {
        let buttonRecitals = document.createElement("button");
        buttonRecitals.appendChild(document.createTextNode('Agregar Considerando'));
        buttonRecitals.addEventListener("click", function() {
            addRecitals(itemAgendaEdit)
        });
        return buttonRecitals
    }

    /**
     * @function createButtonAgreetment create a button for create agreetment with click listener
     * @param {html} itemAgendaEdit 
     */
    createButtonAgreetment(itemAgendaEdit) {
        let buttonAgreement = document.createElement("button");
        buttonAgreement.appendChild(document.createTextNode('Agregar Acuerdo'));
        buttonAgreement.addEventListener("click", function() {
            addAgreetment(itemAgendaEdit)
        });
        return buttonAgreement
    }

    /**
     * @function createButtonVote create a button for create vote with click listener
     * @param {html} itemAgendaEdit 
     */
    createButtonVote(itemAgendaEdit) {
        let buttonVoteItemAgenda = document.createElement("button");
        buttonVoteItemAgenda.appendChild(document.createTextNode('Agregar Votación'));
        buttonVoteItemAgenda.addEventListener("click", function() {
            let table = new tableVotesSelect();
            table.createTableFromJSON(listVotation, itemAgendaEdit)
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
        });
        return buttonVoteItemAgenda
    }

    /**
     * @function createButtonDeleteItem create a button for delete item with click listener
     * @param {html} itemAgendaEdit 
     */
    createButtonDeleteItem(itemAgendaEdit) {
        let buttonDeleteItemAgenda = document.createElement("button");
        buttonDeleteItemAgenda.appendChild(document.createTextNode('Eliminar Punto'));
        let del = new removal()
        buttonDeleteItemAgenda.addEventListener("click", function() {
            del.deleteItemAgenda(itemAgendaEdit)
        });
        return buttonDeleteItemAgenda
    }

    /**
     * @function createButtonDeleteRecital create a button for delete recitals with click listener
     * @param {html} itemAgendaEdit 
     */
    createButtonDeleteRecital(itemAgendaEdit) {
        let buttonDeleteRecitalAgenda = document.createElement("button");
        buttonDeleteRecitalAgenda.appendChild(document.createTextNode('Eliminar Considerando'));
        let del = new removal()
        buttonDeleteRecitalAgenda.addEventListener("click", function() {
            del.deleteRecitalsAgenda(itemAgendaEdit)
        });
        return buttonDeleteRecitalAgenda
    }

    /**
     * @function createButtonDeleteAgreetment create a button for delete recitals with click listener
     * @param {html} itemAgendaEdit 
     */
    createButtonDeleteAgreetment(itemAgendaEdit) {
        let buttonDeleteRecitalAgenda = document.createElement("button");
        buttonDeleteRecitalAgenda.appendChild(document.createTextNode('Eliminar Acuerdo'));
        let del = new removal()
        buttonDeleteRecitalAgenda.addEventListener("click", function() {
            del.deleteAgreetmentAgenda(itemAgendaEdit)
        });
        return buttonDeleteRecitalAgenda
    }

    /**
     * @function createButtonDeleteVote create a button for delete vote with click listener
     * @param {html} itemAgendaGroup 
     * @param {html} identifier id of agreetment
     */
    createButtonDeleteVote(itemAgendaGroup, identifier) {
        let buttonDeleteRecitalAgenda = document.createElement("button");
        buttonDeleteRecitalAgenda.appendChild(document.createTextNode('Eliminar Votación'));
        let del = new removal()
        buttonDeleteRecitalAgenda.addEventListener("click", function() {
            del.deleteVoteAgenda(itemAgendaGroup, identifier)
        });
        return buttonDeleteRecitalAgenda
    }

    /**
     * @function createVotes create and style each result of votes
     * @param {string} name 
     * @param {number} cant 
     */
    createVotes(name, cant) {
        let itemVote = document.createElement("div");
        itemVote.classList.add("votes");

        let itemh3 = document.createElement("h3");
        itemh3.appendChild(document.createTextNode(name));

        let itemh4 = document.createElement("h4");
        itemh4.appendChild(document.createTextNode(cant));

        itemVote.appendChild(itemh3);
        itemVote.appendChild(itemh4);

        return itemVote;
    }
}