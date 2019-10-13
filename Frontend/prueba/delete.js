class removal {
    /**
     * @function deleteItemAgenda for delete a item point from agenda
     * @param {html} element 
     */
    deleteItemAgenda(element) {
        this.deleteChild(element);
        let filtered = this.filterItems(listElementsCreated, element.id, 1);
        listElementsCreated = filtered;
    }

    /**
     * @function deleteRecitalsAgenda for delete a recital from item of agenda
     * @param {html} element 
     */
    deleteRecitalsAgenda(element) {
        this.deleteChild(element);
        let filtered = this.filterItems(listElementsCreated, element.id, 2);
        listElementsCreated = filtered;
    }

    /**
     * @function deleteAgreetmentAgenda for delete a agreetment from item of agenda
     * @param {html} element 
     */
    deleteAgreetmentAgenda(element) {
        this.deleteChild(element);
        let filtered = this.filterItems(listElementsCreated, element.id, 3);
        listElementsCreated = filtered;
    }

    /**
     * @function deleteVoteAgenda for delete a vote from item of agenda
     * @param {html} element 
     * @param {html} identifier of agreetment
     */
    deleteVoteAgenda(element, identifier) {
        let padre = element.parentNode;
        padre.removeChild(element);

        let flag = false;
        let sizeList = listElementsCreated.length;
        while (sizeList > 0 && !flag) {
            listElementsCreated[sizeList - 1].agreetments.forEach(agreetment => {
                if (agreetment.id === identifier.id) {
                    agreetment.votationID = 0
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
     * @function filterItems filter list of elements for get a new list without element searched
     * @param {array} arr 
     * @param {string} query 
     * @param {number} type 
     */
    filterItems(arr, query, type) {
        let result;
        return arr.filter(function(el) {
            switch (type) {
                case 1:
                    return el.item !== query;
                case 2:
                    result = el.recitals.filter(function(el) {
                        return el !== query;
                    })
                    return el.recitals = result;
                case 3:
                    result = el.agreetments.filter(function(el) {
                        return el.id !== query;
                    })
                    return el.agreetments = result;
                default:
                    break;
            }

        })
    }
}