import { newAgenda } from './newAgenda.js'

class tableVotesSelect {
    createTableFromJSON(list, pointAgendaEdit) {

        // EXTRACT VALUE FOR HTML HEADER. 
        var col = [];
        for (var i = 0; i < list.length; i++) {
            for (var key in list[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        col.push("select");

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1); // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th"); // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < list.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {

                if (j === 5) {

                    let jsonList = list[i];
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = '';
                    let buttonAgreement = document.createElement("button");
                    buttonAgreement.classList.add("tableBtn");
                    buttonAgreement.appendChild(document.createTextNode('Ψ'));
                    buttonAgreement.addEventListener("click", function() {
                        let newElement = new newAgenda();
                        newElement.addVotation(jsonList, pointAgendaEdit)
                    });
                    tabCell.appendChild(buttonAgreement)

                } else {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = list[i][col[j]];
                }
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
}

export { tableVotesSelect };