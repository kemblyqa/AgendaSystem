import { AgendaManager } from './modules/agenda.js';
import { MinuteViewManager } from './modules/minute_view/main.js'
window.listElementsCreated = [];
window.listVotation = [];
//{ "name": "prueba3", "id": 3, "favor": 2, "nay": 7, "blank": 1 },

window.agenda = new AgendaManager();
window.minute = new MinuteViewManager();