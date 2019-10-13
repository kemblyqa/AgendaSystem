var listElementsCreated = [];
var listVotation = [
    { "id": 1, "favor": 5, "nay": 1, "blank": 5 },
    { "id": 2, "favor": 4, "nay": 3, "blank": 3 },
    { "id": 3, "favor": 2, "nay": 7, "blank": 1 },
]

function prueba() {
    var introduction = document.getElementById('introduction');
    introduction.setAttribute('contenteditable', true);
    CKEDITOR.inline('introduction');
}

function createItemAgenda() {
    let element = new elementAgenda();
    let itemAgendaEdit = element.createElement('Punto Agenda.', 1)
    listElementsCreated.push({ "item": itemAgendaEdit.id, "recitals": [], "agreetments": [] })
}

function addRecitals(identifier) {
    let agenda = new elementAgenda();
    let itemRecitals = agenda.createElement('Considerando.', 2)
    listElementsCreated.forEach(element => {
        if (element["item"] === identifier.id) {
            element["recitals"].push(itemRecitals.id)
        }
    });
}

function addAgreetment(identifier) {
    let agenda = new elementAgenda();
    let itemAgreetment = agenda.createElement('Acuerdo.', 3)
    listElementsCreated.forEach(element => {
        if (element["item"] === identifier.id) {
            element["agreetments"].push({ "id": itemAgreetment.id, "votationID": 0 })
        }
    });
}

/**
 * @function addVotation create a votation element in html
 * @param {html} identifier of agreetment 
 */
function addVotation(identifier) {
    //FALTA LO DE PONER LA VOTACION DE ACUERDO A LO SELECCIONADO
    let agenda = new elementAgenda();
    agenda.createVote(listVotation[0]);

    let flag = false;
    let sizeList = listElementsCreated.length;
    while (sizeList > 0 && !flag) {
        listElementsCreated[sizeList - 1].agreetments.forEach(agreetment => {
            if (agreetment.id === identifier.id) {
                agreetment.votationID = listVotation[0].id
                flag = true;
            }
        });
        sizeList = sizeList - 1;
    }
}

function data() {
    console.log(listElementsCreated)
}

function modal() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

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


prueba();
modal();