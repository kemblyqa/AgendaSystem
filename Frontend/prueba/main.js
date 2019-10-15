var listElementsCreated;
var listVotation = [
    { "name": "prueba1", "id": 1, "favor": 5, "nay": 1, "blank": 5 },
    { "name": "prueba2", "id": 2, "favor": 4, "nay": 3, "blank": 3 },
    { "name": "prueba3", "id": 3, "favor": 2, "nay": 7, "blank": 1 },
]
var test = {
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

function createAgenda() {
    let agenda = new elementMinute();
    let global = new newAgenda();
    global.createHtmlTitle();
    global.createGeneralAspects();
    agenda.createSegmentAgenda(true);

}

/**
 * @function saveData save all information generated
 */
function saveData() { //FALTA TERMINAR ESTA FUNCION
    let assign = new Date();
    let date = `${assign.getDate()}${assign.getSeconds()}${assign.getMilliseconds()}${Math.floor(Math.random() * 100000)}`;
    var titleValue = CKEDITOR.instances[listElementsCreated.title].getData();
    var generalValue = CKEDITOR.instances[listElementsCreated.general].getData();
    let responseData = { "id": date, "title": titleValue, "general": generalValue, "agenda": [] };
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
    console.log(responseData);
}

/**
 * @function modal create a modal for select vote statistics
 */
function modal() {
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

function generateInfo(editable) {
    let segment = new elementMinute();
    let agenda = new getAgenda();
    agenda.generateTitle(test.title, editable);
    agenda.generateGeneralAspects(test.general, editable);
    segment.createSegmentAgenda(editable);
    agenda.generateAgenda(test.agenda, editable);

}

modal();