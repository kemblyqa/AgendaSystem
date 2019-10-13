class Ajax {
    constructor(url) {
        this.url = url;
    }

    getAgendas(callBack) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callBack(this.responseText);
            }
        };
        // * True means asynchronous call.
        xhttp.open("GET", `${this.url}/agendas`, true);
        xhttp.send();
    }
    
    getVotes(callBack) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callBack(this.responseText);
            }
        };
        // * True means asynchronous call.
        xhttp.open("GET", `${this.url}/votes`, true);
        xhttp.send();
    }
    
    insertAgena(agenda, callBack) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", `${this.url}/newagenda`, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                callBack(json);
            }
        }
        var data = JSON.stringify(agenda);
        xhr.send(data);
    }
}
export { Ajax };