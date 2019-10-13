import { LocalData } from '../modules/local-data.js';
import { Ajax } from '../modules/ajax.js';
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
    localDataStorsge = [];
    constructor() {
        this.xhrRequest = new Ajax("../modules/prueba.json");
        this.getAgendaList();
    }

    getAgendaList() {
        // this.xhrRequest.get(function (data) {
        //     console.log(data);
        //     this.localDataStorsge = new LocalData(data);
        //     // this.populateList(this.localDataStorsge.remoteData);
        // });
    }

    populateList(agendaList) {
        var agendaItemsContainer = document.getElementById("agenda-list-manager");

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
}

export { AgendaManager };

