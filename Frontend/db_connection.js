export function GetAgendas(callBack) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callBack(this.responseText);
        }
    };
    // * True means asynchronous call.
    xhttp.open("GET", "https://api-voting-system.herokuapp.com/agendas", true);
    xhttp.send();
}

export function GetVotes(callBack) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callBack(this.responseText);
        }
    };
    // * True means asynchronous call.
    xhttp.open("GET", "https://api-voting-system.herokuapp.com/votes", true);
    xhttp.send();
}

export function InsertAgena(agenda, callBack) {
    var xhttp = new XMLHttpRequest();
    xhr.open("POST", "https://api-voting-system.herokuapp.com/newagenda", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            callBack(json);
        }
    }
    var data = JSON.stringify(agenda);
    xhr.send(data);
}