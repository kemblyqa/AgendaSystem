import { Ajax } from '../modules/ajax.js';
const baseUrl = "https://api-voting-system.herokuapp.com";

class LocalData {
    constructor() {
        this.xhrRequest = new Ajax(baseUrl);
    }

    /**
     * @function clearLocalStorageList remove all items added
     */
    clearLocalStorageList() {
        localStorage.clear();
    }

    /**
     * @function clearLocalStorageItem removes the localstorgate item
     * @param {string} key the key to access the agenda
     * @returns {boolean} true if the element is deleted correctly
     */
    clearLocalStorageItem(key) {
        for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) == key) {
                localStorage.removeItem(key);
                return true;
            }
        }
        return false;
    }

    /**
     * @function setLocalStorageItem Save the new item to localstorage
     * @param {string} key the key to access to the localstorage value
     * @param {string} value the information about the agenda
     */
    saveLocalStorageItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * @function saveIntoServerItem saves the minute definitely to the database
     * @param {JSON} minute the minute to be added to the agenda
     */
    saveIntoServerItem(minute) {
        this.xhrRequest.insertMinute(minute, (data) => {
            var response = JSON.parse(data);
            if (response.status == "success"){
                this.clearLocalStorageItem(minute.id);
                location.reload();
            } else {
                alert("Error en agregar agenda a la base de datos.");
            }
        })
    }

    /**
     * @function getLocalStorageItem obtains the value from a key
     * @param {string} key the key to access to the localstorage value
     * @returns {string} the value stored
     */
    getLocalStorageItem(key) {
        return localStorage.getItem(key);
    }

    /**
     * @function existStorageItem Returns true if the item already exists
     * @param {string} key the key to access to the localstorage value
     * @returns {boolean} true if the value exist, false if doesn't
     */
    existStorageItem(key) {
        return localStorage.getItem(key) != undefined;
    }
}

export { LocalData };