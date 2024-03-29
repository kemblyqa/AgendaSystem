import { elementMinute } from './elementMinute.js';
import { newAgenda } from './newAgenda.js';
import { getAgenda } from './getAgenda.js'


class MinuteViewManager {

    constructor() {
        this.modal();

    }

    /**
     * @function createAgenda main function for create a new agenda
     */
    createAgenda() {
        let agenda = new elementMinute();
        let global = new newAgenda();
        global.createHtmlTitle();
        global.createGeneralAspects();
        agenda.createSegmentAgenda(true);
    }

    /**
     * @function saveData save all information generated
     */
    saveData() {

        var titleValue = CKEDITOR.instances[listElementsCreated.title].getData();
        var generalValue = CKEDITOR.instances[listElementsCreated.general].getData();
        let responseData = { "id": listElementsCreated.id, "title": titleValue, "general": generalValue, "agenda": [] };
        for (let index = 0; index < listElementsCreated.agenda.length; index++) {
            var pointValue = CKEDITOR.instances[listElementsCreated.agenda[index].point].getData();
            responseData.agenda.push({ "point": pointValue, "recitals": [], "agreements": [] });
            if (listElementsCreated.agenda[index].recitals) {
                listElementsCreated.agenda[index].recitals.forEach(elementRecitals => {
                    var recitalValue = CKEDITOR.instances[elementRecitals].getData();
                    responseData.agenda[index].recitals.push(recitalValue);
                });
            }
            if (listElementsCreated.agenda[index].agreements) {
                listElementsCreated.agenda[index].agreements.forEach(elementAgreement => {
                    var agreementValue = CKEDITOR.instances[elementAgreement.agreement].getData();
                    responseData.agenda[index].agreements.push({ "agreement": agreementValue, "vote": elementAgreement.vote });
                });
            }
        }
        return responseData;
    }

    /**
     * @function modal create a modal for select vote statistics
     */
    modal() {
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
                modal.style.display = "none";
            }
            // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    /**
     * @function generateInfo main function for create an exist minute
     * @param {boolean} editable 
     * @param {json} minute 
     */
    generateInfo(editable, minute) {
        let segment = new elementMinute();
        let agenda = new getAgenda();
        agenda.generateTitle(minute.title, editable, minute.id);
        agenda.generateGeneralAspects(minute.general, editable);
        segment.createSegmentAgenda(editable);
        agenda.generateAgenda(minute.agenda, editable);
        if (editable) {
            window.agenda.saveLocalStorage()
            document.getElementById("saveLocal").disabled = false;
            document.getElementById("saveDB").disabled = false;
        } else {
            document.getElementById("saveLocal").disabled = true;
            document.getElementById("saveDB").disabled = true;
        }

    }


}

export { MinuteViewManager };