class AgendaManager {
    prueba = {
        "data": [
            {
                "id": "dasfiorwio1",
                "name": "ndiwhfurwb bbbbbbbbbbbbbbbbb",
                "agenda": [
                    {
                        "point": "viaje",
                        "recitals": [
                            "hdasdiasj",
                            "fnsdnfdos"
                        ],
                        "agreements": [
                            {
                                "agreement": "acuerdo1",
                                "vote": {
                                    "id": 1,
                                    "favor": 3,
                                    "nay": 2,
                                    "blank": 9
                                }
                            },
                            {
                                "agreement": "acuerdo1",
                                "vote": {
                                    "id": 1,
                                    "favor": 3,
                                    "nay": 2,
                                    "blank": 9
                                }
                            }
                        ]
                    },
                    {
                        "point": "viaje",
                        "agreements": [
                            {
                                "agreement": "acuerdo1",
                                "vote": {
                                    "id": 1,
                                    "favor": 3,
                                    "nay": 2,
                                    "blank": 9
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "id": "dasfiorwio2",
                "name": "ndiwhfurw",
                "agenda": [
                    {
                        "point": "viaje",
                        "recitals": [
                            "hdasdiasj",
                            "fnsdnfdos"
                        ],
                        "agreements": [
                            {
                                "agreement": "acuerdo1",
                                "vote": {
                                    "id": 1,
                                    "favor": 3,
                                    "nay": 2,
                                    "blank": 9
                                }
                            },
                            {
                                "agreement": "acuerdo1",
                                "vote": {
                                    "id": 1,
                                    "favor": 3,
                                    "nay": 2,
                                    "blank": 9
                                }
                            }
                        ]
                    },
                    {
                        "point": "viaje",
                        "agreements": [
                            {
                                "agreement": "acuerdo1",
                                "vote": {
                                    "id": 1,
                                    "favor": 3,
                                    "nay": 2,
                                    "blank": 9
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    constructor() { }

    getAgendaList() {

    }

    populateList(agendaList) {
        var agendaItemsContainer = document.getElementById("agenda-list-manager");
        this.updateLocalStorage(this.prueba.data);

        // Remove all items added.
        while (agendaItemsContainer.hasChildNodes()) {
            agendaItemsContainer.removeChild(agendaItemsContainer.firstChild);
        }
        // Populate with agendas.
        for (var i = 0; i < this.prueba.data.length; i++) {
            var newItem = document.createElement("a");
            newItem.id = this.prueba.data[i].agenda.id;
            newItem.appendChild(document.createTextNode(`Sesión N° ${this.prueba.data[i].id} \n Nombre: ${this.prueba.data[i].name}`));
            agendaItemsContainer.appendChild(newItem);
        }
    }

    /**
     * @function updateStorage updates the items stored with the new values
     * @param {Array} data array with the JSON from the web service 
     */
    updateLocalStorage(data) {
        for (var i = 0; i < data.length; i++){
            if (!this.existStorageItem(data[i].id) || !this.needUpdateStorageItem(data[i].id, data[i])){
                this.setLocalStorageItem(data[i].id, data[i]);
            }
        }
    }

    /**
     * @function clearLocalStorageList remove all items added
     */
    clearLocalStorageList() {
        localStorage.clear();
    }
    /**
     * @function setLocalStorageItem Save the new item to localstorage
     * @param {*} key the key to access to the localstorage value
     * @param {*} value the information about the agenda
     */
    setLocalStorageItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * @function getLocalStorageItem obtains the value from a key
     * @param {string} key the key to access to the localstorage value
     * @returns {string} the value stored
     */
    getLocalStorageItem(key) {
        return localStorage.getItem(key);
    }

    /**
     * @function existStorageItem Returns true if the item already exists
     * @param {string} key the key to access to the localstorage value
     * @returns {boolean} true if the value exist, false if doesn't
     */
    existStorageItem(key) {
        return localStorage.getItem(key) != undefined;
    }

    /**
     * @function needUpdateStorageItem Returns true if the items are different
     * @param {string} key the key to access to the localstorage value
     * @param {JSON} value the value which could be modified
     * @returns {boolean} true if the value is different, false if are the same
     */
    needUpdateStorageItem(key, value) {
        let current = localStorage.getItem(key);
        return JSON.stringify(value) != current; //buscar mejor forma
    }
}

export { AgendaManager };

