class elementAgenda {

    /**
     * @function createElement create a element in the view
     * @param {string} name 
     * @param {number} type type of element (recital, agreetment, item)
     */
    createElement(name, type) {
        let creation = new Creation();
        //Create the id for the editor
        let assign = new Date();
        let date = `${assign.getDate()}${assign.getSeconds()}${assign.getMilliseconds()}`;
        creation.createDivision();
        //Create the div with the elements inside
        let itemAgendaGroup = document.createElement("div");
        itemAgendaGroup.classList.add("group");
        //Create the div for the editor
        let itemAgendaEdit = document.createElement("div");
        itemAgendaEdit.classList.add("edit");
        itemAgendaEdit.id = `editor${date}`;
        //Create the content of the editor
        let itemAgendaInfo = document.createElement("p");
        itemAgendaInfo.appendChild(document.createTextNode(name));
        //Insert elements in the group div
        itemAgendaEdit.appendChild(itemAgendaInfo);
        itemAgendaGroup.appendChild(itemAgendaEdit);
        if (type === 1) {
            //create button for recitals
            let buttonRecitals = creation.createButtonRecitals(itemAgendaEdit);
            itemAgendaGroup.appendChild(buttonRecitals);
            //Create button for agreement
            let buttonAgreement = creation.createButtonAgreetment(itemAgendaEdit);
            itemAgendaGroup.appendChild(buttonAgreement);
            //Create buttton for delete item agenda
            let buttonDeleteItemAgenda = creation.createButtonDeleteItem(itemAgendaEdit);
            itemAgendaGroup.appendChild(buttonDeleteItemAgenda);
        }
        if (type === 2) {
            //Create buttton for delete recitals
            let buttonDeleteRecitalAgenda = creation.createButtonDeleteRecital(itemAgendaEdit);
            itemAgendaGroup.appendChild(buttonDeleteRecitalAgenda);
        }
        if (type === 3) {
            //create button for votes
            let buttonRecitals = creation.createButtonVote(itemAgendaEdit);
            itemAgendaGroup.appendChild(buttonRecitals);
            //Create buttton for delete agreetment
            let buttonDeleteAgreetmentAgenda = creation.createButtonDeleteAgreetment(itemAgendaEdit);
            itemAgendaGroup.appendChild(buttonDeleteAgreetmentAgenda);
        }

        //Append div groupo in view html
        document.getElementById('elements').appendChild(itemAgendaGroup);
        CKEDITOR.inline(`editor${date}`, {});
        itemAgendaEdit.setAttribute('contenteditable', true);
        //insert element in list
        return itemAgendaEdit
    }

    /**
     * @function createVote create a vote part with a json of results
     * @param {json} jsonElement 
     */
    createVote(jsonElement) {
        let creation = new Creation();
        //Create the id for the editor
        let assign = new Date();
        let date = `${assign.getDate()}${assign.getSeconds()}${assign.getMilliseconds()}`;
        creation.createDivision();
        //Create the div with the elements inside
        let itemAgendaGroup = document.createElement("div");
        itemAgendaGroup.classList.add("group");

        let favor = creation.createVotes("A favor", jsonElement.favor)
        itemAgendaGroup.appendChild(favor);

        let nay = creation.createVotes("En contra", jsonElement.nay)
        itemAgendaGroup.appendChild(nay);

        let blank = creation.createVotes("En blanco", jsonElement.blank)
        itemAgendaGroup.appendChild(blank);

        let buttonDeleteVote = creation.createButtonDeleteVote(itemAgendaGroup);
        itemAgendaGroup.appendChild(buttonDeleteVote);

        //Append div groupo in view html
        document.getElementById('elements').appendChild(itemAgendaGroup);
    }
}