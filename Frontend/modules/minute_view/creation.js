import { newAgenda } from './newAgenda.js'
import { tableVotesSelect } from './table.js'
import { removal } from './delete.js'

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
     * @function createButtonPoints create a button for create points with click listener
     */
    createButtonPoints() {
        let buttonRecitals = document.createElement("button");
        buttonRecitals.appendChild(document.createTextNode('Agregar Punto'));
        buttonRecitals.id = "btnPoint"
        buttonRecitals.addEventListener("click", function() {
            let newElement = new newAgenda();
            newElement.createpointAgenda()
        });
        return buttonRecitals
    }

    /**
     * @function createButtonRecitals create a button for create recitals with click listener
     * @param {html} pointAgendaEdit 
     */
    createButtonRecitals(pointAgendaEdit) {
        let buttonRecitals = document.createElement("button");
        buttonRecitals.appendChild(document.createTextNode('Agregar Considerando'));
        buttonRecitals.addEventListener("click", function() {
            let newElement = new newAgenda();
            newElement.addRecitals(pointAgendaEdit)
        });
        return buttonRecitals
    }

    /**
     * @function createButtonAgreement create a button for create Agreement with click listener
     * @param {html} pointAgendaEdit 
     */
    createButtonAgreement(pointAgendaEdit) {
        let buttonAgreement = document.createElement("button");
        buttonAgreement.appendChild(document.createTextNode('Agregar Acuerdo'));
        buttonAgreement.addEventListener("click", function() {
            let newElement = new newAgenda();
            newElement.addAgreement(pointAgendaEdit)
        });
        return buttonAgreement
    }

    /**
     * @function createButtonVote create a button for create vote with click listener
     * @param {html} pointAgendaEdit 
     */
    createButtonVote(pointAgendaEdit) {
        let buttonVotepointAgenda = document.createElement("button");
        buttonVotepointAgenda.appendChild(document.createTextNode('Agregar Votación'));
        buttonVotepointAgenda.addEventListener("click", function() {
            let table = new tableVotesSelect();
            table.createTableFromJSON(listVotation, pointAgendaEdit)
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
        });
        return buttonVotepointAgenda
    }

    /**
     * @function createButtonDeletepoint create a button for delete point with click listener
     * @param {html} pointAgendaEdit 
     */
    createButtonDeletepoint(pointAgendaEdit) {
        let buttonDeletepointAgenda = document.createElement("button");
        buttonDeletepointAgenda.appendChild(document.createTextNode('Eliminar Punto'));
        let del = new removal()
        buttonDeletepointAgenda.addEventListener("click", function() {
            del.deletepointAgenda(pointAgendaEdit)
        });
        return buttonDeletepointAgenda
    }

    /**
     * @function createButtonDeleteRecital create a button for delete recitals with click listener
     * @param {html} pointAgendaEdit 
     */
    createButtonDeleteRecital(pointAgendaEdit) {
        let buttonDeleteRecitalAgenda = document.createElement("button");
        buttonDeleteRecitalAgenda.appendChild(document.createTextNode('Eliminar Considerando'));
        let del = new removal()
        buttonDeleteRecitalAgenda.addEventListener("click", function() {
            del.deleteRecitalsAgenda(pointAgendaEdit)
        });
        return buttonDeleteRecitalAgenda
    }

    /**
     * @function createButtonDeleteAgreement create a button for delete recitals with click listener
     * @param {html} pointAgendaEdit 
     */
    createButtonDeleteAgreement(pointAgendaEdit) {
        let buttonDeleteRecitalAgenda = document.createElement("button");
        buttonDeleteRecitalAgenda.appendChild(document.createTextNode('Eliminar Acuerdo'));
        let del = new removal()
        buttonDeleteRecitalAgenda.addEventListener("click", function() {
            del.deleteAgreementAgenda(pointAgendaEdit)
        });
        return buttonDeleteRecitalAgenda
    }

    /**
     * @function createButtonDeleteVote create a button for delete vote with click listener
     * @param {html} pointAgendaGroup 
     * @param {html} identifier id of Agreement
     */
    createButtonDeleteVote(pointAgendaGroup, identifier) {
        let buttonDeleteRecitalAgenda = document.createElement("button");
        buttonDeleteRecitalAgenda.appendChild(document.createTextNode('Eliminar Votación'));
        let del = new removal()
        buttonDeleteRecitalAgenda.addEventListener("click", function() {
            del.deleteVoteAgenda(pointAgendaGroup, identifier)
        });
        return buttonDeleteRecitalAgenda
    }

    /**
     * @function createVotesSegment create and style each result of votes
     * @param {string} name 
     * @param {number} cant 
     * @param {boolean} editable
     */
    createVotesSegment(name, cant, editable) {
        let pointVote = document.createElement("div");
        if (editable) {
            pointVote.classList.add("voteEditable");
        } else {
            pointVote.classList.add("voteView");
        }


        let pointh3 = document.createElement("h3");
        pointh3.appendChild(document.createTextNode(name));

        let pointh4 = document.createElement("h4");
        pointh4.appendChild(document.createTextNode(cant));

        pointVote.appendChild(pointh3);
        pointVote.appendChild(pointh4);

        return pointVote;
    }


}

export { Creation };