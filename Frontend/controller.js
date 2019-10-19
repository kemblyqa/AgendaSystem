import { AgendaManager } from './modules/agenda.js';
import { MinuteViewManager } from './modules/minute_view/main.js'
window.listElementsCreated = [];
window.listVotation = [
    { "name": "prueba1", "id": 1, "favor": 5, "nay": 1, "blank": 5 }
];
//{ "name": "prueba3", "id": 3, "favor": 2, "nay": 7, "blank": 1 },
window.test = {
    "id": "dasfiorwio",
    "title": "<h1>Titulo Prueba..</h1>",
    "general": "<h3>Aspectos generales..</h3>",
    "agenda": [{
            "point": "<p><em>Punto Agenda1.</em></p>",
            "recitals": [
                "<p><strong>Considerando.</strong></p>"
            ],
            "agreements": [{
                "agreement": `<ul><li>Acuerdo1.</li></ul>`,
                "vote": 1
            }]
        },
        {
            "point": "<p><em>Punto Agenda2.</em></p>",
            "agreements": [{
                "agreement": `<ul><li>Acuerdo2.</li></ul>`,
                "vote": 2
            }]
        }
    ]
}
window.agenda = new AgendaManager();
window.minute = new MinuteViewManager();