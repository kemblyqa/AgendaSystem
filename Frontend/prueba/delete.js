class removal {
    /**
     * @function deletepointAgenda for delete a point point from agenda
     * @param {html} element 
     */
    deletepointAgenda(element) {
        this.deleteChild(element);
        let filtered = this.filterpoints(listElementsCreated, element.id, 1);
        listElementsCreated = filtered;
    }

    /**
     * @function deleteRecitalsAgenda for delete a recital from point of agenda
     * @param {html} element 
     */
    deleteRecitalsAgenda(element) {
        this.deleteChild(element);
        let filtered = this.filterpoints(listElementsCreated, element.id, 2);
        listElementsCreated = filtered;
    }

    /**
     * @function deleteAgreementAgenda for delete a Agreement from point of agenda
     * @param {html} element 
     */
    deleteAgreementAgenda(element) {
        this.deleteChild(element);
        let filtered = this.filterpoints(listElementsCreated, element.id, 3);
        listElementsCreated = filtered;
    }

    /**
     * @function deleteVoteAgenda for delete a vote from point of agenda
     * @param {html} element 
     * @param {html} identifier of Agreement
     */
    deleteVoteAgenda(element, identifier) {
        let padre = element.parentNode;
        padre.removeChild(element);

        let flag = false;
        let sizeList = listElementsCreated.length;
        while (sizeList > 0 && !flag) {
            listElementsCreated[sizeList - 1].agreements.forEach(Agreement => {
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
                        return el.id !== query;
                    })
                    return el.agreements = result;
                default:
                    break;
            }

        })
    }
}