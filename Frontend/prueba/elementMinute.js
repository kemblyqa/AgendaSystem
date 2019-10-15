class elementMinute {

    /**
     * @function createElement create a element in the view
     * @param {string} name 
     * @param {number} type type of element (recital, Agreement, point)
     * @param {boolean} editable element editable
     */
    createElementAgenda(name, type, editable) {
        let creation = new Creation();
        //Create the id for the editor
        let assign = new Date();
        let date = `${assign.getDate()}${assign.getSeconds()}${assign.getMilliseconds()}${Math.floor(Math.random() * 100000)}`;
        creation.createDivision();
        //Create the div with the elements inside
        let pointAgendaGroup = document.createElement("div");
        pointAgendaGroup.classList.add("group");
        //Create the div for the editor
        let pointAgendaEdit = document.createElement("div");
        pointAgendaEdit.classList.add("edit");
        if (editable) {
            pointAgendaEdit.id = `editElementEditable${date}`;
        } else {
            pointAgendaEdit.id = `editElement100${date}`;
        }

        //Create the content of the editor
        pointAgendaEdit.innerHTML = name;
        //pointAgendaInfo.appendChild(document.createTextNode(name));

        //Insert elements in the group div
        pointAgendaGroup.appendChild(pointAgendaEdit);
        if (editable) {
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
        }
        //Append div groupo in view html
        document.getElementById('elements').appendChild(pointAgendaGroup);
        if (editable) {
            CKEDITOR.inline(`editElementEditable${date}`, {});
        } else {
            CKEDITOR.inline(`editElement100${date}`, {});
        }

        pointAgendaEdit.setAttribute('contenteditable', editable);
        //insert element in list
        return pointAgendaEdit
    }

    /**
     * @function createVote create a vote part with a json of results
     * @param {json} jsonElement 
     * @param {html} identifier id of Agreement
     * @param {boolean} editable element editable
     */
    createVote(jsonElement, identifier, editable) {
        let creation = new Creation();
        creation.createDivision();
        //Create the div with the elements inside
        let pointAgendaGroup = document.createElement("div");
        pointAgendaGroup.classList.add("group");

        let title = document.createElement("div");
        let style = document.createElement("h3");
        style.appendChild(document.createTextNode(jsonElement.name));
        title.appendChild(style);
        if (editable) {
            title.classList.add("voteEditable");
        } else {
            title.classList.add("voteView");
        }

        pointAgendaGroup.appendChild(title);

        let favor = creation.createVotesSegment("A favor", jsonElement.favor, editable)
        pointAgendaGroup.appendChild(favor);

        let nay = creation.createVotesSegment("En contra", jsonElement.nay, editable)
        pointAgendaGroup.appendChild(nay);

        let blank = creation.createVotesSegment("En blanco", jsonElement.blank, editable)
        pointAgendaGroup.appendChild(blank);

        if (editable) {
            let buttonDeleteVote = creation.createButtonDeleteVote(pointAgendaGroup, identifier);
            pointAgendaGroup.appendChild(buttonDeleteVote);
        }

        //Append div groupo in view html
        document.getElementById('elements').appendChild(pointAgendaGroup);
    }

    createTitle(name, editable) {
        let create = new Creation();
        let assign = new Date();
        let date = `${assign.getDate()}${assign.getSeconds()}${assign.getMilliseconds()}${Math.floor(Math.random() * 100000)}`;

        let pointAgendaGroup = document.createElement("div");
        pointAgendaGroup.classList.add("group");
        pointAgendaGroup.id = "titleGroup"

        //Create the div for the editor
        var pointAgendaEdit = document.createElement("div");
        pointAgendaEdit.classList.add("edit");
        pointAgendaEdit.id = `editElement100${date}`;

        pointAgendaEdit.innerHTML = name;

        pointAgendaGroup.appendChild(pointAgendaEdit);

        document.getElementById('elements').appendChild(pointAgendaGroup);
        CKEDITOR.inline(`editElement100${date}`, {});
        pointAgendaEdit.setAttribute('contenteditable', editable);

        return pointAgendaEdit;
    }

    createGeneralAspects(information, editable) {
        let creation = new Creation();
        let assign = new Date();
        let date = `${assign.getDate()}${assign.getSeconds()}${assign.getMilliseconds()}${Math.floor(Math.random() * 100000)}`;

        creation.createDivision();

        let elementGroup = document.createElement("div");
        elementGroup.classList.add("group");
        elementGroup.id = "generalGroup";

        var elementEdit = document.createElement("div");
        elementEdit.classList.add("edit");
        elementEdit.id = `editElement100${date}`;

        elementEdit.innerHTML = information;

        elementGroup.appendChild(elementEdit);

        document.getElementById('elements').appendChild(elementGroup);
        CKEDITOR.inline(`editElement100${date}`, {});
        elementEdit.setAttribute('contenteditable', editable);

        return elementEdit;

    }

    createSegmentAgenda(editable) {
        let creation = new Creation();
        creation.createDivision();

        let elementGroup = document.createElement("div");
        elementGroup.classList.add("group");
        elementGroup.id = "agendaSegmentGroup";

        var elementEdit = document.createElement("div");
        elementEdit.classList.add("edit");
        elementEdit.id = "agendaSegmentEdit";
        elementEdit.innerHTML = "Agenda";

        elementGroup.appendChild(elementEdit);
        if (editable) {
            let buttonRecitals = creation.createButtonPoints();
            elementGroup.appendChild(buttonRecitals);
        }


        document.getElementById('elements').appendChild(elementGroup);
    }
}