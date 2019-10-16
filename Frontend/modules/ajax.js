class Ajax {
    constructor(url) {
        this.url = url;
    }

    getMinutes(callBack) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callBack(JSON.parse(this.responseText));
            } else if (this.status == 500){
                console.error("Error interno del servidor.");
            } else if (this.status == 400){
                console.error("Datos inválidos.");
            }
        };
        // * True means asynchronous call.
        xhttp.open("GET", `${this.url}/minutes`, true);
        xhttp.send();
    }
    
    getVotes(callBack) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callBack(JSON.parse(this.responseText));
            } else if (this.status == 500){
                console.error("Error interno del servidor.");
            } else if (this.status == 400){
                console.error("Datos inválidos.");
            }
        };
        // * True means asynchronous call.
        xhttp.open("GET", `${this.url}/votes`, true);
        xhttp.send();
    }
    
    insertMinute(agenda, callBack) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", `${this.url}/newminute`, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.info("Respuesta obtenida correctamente.")
                callBack(JSON.parse(this.responseText));
            } else if (this.status == 500){
                console.error("Error interno del servidor.");
            } else if (this.status == 400){
                console.error("Datos inválidos.");
            }
        }
        var data = JSON.stringify(agenda);
        xhr.send(data);
    }
}
export { Ajax };