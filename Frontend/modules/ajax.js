class Ajax {
    constructor(url) {
        this.url = url;
    }

    get(callback) {
        var xhr = new XMLHttpRequest
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                callback(xhr.responseText);
            }
        }
        xhr.open("GET", this.url);
        xhr.send();
    }

    getWithQuery(query, callback) {
        var xhr = new XMLHttpRequest
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                callback(xhr.responseText);
            }
        }
        xhr.open("GET", this.url);
        xhr.send(query);
    }

    post(body, callback) {
        var xhr = new XMLHttpRequest
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                callback(xhr.responseText);
            }
        }
        xhr.open("POST", this.url);
        xhr.send(body);
    }
}
export { Ajax };