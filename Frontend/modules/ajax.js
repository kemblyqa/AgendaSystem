class Ajax {
    constructor(url) {
        this.url = url;
    }

    /**
     * @function getMinutes gets the minutes saved in the database
     * @param {JSON} callBack the callback as response
     */
    getMinutes(callBack) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                switch (this.status) {
                    case 200: {
                        console.info("Respuesta obtenida correctamente.");
                        break;
                    }
                    case 400: {
                        console.error("Datos inválidos.");
                        break;
                    }
                    case 500: {
                        console.error("Error interno del servidor.");
                        break;
                    }
                }
                callBack(JSON.parse(this.responseText));
            }
        };
        // * True means asynchronous call.
        xhttp.open("GET", `${this.url}/minutes`, true);
        xhttp.send();
    }

    /**
     * @function getVotes get the votation about an agreement
     * @param {JSON} callBack callBack the callback as response
     */
    getVotes(callBack) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                switch (this.status) {
                    case 200: {
                        console.info("Respuesta obtenida correctamente.");
                        break;
                    }
                    case 400: {
                        console.error("Datos inválidos.");
                        break;
                    }
                    case 500: {
                        console.error("Error interno del servidor.");
                        break;
                    }
                }
                callBack(JSON.parse(this.responseText));
            }
        };
        // * True means asynchronous call.
        xhttp.open("GET", `${this.url}/votes`, true);
        xhttp.send();
    }

    /**
     * @function insertMinute adds a minute to the database
     * @param {*} agenda the agenda to be added
     * @param {*} callBack callBack the callback as response
     */
    insertMinute(agenda, callBack) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", `${this.url}/newminute`, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                switch (this.status) {
                    case 201: {
                        console.info("Respuesta obtenida correctamente.")
                        break;
                    }
                    case 400: {
                        console.error("Datos inválidos.");
                        break;
                    }
                    case 500: {
                        console.error("Error interno del servidor.");
                        break;
                    }
                }
                callBack(this.responseText);
            }
        }
        var data = JSON.stringify(agenda);
        xhttp.send(data);
    }
}
export { Ajax };