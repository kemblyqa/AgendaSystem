class AgendaManager {
    prueba = {
        "data": [
            {
                "id": "dasfiorwio",
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
            },
            {
                "id": "dasfiorwio",
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
    constructor() {
    }

    getAgendaList() {

    }

    populateList() {
        var agendaItemsContainer = document.getElementById("agenda-list-manager");
        // Remove all items added.
        while (agendaItemsContainer.hasChildNodes()) {
            agendaItemsContainer.removeChild(agendaItemsContainer.firstChild);
        }
        //populate with agendas
        for (var i = 0; i < this.prueba.data.length; i++) {
            var newItem = document.createElement("a");
            newItem.id = this.prueba.data[i].agenda.id;
            newItem.appendChild(document.createTextNode(`Sesión N° ${this.prueba.data[i].id} \n Nombre: ${this.prueba.data[i].name}`));
            agendaItemsContainer.appendChild(newItem);
        }
    }
}

export { AgendaManager };

