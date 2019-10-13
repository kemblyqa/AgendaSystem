var listElementsCreated = [];
var listVotation = [
    { "name": "prueba1", "id": 1, "favor": 5, "nay": 1, "blank": 5 },
    { "name": "prueba2", "id": 2, "favor": 4, "nay": 3, "blank": 3 },
    { "name": "prueba3", "id": 3, "favor": 2, "nay": 7, "blank": 1 },
]
var test = {
    "id": "dasfiorwio",
    "name": "<h1>Titulo Prueba..</h1>",
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
    let agenda = new newAgenda();
    agenda.createHtmlTitle();

}

/**
 * @function saveData save all information generated
 */
function saveData() { //FALTA TERMINAR ESTA FUNCION
    var ckvalue = CKEDITOR.instances['introduction'].getData();
    console.log(ckvalue);
    for (let index = 0; index < listElementsCreated.length; index++) {
        var ckvalue = CKEDITOR.instances[listElementsCreated[index].point].getData();
        console.log(ckvalue);
        if (listElementsCreated[index].recitals) {
            listElementsCreated[index].recitals.forEach(elementRecitals => {
                var ckvalue = CKEDITOR.instances[elementRecitals].getData();
                console.log(ckvalue);
            });
        }
        if (listElementsCreated[index].agreements) {
            listElementsCreated[index].agreements.forEach(elementAgreement => {
                var ckvalue = CKEDITOR.instances[elementAgreement.id].getData();
                console.log(ckvalue);
            });
        }

    }
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

function generateInfo() {
    let agenda = new getAgenda();
    agenda.generateAgenda(test)
}

modal();