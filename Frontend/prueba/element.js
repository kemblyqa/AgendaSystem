class elementAgenda {

    /**
     * @function createElement create a element in the view
     * @param {string} name 
     * @param {number} type type of element (recital, Agreement, point)
     */
    createElement(name, type) {
        let creation = new Creation();
        //Create the id for the editor
        let assign = new Date();
        let date = `${assign.getDate()}${assign.getSeconds()}${assign.getMilliseconds()}`;
        creation.createDivision();
        //Create the div with the elements inside
        let pointAgendaGroup = document.createElement("div");
        pointAgendaGroup.classList.add("group");
        //Create the div for the editor
        let pointAgendaEdit = document.createElement("div");
        pointAgendaEdit.classList.add("edit");
        pointAgendaEdit.id = `editor${date}`;
        //Create the content of the editor
        pointAgendaEdit.innerHTML = name;
        //pointAgendaInfo.appendChild(document.createTextNode(name));

        //Insert elements in the group div
        pointAgendaGroup.appendChild(pointAgendaEdit);
        if (type === 1) {
            //create button for recitals
            let buttonRecitals = creation.createButtonRecitals(pointAgendaEdit);
            pointAgendaGroup.appendChild(buttonRecitals);
            //Create button for agreement
            let buttonAgreement = creation.createButtonAgreement(pointAgendaEdit);
            pointAgendaGroup.appendChild(buttonAgreement);
            //Create buttton for delete point agenda
            let buttonDeletepointAgenda = creation.createButtonDeletepoint(pointAgendaEdit);
            pointAgendaGroup.appendChild(buttonDeletepointAgenda);
        }
        if (type === 2) {
            //Create buttton for delete recitals
            let buttonDeleteRecitalAgenda = creation.createButtonDeleteRecital(pointAgendaEdit);
            pointAgendaGroup.appendChild(buttonDeleteRecitalAgenda);
        }
        if (type === 3) {
            //create button for votes
            let buttonRecitals = creation.createButtonVote(pointAgendaEdit);
            pointAgendaGroup.appendChild(buttonRecitals);
            //Create buttton for delete Agreement
            let buttonDeleteAgreementAgenda = creation.createButtonDeleteAgreement(pointAgendaEdit);
            pointAgendaGroup.appendChild(buttonDeleteAgreementAgenda);
        }

        //Append div groupo in view html
        document.getElementById('elements').appendChild(pointAgendaGroup);
        CKEDITOR.inline(`editor${date}`, {});
        pointAgendaEdit.setAttribute('contenteditable', true);
        //insert element in list
        return pointAgendaEdit
    }

    /**
     * @function createVote create a vote part with a json of results
     * @param {json} jsonElement 
     * @param {html} identifier id of Agreement
     */
    createVote(jsonElement, identifier) {
        let creation = new Creation();
        //Create the id for the editor
        let assign = new Date();
        let date = `${assign.getDate()}${assign.getSeconds()}${assign.getMilliseconds()}`;
        creation.createDivision();
        //Create the div with the elements inside
        let pointAgendaGroup = document.createElement("div");
        pointAgendaGroup.classList.add("group");

        let title = document.createElement("div");
        let style = document.createElement("h3");
        style.appendChild(document.createTextNode(jsonElement.name));
        title.appendChild(style);
        title.classList.add("votes");
        pointAgendaGroup.appendChild(title);

        let favor = creation.createVotes("A favor", jsonElement.favor)
        pointAgendaGroup.appendChild(favor);

        let nay = creation.createVotes("En contra", jsonElement.nay)
        pointAgendaGroup.appendChild(nay);

        let blank = creation.createVotes("En blanco", jsonElement.blank)
        pointAgendaGroup.appendChild(blank);

        let buttonDeleteVote = creation.createButtonDeleteVote(pointAgendaGroup, identifier);
        pointAgendaGroup.appendChild(buttonDeleteVote);

        //Append div groupo in view html
        document.getElementById('elements').appendChild(pointAgendaGroup);
    }
}