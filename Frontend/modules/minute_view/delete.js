class removal {
    /**
     * @function deletepointAgenda for delete a point point from agenda
     * @param {html} element 
     */
    deletepointAgenda(element) {
        this.deleteChild(element);
        let filtered = this.filterpoints(listElementsCreated.agenda, element.id, 1);
        listElementsCreated.agenda = filtered;
    }

    /**
     * @function deleteRecitalsAgenda for delete a recital from point of agenda
     * @param {html} element 
     */
    deleteRecitalsAgenda(element) {
        this.deleteChild(element);
        this.activateDelete(listElementsCreated.agenda, element.id, 1)
        let filtered = this.filterpoints(listElementsCreated.agenda, element.id, 2);
        listElementsCreated.agenda = filtered;
    }

    /**
     * @function deleteAgreementAgenda for delete a Agreement from point of agenda
     * @param {html} element 
     */
    deleteAgreementAgenda(element) {
        this.deleteChild(element);
        this.activateDelete(listElementsCreated.agenda, element.id, 2)
        let filtered = this.filterpoints(listElementsCreated.agenda, element.id, 3);
        listElementsCreated.agenda = filtered;
    }

    /**
     * @function deleteVoteAgenda for delete a vote from point of agenda
     * @param {html} element 
     * @param {html} identifier of Agreement
     */
    deleteVoteAgenda(element, identifier) {
        identifier.parentNode.lastChild.disabled = false;
        let padre = element.parentNode;
        padre.removeChild(element);
        let flag = false;
        let sizeList = listElementsCreated.agenda.length;
        while (sizeList > 0 && !flag) {
            listElementsCreated.agenda[sizeList - 1].agreements.forEach(Agreement => {
                if (Agreement.id === identifier.id) {
                    Agreement.vote = 0
                    flag = true;
                }
            });
            sizeList = sizeList - 1;
        }

    }

    /**
     * @function deleteChild search element in html for delete from view
     * @param {html} element 
     */
    deleteChild(element) {
        let padre = element.parentNode.parentNode;
        let tarea = element.parentNode;
        padre.removeChild(tarea.previousSibling);
        padre.removeChild(tarea);

    }

    /**
     * @function filterpoints filter list of elements for get a new list without element searched
     * @param {array} arr 
     * @param {string} query 
     * @param {number} type 
     */
    filterpoints(arr, query, type) {
        let result;
        return arr.filter(function(el) {
            switch (type) {
                case 1:
                    return el.point !== query;
                case 2:
                    result = el.recitals.filter(function(el) {
                        return el !== query;
                    })
                    return el.recitals = result;
                case 3:
                    result = el.agreements.filter(function(el) {
                        return el.agreement !== query;
                    })
                    return el.agreements = result;
                default:
                    break;
            }

        })
    }

    /**
     * @function activateDelete used for activate delete option in parent html
     * @param {array} arr 
     * @param {string} idElement 
     * @param {number} type 
     */
    activateDelete(arr, idElement, type) {
        let result = this.searchParent(arr, idElement, type);
        if (result != null) {
            result.parentNode.lastChild.disabled = false;
        }
        return;
    }

    /**
     * @function searchParent search the parent html for disable button
     * @param {array} arr 
     * @param {string} idElement 
     * @param {number} type 
     */
    searchParent(arr, idElement, type) {
        let htmlParent = null;
        switch (type) {
            case 1: //recital
                arr.forEach(jsonElement => {
                    jsonElement.recitals.forEach(recitalID => {
                        if (recitalID === idElement && jsonElement.recitals.length === 1 && jsonElement.agreements.length === 0) {
                            htmlParent = document.getElementById(jsonElement.point);
                        }
                    });
                });
                return htmlParent;
            case 2: //agreement
                arr.forEach(jsonElement => {
                    jsonElement.agreements.forEach(agreementJSON => {
                        if (agreementJSON.agreement === idElement && jsonElement.recitals.length === 0 && jsonElement.agreements.length === 1) {
                            htmlParent = document.getElementById(jsonElement.point);
                        }
                    });
                });
                return htmlParent;
            default:
                return htmlParent;
        }
    }
}

export { removal };